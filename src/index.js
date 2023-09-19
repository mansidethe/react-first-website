
import ReactDOM from 'react-dom/client';
import Home from "./views/Home/Home"
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import Products from './components/Products/Products';
import { createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },

    {
        path: "/about",
    element:<About/>,
},

      {
        path: "/contact",
      element:<Contact/>,
      },
      
      {
        path: "/product",
      element:<Products/>,
      },
      
    
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<RouterProvider router={router} />);
