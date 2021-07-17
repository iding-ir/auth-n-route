import React from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../actions/auth";
import { useAuth } from "../../hooks/useAuth";
import * as URLS from "../../constants/urls";

interface IProps {}

export const Logout = (props: IProps) => {
  const dispatch = useDispatch();
  const { auth } = useAuth();

  const { isLoggedIn, username } = auth;

  dispatch(logout(username));

  return isLoggedIn ? (
    <Redirect to={{ pathname: URLS.LOGIN }} />
  ) : (
    <div>Logout</div>
  );
};
