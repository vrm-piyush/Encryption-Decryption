export function initializeLocalization(context) {
  window.i18next
    .use(window.i18nextHttpBackend)
    .use(window.i18nextBrowserLanguageDetector)
    .init({
      debug: true,
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
      backend: {
        loadPath: "locales/{{lng}}.json",
      },
    })
    .then(() => {
      document
        .getElementById("languageSelector")
        .addEventListener("change", (event) => {
          const selectedLanguage = event.target.value;
          window.i18next.changeLanguage(selectedLanguage, (err, t) => {
            if (err) return console.error(err);
            updateContent();
          });
        });

      updateContent();
      i18next.on("languageChanged", () => {
        updateContent();
      });
    })
    .catch((error) => {
      console.error("Failed to initialize i18next:", error);
    });

  function updateContent() {
    document.getElementById("mainHeading").textContent =
      window.i18next.t("labels.mainHeading");
    document.getElementById("enterDataLabel").textContent = window.i18next.t(
      "labels.enterDataLabel"
    );
    document
      .getElementById("input")
      .setAttribute("placeholder", window.i18next.t("labels.inputPlaceholder"));
    document.getElementById("encrypt").textContent = window.i18next.t(
      "labels.encryptButtonLabel"
    );
    document.getElementById("decrypt").textContent = window.i18next.t(
      "labels.decryptButtonLabel"
    );
    document.getElementById("copy").textContent = window.i18next.t(
      "labels.copyButtonLabel"
    );
    document.getElementById("processingMessage").textContent = window.i18next.t(
      "labels.processingMessage"
    );
    document.getElementById("errorMessage").textContent = window.i18next.t(
      "errors.errorMessage"
    );
    document.getElementById("successMessage").textContent = window.i18next.t(
      "success.successMessage"
    );
    document.getElementById("darkModeToggleLabel").textContent =
      window.i18next.t("labels.darkModeToggleLabel");
    document.getElementById("languageSelector").value = window.i18next.language;
  }
}
