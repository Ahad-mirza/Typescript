
# Setting Up TypeScript on Your Machine ⚙️

## 📜 Table of Contents
- [Installing Node.js](#installing-nodejs)
- [Installing TypeScript](#installing-typescript)
- [Verifying Installation](#verifying-installation)
- [Setting Up Visual Studio Code](#setting-up-visual-studio-code)

---

## 🖥️ Installing Node.js
To use TypeScript, we first need to install **Node.js**, which comes with **npm (Node Package Manager)**. Follow these steps:

1. Visit the official [Node.js website](https://nodejs.org/).
2. Download the **LTS (Long-Term Support)** version for better stability.
3. Follow the installation instructions for your operating system.
4. Once installed, open a terminal and verify the installation:
   ```bash
   node -v
   ```
   This should display the installed Node.js version.

---

## 📥 Installing TypeScript
Once Node.js is installed, you can install TypeScript globally using npm:

```bash
npm install -g typescript
```

This installs the TypeScript compiler (`tsc`) globally, so you can use it anywhere on your system.

---

## 🔍 Verifying Installation
To check if TypeScript is installed correctly, run the following command:

```bash
tsc -v
```

This should display the installed TypeScript version. If you see a version number, TypeScript is installed successfully!

---

## 🛠️ Setting Up Visual Studio Code
For a better coding experience, we recommend using **Visual Studio Code (VS Code)**:

1. Download and install [VS Code](https://code.visualstudio.com/).
2. Open VS Code and install the **TypeScript extension** from the Extensions Marketplace.
3. Open a terminal in VS Code and ensure TypeScript is accessible:
   ```bash
   tsc -v
   ```

Now, you're ready to start coding with TypeScript! 🚀

---

