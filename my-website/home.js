const scripts = [
  {
    title: "🔥 NEW SCRIPT – Banana Hub",
    date: "1 May 2025",
    description: "Latest Banana Hub script with full auto-farm + anti-ban.",
    image: "image/bloxfruits.png"
  },
  {
    title: "BLOX FRUITS – REDz Hub",
    date: "30 April 2025",
    description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY...",
    image: "https://via.placeholder.com/300x150"
  },
  {
    title: "DEAD RAILS Script – Native Hub",
    date: "30 April 2025",
    description: "NATIVE HUB: DEAD RAILS Script Pastebin 2025...",
    image: "https://via.placeholder.com/300x150"
  },
  {
    title: "KRNL V669 BEST",
    date: "23 April 2025",
    description: "Credit: ...",
    image: "https://via.placeholder.com/300x150"
  },
  {
    title: "ARM HUB – PET SIM X",
    date: "15 April 2025",
    description: "Fully working script for Pet Simulator X...",
    image: "https://via.placeholder.com/300x150"
  },
  {
    title: "JAILBREAK – OP AUTO FARM",
    date: "10 April 2025",
    description: "The best auto farm script for Jailbreak...",
    image: "https://via.placeholder.com/300x150"
  },
];

const perPage = 3;
let currentPage = 1;

function renderScripts() {
  const container = document.getElementById("scriptsContainer");
  container.innerHTML = "";
  const start = (currentPage - 1) * perPage;
  const end = start + perPage;
  const paginated = scripts.slice(start, end);

  paginated.forEach(script => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${script.image}" alt="${script.title}">
      <h3>${script.title}</h3>
      <div class="date">${script.date}</div>
      <div class="desc">${script.description}</div>
    `;
    container.appendChild(card);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(scripts.length / perPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");
    btn.onclick = () => {
      currentPage = i;
      renderScripts();
      renderPagination();
    };
    pagination.appendChild(btn);
  }
}

document.getElementById("searchButton").onclick = () => {
  const term = document.getElementById("searchInput").value.toLowerCase();
  const filtered = scripts.filter(s => s.title.toLowerCase().includes(term));
  currentPage = 1;
  renderFiltered(filtered);
};

function renderFiltered(filteredList) {
  const container = document.getElementById("scriptsContainer");
  const pagination = document.getElementById("pagination");
  container.innerHTML = "";
  pagination.innerHTML = "";

  filteredList.forEach(script => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${script.image}" alt="${script.title}">
      <h3>${script.title}</h3>
      <div class="date">${script.date}</div>
      <div class="desc">${script.description}</div>
    `;
    container.appendChild(card);
  });
}

renderScripts();
renderPagination();
