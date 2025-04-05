# Encryption and Decryption with JavaScript

![encryption decryption](images/image.png)

The Data Encryption and Decryption Tool is a web and cross-platform desktop application developed using JavaScript and Electron that provides secure encryption and decryption functionalities using the AES-CBC (Advanced Encryption Standard - Cipher Block Chaining) algorithm. It supports localization using i18next for multi-language support, enhancing usability across different regions. The application ensures data security by implementing PBKDF2 (Password-Based Key Derivation Function 2) for key derivation and AES-CBC for symmetric encryption.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Building from Source](#building-from-source)
- [Contributing](#contributing)
- [License](#license)

## Overview

The Data Encryption and Decryption Tool is a web and desktop application developed using JavaScript and Electron that provides secure encryption and decryption functionalities using the AES-CBC (Advanced Encryption Standard - Cipher Block Chaining) algorithm. It supports localization using i18next for multi-language support, enhancing usability across different regions. The application ensures data security by implementing PBKDF2 (Password-Based Key Derivation Function 2) for key derivation and AES-CBC for symmetric encryption.

## Features

- **Encryption and Decryption:** Enables users to encrypt plain text messages and decrypt encrypted messages securely using AES-CBC.
- **Secure Key Management:** Implements PBKDF2 for deriving encryption keys from passwords, enhancing security against brute-force attacks.
- **Localization:** Supports multiple languages through i18next, allowing users to interact with the application in their preferred language.
- **Responsive Design:** Built with a responsive design using HTML5, CSS3 (SCSS), and JavaScript, ensuring compatibility across desktop and mobile devices.
- **User Interface:** Provides an intuitive interface with interactive elements such as sliders for dark/light mode selection and language dropdown for localization.
- **Cross-Platform:** Available for Windows, macOS, and Linux platforms.
- **Desktop Application:** Run the application by double-clicking the executable file, no need to open HTML files in browsers.
- **Integration:** Designed to integrate seamlessly into existing systems, demonstrating interoperability and modularity.

## Folder Structure

```
project/
├── electron.js
├── index.html
├── css/
│   ├── style.scss
│   ├── style.css.map
│   ├── style.css
├── js/
│   ├── decrypt.js
│   ├── encrypt.js
│   ├── eventListeners.js
│   ├── keyGen.js
│   ├── localization.js
│   ├── main.js
├── locales/
│   ├── ab.json
│   ├── de.json
│   ├── en.json
│   ├── fr.json
│   ├── it.json
│   ├── ja.json
│   ├── ko.json
│   ├── nl.json
│   ├── pl.json
│   ├── pt.json
│   ├── ru.json
│   ├── tr.json
│   ├── zc.json
│   ├── zt.json
├── images/
│   ├── favicon.ico
├── package.json
├── README.md
├── LICENSE
├── CONTRIBUTING.md
```

## Installation

### Method 1: Download Pre-built Application

1. **Download the Application:**
   - Windows: Download the `.exe` file from the [releases page](https://github.com/vrm-piyush/Encryption-Decryption/releases)
   - macOS: Download the `.dmg` file from the [releases page](https://github.com/vrm-piyush/Encryption-Decryption/releases)
   - Linux: Download the `.AppImage` file from the [releases page](https://github.com/vrm-piyush/Encryption-Decryption/releases)

2. **Install the Application:**
   - Windows: Double-click the `.exe` file
   - macOS: Open the `.dmg` file and drag the application to the Applications folder
   - Linux: Make the `.AppImage` file executable and double-click it

### Method 2: Build from Source

See the [Building from Source](#building-from-source) section below.

## Usage

- **Starting the Application:** Double-click the application icon to start the application.
- **Encrypting Data:** Enter the plain text you wish to encrypt in the input box, select your desired language from the dropdown, and click the "Encrypt" button. The encrypted text will be displayed in the output box.
- **Decrypting Data:** Enter the encrypted text in the input box, select your desired language from the dropdown, and click the "Decrypt" button. The decrypted plain text will be displayed in the output box.
- **Language Selection:** Use the language dropdown to select your preferred language. The interface will update to reflect the selected language.
- **Dark/Light Mode:** Use the slider to toggle between dark and light modes. The interface will update to reflect the selected mode.

## Technologies Used

- **Frontend:** HTML5, CSS3 (SCSS), JavaScript (ES6+)
- **Desktop Framework:** Electron
- **Encryption:** AES-CBC, PBKDF2
- **Localization:** i18next
- **Packaging:** Electron Builder
- **Version Control:** Git, GitHub Actions for CI/CD

## Building from Source

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/vrm-piyush/Encryption-Decryption.git
   ```

2. **Navigate into the Project Directory:**

   ```bash
   cd Encryption-Decryption
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Run the Application in Development Mode:**

   ```bash
   npm start
   ```

5. **Build the Application for Distribution:**

   For all platforms (requires macOS for building macOS applications):
   ```bash
   npm run build -- -mwl
   ```

   For Windows only:
   ```bash
   npm run build -- --win
   ```

   For macOS only (requires macOS):
   ```bash
   npm run build -- --mac
   ```

   For Linux only:
   ```bash
   npm run build -- --linux
   ```

6. **Find the Built Applications:**
   The built applications will be available in the `dist` directory.

## Contributing

Contributions to the project are welcome! Guidelines for contributing code, reporting issues, and submitting pull requests are outlined in the [`CONTRIBUTING.md`](CONTRIBUTING.md) file. The project follows best practices for collaboration and code quality, ensuring a smooth contribution process.

## License

This project is licensed under the MIT License, allowing for free use, modification, and distribution, ensuring openness and transparency for developers and organizations.

---
