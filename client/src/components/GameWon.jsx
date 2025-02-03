import { useState, useEffect } from "react";
import "../styles/GameWon.css";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const GameWon = () => {
  const [showText, setShowText] = useState(false);
  const location = useLocation();
  const { time } = location.state || { time: 0 };

  useEffect(() => {
    setTimeout(() => setShowText(true), 1500);
  }, []);

  return (
    <div className="game-won-container">
      <h1 className="win-title">CONGRATULATIONS! You found everyone.</h1>
      <p className={`win-message ${showText ? "visible" : "hidden"}`}>
        Great job, keen-eyed adventurer!
      </p>
      <p>Your time: {time} seconds</p>
      <Link to="/">
        <button>Play another map</button>
      </Link>
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
