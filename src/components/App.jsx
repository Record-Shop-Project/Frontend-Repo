import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import  {RecordStore } from "./RecordStore";
import NotFound404 from "./NotFound404";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/store" component={RecordStore} />
          <Route path="/notfound" component={NotFound404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
