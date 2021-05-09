import './App.css';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} /> 
          <Route path="/projects" exact component={Projects} /> 
          <Route path="/contact" exact component={Contact} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
