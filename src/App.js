import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//Simple Button Component
function Button() {
  return(
    <>
    <h1>Adding Button component</h1>
    <button onClick={handleButton}>click</button>
    </>
  );
}
function handleButton() {
  alert("Button is clicked");
}

//Profile Details Component
function ProfileDetails() {
  const image = {
    name: "profile picture of a lady",
    link: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 100
  };
  return(
    <>
      <h1>Displaying the profile</h1>
      <img 
        src={image.link}
        alt={"alt text: " + image.name}
        width={image.imageSize}
        height={image.imageSize}
        style={{borderRadius: 50}}
      />
    </>
  );
}

//Rendering lists component
function ShoppingLists() {
  const products = [
    { title: "apple", id: 1 },
    { title: "banana", id: 2 },
    { title: "grapes", id: 3 }
  ];
  const listItems = products.map((product) =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  return(
    <>
      <h1>Shopping List Items:</h1>
      <ul>{listItems}</ul>
    </>
  );
}

//Button Counter Component
function ButtonCounter() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return(
    <>
    <h1>Button Counter</h1>
    <button onClick={handleClick}>Clicked {count} times</button>
    </>
  );
}

//Main component displaying all the components
function App() {
  return (
    <div className="App">
      <Button />
      <ProfileDetails />
      <ShoppingLists />
      <ButtonCounter />
    </div>
  );
}

export default App;
