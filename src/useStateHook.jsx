import { useState } from "react";

export const UseStateHook = () => {
  const [count, setCount] = useState(0);
  console.log("render phase: Component is rendering with count:", count);

  const increment = () => {
    console.log("Before setCount, count is:", count);
    setCount(count + 1);
    console.log("Still is trigger phase. After setCount, count is:", count);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

// useState always returns an array with two elements: the current state value and a function to update that state. We can use array destructuring to assign these values to variables. In this example, we are using the useState hook to manage a count state variable, which is initialized to 0. The increment and decrement functions update the count state by calling setCount with the new value. When the buttons are clicked, the count is updated and the component re-renders to reflect the new count value.
// useState:
// The state persits between renders. When the state is updated, the component re-renders with the 
// new state value. This allows us to create interactive components that can respond to user input 
// and update the UI accordingly.

// when we call setCount, 
// React updates the state value.
// React re-renders the component with the new state value, and the updated count is displayed in the UI.
// create dynamic and interactive user interfaces in React.

{/* 
Rules golden rules of hooks:
1. Only call hooks at the top level of your function
 - not inside loops, conditions, or nested functions
2. Only call hooks from react functions
 - from react functional components or custom hooks
 ****************  
Why hooks rules exists?
The rules of hooks exist? 
1. to ensure that hooks are used correctly and consistently,
2. keep track of state between renders.
3. optimize performance.
4. helps prevent bugs and makes the code more predictable and maintainable.*/}

{/* How state updates work in React?
  Updating UI is 3 steps process:
1. Call the state update function (e.g., setCount) with the new state - Trigger phase
2. React schedules a re-render of the component with the new state - Render phase
3. React updates the DOM to reflect the new state - Commit phase
  */}