const executors = [
  {
    id: "3",
    title: "KRNL V669 BEST",
    author: "Skays",
    date: "2025-04-23",
    image: "image/fluxurexecutor.png",
    description: "KRNL Executor Mobile and Emulator (FREE)",
    steps: [
      "Click DOWNLOAD button",
      "Complete the task",
      "Download file",
      "Install file",
      "Get Key",
      "Paste the script",
      "Run and done"
    ],
    downloadLink: "https://scriptpastebin.com/" // Replace with actual link
  },
  {
    id: "1",
    title: "KRNL V669 BEST",
    author: "Skays",
    date: "2025-04-23",
    image: "image/fluxurexecutor.png",
    description: "KRNL Executor Mobile and Emulator (FREE)",
    steps: [
      "Click DOWNLOAD button",
      "Complete the task",
      "Download file",
      "Install file",
      "Get Key",
      "Paste the script",
      "Run and done"
    ],
    downloadLink: "https://myflixerhd.tv/" // Replace with actual link
  },
  {
    id: "2",
    title: "Fluxus Mobile Executor",
    author: "Skays",
    date: "2025-04-30",
    image: "image/fluxurexecutor.png",
    description: "Fluxus is a powerful mobile Roblox executor.",
    steps: [
      "Click DOWNLOAD button",
      "Allow permissions",
      "Install the APK",
      "Open app and inject",
      "Use scripts safely"
    ],
    downloadLink: "https://www.mediafire.com/file/gdff4vk2skb7z86/ML+MOD+MENU+2025+NO+KEY.apk/file"
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
