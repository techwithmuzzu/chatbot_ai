# Simple AI Chat App 💬

Welcome to the **Simple Chat App**! This is a full-stack chat application built with **Flask** (backend), **React** (frontend), and **MongoDB** (database). The app allows users to chat with an AI-powered chatbot (using Mistral via Ollama) and stores chat history for future reference. The AI responses are dynamically typed for a more interactive experience.

---

- This project was developed during my internship.
- Very very Similar to chatGPT but we have used **Mistral model**.
  
---

## Features ✨

- **AI-Powered Chatbot**: Interact with an AI model (Mistral via Ollama) for dynamic responses.
- **Chat History**: View past chats in a sidebar.
- **Dynamic Typing**: AI responses are displayed letter by letter for a realistic feel.
- **Secure MongoDB Integration**: Database connection is secured using environment variables.
- **Responsive Design**: Clean and modern UI with a dark theme.

---

## Tech Stack 🛠️

- **Frontend**: React, Axios
- **Backend**: Flask, Flask-CORS, PyMongo
- **Database**: MongoDB Atlas
- **AI Integration**: Ollama (Mistral model)
- **Environment Management**: `python-dotenv`

---

## Getting Started 🚀

Follow these steps to set up the project locally.

---

### Prerequisites

- Python 3.8+
- Node.js 16+
- MongoDB Atlas account (or local MongoDB instance)
- Ollama installed and running locally (for AI responses)

---

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/simple-chat-app.git
cd simple-chat-app
```

## 2. Install Ollama

Ollama is required to run the Mistral model locally. Follow these steps to install it:

### Download Ollama:
Visit the [Ollama GitHub repository](https://github.com/ollama) and download the latest release for your operating system.

### Install Ollama:
Follow the installation instructions for your OS:
- **Windows**: Run the installer.
- **macOS**: Drag the Ollama app to your Applications folder.
- **Linux**: Use the provided `.deb` or `.rpm` package.

### Start Ollama:
Open a terminal and run:

```bash
ollama serve
```

### Pull the Mistral Model:
In a new terminal, run:

```bash
ollama pull mistral
```

---

## 3. Set Up the Backend

### Navigate to the backend directory:
```bash
cd backend
```

### Create a virtual environment and activate it:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### Install the required Python packages:
```bash
pip install -r requirements.txt
```

### Create a `.env` file in the backend directory and add your MongoDB URI:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.ln25i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

### Run the Flask server:
```bash
python app.py
```
The backend will start at [http://localhost:5000](http://localhost:5000).

---

## 4. Set Up the Frontend

### Navigate to the frontend directory:
```bash
cd ../frontend
```

### Install the required Node.js packages:
```bash
npm install
```

### Start the React development server:
```bash
npm start
```

The frontend will start at [http://localhost:3000](http://localhost:3000).

---

## Running the Application

Ensure the backend (Flask) and frontend (React) servers are running.

Open your browser and go to [http://localhost:3000](http://localhost:3000).

Start chatting with the AI-powered chatbot! 🎉

---

## Contributing 🤝

We welcome contributions from the community! If you'd like to contribute to this project, please follow these steps:

1. **Fork the repository.**
2. **Create a new branch** for your feature or bugfix:
   
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**
    ```bash
    git commit -m "Add your commit message here"
    ```
4. **Push your branch to your forked repository**
    ```bash
    git push origin feature/your-feature-name
    ```
5. **Open a pull request** and describe your changes.

## Acknowledgments 🙏

- **Ollama** for providing the AI model.
- **Flask** and **React** communities for their amazing documentation and support.
- **MongoDB Atlas** for free-tier database hosting.# chatbot_ai
