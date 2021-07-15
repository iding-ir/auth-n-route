import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";

import { useTheme } from "../../themes";
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

interface IProps {}

export const App = (props: IProps) => {
  const classes = useStyles();
  const { theme } = useTheme();

  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />

          <Sidebar />

          <Content />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};
