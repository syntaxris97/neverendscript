const scripts = [
  {
    title: "🔥 NEW SCRIPT – Banana Hub",
    date: "1 May 2025",
    description: "Latest Banana Hub script with full auto-farm + anti-ban.",
    img: "image/bananahub.png"
  },
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
    title: "JAILBREAK – OP AUTO FARM",
    date: "10 April 2025",
    description: "The best auto farm script for Jailbreak...",
    img: "image/jailbreak.png"
  }
];

const container = document.getElementById("card-container");

scripts.forEach(script => {
  const card = document.createElement("div");
  card.className = "col-md-4 mb-4";

  card.innerHTML = `
    <div class="card h-100 shadow-sm">
      <img src="${script.img}" class="card-img-top" alt="${script.title}" />
      <div class="card-body">
        <h5 class="card-title fw-bold">${script.title}</h5>
        <p class="card-text text-muted mb-1">${script.date}</p>
        <p class="card-text">${script.description}</p>
      </div>
    </div>
  `;

  container.appendChild(card);
});
