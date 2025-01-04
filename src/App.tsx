import { ThemeProvider } from "styled-components"
import { DefaultThemes } from "./styles/theme/default"
import { GlobalStyled } from "./styles/globalStyles"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify'
import { Router } from "./Routes/routes"
import { AppProvider } from "./Contexts"
import { Theme } from '@radix-ui/themes';

import 'react-toastify/dist/ReactToastify.css'
import '@radix-ui/themes/styles.css';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={DefaultThemes}>
          <Theme>
            <Router />
            <GlobalStyled />
            <ToastContainer />
          </Theme>
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
