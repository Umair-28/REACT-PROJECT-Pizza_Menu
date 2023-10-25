// Pizza.js
import React from 'react';

function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>Ingredients: {ingredients}</p>
      <p>Price: ${price}</p>
      <img src={photoName} alt={name} />
      <p>{soldOut ? "Sold Out" : "Available"}</p>
    </div>
  );
}

export default Pizza;
