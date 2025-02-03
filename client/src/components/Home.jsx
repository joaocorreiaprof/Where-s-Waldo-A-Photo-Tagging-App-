import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="select-map">
      <Link to="/game-mario">
        <div className="select-map-div">
          <img
            src="../images/mario.jpg"
            alt="Mario game"
            className="select-map-image"
          />
          <p>Find Mario and his friends</p>
          <p>Level 1</p>
        </div>
      </Link>
      <Link to="/game-robot">
        <div className="select-map-div">
          <img
            src="../images/robot.jpg"
            alt="Robot game"
            className="select-map-image"
          />
          <p>Robot City in here!</p>
          <p>Level 2</p>
        </div>
      </Link>
      <Link to="/game-waldo">
        <div className="select-map-div">
          <img
            src="../images/waldo.jpg"
            alt="Waldo game"
            className="select-map-image"
          />
          <p>Where is Waldo ?</p>
          <p>Level 3</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
