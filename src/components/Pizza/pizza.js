// Pizza.js
import React from 'react';
import "../../index.css";

function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props;

  return (
    
      // <div className='pizza'>
      // <h2>{name}</h2>
      // <p>Ingredients: {ingredients}</p>
      // <p>Price: ${price}</p>
      // <img src={photoName} alt={name} />
      // <p>{soldOut ? "Sold Out" : "Available"}</p>
      // </div>

   
        <div class="item">
        <img src={photoName} alt="Pizza 1" />
         <div class="ing">
            <h2>{name}</h2>
            <p> Ingredients: {ingredients}</p>
         </div>
      </div>
          
      
    
  );
}

export default Pizza;
