// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Script cards hover effect
  const scriptCards = document.querySelectorAll(".script-card")

  scriptCards.forEach((card) => {
    card.addEventListener("click", function () {
      // In a real implementation, this would navigate to the script details page
      console.log("Script card clicked:", this.querySelector("h3").textContent)
    })
  })

  // Search functionality
  const searchBox = document.querySelector(".search-box input")
  const searchBtn = document.querySelector(".search-btn")

  searchBtn.addEventListener("click", () => {
    performSearch()
  })

  searchBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      performSearch()
    }
  })

  function performSearch() {
    const searchTerm = searchBox.value.trim()
    if (searchTerm) {
      // In a real implementation, this would perform an actual search
      console.log("Searching for:", searchTerm)
      // Simulate search by showing an alert
      alert(`Searching for: ${searchTerm}`)
    }
  }

  // Pagination functionality
  const paginationLinks = document.querySelectorAll(".pagination-controls a")

  paginationLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all links
      paginationLinks.forEach((l) => l.classList.remove("active"))

      // Add active class to clicked link
      this.classList.add("active")

      // In a real implementation, this would load the next page of results
      console.log("Page clicked:", this.textContent)
    })
  })

  // Simulate loading state (like in the second screenshot)
  function simulateLoading() {
    const loadingOverlay = document.createElement("div")
    loadingOverlay.className = "loading-overlay"
    loadingOverlay.innerHTML = `
            <div class="loading-content">
                <p>Checking your browser before accessing.</p>
                <p>Just a moment...</p>
                <div class="spinner"></div>
            </div>
        `

    document.body.appendChild(loadingOverlay)

    // Remove the loading overlay after 2 seconds
    setTimeout(() => {
      loadingOverlay.style.opacity = "0"
      setTimeout(() => {
        document.body.removeChild(loadingOverlay)
      }, 500)
    }, 2000)
  }

  // Add loading overlay styles
  const style = document.createElement("style")
  style.textContent = `
        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s;
        }
        
        .loading-content {
            text-align: center;
        }
        
        .spinner {
            margin: 20px auto;
            width: 50px;
            height: 50px;
            border: 3px solid rgba(78, 84, 200, 0.3);
            border-radius: 50%;
            border-top-color: #4e54c8;
            animation: spin 1s ease-in-out infinite;
        }
        
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `

  document.head.appendChild(style)

  // Uncomment the line below to simulate the loading screen on page load
  // simulateLoading();

  // Explore Scripts button functionality
  const exploreBtn = document.querySelector(".btn-primary")

  exploreBtn.addEventListener("click", () => {
    // In a real implementation, this would navigate to the scripts page
    window.scrollTo({
      top: document.querySelector(".scripts-grid").offsetTop - 100,
      behavior: "smooth",
    })
  })
})
