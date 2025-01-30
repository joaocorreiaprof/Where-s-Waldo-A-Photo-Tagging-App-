import "../styles/GameWaldo.css";
import { useState } from "react";

const GameWaldo = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

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

    setMenuPosition({
      top: event.clientY + window.scrollY,
      left: event.clientX + window.scrollX,
    });

    setMenuVisible(true);
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
            <li>
              <img
                src="../images/waldo-pic.jpg"
                alt="A picture of waldo"
                className="small-pic"
              />
            </li>
            <li>
              <img
                src="../images/dog.jpg"
                alt="A dog picture"
                className="small-pic"
              />
            </li>
            <li>
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
