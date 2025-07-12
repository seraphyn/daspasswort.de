function generatePassword() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?";
    let password = "";
    for (let i = 0; i < 14; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .catch(() => alert("Fehler beim Kopieren des Passworts."));
}

document.addEventListener("DOMContentLoaded", () => {
    const passwordElement = document.getElementById("password");
    const copyBtn = document.getElementById("copy-btn");

    // Generiere und zeige das Passwort
    const password = generatePassword();
    passwordElement.textContent = password;

    // Kopiere Passwort in die Zwischenablage
    copyBtn.addEventListener("click", () => copyToClipboard(password));
});
