import { foodItemsData } from "../pages/Food";

const listCheckbox = (foodItems) => {
  const categories = foodItems.reduce((acc, curr) => {
    if (!acc.includes(curr.category)) {
      acc.push(curr.category);
    }
    return acc;
  }, []);
  return categories;
};

const FilterCheckbox = ({ filteredFruits, filterByCategory }) => {
  
  function isCategoryExist(category) {
    return filteredFruits.includes(category);
  }

  const checkboxCategories = listCheckbox(foodItemsData);
  return (
    <>
      <label>Category: </label>
      <span>
        <label className="m-2">
          <input
            type="checkbox"
            name="category"
            onChange={filterByCategory}
            value="All"
            checked={isCategoryExist("All")}
          />
          All
        </label>
      </span>
      {checkboxCategories.map((categories, index) => (
        <span key={index}>
          <label className="m-2">
            <input
              type="checkbox"
              name="category"
              onChange={filterByCategory}
              value={categories}
              checked={isCategoryExist(categories)}
            />
            {categories}
          </label>
        </span>
      ))}
    </>
  );
};

export default FilterCheckbox;
