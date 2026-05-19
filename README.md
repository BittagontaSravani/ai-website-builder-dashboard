# AI-Powered Live Website Builder Dashboard

A full-stack prototype application showcasing a dynamic website builder workspace featuring a persistent AI assistant chatbot widget. 

## 🚀 Core Features
- **Persistent Memory Logs:** Every user and AI message is instantly structured and permanently logged inside a local database.
- **Live State Reflection:** The AI reads user natural language instructions, processes the intent, updates database records, and triggers dynamic frontend field changes instantly without page reloads.
- **Adaptive Fallbacks:** Implements custom fallback states to handle developer API rate-limiting elegantly.

## 🛠️ Tech Stack & Environment Dependencies
This project uses a modern, lightweight, full-stack architecture ideal for rapid startup MVP deployment:
- **Backend Framework:** Python 3.x with `Flask`
- **AI Integration SDK:** Google GenAI Core library (`google-genai`)
- **Database Architecture:** SQLite3 (Native lightweight local engine)
- **Frontend Core:** Plain HTML5, Modern CSS Variables (Custom dark-gold ecosystem theme), and Vanilla Asynchronous JavaScript (Fetch API)

---

## 💻 How to Install & Run Locally

Follow these quick steps to get the environment running on your machine:

### 1. Clone the Repository
```bash
git clone [https://github.com/YOUR_GITHUB_USERNAME/ai-website-builder-dashboard.git](https://github.com/YOUR_GITHUB_USERNAME/ai-website-builder-dashboard.git)
cd ai-website-builder-dashboard
2. Install Required Environment Dependencies
Open your command prompt or terminal inside the directory and execute:

Bash
pip install Flask google-genai
3. Configure Your Live API Key
Go to Google AI Studio and copy an active free developer API key.

Open the app.py file inside your code editor.

Locate line 9 (GEMINI_API_KEY = "YOUR_GEMINI_API_KEY_HERE") and replace the placeholder text with your real key string inside the quotation marks.

4. Launch the Local Development Server
Run the python runner application file:

Bash
python app.py
5. Open Your Interface
Open your web browser and navigate to the local network port address:

Plaintext
[http://127.0.0.1:5000](http://127.0.0.1:5000)
👑 Testing Instructions for the Demo
Click the golden floating AI circle button situated in the bottom right corner of the workspace dashboard page canvas.

Interact conversationally with the assistant (e.g., type "hi" or "what can you do?").

Issue a direct structural profile change request command, such as:

"Set my display name to Sravani and update my location to Hyderabad"

Notice how the chatbot responds smoothly while the backend processing updates the SQLite fields and highlights the corresponding frontend UI form elements instantly!
