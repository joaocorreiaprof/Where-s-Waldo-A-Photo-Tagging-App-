import { useState, useEffect } from "react";
import "../styles/GameWon.css";

const GameWon = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 1500);
  }, []);

  return (
    <div className="game-won-container">
      <h1 className="win-title">You Found Waldo and his friends!</h1>
      <p className={`win-message ${showText ? "visible" : "hidden"}`}>
        Great job, keen-eyed adventurer!
      </p>
      <div className="confetti-container">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="confetti"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GameWon;
