import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Home from './views/Home/Home';
import MovieDetail from './views/MovieDetail/MovieDetail';
import "./index.scss";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{
      path:"",
      element: <Home />,
    },
    {
      path:"/movie/:id",
      element: <MovieDetail />
    },
   ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
