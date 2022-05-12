import React from "react";
import { isAuthenticated } from "./index";
import { Route, Redirect } from "react-router-dom";

const UserRoute = ({ component: Component, ...rest }) => {
  //   let auth = useAuth();

  console.log(isAuthenticated());
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() && isAuthenticated().isAdmin== true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default UserRoute;