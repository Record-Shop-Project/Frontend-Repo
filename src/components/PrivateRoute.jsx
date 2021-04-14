import { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import Loading from "./Loading";

const PrivateRoute = ({ path, component, redirectTo = "/login" }) => {
  const { user, authDone } = useContext(UserContext);

  if (!authDone) return <Loading />;
  if (authDone) {
    console.log("private route autuh is done", authDone);
    return user ? (
      <Route path={path} component={component} />
    ) : (
      <Redirect to={redirectTo} />
    );
  }
};

export default PrivateRoute;
