const scripts = [
  {
    title: "Banana Hub",
    description: "Latest Banana Hub script with full auto-farm + anti-ban.",
    image: "image/banana.png",
    date: "1 May 2025",
    type: "script"
  },
  {
    title: "BLOX FRUITS Pastebin",
    description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY...",
    image: "image/bloxfruits.jpg",
    date: "30 April 2025",
    type: "script"
  },
  {
    title: "Delta Executor",
    description: "Powerful executor for Roblox scripts.",
    image: "image/delta.png",
    date: "29 April 2025",
    type: "executor"
  },
  {
    title: "KRNL",
    description: "Popular free Roblox executor with script support.",
    image: "image/krnl.png",
    date: "27 April 2025",
    type: "executor"
  }
];

let currentPage = 1;
const itemsPerPage = 3;
let currentView = "home"; // 'home', 'script', 'executor'

function displayItems() {
  const container = document.getElementById("contentContainer");
  container.innerHTML = "";

  const filtered = scripts.filter(item => {
    if (currentView === "script") return item.type === "script";
    if (currentView === "executor") return item.type === "executor";
    return true; // home = show all
  });

  const start = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filtered.slice(start, start + itemsPerPage);

  paginatedItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card glass";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p class="date">${item.date}</p>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });

  updatePagination(filtered.length);
}

function updatePagination(totalItems) {
  const pagination = document.getElementById("paginationContainer");
  pagination.innerHTML = "";

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      displayItems();
    };
    pagination.appendChild(btn);
  }
}

function performSearch() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const container = document.getElementById("contentContainer");
  container.innerHTML = "";

  const filtered = scripts.filter(item =>
    item.title.toLowerCase().includes(query) ||
    item.description.toLowerCase().includes(query)
  );

  if (filtered.length === 0) {
    container.innerHTML = "<p>No results found.</p>";
    document.getElementById("paginationContainer").innerHTML = "";
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "card glass";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p class="date">${item.date}</p>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });

  document.getElementById("paginationContainer").innerHTML = "";
}

// Navigation
document.getElementById("homeBtn").addEventListener("click", () => {
  currentView = "home";
  currentPage = 1;
  displayItems();
});
document.getElementById("scriptsBtn").addEventListener("click", () => {
  currentView = "script";
  currentPage = 1;
  displayItems();
});
document.getElementById("executorsBtn").addEventListener("click", () => {
  currentView = "executor";
  currentPage = 1;
  displayItems();
});

window.onload = displayItems;
