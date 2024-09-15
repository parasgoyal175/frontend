Fruit.ai Frontend
Welcome to the Fruit.ai frontend repository! 🍉🍎 This project serves as the user interface for our AI-powered fruit health management system, built using React.

Project Structure
The frontend project is located at:

fruit.ai\fruit.ai\frontend\fruit-project

Tech Stack
React: Core framework for building the user interface.
Axios: Used for making API requests to the backend.
React Router DOM: For seamless navigation between different pages.
Installation & Setup
To get started with the project, follow the steps below:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/fruit-ai-frontend.git
cd fruit-ai-frontend
Install the required dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
The app will run on http://localhost:3000 by default.

Folder Structure
The project is organized as follows:

graphql
Copy code
src/
  pages/
    Login.js        # User authentication page
    Home.js         # Dashboard for navigating the app
    Chat.js         # User-friendly chatbot interface
    Translator.js   # Translator component using integrated API
    FAQ.js          # FAQ with CRUD operations (connected to backend)
    About.js        # Information about Fruit.ai
Each page is styled individually with corresponding CSS for a consistent look and feel.

Key Features
Chatbot: A friendly chatbot that helps users interact with the system and access fruit-related details.
Translator: Translate fruit names and descriptions across different languages using our integrated translation service.
FAQ: View and manage frequently asked questions (CRUD operations connected to the backend).
Responsive Design: Fully responsive UI for both mobile and desktop platforms.
Available Scripts
In the project directory, you can run:

npm start: Starts the development server.
npm run build: Builds the app for production.
Backend Integration
The backend is a Flask application that supports the FAQ page's CRUD operations. 
