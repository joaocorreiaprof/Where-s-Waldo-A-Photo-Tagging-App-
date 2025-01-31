import "../styles/GameWaldo.css";
import { useState } from "react";

const GameWaldo = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const [clickedCoords, setClickedCoords] = useState(null);

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

    fetch("/api/waldo/validate-selection", {
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
        alert(data.message);
        setMenuVisible(false);
        setClickedCoords(null);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="waldo-game-board">
      <img
        src="../images/waldo.jpg"
        alt="Waldo game"
        className="game-waldo-image"
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
            <li onClick={() => handleCharacterSelection("waldo")}>
              <img
                src="../images/waldo-pic.jpg"
                alt="A picture of waldo"
                className="small-pic"
              />
            </li>
            <li onClick={() => handleCharacterSelection("dog")}>
              <img
                src="../images/dog.jpg"
                alt="A dog picture"
                className="small-pic"
              />
            </li>
            <li onClick={() => handleCharacterSelection("evil")}>
              <img
                src="../images/evil.jpg"
                alt="A evil man picture"
                className="small-pic"
              />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default GameWaldo;
