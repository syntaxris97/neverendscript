const scripts = [
  {
    id: "17",
    title: "GROW A GARDEN Script – Speed Hub",
    description: "Increases player movement speed.",
    image: "image/speedhub.jpg",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/AhmadV99/Speed-Hub-X/main/Speed%20Hub%20X.lua", true))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "16",
    title: "TxZ Hub – Blox Fruits Script",
    description: "Increases player movement speed.",
    image: "image/bloxfruits190620257.jpg",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/DrTxZ/Mercure-Hub/refs/heads/main/Mercure%20Hub.lua"))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "15",
    title: "BLOX FRUITS – REDz Hub",
    description: "Increases player movement speed.",
    image: "image/bloxfruits190620256.jpg",
    code: `local Settings = {
    JoinTeam = "Pirates"; -- Pirates / Marines
    Translator = true;   -- true / false
}
loadstring(game:HttpGet("https://raw.githubusercontent.com/tlredz/Scripts/refs/heads/main/main.luau"))(Settings)`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "14",
    title: "Blue X Hub Fruit Finder – Blox Fruits Script (No Key)",
    description: "Increases player movement speed.",
    image: "image/bloxfruits1906202525.jpg",
    code: `getgenv().Config = {
    ["Misc"] = {
        ["RandomFruits"] = true,
        ["BlackScreen"] = false,
    }
}
loadstring(game:HttpGet("https://raw.githubusercontent.com/Dev-BlueX/BlueX-Hub/refs/heads/main/FindFruits.lua"))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "13",
    title: "GROW A GARDEN Script – Pet Spawner Hub",
    description: "Increases player movement speed.",
    image: "image/growagarden19062025.jpg",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/sudaisontopxd/PanScriptXSudaisScript/refs/heads/main/PhantFluxReal.lua"))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "12",
    title: "Ego Hub – Blox Fruits Script",
    description: "Increases player movement speed.",
    image: "image/bloxfruits190620254.jpg",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/SuperIkka/Main/main/EgoLoaderMain", true))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "11",
    title: "BLUE LOCK: RIVALS Script – Alchemy Hub",
    description: "Increases player movement speed.",
    image: "image/bluelockrivals190620253.jpg",
    code: `loadstring(game:HttpGet("https://scripts.alchemyhub.xyz"))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "10",
    title: "BLUE LOCK: RIVALS Script – Sterling Hub",
    description: "Increases player movement speed.",
    image: "image/bluelockrivals190620252.jpg",
    code: `local GuiService = game:GetService("GuiService")
local Players = game:GetService("Players")
local TeleportService = game:GetService("TeleportService")
local player = Players.LocalPlayer
local function onErrorMessageChanged(errorMessage)
    if errorMessage and errorMessage ~= "" then
        print("Error detected: " .. errorMessage)
        if player then
            wait()
            TeleportService:Teleport(game.PlaceId, player)
        end
    end
end
GuiService.ErrorMessageChanged:Connect(onErrorMessageChanged)
loadstring(game:HttpGet("https://raw.githubusercontent.com/Zayn31214/name/refs/heads/main/SterlingNew"))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "9",
    title: "BLUE LOCK: RIVALS Script – Dehism Hub",
    description: "Increases player movement speed.",
    image: "image/bluelockrivals190620251.jpg",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/dehism/Dehism/refs/heads/main/Inf%20Spins%20Auto%20Dehism",true))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "8",
    title: "GROW A GARDEN Script – NAT Hub",
    description: "Increases player movement speed.",
    image: "image/nathub17.jpg",
    code: `loadstring(game:HttpGet("https://get.nathub.xyz/loader"))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "7",
    title: "Vxeze Hub Fruit Finder – Blox Fruits Script (No Key)",
    description: "Increases player movement speed.",
    image: "image/fruitfinder.jpg",
    code: `repeat wait() until game:IsLoaded() and game.Players.LocalPlayer
_G.VxezeConfig = {
    Main = {
        ["Team"] = "Marines",
        ["Auto Farm"] = true,
        ["Choose Mode"] = "Tween Fruit", -- Tween Fruit/Teleport Fruit
        ["Auto Random Fruit"] = true,
        ["Auto Store Fruit"] = true
    },
    Items = {
        ["Auto Buy Legendary Sword"] = true,
        ["Auto Buy Haki Color"] = true
    },
    Chat = {
        ["Enabled"] = false,
        ["Message"] = {""},
        ["Delay"] = 2
    },
    Misc = {
        ["White Screen"] = false,
        ["Disabled Notify"] = true,
        ["Boots FPS"] = false,
        ["Auto Rejoin"] = true
    }
}
loadstring(game:HttpGet("https://pandadevelopment.net/virtual/file/e50b45018b39ad3e"))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "6",
    title: "GROW A GARDEN Script – Lunor Hub",
    description: "Increases player movement speed.",
    image: "image/lunorhub.jpg",
    code: `loadstring(game:HttpGet('https://lunor.dev/loader'))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "5",
    title: "GROW A GARDEN Script – No Lag Hub",
    description: "Increases player movement speed.",
    image: "image/nolaghub.jpg",
    code: `loadstring(game:HttpGet("https://rawscripts.net/raw/Grow-a-Garden-NoLag-Hub-no-key-38699"))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "4",
    title: "GROW A GARDEN Script – Speed Hub",
    description: "Increases player movement speed.",
    image: "image/speedhub.jpg",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/AhmadV99/Speed-Hub-X/main/Speed%20Hub%20X.lua", true))()`,
    features: ["****"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "3",
    title: "Xero Hub – Blox Fruits Script (No Key)",
    description: "Increases player movement speed.",
    image: "image/xerohub.jpg",
    code: `getgenv().Team = "Marines"
getgenv().Hide_Menu = false
getgenv().Auto_Execute = false
loadstring(game:HttpGet("https://raw.githubusercontent.com/Xero2409/XeroHub/refs/heads/main/main.lua"))()`,
    features: ["No key"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "2",
    title: "DEAD RAILS Script – Skull Hub",
    description: "Increases player movement speed.",
    image: "image/nathub2.jpg",
    code: `loadstring(game:HttpGet('https://raw.githubusercontent.com/hungquan99/SkullHub/main/loader.lua'))()`,
    features: ["No key"],
    steps: ["Copy the script", "Paste into your executor", "Execute"],
    notes: ["Make sure you’re in-game before executing."]
  },
  {
    id: "1",
    title: "DEAD RAILS Script – Nat Hub",
    description: "Increases player movement speed.",
    image: "image/nathub.jpg",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/ArdyBotzz/NatHub/refs/heads/master/NatHub.lua"))();`,
    features: ["No key"],
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
