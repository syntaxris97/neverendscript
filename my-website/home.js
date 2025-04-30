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
  }
];

const executors = [
  {
    title: "Fluxus Executor",
    date: "1 May 2025",
    description: "Best free executor for Roblox with high stability.",
    image: "image/bloxfruits.png"
  },
  {
    title: "Hydrogen Executor",
    date: "28 April 2025",
    description: "Mobile executor supporting most scripts.",
    image: "https://via.placeholder.com/300x150"
  },
  {
    title: "KRNL Executor",
    date: "25 April 2025",
    description: "Popular free executor, trusted by many users.",
    image: "https://via.placeholder.com/300x150"
  },
  {
    title: "Delta Executor",
    date: "20 April 2025",
    description: "Stable executor with clean UI and fast injection.",
    image: "https://via.placeholder.com/300x150"
  }
];

// === Utility function to create cards ===
function createCard(item) {
  return `
    <div class="card">
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p><small>${item.date}</small></p>
      <p>${item.description}</p>
    </div>
  `;
}

// === Render Paginated Content ===
function renderPaginated(items, containerId, paginationId, currentPage, itemsPerPage, section) {
  const container = document.getElementById(containerId);
  const pagination = document.getElementById(paginationId);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = items.slice(start, end);

  container.innerHTML = currentItems.map(createCard).join('');

  const pageCount = Math.ceil(items.length / itemsPerPage);
  pagination.innerHTML = '';

  for (let i = 1; i <= pageCount; i++) {
    pagination.innerHTML += `<button onclick="changePage('${section}', ${i})" class="${i === currentPage ? 'active' : ''}">${i}</button>`;
  }
}

// === Page state ===
let scriptPage = 1;
let executorPage = 1;

// === Change Page ===
function changePage(section, pageNum) {
  if (section === 'scripts') {
    scriptPage = pageNum;
    renderPaginated(scripts, 'scriptCards', 'pagination', scriptPage, 3, 'scripts');
  } else if (section === 'executors') {
    executorPage = pageNum;
    renderPaginated(executors, 'executorCards', 'executorPagination', executorPage, 3, 'executors');
  }
}

// === Search Function (for Scripts only) ===
function searchScripts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = scripts.filter(s =>
    s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)
  );
  renderPaginated(filtered, 'scriptCards', 'pagination', 1, 3, 'scripts');
}

// === Initial render ===
document.addEventListener("DOMContentLoaded", () => {
  renderPaginated(scripts, 'scriptCards', 'pagination', scriptPage, 3, 'scripts');
  renderPaginated(executors, 'executorCards', 'executorPagination', executorPage, 3, 'executors');
});
