const executors = [
  {
    id: "6",
    title: "DELTA V675 BEST",
    author: "reaperscripts…",
    date: "2025-06-03",
    image: "image/deltaexe.jpg",
    description: "DELTA Executor Mobile and Emulator (FREE)",
    steps: [
      "Click DOWNLOAD button",
      "Complete the task",
      "Download file",
      "Install file",
      "Get Key",
      "Paste the script",
      "Run and done"
    ],
    downloadLink: "https://www.mediafire.com/file/4mmopck1m3qc7fs/Delta-2.675.715.apk/file"
  },
  {
    id: "5",
    title: "VEGA X V674",
    author: "reaperscripts…",
    date: "2025-06-03",
    image: "image/vegaxexe.jpg",
    description: "VEGA X Executor Mobile and Emulator (FREE)",
    steps: [
      "Click DOWNLOAD button",
      "Complete the task",
      "Download file",
      "Install file",
      "Get Key",
      "Paste the script",
      "Run and done"
    ],
    downloadLink: "https://www.mediafire.com/file/oii8wt2zkvkgr96/Vega-X+674.apk/file"
  },
  {
    id: "4",
    title: "CODEX V675",
    author: "reaperscripts…",
    date: "2025-06-03",
    image: "image/codexexe.jpg",
    description: "CODEX Executor Mobile and Emulator (FREE)",
    steps: [
      "Click DOWNLOAD button",
      "Complete the task",
      "Download file",
      "Install file",
      "Get Key",
      "Paste the script",
      "Run and done"
    ],
    downloadLink: "https://www.mediafire.com/file/26y4geu9v3dk9ul/Codex_v2.675.apk/file"
  },
  {
    id: "1",
    title: "CRYPTIC V674",
    author: "reaperscripts…",
    date: "2025-06-03",
    image: "image/crypticexe.jpg",
    description: "CRYPTIC Executor Mobile and Emulator (FREE)",
    steps: [
      "Click DOWNLOAD button",
      "Complete the task",
      "Download file",
      "Install file",
      "Get Key",
      "Paste the script",
      "Run and done"
    ],
    downloadLink: "https://www.mediafire.com/file/rruut5uxog8hf59/Cryptic+2.674.2789+APK.apk/file"
  },
  {
    id: "2",
    title: "FLUXUS V673",
    author: "shower head…",
    date: "2025-05-27",
    image: "image/fluxusexe.jpg",
    description: "FLUXUS Executor Mobile and Emulator",
    steps: [
      "Click DOWNLOAD button",
      "Complete the task",
      "Download file",
      "Install file",
      "Get Key",
      "Paste the script",
      "Run and done"
    ],
    downloadLink: "https://www.mediafire.com/file/bgm4rz0tow6ieuz/Fluxus+673.apk/file"
  },
  {
    id: "3",
    title: "KRNL V673",
    author: "valentinodev…",
    date: "2025-5-22",
    image: "image/krnlexe.jpg",
    description: "KRNL is a powerful mobile Roblox executor.",
    steps: [
      "Click DOWNLOAD button",
      "Allow permissions",
      "Install the APK",
      "Open app and inject",
      "Use scripts safely"
    ],
    downloadLink: "https://www.mediafire.com/file/vfoum72vv4hoajv/krnl_release_2.673.710_2025.5.17_26.apk/file"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const executor = executors.find(e => e.id === id);

  if (executor) {
    // Fill content on the page
    document.getElementById("title").innerText = executor.title;
    document.getElementById("author-date").innerText = `${executor.date} by ${executor.author}`;
    document.getElementById("executor-image").src = executor.image;
    document.getElementById("description").innerText = executor.description;
    document.getElementById("download-btn").href = executor.downloadLink;

    const stepsList = document.getElementById("steps");
    stepsList.innerHTML = "";
    executor.steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    });

    // Handle "Copy Download Link" button
    const copyBtn = document.getElementById("copyLinkBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(executor.downloadLink).then(() => {
          copyBtn.textContent = "Link Copied!";
          setTimeout(() => {
            copyBtn.textContent = "Copy Download Link";
          }, 2000);
        }).catch(() => {
          alert("Failed to copy link.");
        });
      });
    }
  } else {
    document.body.innerHTML = "<h2 style='text-align:center; margin-top: 50px;'>Executor not found.</h2>";
  }
});
