const scripts = [
  {
    id: "7",
    title: "Speed Hack",
    description: "Increases player movement speed.",
    image: "image/image/scriptroblox1.png",
    code: `https://www.mediafire.com/file/noy2d9ll2gh0zn4/ML+MOD+MENU+2025.apk/file`,
    features: ["Increases movement speed instantly."],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "6",
    title: "Speed Hack",
    description: "Increases player movement speed.",
    image: "image/image/scriptroblox1.png",
    code: `https://www.mediafire.com/file/noy2d9ll2gh0zn4/ML+MOD+MENU+2025.apk/file`,
    features: ["Increases movement speed instantly."],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "5",
    title: "Speed Hack",
    description: "Increases player movement speed.",
    image: "image/image/scriptroblox1.png",
    code: `https://www.mediafire.com/file/noy2d9ll2gh0zn4/ML+MOD+MENU+2025.apk/file`,
    features: ["Increases movement speed instantly."],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "4",
    title: "Speed Hack",
    description: "Increases player movement speed.",
    image: "image/image/scriptroblox1.png",
    code: `https://www.mediafire.com/file/noy2d9ll2gh0zn4/ML+MOD+MENU+2025.apk/file`,
    features: ["Increases movement speed instantly."],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "3",
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
    title: "Speed Hack",
    description: "Increases player movement speed.",
    image: "image/image/scriptroblox1.png",
    code: `https://www.mediafire.com/file/noy2d9ll2gh0zn4/ML+MOD+MENU+2025.apk/file`,
    features: ["Increases movement speed instantly."],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
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
