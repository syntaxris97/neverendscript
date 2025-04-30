const scripts = [
  {
    title: "Blox Fruit Script",
    image: "image/bloxfruit.jpg",
    description: "Auto Farm | Fast Attack | Teleport | And More",
    link: "https://example.com/bloxfruit",
  },
  {
    title: "Pet Simulator X",
    image: "image/petsim.jpg",
    description: "Auto Farm | Auto Hatch | Auto Enchant",
    link: "https://example.com/petsim",
  },
  {
    title: "Shindo Life Script",
    image: "image/shindo.jpg",
    description: "Auto Rank | Auto Farm | Kill Aura",
    link: "https://example.com/shindo",
  },
  // Add more scripts here
];

const executors = [
  {
    title: "KRNL Executor",
    image: "image/krnl.jpg",
    description: "Free Executor with high compatibility",
    link: "https://krnl.place/",
  },
  {
    title: "Fluxus Executor",
    image: "image/fluxus.jpg",
    description: "Supports Mobile and PC | Key Required",
    link: "https://fluxteam.net/",
  },
  {
    title: "Hydrogen Executor",
    image: "image/hydrogen.jpg",
    description: "Free mobile executor",
    link: "https://hydrogenexecutor.com/",
  },
  // Add more executors here
];

const itemsPerPage = 3;

function renderCards(data, containerId, page) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const paginatedItems = data.slice(start, start + itemsPerPage);

  paginatedItems.forEach((item) => {
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
}

function renderPagination(data, containerId, renderFunc, sectionType) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  const pageCount = Math.ceil(data.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = () => renderFunc(data, sectionType, i);
    container.appendChild(btn);
  }
}

function showSection(section) {
  document.getElementById("homeSection").style.display = section === "home" ? "block" : "none";
  document.getElementById("scriptsSection").style.display = section === "scripts" ? "block" : "none";
  document.getElementById("executorsSection").style.display = section === "executors" ? "block" : "none";

  if (section === "home") {
    renderCards(scripts, "scriptsContainer", 1);
    renderPagination(scripts, "scriptsPagination", renderSection, "scripts");

    renderCards(executors, "executorsContainer", 1);
    renderPagination(executors, "executorsPagination", renderSection, "executors");
  } else if (section === "scripts") {
    renderCards(scripts, "scriptsOnlyContainer", 1);
    renderPagination(scripts, "scriptsOnlyPagination", renderSection, "scriptsOnly");
  } else if (section === "executors") {
    renderCards(executors, "executorsOnlyContainer", 1);
    renderPagination(executors, "executorsOnlyPagination", renderSection, "executorsOnly");
  }
}

function renderSection(data, sectionType, page) {
  const containerMap = {
    scripts: "scriptsContainer",
    executors: "executorsContainer",
    scriptsOnly: "scriptsOnlyContainer",
    executorsOnly: "executorsOnlyContainer"
  };
  const paginationMap = {
    scripts: "scriptsPagination",
    executors: "executorsPagination",
    scriptsOnly: "scriptsOnlyPagination",
    executorsOnly: "executorsOnlyPagination"
  };

  renderCards(data, containerMap[sectionType], page);
  renderPagination(data, paginationMap[sectionType], renderSection, sectionType);
}

document.addEventListener("DOMContentLoaded", () => {
  showSection("home");
});
