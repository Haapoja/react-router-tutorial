import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

// route path="/" refers to the main page of the app
// browserrouter can only have 1 child element
// thats why all the Routes must be wrapped in a div

//home renders in each page because of the "/", can bypass this by writing "exact"
//what it does: only render this component when the path is exactly "/"

//if no paths are specified, render will happen on non-existant urls
//it will also render on everypage, thats where Switch comes in
//when wrapped in a div, no path component(error component) renders everywhere

//navigation is needed on every page, so to render it, the component
//needs to be outside of the switch components, and because a router can
//only have one child, all of this shit needs to be wrapped in a div
class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
