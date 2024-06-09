export class Decrypt {
  constructor(context) {
    this.context = context;
  }

  async decrypt() {
    try {
      const encryptedText = document.getElementById("outputText").textContent;

      if (!encryptedText) {
        throw new Error(window.i18next.t("errors.enterDataError"));
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

      const encryptedData = Uint8Array.from(atob(encryptedText), (c) =>
        c.charCodeAt(0)
      );

      const decryptedData = await window.crypto.subtle.decrypt(
        {
          name: "AES-CBC",
          iv: this.context.ivBytes,
        },
        key,
        encryptedData.buffer
      );

      const decryptedText = this.context.decoder.decode(
        new Uint8Array(decryptedData)
      );

      // Clear timeout to prevent the loading indicator from being hidden
      clearTimeout(this.context.timeout);

      setTimeout(() => {
        document.getElementById("outputText").textContent = decryptedText;
        this.context.showSuccessMessage(
          window.i18next.t("success.decryptionSuccess")
        );
        this.context.hideLoadingIndicator();
      }, 1500);
    } catch (err) {
      console.error("Decryption failed:", err);
      this.context.showErrorMessage(
        window.i18next.t("errors.decryptionFailedError")
      );
      this.context.hideLoadingIndicator();
    }
  }
}
