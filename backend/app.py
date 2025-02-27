from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
import requests
from dotenv import load_dotenv
import os

load_dotenv()
app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication


# Connect to MongoDB Atlas
MONGO_URI = os.getenv("MONGO_URI")
client = MongoClient(MONGO_URI)
db = client["chatdb"]
chatbot_collection = db["chatbot"]

# Ollama API endpoint
OLLAMA_API_URL = "http://localhost:11434/api/generate"

@app.route("/chat", methods=["POST"])
def chat():
    user_input = request.json.get("message")

    # Generate response using Ollama Mistral
    payload = {
        "model": "mistral",  # Specify the model you want to use
        "prompt": user_input,
        "stream": False,  # Set to False to get a single response
    }
    response = requests.post(OLLAMA_API_URL, json=payload)

    if response.status_code == 200:
        ai_response = response.json().get("response")
    else:
        ai_response = "Sorry, I couldn't generate a response."

    # Save user input and AI response to MongoDB
    chat_entry = {
        "user_input": user_input,
        "ai_response": ai_response,
    }
    try:
        # Insert the chat entry into the "chatbot" collection
        result = chatbot_collection.insert_one(chat_entry)
        if result.inserted_id:
            print("Data saved to MongoDB with ID:", result.inserted_id)
        else:
            print("Failed to save data to MongoDB.")
    except Exception as e:
        print("Error saving to MongoDB:", e)

    return jsonify({"response": ai_response})

@app.route("/chat-titles", methods=["GET"])
def get_chat_titles():
    try:
        # Retrieve only the chat titles (first user input) from the "chatbot" collection
        chat_titles = list(chatbot_collection.find({}, {"_id": 0, "user_input": 1}))
        return jsonify(chat_titles)
    except Exception as e:
        print("Error retrieving chat titles:", e)
        return jsonify({"error": "Failed to retrieve chat titles"}), 500
    
@app.route("/chat-history", methods=["GET"])
def get_chat_history():
    try:
        # Retrieve all chat entries from the "chatbot" collection
        chat_history = list(chatbot_collection.find({}, {"_id": 0}))
        return jsonify(chat_history)
    except Exception as e:
        print("Error retrieving chat history:", e)
        return jsonify({"error": "Failed to retrieve chat history"}), 500

if __name__ == "__main__":
    app.run(debug=True)