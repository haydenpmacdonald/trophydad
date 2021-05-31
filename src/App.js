import './App.css';
import Index from './pages/Index';
import Video from './pages/Video';
import Team from './pages/Team';
import About from './pages/About';
import Contact from './pages/Contact';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="trophydad--app--container">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Index} />
          <Route path='/video' exact component={Video} />
          <Route path='/team' exact component={Team} />
          <Route path='/contact' exact component={Contact} />
          <Route path ='/about' exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
