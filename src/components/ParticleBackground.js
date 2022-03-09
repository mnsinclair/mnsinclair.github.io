import React from "react";
import Particles from "react-tsparticles";
import particleConfig from "./config/particle-config";

function ParticleBackground() {
  return (
    <div>
      <Particles params={particleConfig} />
    </div>
  );
}

export default ParticleBackground;
