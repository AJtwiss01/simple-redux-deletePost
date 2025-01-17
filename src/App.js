import React, { Component } from 'react'
import NavBar from './components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'


class App extends Component {

  state = {}

  render() {
    return (
      <Router>
        <div className="app" >
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            
            <Route path="/about" component={About} />

            
            <Route path="/contact" component={Contact} />

            <Route path="/:post_id" component={Post}/>

            
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

