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

// Get script ID from URL
const params = new URLSearchParams(window.location.search);
const scriptId = params.get('id');

// Find the script
const script = scripts.find(s => s.id === scriptId);

// Display container
const container = document.getElementById('script-details');

if (script) {
  document.title = script.title;

  container.innerHTML = `
    <section class="card" style="margin: 20px auto; max-width: 600px;">
      <img src="${script.image}" alt="${script.title}" style="width: 100%; border-radius: 6px; margin-bottom: 15px;">
      <h3>${script.title}</h3>
      <p>${script.description}</p>
      <pre id="code-block" style="text-align: left; background-color: #f9f9f9; padding: 12px; border-radius: 8px; overflow-x: auto; font-size: 14px;">${script.code}</pre>
      <button onclick="copyCode()" style="margin-top: 10px; padding: 8px 12px; background-color: #4CAF50; color: white; border: none; border-radius: 6px; cursor: pointer;">
        Copy Script
      </button>
    </section>
  `;
} else {
  container.innerHTML = `<h2 style="text-align: center; margin-top: 50px;">Script not found.</h2>`;
}

// Copy to clipboard function
function copyCode() {
  const codeBlock = document.getElementById('code-block').innerText;
  navigator.clipboard.writeText(codeBlock).then(() => {
    alert('Script copied to clipboard!');
  }).catch(err => {
    alert('Failed to copy script.');
  });
}
