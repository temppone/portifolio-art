import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./global";
import { Loading } from "./Componenents/Loading";

const Header = lazy(() => import("./Componenents/Header"));
const Footer = lazy(() => import("./Componenents/Footer"));

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Suspense fallback={<div>Loading</div>}>
        <Header />
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
