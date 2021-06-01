import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../context/auth";

interface PrivateRoutesProps {
  component: React.FC;
  path: string;
  exact?: boolean;
}

const PrivateRoute = ({ component, path, exact }: PrivateRoutesProps) => {
  const { signed } = useAuth();

  return signed ? (
    <Route component={component} path={path} exact={exact} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
