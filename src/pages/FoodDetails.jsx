import { useParams } from "react-router-dom";
import { foodItemsData } from "./Food";

const FoodDetails = () => {
  const { foodId } = useParams();

  const foodObj = foodItemsData.find(
    (foodItem) => foodItem.id.toString() === foodId,
  );

  return (
    <div className="container my-5">
      <h1>{foodObj.name}</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Name: </strong>
          {foodObj.name}
        </li>
        <li className="list-group-item">
          <strong>Calories: </strong>
          {foodObj.calories}
        </li>
      </ul>
    </div>
  );
};

export default FoodDetails;
