// Sample script data (replace with real data or fetch from server)
const scripts = [
  {
    title: "BLOX FRUITS – REDz Hub",
    date: "30 April 2025",
    description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY...",
    img: "image/bloxfruits.png"
  },
  {
    title: "DEAD RAILS Script – Native Hub",
    date: "30 April 2025",
    description: "NATIVE HUB: DEAD RAILS Script Pastebin 2025...",
    img: "image/deadrails.png"
  },
  {
    title: "KRNL V669 BEST",
    date: "23 April 2025",
    description: "Credit: ...",
    img: "image/krnl.png"
  },
  {
    title: "ARM HUB – PET SIM X",
    date: "15 April 2025",
    description: "Fully working script for Pet Simulator X...",
    img: "image/petsimx.png"
  },
  {
    title: "JAILBREAK - OP AUTO FARM",
    date: "10 April 2025",
    description: "The best auto farm script for Jailbreak...",
    img: "image/jailbreak.png"
  },
  {
    title: "ARCEUS X V4 - MOBILE SUPPORT",
    date: "8 April 2025",
    description: "Supports mobile devices for smooth performance.",
    img: "image/arceusx.png"
  }
];

const cardsContainer = document.querySelector(".cards");
const pagination = document.querySelector(".pagination");
const itemsPerPage = 3;
let currentPage = 1;

function displayScripts(page) {
  cardsContainer.innerHTML = "";
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = scripts.slice(start, end);

  currentItems.forEach(script => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${script.img}" alt="${script.title}">
      <h3>${script.title}</h3>
      <p>${script.date}</p>
      <p>${script.description}</p>
    `;
    cardsContainer.appendChild(card);
  });
}

function setupPagination() {
  pagination.innerHTML = "";
  const pageCount = Math.ceil(scripts.length / itemsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = i;
    if (i === currentPage) link.classList.add("active");
    link.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      displayScripts(currentPage);
      setupPagination();
    });
    pagination.appendChild(link);
  }
}

displayScripts(currentPage);
setupPagination();
