export function setupEventListeners(context) {
  document
    .getElementById("encryptButton")
    .addEventListener("click", () => context.encryptInstance.encrypt());
  document
    .getElementById("decryptButton")
    .addEventListener("click", () => context.decryptInstance.decrypt());
  document
    .getElementById("copyButton")
    .addEventListener("click", () => context.copyToClipboard());
  document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
    document.querySelector(".container").classList.toggle("dark-mode");
    document.querySelector(".container").classList.toggle("light-mode");
    document.querySelector("textarea").classList.toggle("dark-mode");
    document.querySelector("textarea").classList.toggle("light-mode");
    document.querySelectorAll("button").forEach((button) => {
      button.classList.toggle("dark-mode");
      button.classList.toggle("light-mode");
    });
    document.querySelector(".result").classList.toggle("dark-mode");
    document.querySelector(".result").classList.toggle("light-mode");
    document.querySelector(".error-message").classList.toggle("dark-mode");
    document.querySelector(".error-message").classList.toggle("light-mode");
    document.querySelector(".dark-mode-toggle").classList.toggle("dark-mode");
    document.querySelector(".dark-mode-toggle").classList.toggle("light-mode");
    document.getElementById("mainHeading").classList.toggle("dark-mode");
    document.getElementById("mainHeading").classList.toggle("light-mode");
  });

  document
    .getElementById("languageSelector")
    .addEventListener("change", (event) => {
      const selectedLanguage = event.target.value;
      window.i18next.changeLanguage(selectedLanguage);
    });
}
