const scripts = [
  {
    title: "Blox Fruits Pastebin Script",
    date: "30 April 2025",
    description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY...",
    image: "image/bloxfruits.png",
  },
];

const executors = [
  {
    title: "Delta Executor",
    date: "29 April 2025",
    description: "Powerful executor for Roblox scripts.",
    image: "image/deltaexecutor.png",
  },
  {
    title: "Fluxus Executor",
    date: "28 April 2025",
    description: "Popular Roblox executor for multiple games.",
    image: "image/fluxurexecutor.png",
  },
];

const scriptsPerPage = 3;
let currentScriptPage = 1;
let currentExecutorPage = 1;

function displayCards(containerId, data, page) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const start = (page - 1) * scriptsPerPage;
  const end = start + scriptsPerPage;
  const paginatedItems = data.slice(start, end);

  paginatedItems.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.date}</p>
        <p>${item.description}</p>
      </div>
    `;
    container.appendChild(card);
  });
}

function displayPagination(containerId, data, itemsPerPage, currentPage, type) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const pageCount = Math.ceil(data.length / itemsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.className = currentPage === i ? "active" : "";
    btn.addEventListener("click", () => {
      if (type === "scripts") {
        currentScriptPage = i;
        displayCards("scriptsContainer", scripts, currentScriptPage);
        displayPagination("scriptsPagination", scripts, scriptsPerPage, currentScriptPage, "scripts");
      } else {
        currentExecutorPage = i;
        displayCards("executorsContainer", executors, currentExecutorPage);
        displayPagination("executorsPagination", executors, scriptsPerPage, currentExecutorPage, "executors");
      }
    });
    container.appendChild(btn);
  }
}

function searchItems() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();

  const filteredScripts = scripts.filter(item =>
    item.title.toLowerCase().includes(searchInput) ||
    item.description.toLowerCase().includes(searchInput)
  );

  const filteredExecutors = executors.filter(item =>
    item.title.toLowerCase().includes(searchInput) ||
    item.description.toLowerCase().includes(searchInput)
  );

  displayCards("scriptsContainer", filteredScripts, 1);
  displayPagination("scriptsPagination", filteredScripts, scriptsPerPage, 1, "scripts");

  displayCards("executorsContainer", filteredExecutors, 1);
  displayPagination("executorsPagination", filteredExecutors, scriptsPerPage, 1, "executors");
}

// ✅ Automatically run on page load
window.onload = () => {
  displayCards("scriptsContainer", scripts, currentScriptPage);
  displayPagination("scriptsPagination", scripts, scriptsPerPage, currentScriptPage, "scripts");

  displayCards("executorsContainer", executors, currentExecutorPage);
  displayPagination("executorsPagination", executors, scriptsPerPage, currentExecutorPage, "executors");
};
