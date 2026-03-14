# ChatGPT Message Limiter
<img src="https://github.com/Leewoii/ChatGPT-Anti-Lag/blob/main/icons/icon128.png?raw=true" height="128" width="128" /> 

## Overview
ChatGPT Message Limiter is a browser extension designed to improve performance during long ChatGPT conversations.  
It automatically hides older messages once a selected message limit is reached, reducing the number of rendered elements in the browser and minimizing lag.

The extension works **in real time while chatting**, keeping the interface responsive even in very long conversations.

---

## Features
- Improves ChatGPT performance in long conversations
- Automatically hides older messages
- Reduces browser lag by limiting rendered elements
- Configurable message limit
- Works on Chromium-based browsers

---

## Installation

1. Download the [**latest release**](https://github.com/Leewoii/ChatGPT-Anti-Lag/releases/download/v1.0.0/ChatGPT-Anti-Lag.rar).
2. Extract the downloaded `.rar` file to any folder.
3. Open your **Chromium-based browser** (Chrome, Brave, Edge, Opera, etc.).
4. Go to the **Extensions** page.

   Example:
```
chrome://extensions/
```
5. Enable **Developer Mode** (top right).
6. Click **Load unpacked**.
7. Select the folder where you extracted the extension.

The extension should now be installed.

---

## Usage

1. Go to the **ChatGPT website**.
2. Click the extension icon in your browser.
3. Select a number from **1 to ∞**.

The number represents **how many messages will remain visible in the chat**.

Example:
- **1** → Only the latest 1 message remains visible
- **3** → Only the latest 3 messages remain visible

**Recommended:** Setting the limit to **3** provides a good balance between visibility and performance.

Once the limit is reached, older messages will automatically be hidden.

---

## Notes
- This extension only **hides messages visually** in the browser.
- Messages are **not deleted from the conversation**.
- Designed specifically to improve **ChatGPT UI performance**.

---

## License
This project is licensed under the MIT License – see the LICENSE file for details.
