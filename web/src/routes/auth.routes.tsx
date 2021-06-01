import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};
export default AuthRoutes;
