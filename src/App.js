import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Accueil from './Component/Accueil'
import Apropos from './Component/Apropos'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import './App.css'
import './Component/Footer.css'


class App extends Component {
  render() {
    return (
        <Router>
              <div>
                <nav  class = "menu">
                  <ul>
                    <li>
                      <Link to="/acceuil">Accueil</Link>
                    </li>
                    <li>
                      <Link to="/apropos">Apropos</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>


                <Route  path="/" exact component={Accueil} />
                <Route  path="/acceuil" component={Accueil} />
                <Route path="/apropos" component={Apropos} />
                <Route path="/contact" component={Contact} />
                <div><Footer /></div>
              </div>
        </Router>
    );
  }
}

export default App;