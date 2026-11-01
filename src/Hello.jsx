import React from "react";

export const Hello = () => {
  return (
    <> {/* React.Fragment short hand, it is used to remove extra div as we need a wrapper compulsory for JSX */}
      <h2>Aarohi</h2>
      <p>
        Hello, I am Ajay. I am a software engineer with a passion for building web applications. I enjoy working with React and exploring new technologies in the frontend development space.
      </p>
    </>
    
  )
}

export const HelloWithoutJSX = () => {
  return React.createElement('div', { id: 'container' }, 
    React.createElement('h2', null, 'Hello Without JSX'));
}

// JSX is syntactic sugar for React.createElement() function. 
// It allows us to write HTML-like code in our JavaScript files, 
// which is then transformed into React.createElement() calls by a compiler like Babel.

// In JS, cannot return 2 or more objects from a function without wrapping them into an array.
// In JSX, we can return multiple elements from a component by wrapping them in a parent element, such as a <div> or a React.Fragment.
// Rules of JSX:
// 1. JSX must have a single parent element.
// 2. JSX can contain expressions, which are enclosed in curly braces {}.
// 3. JSX can contain comments, which are enclosed in curly braces and start with /* and end with */.
// 4. JSX can contain attributes, which are written in camelCase and enclosed in quotes.
// 5. JSX can contain children, which are nested elements or text content.
// 6. JSX every single element must be closed, either with a self-closing tag or a closing tag. eg) <input /> or <div></div>