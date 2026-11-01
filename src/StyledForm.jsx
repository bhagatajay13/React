export const StyledForm = () => {
  return (
    <form className="ajay-form">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

// In React, we use htmlFor instead of for in label elements to avoid conflicts with the for keyword in JavaScript.
// In React, we use className instead of class in JSX to avoid conflicts with the class keyword in JavaScript.

export const Profile = () => {
  const profile = 'This is a profile component.';
  const name = 'Ajay';
  return (
    <>
      <h2>{name.toUpperCase()}'s Profile</h2>
      <p>{profile}</p>
    </>
  )
}

//<>React.fragment</> is used to group multiple elements without adding extra nodes to the DOM. It is useful when you want to return multiple elements from a component without wrapping them in a div or other container element.