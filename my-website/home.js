const data = [
  {
    title: "Blox Fruits Pastebin Script",
    date: "30 April 2025",
    description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY...",
    image: "image/bloxfruits.png",
    category: "Script"
  },
  {
    title: "Delta Executor",
    date: "29 April 2025",
    description: "Powerful executor for Roblox scripts.",
    image: "image/deltaexecutor.png",
    category: "Executor"
  },
  {
    title: "Fluxus Executor",
    date: "28 April 2025",
    description: "Popular Roblox executor for multiple games.",
    image: "image/fluxurexecutor.png",
    category: "Executor"
  }
];

const itemsPerPage = 6;
let currentPage = 1;

function displayCards(category, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const filtered = data.filter(item => item.category === category);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(startIndex, startIndex + itemsPerPage);

  paginated.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p class="date">${item.date}</p>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });
}

function setupPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.className = "page-button";
    btn.innerText = i;
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => {
      currentPage = i;
      updateDisplay();
    });

    pagination.appendChild(btn);
  }
}

function updateDisplay() {
  displayCards("Script", "script-section");
  displayCards("Executor", "executor-section");
  setupPagination();
}

function searchItems() {
  const searchTerm = document.getElementById("searchInput").value.toLowerCase();
  const filtered = data.filter(item =>
    item.title.toLowerCase().includes(searchTerm) ||
    item.description.toLowerCase().includes(searchTerm)
  );

  document.getElementById("script-section").innerHTML = "";
  document.getElementById("executor-section").innerHTML = "";
  document.getElementById("pagination").innerHTML = "";

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p class="date">${item.date}</p>
      <p>${item.description}</p>
    `;

    const containerId = item.category === "Script" ? "script-section" : "executor-section";
    document.getElementById(containerId).appendChild(card);
  });
}

document.getElementById("searchBtn").addEventListener("click", searchItems);

updateDisplay();
