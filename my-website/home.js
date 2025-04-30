document.addEventListener("DOMContentLoaded", () => {
    const scripts = [
        {
            title: "BLOX FRUITS – REDz Hub",
            date: "30 April 2025",
            description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY...",
            image: "https://via.placeholder.com/300x180?text=REDz+Hub"
        },
        {
            title: "Banana Hub – Blox Fruits Script",
            date: "30 April 2025",
            description: "BLOX FRUITS Script Mobile UPDATE GRAVITY AUTO...",
            image: "https://via.placeholder.com/300x180?text=Banana+Hub"
        },
        {
            title: "DEAD RAILS Script – Native Hub",
            date: "30 April 2025",
            description: "NATIVE HUB: DEAD RAILS Script Pastebin 2025...",
            image: "https://via.placeholder.com/300x180?text=Native+Hub"
        },
        {
            title: "DEAD RAILS Script – Skull Hub",
            date: "30 April 2025",
            description: "SKULL HUB: DEAD RAILS Script Pastebin 2025 AUTO...",
            image: "https://via.placeholder.com/300x180?text=Skull+Hub"
        },
        {
            title: "Vxzee Hub – Blox Fruits Script (No Key)",
            date: "29 April 2025",
            description: "BLOX FRUITS Script No Key UPDATE GRAVITY AUTO...",
            image: "https://via.placeholder.com/300x180?text=Vxzee+Hub"
        },
        {
            title: "GROW A GARDEN Script – Lunor Hub",
            date: "29 April 2025",
            description: "LUNOR HUB: GROW A GARDEN Script Pastebin 2025...",
            image: "https://via.placeholder.com/300x180?text=Lunor+Hub"
        },
        {
            title: "KRNL V669 BEST",
            date: "23 April 2025",
            description: "Credit: ...",
            image: "https://via.placeholder.com/300x180?text=KRNL+V669"
        },
        {
            title: "FLUXUS v66.6",
            date: "23 April 2025",
            description: "Credit: shower head...",
            image: "https://via.placeholder.com/300x180?text=FLUXUS+v66.6"
        },
        {
            title: "DELTA V668 BEST",
            date: "15 April 2025",
            description: "Credit: Lxynny...",
            image: "https://via.placeholder.com/300x180?text=DELTA+V668"
        }
    ];

    const grid = document.getElementById("scriptsGrid");
    scripts.forEach(script => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${script.image}" alt="${script.title}">
            <div class="card-body">
                <h3>${script.title}</h3>
                <small>${script.date}</small>
                <p>${script.description}</p>
            </div>
        `;

        grid.appendChild(card);
    });
});