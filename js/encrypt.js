export class Encrypt {
  constructor(context) {
    this.context = context;
  }

  async encrypt() {
    try {
      const textToEncrypt = document.getElementById("input").value;

      if (textToEncrypt.trim() === "") {
        throw new Error(window.i18next.t("errors.enterDataError"));
      } else if (textToEncrypt.length > 1024) {
        throw new Error(window.i18next.t("errors.maxInputLengthError"));
      }

      this.context.showLoadingIndicator();

      await this.context.keyPromise;

      const key = await crypto.subtle.importKey(
        "raw",
        this.context.keyBytes,
        { name: "AES-CBC" },
        false,
        ["encrypt", "decrypt"]
      );

      const dataToEncrypt = this.context.encoder.encode(textToEncrypt);
      const encryptedData = await crypto.subtle.encrypt(
        {
          name: "AES-CBC",
          iv: this.context.ivBytes,
        },
        key,
        dataToEncrypt
      );

      const encryptedBase64 = btoa(
        String.fromCharCode(...new Uint8Array(encryptedData))
      );

      // Clear timeout to prevent the loading indicator from being hidden
      clearTimeout(this.context.timeout);

      setTimeout(() => {
        document.getElementById("outputText").textContent = encryptedBase64;
        this.context.showSuccessMessage(
          window.i18next.t("success.encryptionSuccess")
        );
        this.context.hideLoadingIndicator();
      }, 1500);
    } catch (err) {
      console.error("Encryption failed:", err);
      this.context.showErrorMessage(
        err.message || window.i18next.t("errors.encryptionFailedError")
      );
      this.context.hideLoadingIndicator();
    }
  }
}
