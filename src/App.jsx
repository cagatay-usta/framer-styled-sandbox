import Header from "./components/Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import React from "react"
import { Outlet } from "react-router-dom"


function App() {

  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
    </>
  )
}

export default App
