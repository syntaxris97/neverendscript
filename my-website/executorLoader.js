const executors = [
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
    downloadLink: "https://zentakmovies.pages.dev/" // ✅ Replace with your actual MediaFire or other link
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
    downloadLink: "https://phcorner.org/threads/my-top-5-super-useful-browser-extension-tools.2279431/"
  }
];

// Load data when page loads
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const executor = executors.find(e => e.id === id);

  if (executor) {
    document.getElementById("title").innerText = executor.title;
    document.getElementById("author-date").innerText = `${executor.date} by ${executor.author}`;
    document.getElementById("executor-image").src = executor.image;
    document.getElementById("description").innerText = executor.description;
    document.getElementById("download-btn").href = executor.downloadLink;

    const stepsList = document.getElementById("steps");
    stepsList.innerHTML = ""; // Clear any existing content
    executor.steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    });
  } else {
    document.body.innerHTML = "<h2 style='text-align:center; margin-top: 50px;'>Executor not found.</h2>";
  }
});
