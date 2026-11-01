import { useState } from "react";

export const PreviousState = () => {
  const [count, setCount] = useState(0);
  console.log("render phase: Component is rendering with count:", count);

  const handleClick = () => {
    setCount((prevCount) => {
      console.log("Before setCount, count is:", prevCount);
      const newCount = prevCount + 1;
      console.log("Still is trigger phase. After setCount, count is:", newCount);
      return newCount;
    });

    setCount((prevCount) => {
      console.log("Before setCount, count is:", prevCount);
      const newCount = prevCount + 5;
      console.log("Still is trigger phase. After setCount, count is:", newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleClick}>Count</button>
    </div>
  );
};

{/* Batching
  React
  - waits until your event handler has finished executing before it re-renders the component with the new state value. This is known as batching, and it helps to optimize performance by reducing the number of re-renders that occur during a single event.
  - React gathers all your state updates
  - applies them in one order

  Similar in restaurant - server take everything and then goes to kitchen
  */
}

export const UseStateObject = () => {
  const [state, setState] = useState({
    name:'ajay',
    age: 20
  })

  const updateAge = () => {
    setState({
      ...state,
      age: 22
    });
  }

  return (
    <div>
      <h2>Name: {state.name}</h2>
      <h2>Age: {state.age}</h2>
      <button onClick={updateAge}>Update Age</button>
    </div>
  )
}

{/* ueState with Objects Summary:
1. useState can be used to manage state in functional components.
2. When using useState with objects, it's important to spread the previous state to avoid overwriting other properties.
3. React batches state updates and re-renders the component with the new state values after the event handler has finished executing.
4. Always use setter fun to update state as changing object directly will not trigger a re-render. 
Instead, use the setter function returned by useState to update the state and trigger a re-render.

*/}