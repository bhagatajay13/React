import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}

// Navigating between pages in React can be done using the Link component from the react-router-dom library. The Link component allows you to create links that navigate to different routes in your application without causing a full page reload. In this example, we have a Header component that contains two links: one for the home page ("/") and one for the about page ("/about"). When a user clicks on one of these links, the corresponding route will be rendered without refreshing the entire page, providing a smoother user experience.