# Online Code Editor & Compiler

A modern, user-friendly online code editor and compiler designed to support multiple programming languages, including JavaScript, C++, and Python. This platform enables users to write, execute, and test code directly in their browsers, offering seamless integration with features like dynamic input handling and real-time output.

---

## Key Features

- **Multi-language Support**: Write and execute code in popular languages like JavaScript, C++, and Python.  
- **Real-time Output**: Instantly view code execution results within the editor.  
- **Dynamic Input Handling**: Provide runtime inputs via a dedicated input box, particularly useful for languages like Python.  
- **Monaco Editor Integration**: Leverage a robust editor with syntax highlighting, auto-completion, and intelligent code suggestions.  
- **Dark Mode**: Enjoy a sleek, dark theme for a comfortable coding experience.  
- **Secure Server Execution**: Powered by an Express server, ensuring efficient and secure handling of code execution.  
- **Cross-Origin Support (CORS)**: Enables smooth interaction between the front-end and back-end.  

---

## Getting Started

### Prerequisites
Ensure the following software is installed:  
- **Node.js** (v12 or higher)  
- **npm** (v6 or higher)  

### Installation Steps

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/ashishjha2462/online-code-editor.git
   cd online-code-editor
   ```

2. **Install Dependencies**:  
   ```bash
   npm install
   ```

3. **Run the Application**:  
   To run both the client and server concurrently:  
   ```bash
   npm run dev
   ```  
   Alternatively, run them separately:  
   **Start the server**:  
   ```bash
   npm run server
   ```  
   **Start the client**:  
   ```bash
   npm run client
   ```

---

## Project Structure

```
online-code-editor/
│
├── public/               # Static assets and main HTML file
│
├── src/                  # React front-end source
│   ├── CodeEditor.js     # Core editor component
│   ├── App.js            # Main application entry point
│
├── server.js             # Express server for code execution
├── package.json          # Project metadata and dependencies
├── .gitignore            # Files to ignore in Git
└── README.md             # Project documentation
```

---

## Usage Guide

1. **Select Language**: Choose your desired language from the dropdown menu.  
2. **Write Code**: Use the Monaco Editor to write and edit your code.  
3. **Provide Input**: If required, enter runtime inputs in the provided input box.  
4. **Run Code**: Click the "Run" button to execute your program. The output will appear below the editor.

**Example** (Python):  
```python
name = input("Enter your name: ")
print(f"Hello, {name}!")
```  
Input: `John`  
Output: `Hello, John!`

---

## Dependencies

This project utilizes the following libraries and tools:  
- **Express**: Server-side logic and routing  
- **VM2**: Secure sandboxing for executing JavaScript  
- **Monaco Editor**: Feature-rich code editing (powers VS Code)  
- **Nodemon**: Automatically restarts the server during development  
- **Concurrently**: Allows multiple npm scripts to run simultaneously  
- **Body-Parser**: Parses incoming request bodies  
- **CORS**: Enables secure cross-origin requests  

Install the required packages with:  
```bash
npm install
npm install --save-dev nodemon concurrently
```

---

## Contributing

Contributions are welcome! To contribute:  
1. **Fork the repository**.  
2. **Create a new branch**:  
   ```bash
   git checkout -b feature-branch
   ```  
3. **Commit your changes**:  
   ```bash
   git commit -m "Add feature"
   ```  
4. **Push the branch**:  
   ```bash
   git push origin feature-branch
   ```  
5. **Open a Pull Request**.

---

## Acknowledgements
- **Node.js**  
- **React**  
- **Monaco Editor**  
- **Express**  
- **VM2**  
- **Nodemon**  
- **Concurrently**  

---

## Contact

For inquiries or support, reach out to:  
**ashish.jha.2462@gmail.com**
