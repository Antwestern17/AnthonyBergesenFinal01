const secretsButton = document.querySelector("#secrets-button");

function changeButtonText() {
    const loadingMessage = "Loading Kitties... 🐱";
    
    if (secretsButton.textContent !== loadingMessage) {
        secretsButton.textContent = loadingMessage;
        
        setTimeout(() => {
            window.location.href = "pages/secrets.html";
        }, 500);
    }
}

if (secretsButton) {
    secretsButton.addEventListener("click", changeButtonText);
}

// 2. Night Mode Toggle Setup
const themeToggleButton = document.querySelector(".theme-toggle");
const body = document.body;

// Check if night mode was previously enabled when the homepage loads
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('night-mode');
}

// Handle clicking the Magic Switch toggle button
if (themeToggleButton) {
    themeToggleButton.addEventListener("click", () => {
        body.classList.toggle('night-mode');
        
        if (body.classList.contains('night-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
}