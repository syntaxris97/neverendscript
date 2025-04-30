const cardsData = [
  {
    image: "bloxfruits.png",
    title: "Blox Fruits Pastebin Script",
    date: "30 April 2025",
    description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY...",
  },
  {
    image: "deltaexecutor.png",
    title: "Delta Executor",
    date: "29 April 2025",
    description: "Powerful executor for Roblox scripts.",
  },
  {
    image: "fluxurexecutor.png",
    title: "Fluxus Executor",
    date: "28 April 2025",
    description: "Popular Roblox executor for multiple games.",
  },
];

const cardsPerPage = 3;
let currentPage = 1;

function renderCards(data) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  const start = (currentPage - 1) * cardsPerPage;
  const end = start + cardsPerPage;
  const cardsToDisplay = data.slice(start, end);

  cardsToDisplay.forEach(card => {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.innerHTML = `
      <img src="image/${card.image}" alt="${card.title}" class="card-img" />
      <div class="card-body">
        <h3>${card.title}</h3>
        <p>${card.date}</p>
        <p>${card.description}</p>
      </div>
    `;
    container.appendChild(cardElement);
  });

  renderPagination(data.length);
}

function renderPagination(totalItems) {
  const totalPages = Math.ceil(totalItems / cardsPerPage);
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === currentPage ? "active" : "";
    btn.onclick = () => {
      currentPage = i;
      renderCards(cardsData);
    };
    pagination.appendChild(btn);
  }
}

function searchCards() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = cardsData.filter(card =>
    card.title.toLowerCase().includes(query) ||
    card.description.toLowerCase().includes(query)
  );
  currentPage = 1;
  renderCards(filtered);
}

document.getElementById("searchBtn").addEventListener("click", searchCards);

window.onload = () => renderCards(cardsData);
