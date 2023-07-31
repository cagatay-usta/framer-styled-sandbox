import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Home from './Pages/Home.jsx'
import NotFound from './Pages/NotFound.jsx'
import global from "./styles/global.css"

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement: <NotFound />,
    children: [
      {
        index:true,
        element: <Home />
      },
      {
        path:"about",
        element: <About />
      },
      {
        path:"services",
        element: <Services />
      }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
