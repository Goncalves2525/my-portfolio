import React from "react";
import "./ParticlesBackground.css";

// Generate particles with deterministic but varied properties
const PARTICLE_COUNT = 45;

const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
  // Use index-based pseudo-random distribution for consistent layout
  const seed = ((i * 137.5) % 100); // golden angle distribution
  const seed2 = ((i * 73.1 + 17) % 100);

  return {
    id: i,
    left: `${seed}%`,
    size: 1 + (i % 3), // 1px, 2px, or 3px
    opacity: 0.15 + (seed2 / 100) * 0.55, // 0.15 to 0.70
    duration: 15 + (i % 7) * 5, // 15s to 45s
    delay: -(i * 1.3), // stagger so they don't all start at bottom
    isCyan: i % 5 === 0, // every 5th particle is cyan
  };
});

const ParticlesBackground = () => {
  return (
    <div className="particles-container" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className={`particle${p.isCyan ? " particle--cyan" : ""}`}
          style={{
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
