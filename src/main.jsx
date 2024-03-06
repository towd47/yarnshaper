import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home'
import Events from './components/Events'
import Contact from './components/Contact'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import About from './components/About'
import Homepage from './components/Homepage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Home />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: "about/",
        element: <About />,
      },
      {
        path: "events/",
        element: <Events />,
      },
      {
        path: "contact/",
        element: <Contact />,
      },
      {
        path: "home/",
        element: <Homepage />,
      }
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
