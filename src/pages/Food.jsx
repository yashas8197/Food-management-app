import React from "react";
import { useState } from "react";
import RenderFoodList from "../components/RenderFoodList";
import FilterCheckbox from "../components/FilterCheckbox";

export const foodItemsData = [
  { id: 1, name: "Apple", calories: 52, category: "Fruit" },
  { id: 2, name: "Banana", calories: 89, category: "Fruit" },
  { id: 3, name: "Chicken Breast", calories: 165, category: "Protein" },
  { id: 4, name: "Salad", calories: 100, category: "Vegetable" },
  { id: 5, name: "Yogurt", calories: 120, category: "Dairy" },
];

const Food = () => {
  const [filteredFruits, setFilteredFruits] = useState(["All"]);

  const filterByCategory = (e) => {
    const value = e.target.value;

    if (value === "All") {
      setFilteredFruits(["All"]);
    } else {
      if (filteredFruits.includes(value)) {
        setFilteredFruits(filteredFruits.filter((item) => item !== value));
      } else {
        setFilteredFruits([
          ...filteredFruits.filter((item) => item != "All"),
          value,
        ]);
      }
    }
  };

  const filteredFoodItems = filteredFruits.includes("All")
    ? foodItemsData
    : foodItemsData.filter((foodItem) => {
        if (filteredFruits.includes(foodItem.category)) {
          return foodItem;
        }
      });
  return (
    <div className="container">
      <h1>List of Food items</h1>
      <FilterCheckbox
        filteredFruits={filteredFruits}
        filterByCategory={filterByCategory}
      />
      <RenderFoodList foodItem={filteredFoodItems} />
    </div>
  );
};

export default Food;
