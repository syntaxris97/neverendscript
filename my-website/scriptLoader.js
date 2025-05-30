const scripts = [
  {
    id: "5",
    title: "AAim Hack",
    description: "Increases player movement speed.",
    image: "image/scriptroblox2.png",
    code: `loadstring(game:HttpGet("https://pastefy.app/ACOX6D6h/raw"))()`,
    features: [
      "Best Sea Event",
      "No Key",
      "Smooth Farm",
      "Volcano Event",
      "Prehistoric",
      "Dojo Quest",
      "Dragon Race",
      "Draco Race",
      "Auto Belt",
      "Kitsune Event",
      "Mastery Gun & Fruit",
      "Fully Auto Raid",
      "Script Mobile & PC"
    ],
    steps: [
      "Click COPY button for auto copy script",
      "Paste the script into your executor",
      "Run and done"
    ],
    notes: []
  },
  {
    id: "1",
    title: "Speed Hack",
    description: "Increases player movement speed.",
    image: "image/image/scriptroblox1.png",
    code: `https://www.mediafire.com/file/noy2d9ll2gh0zn4/ML+MOD+MENU+2025.apk/file`,
    features: ["Increases movement speed instantly."],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "2",
    title: "Fly Script",
    description: "Gives the player the ability to fly.",
    image: "image/scriptroblox3.png",
    code: `-- Fly Script\nloadstring(game:HttpGet("https://pastebin.com/raw/abcd1234"))()`,
    features: ["Fly ability", "Toggle on/off"],
    steps: ["Copy the script", "Paste into your executor", "Press 'F' to toggle fly"],
    notes: []
  },
  {
    id: "3",
    title: "ESP Script",
    description: "Reveals other players through walls.",
    image: "image/scriptroblox3.png",
    code: `-- ESP Script\nloadstring(game:HttpGet("https://pastebin.com/raw/esp12345"))()`,
    features: ["Wallhack/ESP"],
    steps: ["Copy and run script in executor"],
    notes: ["Useful in PvP environments"]
  },
  {
    id: "4",
    title: "WalkSpeed Hack",
    description: "Set WalkSpeed to 100 for fast movement.",
    image: "image/sscriptroblox1.png",
    code: `-- WalkSpeed Hack\ngame.Players.LocalPlayer.Character.Humanoid.WalkSpeed = 100`,
    features: ["Custom speed boost"],
    steps: ["Paste and execute in console"],
    notes: ["Only works in some games"]
  }
];

// Get script ID from URL
const params = new URLSearchParams(window.location.search);
const scriptId = params.get('id');
const script = scripts.find(s => s.id === scriptId);

// Render script data
if (script) {
  document.title = `${script.title} - NeverEndScript`;

  const codeElement = document.getElementById("scriptCode");
  if (codeElement) {
    codeElement.innerText = script.code;
  }

  const imageElement = document.getElementById("script-image");
  if (imageElement && script.image) {
    imageElement.src = script.image;
    imageElement.style.display = "block";
    imageElement.alt = script.title;
  }

  const featureList = document.getElementById("feature-list");
  featureList.innerHTML = "";
  script.features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = `+ ${feature}`;
    featureList.appendChild(li);
  });

  const stepList = document.getElementById("step-list");
  stepList.innerHTML = "";
  script.steps.forEach(step => {
    const li = document.createElement("li");
    li.textContent = step;
    stepList.appendChild(li);
  });

  const noteList = document.getElementById("note-list");
  noteList.innerHTML = "";
  if (script.notes && script.notes.length > 0) {
    script.notes.forEach(note => {
      const li = document.createElement("li");
      li.textContent = note;
      noteList.appendChild(li);
    });
  } else {
    noteList.innerHTML = "<li>No additional notes.</li>";
  }
} else {
  document.getElementById("script-details").innerHTML = `
    <h2 style="text-align: center; margin-top: 50px;">Script not found.</h2>`;
}
