import React from "react";
import { Redirect, Route } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

interface Props {
  path: string;
  Component: any;
  isPrivate: boolean;
}

export const AppRoutes = (props: Props) => {
  const { path, Component, isPrivate, ...rest } = props;

  const { auth } = useAuth();

  const isLoggedIn = !!auth.email;

  return (
    <Route
      path={path}
      render={(props) => {
        if (isPrivate && !isLoggedIn) {
          return <Redirect to={{ pathname: "/login" }} />;
        } else {
          return <Component {...props} />;
        }
      }}
      {...rest}
    />
  );
};
