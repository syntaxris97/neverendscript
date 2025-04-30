// Sample data for scripts and executors
const scriptsData = [
  {
    title: "Blox Fruits Pastebin Script",
    date: "30 April 2025",
    description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY...",
    image: "image/bloxfruit.jpg"
  },
  // Add more script objects here
];

const executorsData = [
  {
    title: "Delta Executor",
    date: "29 April 2025",
    description: "Powerful executor for Roblox scripts.",
    image: "image/deltaexecutor.png"
  },
  {
    title: "Fluxus Executor",
    date: "28 April 2025",
    description: "Popular Roblox executor for multiple games.",
    image: "image/fluxusexecutor.jpg"
  },
  // Add more executor objects here
];

// Globals
const cardsPerPage = 3;
let currentScriptPage = 1;
let currentExecutorPage = 1;

// DOM Elements
const scriptContainer = document.getElementById("script-container");
const executorContainer = document.getElementById("executor-container");
const scriptPagination = document.getElementById("script-pagination");
const executorPagination = document.getElementById("executor-pagination");
const searchInput = document.getElementById("searchInput");

// Render Cards
function renderCards(data, container, page) {
  container.innerHTML = "";
  const start = (page - 1) * cardsPerPage;
  const paginatedData = data.slice(start, start + cardsPerPage);

  paginatedData.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-content">
        <h3>${item.title}</h3>
        <p>${item.date}</p>
        <p>${item.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

// Render Pagination
function renderPagination(data, container, currentPage, onClickPage) {
  container.innerHTML = "";
  const totalPages = Math.ceil(data.length / cardsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => onClickPage(i);
    container.appendChild(btn);
  }
}

// Filter Function
function filterData(data, query) {
  return data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase())
  );
}

// Initial Render
function renderAll() {
  const query = searchInput.value;

  const filteredScripts = filterData(scriptsData, query);
  const filteredExecutors = filterData(executorsData, query);

  renderCards(filteredScripts, scriptContainer, currentScriptPage);
  renderPagination(filteredScripts, scriptPagination, currentScriptPage, page => {
    currentScriptPage = page;
    renderAll();
  });

  renderCards(filteredExecutors, executorContainer, currentExecutorPage);
  renderPagination(filteredExecutors, executorPagination, currentExecutorPage, page => {
    currentExecutorPage = page;
    renderAll();
  });
}

// Event Listener
document.getElementById("searchButton").addEventListener("click", () => {
  currentScriptPage = 1;
  currentExecutorPage = 1;
  renderAll();
});

// Run initial
renderAll();
