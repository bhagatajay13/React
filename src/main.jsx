import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { About } from './About.jsx';
import { ErrorPage } from './ErrorPage.jsx';
import { RestaurantMenu } from './RestaurantMenu.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const createRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/restaurants/:id",
    element: <RestaurantMenu />
  }
]);

createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={createRouter} />
  
)

