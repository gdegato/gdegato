import GitHubRepos from "./pages/GitHubRepos";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Profile } from "./components/Profile";

function App() {
  return (   
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Profile/>
      <GitHubRepos />
      <Footer />
    </ThemeProvider>
   
  );
}

export default App; 