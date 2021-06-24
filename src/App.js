import './App.css';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './global';
import Loading from './Components/Loading';
import { theme } from './theme';
import { ThemeProvider } from 'styled-components';
import { UserStorage } from './shared/UserContext';

const Header = lazy(() => import('./Components/Header'));
const Home = lazy(() => import('./pages/Home'));
const Footer = lazy(() => import('./Components/Footer'));
const Carousel = lazy(() => import('./Components/Carousel'));
const Login = lazy(() => import('./pages/Login'));
const Painel = lazy(() => import('./pages/Painel'));

function App() {
  return (
    <Router>
      <UserStorage>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Suspense fallback={<Loading></Loading>}>
            <Header />
            <Switch>
              <Route path="/carousel">
                <Carousel />
              </Route>

              <Route path="/Login">
                <Login />
              </Route>

              <Route path="/Painel">
                <Painel />
              </Route>

              <Route path={'/Album'}>
                <Album />
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </Suspense>
        </ThemeProvider>
      </UserStorage>
    </Router>
  );
}

export default App;
