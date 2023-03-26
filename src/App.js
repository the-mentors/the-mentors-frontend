import { ThemeProvider } from "styled-components";
import { theme } from "./public/shared/theme";
import variables from './public/shared/variables';
import GlobalStyle from './public/shared/GlobalStyle';
import Router from "./Router";


function App() {
  return (
    <ThemeProvider theme={{ style: theme, variables} }>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
