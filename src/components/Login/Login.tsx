import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";

import { LOGIN_WIDTH } from "../../constants";

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

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={classes.Login}>
      <Paper className={classes.wrapper}>
        <div className={classes.field}>
          <TextField
            required
            label="Username"
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
            label="Password"
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
              console.log(username, password);
            }}
          >
            Login
          </Button>
        </div>
      </Paper>
    </div>
  );
};
