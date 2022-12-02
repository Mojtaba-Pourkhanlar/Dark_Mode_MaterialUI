import { CssBaseline, ThemeProvider } from "@mui/material";
import Card from "./frontEnd/components/Card";
import Header from "./frontEnd/components/Header";
import { ColorModeContext, useMode } from "./frontEnd/mui/theme";

const AppContainer = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <Header />
          <Card />
        </>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AppContainer;
