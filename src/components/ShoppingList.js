import React from "react";
import Item from "./Item";
import { useState } from "react"

function ShoppingList({ items }) {

  ///FILTER DELIVERABLE \/\/\/\/
  const [selectedCategory, setSelectedCategory] = useState("All") //initial value is All

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value)
  }
  
  const categoryToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  })
  console.log(categoryToDisplay)

  let renderItems = selectedCategory ? categoryToDisplay : items
  //changes what is being mapped over and rendered into the li from the specified category to the items - if no category is selected it will default to items, if a category is selected it will map over that array with corosponding category and only render items that match!!

  // const renderItems = selectedCategory ? categoryToDisplay : 
  ///FILTER DELIVERABLE /\/\/\/\

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {renderItems.map((item) => (<Item key={item.id} name={item.name} category={item.category} />))}
      </ul>
    </div>
  );
}

export default ShoppingList;
