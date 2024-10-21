import { createBrowserRouter } from "react-router-dom";

import App from '../App'
import Home from '../pages/Home/Home';
import About from '../pages/About/About'
import Login from "../pages/Login/Login";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/app',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
])

export default router