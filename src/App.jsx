import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';
import { Product, Welcome, Welcome1, UserCard } from './Welcome.jsx';
import Button1 from './Button.jsx';
import { Hello, HelloWithoutJSX } from './Hello.jsx';
import { StyledForm, Profile } from './StyledForm.jsx';
import { CardWrapper } from './CardWrapper.jsx';
import { UseStateHook } from './useStateHook.jsx';
import { ConditionalRendering, ProductList } from './ConditionalRendering.jsx';
import { PreviousState, UseStateObject } from './PreviousState.jsx';
import { UseStateArray } from './UseStateArray.jsx';
import { Restaurant } from './Restaurant.jsx';
import { Header } from './Header.jsx';

const welcomeObject = {
  name: "Ajay",
  age: 33,
  email: "ajay@example.com"
};
function App() {
  return (
    <div className="App">
      <Header />
      <Restaurant />
      <CardWrapper title="Card Title">
        <p>Nested content goes here for props</p>
      </CardWrapper>
      <Welcome1 resData={welcomeObject} />
      <UserCard name="AAROHI" email="john.doe@example.com" address="123 Main St" />
      {/* Component name starts with upper case letter, if lower case react will think you are 
      trying to render and html element that never exists*/}
      {/* 
      In JSX, { } means: "Evaluate the JavaScript expression inside."
      <Product 
        title="Product 1" 
        price={19.99} 
        categories={["Electronics", "Gadgets"]} />
      <Welcome name="Ajay" age="33"/>
      <Welcome name="Aarohi" />
      <Hello />
      <HelloWithoutJSX/>
      <Button1 />
      <StyledForm />
      <Profile />
      
      <ConditionalRendering name="Ajay" isLoggedIn={true} />
      <ConditionalRendering name="Aarohi" isLoggedIn={false} />
      <ProductList />
      <UseStateHook />
      <PreviousState /> */}
      <UseStateObject />
      <UseStateArray />
    </div>
  )
}

export default App;


{/* 
Component describe a part of user interface
They are JS functions that return HTML elements(JSX)
They can be nested inside other components
*/}
