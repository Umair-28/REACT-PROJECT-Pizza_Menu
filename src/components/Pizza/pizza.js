// Pizza.js
import React from 'react';
import "../../index.css";

function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props;

  // if(!props.soldOut) 
  //   {
  //     return null;
  //   }

  return (
    
      // <div className='pizza'>
      // <h2>{name}</h2>
      // <p>Ingredients: {ingredients}</p>
      // <p>Price: ${price}</p>
      // <img src={photoName} alt={name} />
      // <p>{soldOut ? "Sold Out" : "Available"}</p>
      // </div>
      
   
        <div className={`item  ${props.soldOut ? "sold-out" : ""} `}>
        <img src={photoName} alt="Pizza 1" />
         <div class="ing">
            <h2>{name}</h2>
            <p> <strong>Ingredients: </strong>{ingredients}</p>
            <p>Price: {props.price}</p>
            
            <p> {props.soldOut ? "Sold Out" : "Available"} </p>
         </div>
      </div>
          
      
    
  );
}

export default Pizza;
