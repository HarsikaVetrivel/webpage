import React, { useState } from "react";
import "../styles/QuizPlanet.css";

const quizData = [
{
question: "1️⃣ What does a server do in the client-server model?",
options: [
"Sends requests to the client",
"Stores web pages offline",
"Responds to client requests",
"Monitors client IP address"
],
answer: "Responds to client requests"
},
{
question: "2️⃣ What is an advantage of microservices architecture?",
options: [
"Single codebase is easier",
"All services crash together",
"Each service can scale independently",
"Requires no deployment"
],
answer: "Each service can scale independently"
},
{
question: "3️⃣ In MVC, which part handles user input and business logic?",
options: ["Model", "View", "Controller", "Client"],
answer: "Controller"
},
{
question: "4️⃣ What is a JWT used for?",
options: [
"Encrypt frontend styles",
"Log user actions",
"Store JSON responses",
"Authenticate users securely"
],
answer: "Authenticate users securely"
},
{
question: "5️⃣ What is the purpose of CI/CD?",
options: [
"Manual testing",
"Offline database backup",
"Automatic testing and deployment",
"Encrypting code"
],
answer: "Automatic testing and deployment"
}
];

const QuizPlanet = () => {
const [current, setCurrent] = useState(0);
const [score, setScore] = useState(0);
const [showResult, setShowResult] = useState(false);

const handleAnswer = (selected) => {
const correct = quizData[current].answer;
if (selected === correct) {
setScore(score + 1);
}

const next = current + 1;
if (next < quizData.length) {
  setCurrent(next);
} else {
  setShowResult(true);
}
};

return (
<div className="quiz-container">
<h1>🧪 Welcome to Quiz Station!</h1>
<p>Let’s test your Server-Side Engineering skills</p>

php-template
Copy
Edit
  {!showResult ? (
    <div className="quiz-box">
      <h2>{quizData[current].question}</h2>
      <div className="options">
        {quizData[current].options.map((opt, i) => (
          <button key={i} onClick={() => handleAnswer(opt)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  ) : (
    <div className="result">
      <h2>🎉 Quiz Complete!</h2>
      <p>You scored {score} out of {quizData.length}</p>
      <p>{score >= 4 ? "🌟 You’re ready to be a Server-Side Engineer!" : "📘 Review and try again!"}</p>
    </div>
  )}
</div>
);
};

export default QuizPlanet;