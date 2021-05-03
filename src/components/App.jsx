import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import PrivateRoute from './PrivateRoute';
import { RecordStore } from "./RecordStore";
import NotFound404 from "./NotFound404";
import Footer from "./Footer";
import UpdateProfile from "./UpdateProfile";
import AccountVerification from './AccountVerification';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <PrivateRoute exact path='/store' component={RecordStore} />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/profile" component={UpdateProfile} />
          {/* <Route path="/store" component={RecordStore} /> */}
          <Route
            exact
            path='/users/verify/:emailVerifToken'
            component={AccountVerification}
          />
          <Route path="*" component={NotFound404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
