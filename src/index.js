import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"

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
  return <div className='container'> 
    <Header />
    <Menu />
    <Footer />
  </div>
}

function Header() {
  return(
    <header className='header'>
    <h1>React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return(
    <main className='menu'>
      <h2>Our Menu</h2>
     
      {numPizzas > 0 ? (
        <>
          <p>Immerse yourself in our array of Italian flavors with 6 dishes to choose from.</p>
      
          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
      <p>Menu under construction, please visit later.</p> )}

      {/* Before
       <Pizza 
      name='Pizza Spinaci' 
      ingredients='Tomato, mozarella, spinach, and ricotta cheese'
      photoName='pizzas/spinaci.jpg'
      price={10}
      />
      <Pizza 
      name='Pizza Funghi' 
      ingredients='Tomato, mozarella, mushrooms, and onion'
      photoName='pizzas/funghi.jpg'
      price={12}
      /> */}
    </main>
  )
}

function Pizza({pizzaObj}) {

  // if(pizzaObj.soldOut) return null;

  return(
    //conditionally setting css classes
  <li className={`pizza ${pizzaObj.soldOut ? 'sold-out' : ""}`}>
    <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
    <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>

      {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : (<span>{pizzaObj.price}</span>)} */}

      <span>{pizzaObj.soldOut ? 'Sold Out' : pizzaObj.price}</span>
    </div>
  </li>
  );
}


function Footer() {
  const hour = new Date().getHours();
  const openHour = 12; 
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if(hour >= openHour && hour <= closeHour) alert("We're open!");
  // else alert("Sorry, we are closed");

  if(!isOpen) return (
    <p>Open hours are from {openHour}:00 and {closeHour}:00. </p>
  )

  return(
    <footer className='footer'>
      {isOpen ? (
         <Order openHour={openHour} closeHour={closeHour}/>
      ) : ( <p>Open hours are from {openHour}:00 and {closeHour}:00. </p>
      )}
    </footer>
  )
}

function Order({closeHour, openHour}){
  return(
    <div className='order'>
      <p>We are open from {openHour} to {closeHour}:00. Order online or come visit us!</p>
      <button className='btn'>Order Now</button>
    </div>
  )}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
  <App />
  </React.StrictMode>
  )
