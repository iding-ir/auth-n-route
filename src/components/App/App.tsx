import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Content } from "../Content";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    App: {
      width: "100%",
      height: "100%",
    },
  })
);

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Wrapper>
        <Header />

        <Sidebar />

        <Content />
      </Wrapper>
    </div>
  );
};
