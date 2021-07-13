import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { useTranslation } from "react-i18next";

import { LOGIN_WIDTH } from "../../constants";
import { login } from "../../actions/auth";
import { useAuth } from "../../hooks/useAuth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    Login: {
      display: "flex",
      flexDirection: "column",
      width: LOGIN_WIDTH,
      height: "100%",
      margin: "0 auto",
      justifyContent: "center",
    },
    wrapper: {
      padding: "0 1rem",
    },
    field: {
      margin: "1rem 0",
    },
  })
);

export const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { auth } = useAuth();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { isLoggedIn } = auth;

  return isLoggedIn ? (
    <Redirect to={{ pathname: "/" }} />
  ) : (
    <div className={classes.Login}>
      <Paper className={classes.wrapper}>
        <div className={classes.field}>
          <TextField
            required
            label={t("login.username")}
            variant="outlined"
            fullWidth={true}
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
        </div>

        <div className={classes.field}>
          <TextField
            type="password"
            required
            label={t("login.password")}
            variant="outlined"
            fullWidth={true}
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </div>

        <div className={classes.field}>
          <Button
            variant="outlined"
            fullWidth={true}
            onClick={() => {
              dispatch(login(username, password));
            }}
          >
            {t("login.button")}
          </Button>
        </div>
      </Paper>
    </div>
  );
};
