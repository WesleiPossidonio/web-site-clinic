import { ThemeProvider } from "styled-components"
import { DefaultThemes } from "./styles/theme/default"
import { GlobalStyled } from "./styles/globalStyles"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import { Router } from "./Routes/routes"
import 'react-toastify/dist/ReactToastify.css'
import { AppProvider } from "./Contexts"

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={DefaultThemes}>
          <Router />
          <GlobalStyled />
          <ToastContainer />
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
