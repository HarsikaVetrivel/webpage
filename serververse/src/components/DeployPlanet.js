import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DeployPlanet.css";

const steps = [
{
title: "🧪 Step 1: Write Unit Tests",
description:
"Test individual functions or modules (e.g., checking if login() returns correct output)."
},
{
title: "🔗 Step 2: Integration Testing",
description:
"Test how multiple modules work together (e.g., login + database connection + response)."
},
{
title: "⚙️ Step 3: Setup CI Pipeline",
description:
"Use tools like GitHub Actions or Jenkins to run tests automatically on every push."
},
{
title: "🐳 Step 4: Dockerize the App",
description:
"Bundle app + environment + dependencies into a Docker container for portability."
},
{
title: "🌐 Step 5: Deploy to Cloud",
description:
"Use Render, Vercel, or AWS to deploy your server. The server listens on a port and responds to traffic!"
}
];

const DeployPlanet = () => {
const navigate = useNavigate(); // 🧭

return (
<div className="deploy-container">
<h1>🧪 Welcome to Planet Testing & Deployment</h1>
<p>Follow the journey of a server-side app from dev to production!</p>

  <div className="timeline">
    {steps.map((step, index) => (
      <div className="timeline-step" key={index}>
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    ))}
  </div>

  {/* 🚀 Next Planet Button */}
  <button
    onClick={() => navigate("/quiz")}
    style={{
      marginTop: "2rem",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      backgroundColor: "#00cec9",
      color: "white",
      border: "none",
      cursor: "pointer"
    }}
  >
    🎯 Final Stop: Go to Quiz Planet
  </button>
</div>
);
};

export default DeployPlanet;