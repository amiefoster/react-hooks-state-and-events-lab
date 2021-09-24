import React from "react";
import { useState } from "react"

function Item({ name, category }) {

  /// ADD TO CART DELIVERABLE \/\/\/\/
  const [addCart, setAddCart] = useState(true)
  const handleAddCart = () => {
    setAddCart(!addCart)
  }
  // \/\/\/these are all changed by toggling addCart in the handleAddCart function \/\/\/
  const addedCartClass = addCart ? " " : "in-cart" //changes class from nothing to in cart
  const addCartButtonClass = addCart ? "add" : "remove" //changes class on button from add to remove
  const addCartButtonText = addCart ? "Add to Cart" : "Remove From Cart" //changes text on button
  /// ADD TO CART DELIVERABLE /\/\/\/\


  return (
    <li onClick={handleAddCart} className={addedCartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addCartButtonClass}>{addCartButtonText}</button>
    </li>
  );
}

export default Item;
