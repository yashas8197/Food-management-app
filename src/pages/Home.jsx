import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container my-4">
      <div>
        <img
          className="img-fluid"
          src="https://placehold.co/600x400?text=Healthy+LifeStyle"
        />
      </div>
      <div className="my-5">
        <h2>Health Resources</h2>
        <p>
          Discover Food and information to support your journey towards a
          healthier lifestyle.
        </p>
        <Link to="/food" className="btn btn-primary">
          Explore Food Items
        </Link>
      </div>
      <div className="my-5">
        <h2>Health Report</h2>
        <p>See Health Report</p>
        <Link to="/report" className="btn btn-primary">
          View Report
        </Link>
      </div>
    </div>
  );
};

export default Home;
