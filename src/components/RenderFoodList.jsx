import { Link } from "react-router-dom";

const RenderFoodList = ({ foodItem }) => {
  return (
    <ul className="list-group">
      {foodItem.map((foodItem) => (
        <li className="list-group-item py-2" key={foodItem.id}>
          <h5>{foodItem.name}</h5>
          <p>Calories: {foodItem.calories}</p>
          <p>Category: {foodItem.category}</p>
          <Link className="btn btn-primary" to={`/food/${foodItem.id}`}>
            View Details
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RenderFoodList;
