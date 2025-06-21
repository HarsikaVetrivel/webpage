Serververse — Explore Server-Side Engineering Through Planets
Serververse is an interactive educational React web app designed to teach and demonstrate core concepts in server-side engineering. Each “planet” represents a fundamental area of backend development — from the request/response cycle to architecture, authentication, deployment, and testing — ending with a quiz to reinforce understanding.

 Tech Stack

React (Hooks, Components)
React Router DOM
HTML5 + CSS3
Modular CSS for component-level styling
 Features by Planet
 
 Planet 1: Fundamentals
Learn how servers work using visual accordions.
Concepts: What is a server? HTTP methods, ports, request/response cycle.

 Planet 2: Architecture

Visual comparison of Monolithic vs Microservices architecture.
Breakdown of MVC (Model-View-Controller) using cards and explanations.

Planet 3: Authentication

Simulated login using React state.
Demonstrates server logic using mock credentials and a fake JWT.

 Planet 4: Deployment & Testing
Timeline-style explanation of:
Unit Testing
Integration Testing
CI/CD Pipelines
Docker Containers
Cloud Deployment (e.g., Vercel, AWS)

 Planet 5: Quiz
5-question MCQ-based quiz to assess the user’s grasp of server-side engineering.
Displays score and result at the end using React state.

Navigation

React Router used for multi-page routing.
Each page (planet) is a standalone component linked via route.
useNavigate is used for in-app transitions.


📁 Folder Structure

src/
├── components/
│ ├── FundamentalsPlanet.jsx
│ ├── ArchitecturePlanet.jsx
│ ├── AuthPlanet.jsx
│ ├── DeployPlanet.jsx
│ └── QuizPlanet.jsx
├── styles/
│ ├── Global.css
│ ├── Architecture.css
│ ├── AuthPlanet.css
│ └── DeployPlanet.css
├── App.js
└── index.js

 How to Run Locally

Clone the repository:
git clone https://github.com/yourusername/serververse.git

Install dependencies:
cd serververse
npm install

Start the server:
npm start

 You should see the Serververse app at http://localhost:3000/

📚 Learning Outcomes

This project teaches:

React component structuring
Routing and dynamic rendering
Basic authentication simulation
Visual storytelling for backend concepts
State management with React hooks

License

This project is for educational and academic demonstration purposes only.

Credits

Built by Harsika Vetrivel
