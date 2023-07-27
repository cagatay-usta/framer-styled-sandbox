import { ThemeProvider } from "styled-components" 
import Header from "./components/Header/Header"

function App() {
  
  const theme = {
    colors: {
      header: "#ebfbff",
    }
  }


  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
    
    
  )
}

export default App
