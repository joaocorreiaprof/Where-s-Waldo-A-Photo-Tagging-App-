import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-component">
      <div className="select-map">
        <h1>Select a game</h1>
        <Link to="/game-waldo">Where is Waldo ? </Link>
      </div>
    </div>
  );
};

export default Home;
