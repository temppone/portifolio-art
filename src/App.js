import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global";
import { Loading } from "./Componenents/Loading";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

const Header = lazy(() => import("./Componenents/Header"));
const Footer = lazy(() => import("./Componenents/Footer"));


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<div>Loading</div>}>
          <Header />
          <Footer />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
