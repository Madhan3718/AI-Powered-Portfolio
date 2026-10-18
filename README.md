# Madan AI Portfolio 🤖

An interactive, AI-powered portfolio for me.
Static portfolios are *so last season* — this is an **AI-powered conversation** tailored to whoever's visiting.

💬 **Ask me anything** — my AI avatar responds instantly.

---

## 🌟 What Can You Ask?

- 🧠 **Tech Recruiter?** → Ask about my tech stack & project results.
- 💻 **Developer?** → Dive into my code, logic, and problem-solving mindset.
- 🧑‍🤝‍🧑 **Friend or Family?** → See what I've been building lately.
- 🌍 **General questions?** → The AI answers like a normal helpful assistant too.

---

## 🚀 Live Demo

👉 **[https://madan-dev.netlify.app/](https://madan-ai.netlify.app/)**
*What will you ask first?*

---

## 🛠 Tech Stack

- **Node.js** (v18 or higher)
- **npm** (Package Manager)
- **Groq API** (AI chat functionality, powered by LLMs)
- **Vite** (Build tool)
- **React + TypeScript** (Frontend framework)
- **Tailwind CSS** (Styling)

## 🔧 Environment Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd madan-ai-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```bash
   # Groq API Key
   # Get your API key from: https://console.groq.com/keys
   VITE_GROQ_API_KEY=your_groq_api_key_here
   ```

   **Security Note:** Never upload or commit your `.env` file. It contains a private Groq API key and must stay on your computer. The repository includes `.env.example` as a safe template; copy it to `.env` only for local use and replace the placeholder with your key.

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173`

## 🔐 Security

This project uses environment variables to securely store API keys. The `.env` file is automatically ignored by Git to prevent accidental exposure of sensitive credentials.
