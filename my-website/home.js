const scripts = [
  {
    id: "7",
    title: "Vxeze Hub Fruit Finder – Blox Fruits Script (No Key)",
    description: "BLOX FRUITS Script No Key",
    date: "2025-06-15",
    image: "image/fruitfinder.jpg"
  },
  {
    id: "6",
    title: "GROW A GARDEN Script – Lunor Hub",
    description: "LUNOR HUB: GROW A GARDEN Script",
    date: "2025-06-15",
    image: "image/lunorhub.jpg"
  },
  {
    id: "5",
    title: "GROW A GARDEN Script – No Lag Hub",
    description: "NO LAG HUB: GROW A GARDEN Script",
    date: "2025-06-15",
    image: "image/nolaghub.jpg"
  },
  {
    id: "4",
    title: "GROW A GARDEN Script – Speed Hub",
    description: "SPEED HUB: GROW A GARDEN Script",
    date: "2025-06-15",
    image: "image/speedhub.jpg"
  },
  {
    id: "3",
    title: "Xero Hub – Blox Fruits Script (No Key)",
    description: "BLOX FRUITS Script No Key",
    date: "2025-06-14",
    image: "image/xerohub.jpg"
  },
  {
    id: "2",
    title: "DEAD RAILS Script – Skull Hub",
    description: "SKULL HUB: DEAD RAILS Script",
    date: "2025-06-14",
    image: "image/nathub2.jpg"
  },
  {
    id: "1",
    title: "DEAD RAILS Script – Nat Hub",
    description: "NAT HUB: DEAD RAILS Script",
    date: "2025-06-14",
    image: "image/nathub.jpg"
  }
];

const executors = [
  {
    id: "7",
    title: "TRIGON V676",
    description: "Popular and reliable Roblox script executor.",
    date: "2025-17-06",
    image: "image/deltaexe.jpg"
  },
  {
    id: "6",
    title: "DELTA Executor",
    description: "Popular and reliable Roblox script executor.",
    date: "2025-17-06",
    image: "image/deltaexe.jpg"
  },
  {
    id: "5",
    title: "VEGA X Executor",
    description: "Popular and reliable Roblox script executor.",
    date: "2025-17-06",
    image: "image/vegaxexe.jpg"
  },
  {
    id: "4",
    title: "CODEX Executor",
    description: "Popular and reliable Roblox script executor.",
    date: "2025-17-06",
    image: "image/codexexe.jpg"
  },
  {
    id: "1",
    title: "CRYPTIC Executor",
    description: "Popular and reliable Roblox script executor.",
    date: "2025-17-06",
    image: "image/crypticexe.jpg"
  },
  {
    id: "2",
    title: "FLUXUS Executor",
    description: "Fast and feature-rich Roblox executor.",
    date: "2025-10-06",
    image: "image/fluxusexe.jpg"
  },
  {
    id: "3",
    title: "KRNL Executor",
    description: "Free executor with wide script support.",
    date: "2025-17-06",
    image: "image/krnlexe.jpg"
  }
];

const itemsPerPage = 3;
let searchResults = [];
let selectedIndex = -1;

