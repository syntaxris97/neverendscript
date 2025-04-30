const scripts = [
  {
    title: "Script A",
    description: "Description for Script A",
    image: "image/script-a.jpg"
  },
  {
    title: "Script B",
    description: "Description for Script B",
    image: "image/script-b.jpg"
  },
  // Add more scripts here
];

const executors = [
  {
    title: "Executor X",
    description: "Description for Executor X",
    image: "image/executor-x.jpg"
  },
  {
    title: "Executor Y",
    description: "Description for Executor Y",
    image: "image/executor-y.jpg"
  },
  // Add more executors here
];

const scriptsPerPage = 3;
let currentScriptPage = 1;
let currentExecutorPage = 1;

function displayCards(containerId, data, page) {
  const container = document.getElementById(containerId);
  const start = (page - 1) * scriptsPerPage;
  const end = start + scriptsPerPage;
  container.innerHTML = "";
  data.slice(start, end).forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    container.appendChild(card);
  });
}

function setupPagination(paginationId, containerId, data, setPageFn) {
  const pagination = document.getElementById(paginationId);
  pagination.innerHTML = "";
  const pageCount = Math.ceil(data.length / scriptsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = (i === (containerId === 'scriptCards' ? currentScriptPage : currentExecutorPage)) ? "active" : "";
    btn.addEventListener("click", () => {
      setPageFn(i);
    });
    pagination.appendChild(btn);
  }
}

function setScriptPage(page) {
  currentScriptPage = page;
  displayCards("scriptCards", scripts, currentScriptPage);
  setupPagination("scriptPagination", "scriptCards", scripts, setScriptPage);
}

function setExecutorPage(page) {
  currentExecutorPage = page;
  displayCards("executorCards", executors, currentExecutorPage);
  setupPagination("executorPagination", "executorCards", executors, setExecutorPage);
}

function loadAll() {
  setScriptPage(currentScriptPage);
  setExecutorPage(currentExecutorPage);
}

document.addEventListener("DOMContentLoaded", () => {
  loadAll();

  document.getElementById("nav-home").addEventListener("click", () => {
    loadAll();
  });

  document.getElementById("nav-scripts").addEventListener("click", () => {
    setScriptPage(1);
    document.getElementById("executorCards").innerHTML = "";
    document.getElementById("executorPagination").innerHTML = "";
  });

  document.getElementById("nav-executors").addEventListener("click", () => {
    setExecutorPage(1);
    document.getElementById("scriptCards").innerHTML = "";
    document.getElementById("scriptPagination").innerHTML = "";
  });
});
