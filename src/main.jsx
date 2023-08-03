import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import About from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";
import Home from "./Pages/Home.jsx";
import NotFound from "./Pages/NotFound.jsx";
import global from "./styles/global.css";
import { AnimatePresence } from "framer-motion";
import { GlobalStyle } from "./styles/GlobalStyles.jsx";
import Header from "./components/Header.jsx";
import TransitionBlack from "./animations/transition.jsx";

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

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
