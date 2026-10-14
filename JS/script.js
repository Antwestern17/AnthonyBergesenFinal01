// header
const creatorName = "Anthony Bergesen";

const headerElement = document.getElementById("site-header");

headerElement.textContent = creatorName;

// secret button
const secretsButton = document.getElementById('secrets-button');
secretsButton.addEventListener('click', function () {
    // Check what the button currently says
    if (secretsButton.innerText === "Reveal Secrets") {
        // If it says Reveal Secrets, change it to the kitty room
        secretsButton.innerText = "secret kitty room";
    } else {
        // If it already says secret kitty room, change it back!
        secretsButton.innerText = "Reveal Secrets";
    }
});
