import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Home from './Pages/Home.jsx'
import NotFound from './Pages/NotFound.jsx'
import global from "./styles/global.css"
import { AnimatePresence } from 'framer-motion'

// Router provider
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App />,
//     children: [
//       {
//         index:true,
//         element: <Home />
//       },
//       {
//         path:"about",
//         element: <About />
//       },
//       {
//         path:"services",
//         element: <Services />
//       }
//     ]
//   },
//   {
//     path:"*",
//     element: <NotFound />
//   }
// ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        
          <Route index={true} element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
