

# Setting up Debugging in VS Code for TypeScript:

To effectively debug TypeScript applications in Visual Studio Code, you'll need to configure both the **`launch.json`** and the **`tsconfig.json`** files, and ensure that TypeScript is being compiled correctly. Here's a clear guide:

---

### 1. **Setting up TypeScript Compilation** 🛠️

First, ensure you have a **TypeScript configuration file (`tsconfig.json`)** in your project, which tells VS Code how to compile TypeScript into JavaScript.

**Steps:**
- In your project root folder, create a `tsconfig.json` file if it doesn't exist already.
- Add the following content:

```json
{
  "compilerOptions": {
    "target": "ES6",               // Targeting ES6 JavaScript
    "module": "commonjs",          // Module system (CommonJS for Node.js)
    "outDir": "./dist",            // Output directory for compiled JS files
    "rootDir": "./src",            // Root directory for TypeScript source files
    "sourceMap": true              // Enable source maps for debugging
  },
  "include": [
    "src/**/*.ts"                   // Include all TypeScript files in the src folder
  ],
  "exclude": [
    "node_modules"                  // Exclude node_modules from compilation
  ]
}
```

This file ensures TypeScript will compile your `.ts` files in the `src` folder into `.js` files in the `dist` folder.

---

### 2. **Creating `launch.json` for Debugging** 🎯

Now, let's configure **VS Code's debugger**. You'll need to create a **`launch.json`** file to tell VS Code how to run and debug your TypeScript application.

**Steps:**
1. Open the **Debug Sidebar** in VS Code (`Ctrl+Shift+D` or click on the "Run and Debug" icon).
2. Click on **create a launch.json file** and choose **Node.js** as the environment.
3. Customize the `launch.json` as follows:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch TypeScript Program",    // Custom name for this configuration
      "skipFiles": ["<node_internals>/**"],   // Skip internal Node.js files
      "program": "${workspaceFolder}/dist/index.js",  // Path to compiled JavaScript file
      "preLaunchTask": "tsc: build - tsconfig.json",  // Compile TypeScript before launch
      "outFiles": [
        "${workspaceFolder}/dist/**/*.js"      // Location of the compiled JS files
      ]
    }
  ]
}
```

### Key Fields in `launch.json`:
- **`type`:** `"node"` specifies that you are debugging a Node.js application.
- **`request`:** `"launch"` tells VS Code to start the program and debug it.
- **`program`:** Points to the entry point of the compiled JavaScript file (not the TypeScript file, but the `.js` file created after compilation).
- **`preLaunchTask`:** Tells VS Code to run the TypeScript compiler before launching the program. This uses the task defined below to run `tsc` (TypeScript compiler).
- **`outFiles`:** Points to the location of the compiled `.js` files.

---

### 3. **Configuring `tasks.json` to Build TypeScript** ⚙️

You’ll need to configure **tasks.json** so that VS Code can automatically compile your TypeScript code before launching the debugger.

**Steps:**
1. In the `.vscode` folder, create a file called **`tasks.json`** if it doesn’t exist.
2. Add the following content:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "tsc: build - tsconfig.json",      // Task name
      "type": "typescript",
      "tsconfig": "tsconfig.json",                // Path to the tsconfig.json file
      "problemMatcher": ["$tsc"],                 // Match TypeScript errors
      "group": {
        "kind": "build",
        "isDefault": true                         // Set this task as the default build task
      }
    }
  ]
}
```

This tells VS Code to run the `tsc` command before debugging, ensuring that the TypeScript code is compiled into JavaScript before execution.

---

### 4. **Starting the Debugger** 🚀

Now you’re all set to debug!

1. **Set a breakpoint** in your TypeScript code by clicking to the left of the line number.
2. Press `F5` or click the **Run and Debug** button to start debugging.

VS Code will:
1. Compile your TypeScript code (using the `tsc` command from `tasks.json`).
2. Launch the application as specified in the `launch.json` configuration.
3. Stop at the breakpoint you set, and you can now use the **debug controls** (e.g., Step Over, Step Into, etc.) to inspect the execution of your code.

---

### Additional Notes:

- **Source Maps:** Make sure `"sourceMap": true` is set in your `tsconfig.json`. This allows you to map the compiled JavaScript back to the original TypeScript source during debugging.
- **Out Directory (`outDir`):** Set `"outDir": "./dist"` to ensure TypeScript generates JavaScript files in a specific folder.
- **Run `tsc` manually:** If you don't want to use the pre-launch task, you can manually run `tsc` from the terminal to compile your TypeScript before debugging.

---

