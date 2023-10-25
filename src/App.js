import logo from './logo.svg';
import './App.css';

import Pizza from './components/Pizza/pizza';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
 let time ="";
 const hours = new Date().getHours();
 const openHours = 12;
 const closeHours = 22;
 if(hours >= openHours && hours <= closeHours )
  {
    time = "We are closed";
    alert("We are closed");
  }else{
    time="We are open";
    alert("We are open");
  }


 return (
  <div>
    <Header />
    {pizzaData.map((pizza, index) => (
        <Pizza
          key={index} // Add a unique key if you're mapping over an array
          name={pizza.name}
          ingredients={pizza.ingredients}
          price={pizza.price}
          photoName={pizza.photoName}
          soldOut={pizza.soldOut}
        />
      ))}
    <Footer time={time} />  
  </div>
 );
}

export default App;
