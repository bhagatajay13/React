import React from 'react';

export const ConditionalRendering = ({ name, isLoggedIn }) => {
  return (
    <div>
      {isLoggedIn ? (
        <p>Welcome back, {name}!</p>
      ) : (
        <p>Please log in to continue.
          {
            isLoggedIn ? `Welcome back, ${name}!` : `Please log in to continue.`
          }
        </p>
      )}
    </div>
  )
}

export const ProductList = ({ products }) => {
  const productList = [{
    name: "Product 1",
    id: 1,
    price: 19.99
  }, {
    name: "Product 2",
    id: 2,
    price: 29.99
  }, {
    name: "Product 3",
    id: 3,
    price: 39.99
  }];
  const productElements = productList.filter((product) => product.price > 30).map((product) => {
    return (
      <React.Fragment key={product.id}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
      </React.Fragment>
    )
  });

  return (
    <>
      <h2>Our Products</h2>
      {productElements}
    </>
  )
}


// Why does React need keys?
// Keys are used by Reat to track items in the list and identify which items have changed, been added, or been removed. This helps React to optimize the rendering process and update only the necessary components instead of re-rendering the entire list. Without keys, React would have to re-render the entire list every time there is a change, which can lead to performance issues and unexpected behavior.
// Crucial for React to efficiently update the UI