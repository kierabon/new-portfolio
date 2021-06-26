import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Projects, Contact } from "./components";

function App() {
  return (
    <div className="App">
       <div className="container home">
         <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/projects" exact component={() => <Projects />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
       
        <Footer />
      </Router>
        </div> 
    </div>
  );
}

export default App;
