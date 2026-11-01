import { useState } from "react";

export const UseStateArray = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 10" },
    { id: 2, name: "Item 20" },
    { id: 3, name: "Item 30" }
  ]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: 'Item 40'
    }
    setItems([...items, newItem]);
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Items </h2>
        <ul>
          {items.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          );
        })}
        </ul>
        <button onClick={addItem}>Add Item</button> {/* because you're passing the function itself, not calling it. */}
    </div>
  )
}

{/*
  why onClick={removeItem(item.id)} not correct?
Because removeItem(item.id) calls the function immediately during render — you pass its result to onClick, not the handler. 
React then runs that call while building the UI.
  */}