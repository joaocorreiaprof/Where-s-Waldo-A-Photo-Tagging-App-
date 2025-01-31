import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="select-map">
      <p className="select-map-title">Select a game</p>
      <Link to="/game-waldo">
        <div className="select-map-waldo">
          <img
            src="../images/waldo.jpg"
            alt="Waldo game"
            className="select-map-waldo-image"
          />
          <p>Where is Waldo ?</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
