import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global";
import { Loading } from "./Components/Loading";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";

const Header = lazy(() => import("./Components/Header"));
const Home = lazy(() => import("./pages/Home"));
const Footer = lazy(() => import("./Components/Footer"));
const Carousel = lazy(() => import("./Components/Carousel"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Suspense fallback={<div>Loading</div>}>
          <Header />
          <Switch>
            <Route path="/carousel">
              <Carousel />
            </Route>

            <Route path="/Login">
              <Login />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
