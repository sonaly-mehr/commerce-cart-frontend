import React from 'react';

const Category = ({ allCategories, filterItems, setList }) => {
  return (
    <div className="btn-container">
      {
        allCategories.map((category) => <button onClick={() => { filterItems(category); setList([]) }}>{category}</button>)
      }
    </div>
  );
};

export default Category;