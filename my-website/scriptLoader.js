document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  const scripts = {
    "blox-fruits-redz": {
      title: "BLOX FRUITS – REDz Hub 🏯",
      author: "Skays",
      date: "30 April 2025",
      image: "image/bloxfruits.png",
      description: "BLOX FRUITS Script Pastebin 2025 UPDATE GRAVITY AUTO FARM, SEA EVENT, EZ LEVIATHAN, RAID, PREHISTORIC (NO KEY)",
      code1: `-- Official Redz
local Settings = {
  JoinTeam = "Pirates"; -- Pirates/Marines
  Translator = true; -- true/false
}
loadstring(game:HttpGet("https://raw.githubusercontent.com/newredz/BloxFruits/refs"))()`,
      code2: `-- Alternative Redz
loadstring(game:HttpGet("https://pastefy.app/ACOXb6Dh/raw"))()`,
      features: [
        "Best Sea Event", "No Key", "Smooth Farm", "Volcano Event", "Prehistoric",
        "Dojo Quest", "Dragon Race", "Dragon Race"
      ]
    }
    // You can add more scripts by ID here
  };

  const script = scripts[id];

  if (script) {
    document.getElementById("script-content").innerHTML = `
      <h2>${script.title}</h2>
      <p>${script.date} by ${script.author}</p>
      <img src="${script.image}" alt="${script.title}" style="width:100%; max-width:700px; margin: 20px auto; display:block; border-radius:10px;" />
      <p><strong>${script.description}</strong></p>
      <pre><code>${script.code1}</code></pre>
      <pre><code>${script.code2}</code></pre>
      <h4>Feature :</h4>
      <ul>${script.features.map(f => `<li>${f}</li>`).join("")}</ul>
    `;
  } else {
    document.getElementById("script-content").innerHTML = `<h2>Script not found.</h2>`;
  }
});
