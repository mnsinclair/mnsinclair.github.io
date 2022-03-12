import React from "react";
import ParticleBackground from "./components/ParticleBackground";
import Card from "./components/Card";
import cardData from "./components/config/cardConfig";

function App() {
  return (
    <div className="App">
      <Card {...cardData} />
      <ParticleBackground />
    </div>
  );
}

export default App;