function renderCards(data, containerId, page, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = data.slice(start, end);

  pageItems.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-index", index);
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <small>${item.date}</small>
      <p>${item.description}</p>
    `;

    if (type === "script") {
      card.addEventListener("click", () => {
        const url = `script.html?id=${encodeURIComponent(item.id)}`;
        window.location.href = url;
      });
    } else if (type === "executor") {
      card.addEventListener("click", () => {
        const url = `executor.html?id=${encodeURIComponent(item.id)}`;
        window.location.href = url;
      });
    }

    container.appendChild(card);
  });
}

function renderPagination(data, paginationId, changePageFunc) {
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const pagination = document.getElementById(paginationId);
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.addEventListener("click", () => changePageFunc(i));
    pagination.appendChild(btn);
  }
}

function updateActivePagination(paginationId, activePage) {
  const buttons = document.getElementById(paginationId).querySelectorAll("button");
  buttons.forEach((btn, index) => {
    btn.classList.toggle("active", index + 1 === activePage);
  });
}

function changeScriptPage(page) {
  renderCards(scripts, "scriptCards", page, "script");
  renderPagination(scripts, "scriptPagination", changeScriptPage);
  updateActivePagination("scriptPagination", page);
}

function changeExecutorPage(page) {
  renderCards(executors, "executorCards", page, "executor");
  renderPagination(executors, "executorPagination", changeExecutorPage);
  updateActivePagination("executorPagination", page);
}

function showSection(section) {
  const scriptsSection = document.getElementById("scriptsSection");
  const executorsSection = document.getElementById("executorsSection");

  scriptsSection.style.display = section === "home" || section === "scripts" ? "block" : "none";
  executorsSection.style.display = section === "home" || section === "executors" ? "block" : "none";

  document.querySelectorAll("nav ul a").forEach(link => link.classList.remove("active"));
  const navLink = document.getElementById("nav" + section.charAt(0).toUpperCase() + section.slice(1));
  if (navLink) navLink.classList.add("active");
}

function highlightResult(index) {
  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card, i) => {
    card.style.outline = i === index ? "2px solid #007bff" : "none";
  });
}

function liveSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  selectedIndex = -1;

  const filteredScripts = scripts.filter(s =>
    s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
  );
  const filteredExecutors = executors.filter(e =>
    e.title.toLowerCase().includes(query) || e.description.toLowerCase().includes(query)
  );

  searchResults = [...filteredScripts, ...filteredExecutors];

  if (query === "") {
    showSection("home");
    changeScriptPage(1);
    changeExecutorPage(1);
  } else if (filteredScripts.length > 0) {
    showSection("scripts");
    renderCards(filteredScripts, "scriptCards", 1, "script");
    document.getElementById("scriptPagination").innerHTML = "";
  } else if (filteredExecutors.length > 0) {
    showSection("executors");
    renderCards(filteredExecutors, "executorCards", 1, "executor");
    document.getElementById("executorPagination").innerHTML = "";
  } else {
    document.getElementById("scriptCards").innerHTML = "<p>No scripts found.</p>";
    document.getElementById("executorCards").innerHTML = "<p>No executors found.</p>";
    document.getElementById("scriptPagination").innerHTML = "";
    document.getElementById("executorPagination").innerHTML = "";
  }
}

document.getElementById("searchInput").addEventListener("input", liveSearch);

document.getElementById("searchInput").addEventListener("keydown", (e) => {
  if (searchResults.length === 0) return;

  const cards = document.querySelectorAll(".card");

  if (e.key === "ArrowDown") {
    e.preventDefault();
    selectedIndex = (selectedIndex + 1) % cards.length;
    highlightResult(selectedIndex);
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    selectedIndex = (selectedIndex - 1 + cards.length) % cards.length;
    highlightResult(selectedIndex);
  }

  if (e.key === "Enter" && selectedIndex !== -1) {
    const selectedCard = cards[selectedIndex];
    selectedCard.scrollIntoView({ behavior: "smooth", block: "center" });
    selectedCard.style.background = "#e6f0ff";
    setTimeout(() => selectedCard.style.background = "", 800);
  }
});

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️ Light Mode";
}
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Navbar events
document.getElementById("navScripts").addEventListener("click", (e) => {
  e.preventDefault();
  showSection("scripts");
  changeScriptPage(1);
});
document.getElementById("navExecutors").addEventListener("click", (e) => {
  e.preventDefault();
  showSection("executors");
  changeExecutorPage(1);
});
document.getElementById("navHome").addEventListener("click", (e) => {
  e.preventDefault();
  showSection("home");
  changeScriptPage(1);
  changeExecutorPage(1);
});

// Initial load
window.onload = () => {
  showSection("home");
  changeScriptPage(1);
  renderPagination(scripts, "scriptPagination", changeScriptPage);
  changeExecutorPage(1);
  renderPagination(executors, "executorPagination", changeExecutorPage);
};
