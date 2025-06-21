import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Architecture.css";

const architectureData = [
{
title: "Monolithic Architecture",
description:
"A single codebase where all parts of the app (UI, business logic, DB) are tightly coupled. Easy to start but difficult to scale or maintain.",
image: "https://cdn-icons-png.flaticon.com/512/1046/1046754.png"
},
{
title: "Microservices Architecture",
description:
"The application is broken into smaller, independent services that communicate over APIs. Each service can be developed and deployed separately.",
image: "https://cdn-icons-png.flaticon.com/512/3079/3079115.png"
}
];

const mvcData = {
title: "MVC Pattern",
description:
"Model-View-Controller (MVC) separates your app into 3 layers. Model handles data, View displays it, and Controller connects them. Used in Express apps, Django, Rails etc.",
image: "https://cdn-icons-png.flaticon.com/512/1257/1257170.png"
};

const ArchitecturePlanet = () => {
const navigate = useNavigate(); // Initialize navigate

return (
<div className="architecture-container">
<h1>🛰️ Welcome to Planet Architecture</h1>
<p>Let’s learn how server-side apps are structured!</p>


  <div className="card-wrapper">
    {architectureData.map((item, index) => (
      <div className="card" key={index}>
        <img src={item.image} alt={item.title} className="card-img" />
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>

  <div className="mvc-section">
    <h2>🧠 MVC Pattern</h2>
    <div className="mvc-card">
      <img src={mvcData.image} alt="MVC" className="mvc-img" />
      <p>{mvcData.description}</p>
    </div>
  </div>

  {/* 🚀 Next button */}
  <button
    onClick={() => navigate("/auth")}
    style={{
      marginTop: "2rem",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      backgroundColor: "#0984e3",
      color: "white",
      border: "none",
      cursor: "pointer"
    }}
  >
    🚀 Next: Visit Planet Authentication
  </button>
</div>
);
};

export default ArchitecturePlanet;