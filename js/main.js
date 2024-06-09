import {
  generateSecurePassword,
  generateSecureSalt,
  generateKey,
} from "./keyGen.js";
import { Encrypt } from "./encrypt.js";
import { Decrypt } from "./decrypt.js";
import { setupEventListeners } from "./eventListeners.js";
import { initializeLocalization } from "./localization.js";

class EncryptDecrypt {
  constructor() {
    // Generate a secure password
    this.password = generateSecurePassword();

    // Encoder and decoder instances
    this.encoder = new TextEncoder();
    this.decoder = new TextDecoder();

    // Generate a secure salt
    this.salt = generateSecureSalt();

    // Key derivation parameters
    this.iterations = 100000;
    this.keyLength = 256;
    this.ivLength = 128;

    // Generate encryption key and IV
    this.keyPromise = generateKey(this);

    // Setup classes for encryption and decryption
    this.encryptInstance = new Encrypt(this);
    this.decryptInstance = new Decrypt(this);

    // Setting up event listeners
    setupEventListeners(this);

    // Initialize i18next for localization
    initializeLocalization(this);
  }

  async copyToClipboard() {
    // Copy encrypted/decrypted text to clipboard
    const outputText = document.getElementById("outputText");

    if (!outputText.textContent) {
      this.showErrorMessage(
        window.i18next.t("errors.copyToClipboardEmptyError")
      );
      return;
    }

    try {
      await navigator.clipboard.writeText(outputText.textContent);
      this.showSuccessMessage(
        window.i18next.t("success.copyToClipboardSuccess")
      );
    } catch (err) {
      console.error("Failed to copy:", err);
      this.showErrorMessage(window.i18next.t("errors.copyToClipboardError"));
    }
  }

  showLoadingIndicator() {
    document.getElementById("loadingIndicator").style.display = "block";
  }

  hideLoadingIndicator() {
    document.getElementById("loadingIndicator").style.display = "none";
  }

  showSuccessMessage(message) {
    // Clear any existing timeout
    clearTimeout(this.successTimeout);

    // Display success message for 3 seconds
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = message;
    successMessage.hidden = false;

    // Set new timeout
    this.successTimeout = setTimeout(() => {
      successMessage.hidden = true;
    }, 3000);
  }

  showErrorMessage(message) {
    // Clear any existing timeout
    clearTimeout(this.errorTimeout);

    // Display error message for 3 seconds
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorMessage.hidden = false;

    // Set new timeout
    this.errorMessage = setTimeout(() => {
      errorMessage.hidden = true;
    }, 3000);
  }
}

window.onload = () => {
  new EncryptDecrypt();
};

//  In the above code, we have created a class  EncryptDecrypt  that initializes the encryption and decryption classes, sets up event listeners, and initializes i18next for localization. The  EncryptDecrypt  class is instantiated when the window loads.
//  The  setupEventListeners  function is defined in the  eventListeners.js  file, which is shown below:
//  Path: js/eventListeners.js
