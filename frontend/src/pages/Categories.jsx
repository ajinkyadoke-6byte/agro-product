import React from "react";
import CategoryGrid from "../components/CategoryGrid";

const Categories = ({ onCategoryClick }) => {
  return (
    <div className="categories-page">

      <div className="categories-header-page">

        <h1>Explore Categories</h1>

        <p>
          Find the perfect agricultural products for every stage of your crop.
        </p>

      </div>

      <CategoryGrid onCategoryClick={onCategoryClick} />

    </div>
  );
};

export default Categories;