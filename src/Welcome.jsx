export const Welcome = (props) => {
  return (
    <div>
      <h1>Hello, World! {props.name} {props.age ? `age: ${props.age}` : ''}</h1>
      <p>Welcome to my React app.</p>
    </div>
  )
}

export const Welcome1 = (props) => {
  const { resData } = props;
  return (
    <div>
      <h1>Welcome 1 {resData.name} {resData.age ? `age: ${resData.age}` : ''}</h1>
      <p>Welcome to my React app.</p>
    </div>
  )
}

export const Product = ({ title, price, categories }) => {
  return(
    <>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Categories: {categories?.join(', ')}</p>
    </>
  )
}
// *********************
// Props patterns

export const UserInfo = ({ name, email, address }) => {
  return (
    <div className="user-info">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  )
}

export const UserCard = ({name, ...rest}) => {
  return (
    <div className="user-card">
      
      {/* <UserInfo 
        name={props.name} 
        email={props.email} 
        address={props.address} /> */}
        
        <UserInfo name={name} {...rest} />
     Ajay Aarohi Priya
    </div>
  )
} 

// Props are how components talk to each other.
// They make components reusable by allowing them to accept dynamic data.
// You can pass any data type as props, including strings, numbers, arrays, objects, and even functions.
// They are passed from parent to child components as attributes in JSX.
// Destructuring props in the function parameter list is a common practice to make the code cleaner and more readable.
// In the above example, the Welcome component receives name and age as props, while the Product component receives title and price as props.