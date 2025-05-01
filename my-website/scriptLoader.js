// --- Script Data (ideally loaded from a backend or JSON file in production) ---
const scripts = [
  {
    id: "1",
    title: "Speed Hack",
    description: "Increases player movement speed.",
    image: "image/bloxfruits.png",
    code: `-- Speed Hack\nloadstring(game:HttpGet("https://pastefy.app/ACOX6D6h/raw"))()`
  },
  {
    id: "2",
    title: "Fly Script",
    description: "Gives the player the ability to fly.",
    image: "image/fly.jpg",
    code: `-- Fly Script\nloadstring(game:HttpGet("https://pastebin.com/raw/abcd1234"))()`
  },
  {
    id: "3",
    title: "ESP Script",
    description: "Reveals other players through walls.",
    image: "image/esp.jpg",
    code: `-- ESP Script\nloadstring(game:HttpGet("https://pastebin.com/raw/esp12345"))()`
  },
  {
    id: "4",
    title: "WalkSpeed Hack",
    description: "Set WalkSpeed to 100 for fast movement.",
    image: "image/speedhack.png",
    code: `-- WalkSpeed Hack\ngame.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 100`
  }
];

// --- Get Script ID from URL ---
const params = new URLSearchParams(window.location.search);
const scriptId = params.get('id');

// --- Find the Script by ID ---
const script = scripts.find(s => s.id === scriptId);

// --- Display Script Details ---
const container = document.getElementById('script-details');

if (script) {
  document.title = script.title;

  container.innerHTML = `
    <section class="card" style="margin: 20px auto; max-width: 600px;">
      <img src="${script.image}" alt="${script.title}" style="width: 100%; border-radius: 6px; margin-bottom: 15px;">
      <h3>${script.title}</h3>
      <p>${script.description}</p>
      <pre style="text-align: left; background-color: #f9f9f9; padding: 12px; border-radius: 8px; overflow-x: auto; font-size: 14px;">${script.code}</pre>
    </section>
  `;
} else {
  container.innerHTML = `<h2 style="text-align: center; margin-top: 50px;">Script not found.</h2>`;
}
