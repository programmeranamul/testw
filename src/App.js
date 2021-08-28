import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Component/Header/Header';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import TeamDetails from './Component/TeamDetails/TeamDetails';
import NoMatch from './Component/NoMatch/NoMatch';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/team/:teamId">
          <TeamDetails />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
export default App;

