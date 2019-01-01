import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ObjectList from './ObjectList';
import './App.css';



class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
      <Router>
        <div>
          <nav>
            <ul className="list flex">
              <li className="pa2">
                <Link to="/">Home</Link>
              </li>
              <li className="pa2">
                <Link to="/people/">People</Link>
              </li>
              <li className="pa2">
                <Link to="/films/">Films</Link>
              </li>
              <li className="pa2">
                <Link to="/starships/">Starships</Link>
              </li>
              <li className="pa2">
                <Link to="/vehicles/">Vehicles</Link>
              </li>
              <li className="pa2">
                <Link to="/species/">Species</Link>
              </li>
              <li className="pa2">
                <Link to="/planets/">Planets</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact render={() => <h1>Welcome to Starwars</h1>}/>
          <Route path="/people/" component={ObjectList} />
          <Route path="/films/" component={ObjectList} />
          <Route path="/starships/" component={ObjectList} />
          <Route path="/vehicles/" component={ObjectList} />
          <Route path="/species/" component={ObjectList} />
          <Route path="/planets/" component={ObjectList} />
        </div>
      </Router>
      
        
      </div>
    );
  }
}

export default App;
