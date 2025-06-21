import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Global.css";

const topics = [
{
title: "What is a Server?",
content:
"A server is a computer or system that provides data or services to other computers (clients) over a network."
},
{
title: "Request/Response Cycle",
content:
"The browser sends a request to the server; the server processes and sends back a response, which the browser renders."
},
{
title: "HTTP Methods",
content:
"These include GET (fetch data), POST (send data), PUT (update data), and DELETE (remove data)."
},
{
title: "Ports",
content:
"A port is a communication endpoint. HTTP usually runs on port 80, HTTPS on 443."
}
];

const FundamentalsPlanet = () => {
const [openIndex, setOpenIndex] = useState(null);
const navigate = useNavigate(); // 🚀 initialize navigation

const toggle = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

return (
<div className="planet-container">
<h1>🪐 Welcome to Planet Fundamentals</h1>
<p>Explore the building blocks of server-side engineering!</p>
{topics.map((item, index) => (
<div key={index} className="accordion">
<div className="accordion-title" onClick={() => toggle(index)}>
<h3>{item.title}</h3>
</div>
{openIndex === index && (
<div className="accordion-content">
<p>{item.content}</p>
</div>
)}
</div>
))}

  {/* 🚀 Navigation Button */}
  <button
    style={{
      marginTop: "2rem",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#00cec9",
      color: "white",
      cursor: "pointer"
    }}
    onClick={() => navigate("/architecture")}
  >
    🚀 Next: Visit Planet Architecture
  </button>
</div>
);
};

export default FundamentalsPlanet;









