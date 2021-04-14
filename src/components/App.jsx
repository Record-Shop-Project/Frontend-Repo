import "../scss/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import Cart from "./Cart";
import PrivateRoute from "./PrivateRoute";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const App = () => {
  const { authDone } = useContext(UserContext);
  console.log("is auth done", authDone);

  return (
    <div className="app">
      <Router>
        <Nav></Nav>
        <div className="main">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <PrivateRoute exact path="/cart" component={Cart} />
            <Route exact path="" component={Homepage} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
