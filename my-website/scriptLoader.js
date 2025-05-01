// Example script list - in production, load this from your real source
const scripts = [
  {
    id: "1",
    title: "Speed Hack",
    description: "Increases player movement speed.",
    image: "image/bloxfruits.png",
    code: `-- Speed Hack
loadstring(game:HttpGet("https://pastefy.app/ACOX6D6h/raw"))()`
  },
  {
    id: "2",
    title: "Fly Script",
    description: "Gives the player the ability to fly.",
    image: "image/fly.jpg",
    code: `-- Fly Script
loadstring(game:HttpGet("https://pastebin.com/raw/abcd1234"))()`
  },
  {
    id: "3",
    title: "ESP Script",
    description: "Reveals other players through walls.",
    image: "image/esp.jpg",
    code: `-- ESP Script
loadstring(game:HttpGet("https://pastebin.com/raw/esp12345"))()`
  }
];

// Get the script ID from the URL
const params = new URLSearchParams(window.location.search);
const scriptId = params.get('id');

// Find the script
const script = scripts.find(s => s.id === scriptId);

// Select the container
const container = document.getElementById('script-details');

if (script) {
  document.title = script.title;

  container.innerHTML = `
    <section class="card" style="margin: 20px auto; max-width: 600px;">
      <img src="${script.image}" alt="${script.title}">
      <h3>${script.title}</h3>
      <p>${script.description}</p>
      <pre style="text-align: left; background-color: #f9f9f9; padding: 10px; border-radius: 6px; overflow-x: auto;">${script.code}</pre>
    </section>
  `;
} else {
  container.innerHTML = `<h2 style="text-align: center;">Script not found.</h2>`;
}
