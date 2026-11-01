import { useState } from "react";
export const CardWrapper = (props) => {
  const [btnName, setBtnName] = useState("Login");
  console.log('Header rendered');
  const { title, children } = props;
  return (
    <>
      <h2>{title}</h2>
      <div className="card-wrapper">
        {children}
      </div>
      <button onClick={() => {
              // btnName = btnName === "Login" ? "Logout" : "Login";
              setBtnName(btnName === 'Login' ? 'Logout' : 'Login');
              console.log("Button Clicked", btnName);
            }}>
              {btnName}
            </button>
    </>
  )
}
// Yes — children is the conventional prop React uses for nested content.
// Card Wrapper component doesn't care what you pass as children, it will render whatever is passed to it. This makes it a reusable component that can be used in different parts of the application with different content.

// Default Props
// Forwarding Props with Spread Operator
// Passing JSX as children
// In HTML, we know that is natural to nest elements inside other elements. <div><p>This is a paragraph.</p></div>
// In React, we can achieve the same behavior by passing JSX as children to a component. The children prop is a special prop that allows us to pass any valid JSX as the content of a component. This makes it easy to create reusable components that can accept different content based on the context in which they are used.
// Passing data to dynamically pass we use props. Props are a way to pass data from a parent component to a child component. In this case, we are passing the title prop to the CardWrapper component, which will be rendered as an h2 element. This allows us to customize the title of the card wrapper based on the context in which it is used.