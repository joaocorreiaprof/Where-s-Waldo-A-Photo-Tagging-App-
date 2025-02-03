import "../styles/GameRobot.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import GameWon from "../components/GameWon";

const GameRobot = () => {
  const navigate = useNavigate();
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [clickedCoords, setClickedCoords] = useState(null);
  const [foundCharacters, setFoundCharacters] = useState({
    mike: false,
    leonardo: false,
    obelix: false,
  });

  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  useEffect(() => {
    if (!startTime) return;
    const interval = setInterval(() => {
      setElapsedTime(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  const handleClick = (event) => {
    if (menuVisible) {
      setMenuVisible(false);
      return;
    }

    const image = event.target;
    const rect = image.getBoundingClientRect();

    const relativeX = ((event.clientX - rect.left) / rect.width) * 100;
    const relativeY = ((event.clientY - rect.top) / rect.height) * 100;

    console.log(
      `Clicked at: X = ${relativeX.toFixed(2)}%, Y = ${relativeY.toFixed(2)}%`
    );

    setClickedCoords({ x: relativeX, y: relativeY });

    setMenuPosition({
      top: event.clientY + window.scrollY,
      left: event.clientX + window.scrollX,
    });

    setMenuVisible(true);
  };

  const handleCharacterSelection = (character) => {
    if (!clickedCoords) return;
    fetch("/api/robot/validate-selection", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        x: clickedCoords.x,
        y: clickedCoords.y,
        character,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.found) {
          setFoundCharacters((prev) => ({
            ...prev,
            [character]: true,
          }));
        }
        alert(data.message);
        setMenuVisible(false);
        setClickedCoords(null);
      })
      .catch((error) => console.error("Error:", error));
  };

  const allCharactersFound = Object.values(foundCharacters).every(Boolean);

  useEffect(() => {
    if (allCharactersFound) {
      navigate("/game-won", { state: { time: elapsedTime } });
    }
  }, [allCharactersFound, foundCharacters, navigate, elapsedTime]);

  return (
    <div className="robot-game-board">
      {allCharactersFound ? (
        <GameWon />
      ) : (
        <>
          <div className="mario-characters-to-find">
            <div className="characters-container">
              <img src="../images/mike.jpg" alt="Mike image" className="find" />
              <img
                src="../images/leonardo.jpg"
                alt="Leonardo image"
                className="find"
              />
              <img
                src="../images/obelix.jpg"
                alt="Obelix image"
                className="find"
              />
            </div>
          </div>
          <img
            src="../images/robot.jpg"
            alt="robot game"
            className="game-robot-image"
            onClick={(event) => {
              event.stopPropagation();
              handleClick(event);
            }}
          />
          {menuVisible && (
            <div
              className="target-box"
              style={{
                top: `${menuPosition.top}px`,
                left: `${menuPosition.left}px`,
              }}
            >
              <ul className="dropdown-menu">
                <li onClick={() => handleCharacterSelection("mike")}>
                  <img
                    src="../images/mike.jpg"
                    alt="Mike picture"
                    className="small-pic"
                  />
                </li>
                <li onClick={() => handleCharacterSelection("leonardo")}>
                  <img
                    src="../images/leonardo.jpg"
                    alt="Leonardo picture"
                    className="small-pic"
                  />
                </li>
                <li onClick={() => handleCharacterSelection("obelix")}>
                  <img
                    src="../images/obelix.jpg"
                    alt="Obelix picture"
                    className="small-pic"
                  />
                </li>
              </ul>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default GameRobot;
