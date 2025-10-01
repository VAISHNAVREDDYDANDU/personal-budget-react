import React from 'react';

function Hero() {
  const bgUrl = `${process.env.PUBLIC_URL}/bg.png`;
  return (
    <div className="hero" style={{ backgroundImage: `url(${bgUrl})` }}>
        <h1>Personal Budget</h1>
        <h2>A personal-budget management app</h2>
    </div>
  );
}

export default Hero;