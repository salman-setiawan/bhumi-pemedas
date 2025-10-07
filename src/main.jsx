import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './pages/Home';
import Bio from './pages/Bio';
import Kavling from './pages/Kavling';
import Cluster from './pages/Cluster';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
      {
    path: "/cluster",
    element: <Cluster />,
  },
      {
    path: "/kavling",
    element: <Kavling />,
  },
      {
    path: "/tentang-kami",
    element: <Bio />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
