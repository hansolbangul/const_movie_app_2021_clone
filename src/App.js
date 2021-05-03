import React from "react";
import About from "./Routes/About";
import Home from "./Routes/Home";
import Detail from "./Routes/Detail";
import "./App.css"
import { HashRouter, Route } from "react-router-dom"
import Navigation from "./Components/Navigation";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
