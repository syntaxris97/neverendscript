const scripts = [
  {
    title: "🔥 NEW SCRIPT – Banana Hub",
    date: "1 May 2025",
    description: "Latest Banana Hub script with full auto-farm + anti-ban.",
    image: "image/bloxfruits.png",
  },
  {
    title: "BLOX FRUITS – REDz Hub",
    date: "30 April 2025",
    description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY...",
    image: "https://via.placeholder.com/300x150",
  },
  {
    title: "DEAD RAILS Script – Native Hub",
    date: "30 April 2025",
    description: "NATIVE HUB: DEAD RAILS Script Pastebin 2025...",
    image: "https://via.placeholder.com/300x150",
  },
];

const executors = [
  {
    title: "Hydrogen Executor",
    date: "28 April 2025",
    description: "Mobile executor supporting most scripts.",
    image: "image/bloxfruits.png",
  },
  {
    title: "KRNL Executor",
    date: "25 April 2025",
    description: "Popular free executor, trusted by many users.",
    image: "https://via.placeholder.com/300x150",
  },
];

const scriptsPerPage = 3;
const executorsPerPage = 3;
let currentScriptPage = 1;
let currentExecutorPage = 1;

function renderCards(items, containerId, page, itemsPerPage) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);

  paginatedItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p class="date">${item.date}</p>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });
}

function renderPagination(items, paginationId, onPageChange, currentPage, itemsPerPage) {
  const pagination = document.getElementById(paginationId);
  pagination.innerHTML = "";

  const totalPages = Math.ceil(items.length / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => onPageChange(i);
    pagination.appendChild(btn);
  }
}

function changeScriptPage(page) {
  currentScriptPage = page;
  renderCards(scripts, "scriptsContainer", currentScriptPage, scriptsPerPage);
  renderPagination(scripts, "pagination", changeScriptPage, currentScriptPage, scriptsPerPage);
}

function changeExecutorPage(page) {
  currentExecutorPage = page;
  renderCards(executors, "executorsContainer", currentExecutorPage, executorsPerPage);
  renderPagination(executors, "executorsPagination", changeExecutorPage, currentExecutorPage, executorsPerPage);
}

function searchScripts() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const allCards = document.querySelectorAll(".card");
  allCards.forEach((card) => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(query) ? "block" : "none";
  });
}

window.onload = () => {
  changeScriptPage(1);
  changeExecutorPage(1);
};
