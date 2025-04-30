document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const themeToggle = document.getElementById("theme-toggle")
  const fullscreenBtn = document.getElementById("fullscreen-btn")
  const codeEditor = document.getElementById("code-editor")
  const createPasteBtn = document.getElementById("create-paste-btn")
  const syntaxSelect = document.getElementById("syntax")
  const loginBtn = document.querySelector(".login-btn")
  const signupBtn = document.querySelector(".signup-btn")
  const loginModal = document.getElementById("login-modal")
  const signupModal = document.getElementById("signup-modal")
  const closeModalBtns = document.querySelectorAll(".close-modal")
  const showSignupLink = document.getElementById("show-signup")
  const showLoginLink = document.getElementById("show-login")
  const loginForm = document.getElementById("login-form")
  const signupForm = document.getElementById("signup-form")
  const passwordProtectCheckbox = document.getElementById("password-protect")
  const burnAfterReadCheckbox = document.getElementById("burn-after-read")

  // Theme Toggle
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")
    const icon = themeToggle.querySelector("i")
    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
    } else {
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
    }
  })

  // Fullscreen Toggle
  fullscreenBtn.addEventListener("click", () => {
    const editorContainer = document.querySelector(".code-editor-container")
    if (!document.fullscreenElement) {
      if (editorContainer.requestFullscreen) {
        editorContainer.requestFullscreen()
      } else if (editorContainer.mozRequestFullScreen) {
        editorContainer.mozRequestFullScreen()
      } else if (editorContainer.webkitRequestFullscreen) {
        editorContainer.webkitRequestFullscreen()
      } else if (editorContainer.msRequestFullscreen) {
        editorContainer.msRequestFullscreen()
      }
      fullscreenBtn.querySelector("i").classList.remove("fa-expand")
      fullscreenBtn.querySelector("i").classList.add("fa-compress")
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
      fullscreenBtn.querySelector("i").classList.remove("fa-compress")
      fullscreenBtn.querySelector("i").classList.add("fa-expand")
    }
  })

  // Handle fullscreen change
  document.addEventListener("fullscreenchange", handleFullscreenChange)
  document.addEventListener("webkitfullscreenchange", handleFullscreenChange)
  document.addEventListener("mozfullscreenchange", handleFullscreenChange)
  document.addEventListener("MSFullscreenChange", handleFullscreenChange)

  function handleFullscreenChange() {
    const icon = fullscreenBtn.querySelector("i")
    if (document.fullscreenElement) {
      icon.classList.remove("fa-expand")
      icon.classList.add("fa-compress")
    } else {
      icon.classList.remove("fa-compress")
      icon.classList.add("fa-expand")
    }
  }

  // Syntax Highlighting
  syntaxSelect.addEventListener("change", function () {
    const selectedSyntax = this.value
    codeEditor.setAttribute("data-language", selectedSyntax)

    // Apply syntax highlighting if there's content
    if (codeEditor.value.trim()) {
      highlightCode()
    }
  })

  // Function to highlight code (placeholder for actual implementation)
  function highlightCode() {
    // This would be implemented with a proper syntax highlighting library
    console.log("Highlighting code with language:", syntaxSelect.value)
  }

  // Create Paste Button
  createPasteBtn.addEventListener("click", () => {
    const title = document.getElementById("paste-title").value || "Untitled"
    const code = codeEditor.value
    const syntax = syntaxSelect.value
    const expiration = document.getElementById("expiration").value
    const exposure = document.getElementById("exposure").value
    const burnAfterRead = burnAfterReadCheckbox.checked
    const passwordProtect = passwordProtectCheckbox.checked

    if (!code.trim()) {
      alert("Please enter some code before creating a paste.")
      return
    }

    // Simulate paste creation
    console.log("Creating paste with the following details:")
    console.log("Title:", title)
    console.log("Syntax:", syntax)
    console.log("Expiration:", expiration)
    console.log("Exposure:", exposure)
    \
        console.log  expiration)
    console.log("Exposure:", exposure)
    console.log("Burn After Read:", burnAfterRead)
    console.log("Password Protected:", passwordProtect)

    // In a real implementation, this would send data to the server
    alert("Paste created successfully!")

    // For demo purposes, we'll simulate a redirect
    setTimeout(() =>
    alert("Redirecting to your new paste...")
    , 1000)
  })

  // Modal Handling
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    loginModal.style.display = "flex"
  })

  signupBtn.addEventListener("click", (e) => {
    e.preventDefault()
    signupModal.style.display = "flex"
  })

  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      loginModal.style.display = "none"
      signupModal.style.display = "none"
    })
  })

  showSignupLink.addEventListener("click", (e) => {
    e.preventDefault()
    loginModal.style.display = "none"
    signupModal.style.display = "flex"
  })

  showLoginLink.addEventListener("click", (e) => {
    e.preventDefault()
    signupModal.style.display = "none"
    loginModal.style.display = "flex"
  })

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = "none"
    }
    if (e.target === signupModal) {
      signupModal.style.display = "none"
    }
  })

  // Form Submissions
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = document.getElementById("login-username").value
    const password = document.getElementById("login-password").value
    const rememberMe = document.getElementById("remember-me").checked

    // Simulate login
    console.log("Login attempt with:", username)
    console.log("Remember me:", rememberMe)

    alert("Login successful!")
    loginModal.style.display = "none"
  })

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const username = document.getElementById("signup-username").value
    const email = document.getElementById("signup-email").value
    const password = document.getElementById("signup-password").value
    const confirmPassword = document.getElementById("signup-confirm-password").value
    const agreeTerms = document.getElementById("agree-terms").checked

    if (password !== confirmPassword) {
      alert("Passwords do not match!")
      return
    }

    if (!agreeTerms) {
      alert("You must agree to the Terms of Service and Privacy Policy")
      return
    }

    // Simulate signup
    console.log("Signup attempt with:", username, email)

    alert("Account created successfully!")
    signupModal.style.display = "none"
  })

  // Tab key handling in code editor
  codeEditor.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
      e.preventDefault()
      const start = this.selectionStart
      const end = this.selectionEnd

      // Insert tab at cursor position
      this.value = this.value.substring(0, start) + "    " + this.value.substring(end)

      // Move cursor after the inserted tab
      this.selectionStart = this.selectionEnd = start + 4
    }
  })

  // Initialize with placeholder text
  codeEditor.value =
    '// Welcome to ScriptPasteBin!\n// Select a syntax and start typing your code here...\n\nfunction helloWorld() {\n    console.log("Hello, World!");\n    return "Welcome to ScriptPasteBin!";\n}\n\nhelloWorld();'
})
