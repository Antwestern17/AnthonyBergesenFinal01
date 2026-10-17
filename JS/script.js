const secretsButton = document.querySelector("#secrets-button");

function changeButtonText() {
    const loadingMessage = "Loading Kitties... 🐱";
    

    if (secretsButton.textContent !== loadingMessage) {
        
        // Modifies webpage content
        secretsButton.textContent = loadingMessage;
        
        // Takes you to your secrets folder
        setTimeout(() => {
            window.location.href = "pages/secrets.html";
        }, 500);
    }
}

const themeToggleButton = document.querySelector(".theme-toggle");
themeToggleButton.addEventListener("click", () => {
    document.body.classList.toggle("night-mode");
});