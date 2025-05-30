const scripts = [
  {
    id: "5",
    title: "WQeqd V1 Script",
    description: "BLOX FRUITS Script No Key UPDATE GRAVITY AUTO…",
    date: "2025-05-28",
    image: "image/scriptroblox2.png"
  },
  {
    id: "4",
    title: "Dwqe v3 Script",
    description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY…",
    date: "2025-05-28",
    image: "image/scriptroblox1.png"
  },
  {
    id: "1",
    title: "Sdaw V3 Script",
    description: "BLOX FRUITS Script No Key AUTO FARM, PREHISTORIC…",
    date: "2025-05-28",
    image: "image/scriptroblox3.png"
  },
  {
    id: "2",
    title: "Dark Dex Explorer",
    description: "Advanced GUI for Roblox object inspection.",
    date: "2025-04-28",
    image: "image/scriptroblox1.png"
  },
  {
    id: "3",
    title: "Unnamed ESP",
    description: "ESP wallhack script for player visibility.",
    date: "2025-04-25",
    image: "image/scriptroblox1.png"
  }
];

const executors = [
  {
    id: "1",
    title: "KRNL",
    description: "Popular and reliable Roblox script executor.",
    date: "2025-04-20",
    image: "image/fluxurexecutor.png"
  },
  {
    id: "2",
    title: "Fluxus",
    description: "Fast and feature-rich Roblox executor.",
    date: "2025-04-18",
    image: "image/fluxurexecutor.png"
  },
  {
    id: "3",
    title: "Electron",
    description: "Free executor with wide script support.",
    date: "2025-04-15",
    image: "image/fluxurexecutor.png"
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
