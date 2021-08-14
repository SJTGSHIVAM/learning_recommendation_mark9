import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import RecList from "./components/RecList";

import Rec from "./components/Rec";
import NotFound from "./components/notfound";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Navbar />
      <Switch>
        <Route path="/" component={() => <RecList topic={"dsa"} />} exact />
        <Route path="/rec/:id/:topic" component={Rec} />
        <Route path="/" component={NotFound} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
