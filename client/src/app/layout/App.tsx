import { Container, CssBaseline, createTheme, ThemeProvider } from "@mui/material";
import Catalog from "../../features/catalog/Catalog";
import Header from './Header';
import { useState } from "react";

function App() {
  const [datkMode, setDarkMode] = useState(false);

  const paletteType = datkMode ? 'dark' : 'light'

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function handleThemeChange() {
    setDarkMode(!datkMode)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={datkMode} handleThemeChange={handleThemeChange}/>
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
