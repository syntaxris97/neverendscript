const scripts = [
  {
    title: "🔥 NEW SCRIPT – Banana Hub",
    description: "Latest Banana Hub script with full auto-farm + anti-ban.",
    date: "1 May 2025",
    image: "image/banana.png"
  },
  {
    title: "BLOX FRUITS – REDz Hub",
    description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY...",
    date: "30 April 2025",
    image: "image/bloxfruits.png"
  },
  {
    title: "DEAD RAILS Script – Native Hub",
    description: "NATIVE HUB: DEAD RAILS Script Pastebin 2025...",
    date: "30 April 2025",
    image: "image/deadrails.png"
  }
];

const executors = [
  {
    title: "Hydrogen Executor",
    description: "Mobile executor supporting most scripts.",
    date: "28 April 2025",
    image: "image/deltaexecutor.png"
  },
  {
    title: "KRNL Executor",
    description: "Popular free executor, trusted by many users.",
    date: "25 April 2025",
    image: "image/
fluxurexecutor.png"
  }
];

const itemsPerPage = 3;

function renderCards(data, containerId, page) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const pageItems = data.slice(start, end);

  pageItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <small>${item.date}</small>
      <p>${item.description}</p>
    `;
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

function changeScriptPage(page) {
  renderCards(scripts, "scriptCards", page);
  renderPagination(scripts, "scriptPagination", changeScriptPage);
}

function changeExecutorPage(page) {
  renderCards(executors, "executorCards", page);
  renderPagination(executors, "executorPagination", changeExecutorPage);
}

function showSection(section) {
  const scriptsSection = document.getElementById("scriptsSection");
  const executorsSection = document.getElementById("executorsSection");

  if (section === "home") {
    scriptsSection.style.display = "block";
    executorsSection.style.display = "block";
  } else {
    scriptsSection.style.display = section === "scripts" ? "block" : "none";
    executorsSection.style.display = section === "executors" ? "block" : "none";
  }

  document.querySelectorAll("nav ul a").forEach(link => link.classList.remove("active"));
  document.getElementById("nav" + section.charAt(0).toUpperCase() + section.slice(1)).classList.add("active");
}

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

function searchContent() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filteredScripts = scripts.filter(s =>
    s.title.toLowerCase().includes(query) ||
    s.description.toLowerCase().includes(query)
  );
  const filteredExecutors = executors.filter(e =>
    e.title.toLowerCase().includes(query) ||
    e.description.toLowerCase().includes(query)
  );

  if (filteredScripts.length > 0) {
    showSection("scripts");
    renderCards(filteredScripts, "scriptCards", 1);
    document.getElementById("scriptPagination").innerHTML = "";
  } else if (filteredExecutors.length > 0) {
    showSection("executors");
    renderCards(filteredExecutors, "executorCards", 1);
    document.getElementById("executorPagination").innerHTML = "";
  } else {
    alert("No matching scripts or executors found.");
  }
}

window.onload = () => {
  showSection("home");
  changeScriptPage(1);
  changeExecutorPage(1);
};
