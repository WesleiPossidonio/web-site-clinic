import { ThemeProvider } from "styled-components"
import { DefaultThemes } from "./styles/theme/default"
import { GlobalStyled } from "./styles/globalStyles"
import { Home } from "./Pages/Home"

function App() {
  return (
    <ThemeProvider theme={DefaultThemes}>
      <Home />
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
