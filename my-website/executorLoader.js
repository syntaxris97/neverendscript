const executors = [
  {
    id: "1",
    title: "KRNL V669 BEST",
    author: "Skays",
    date: "2025-04-23",
    image: "image/krnl.png",
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
    downloadLink: "https://your-download-link.com"
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
    executor.steps.forEach(step => {
      const li = document.createElement("li");
      li.textContent = step;
      stepsList.appendChild(li);
    });
  }
});
