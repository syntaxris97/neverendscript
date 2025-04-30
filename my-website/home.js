const scriptsData = [
  {
    title: "Blox Fruit Script",
    image: "image/bloxfruit.jpg",
    description: "Auto Farm | Fast Level | Free",
    link: "https://example.com/bloxfruit"
  },
  {
    title: "Arsenal Script",
    image: "image/arsenal.jpg",
    description: "Aimbot | ESP | Free",
    link: "https://example.com/arsenal"
  },
  {
    title: "Brookhaven Script",
    image: "image/brookhaven.jpg",
    description: "Admin Commands | Free",
    link: "https://example.com/brookhaven"
  },
  // Add more scripts here...
];

const executorsData = [
  {
    title: "Hydrogen Executor",
    image: "image/hydrogen.jpg",
    description: "Android | Key System",
    link: "https://example.com/hydrogen"
  },
  {
    title: "Delta Executor",
    image: "image/delta.jpg",
    description: "Android & PC | No Key",
    link: "https://example.com/delta"
  },
  {
    title: "Codex Executor",
    image: "image/codex.jpg",
    description: "Lightweight | Fast Inject",
    link: "https://example.com/codex"
  },
  // Add more executors here...
];

const cardsPerPage = 3;

function renderCards(data, containerId, paginationId, page) {
  const container = document.getElementById(containerId);
  const pagination = document.getElementById(paginationId);
  container.innerHTML = "";
  pagination.innerHTML = "";

  const start = (page - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const pageItems = data.slice(start, end);

  pageItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card glass";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <a href="${item.link}" target="_blank">View Script</a>
    `;
    container.appendChild(card);
  });

  const totalPages = Math.ceil(data.length / cardsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.onclick = () => renderCards(data, containerId, paginationId, i);
    pagination.appendChild(btn);
  }
}

function showScripts() {
  document.getElementById("scripts-container").style.display = "flex";
  document.getElementById("scripts-pagination").style.display = "flex";
  document.getElementById("executors-container").style.display = "none";
  document.getElementById("executors-pagination").style.display = "none";
  renderCards(scriptsData, "scripts-container", "scripts-pagination", 1);
}

function showExecutors() {
  document.getElementById("scripts-container").style.display = "none";
  document.getElementById("scripts-pagination").style.display = "none";
  document.getElementById("executors-container").style.display = "flex";
  document.getElementById("executors-pagination").style.display = "flex";
  renderCards(executorsData, "executors-container", "executors-pagination", 1);
}

function showAll() {
  document.getElementById("scripts-container").style.display = "flex";
  document.getElementById("scripts-pagination").style.display = "flex";
  document.getElementById("executors-container").style.display = "flex";
  document.getElementById("executors-pagination").style.display = "flex";
  renderCards(scriptsData, "scripts-container", "scripts-pagination", 1);
  renderCards(executorsData, "executors-container", "executors-pagination", 1);
}

// Load both by default
window.onload = () => {
  showAll();
};
