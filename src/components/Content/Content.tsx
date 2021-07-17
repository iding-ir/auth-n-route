import React from "react";
import { useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { IState } from "../../reducers";
import { Breadcrumbs } from "../Breadcrumbs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      flexGrow: 1,
      padding: theme.spacing(3),
      paddingTop: 0,
    },
    toolbar: theme.mixins.toolbar,
    content: {
      marginTop: "1rem",
    },
  })
);

interface IProps {}

export const Content = (props: IProps) => {
  const classes = useStyles();

  const selectedPage = useSelector((state: IState) => state.page.selected);

  return (
    <main className={classes.wrapper}>
      <div className={classes.toolbar} />

      <Breadcrumbs />

      <div className={classes.content}>{selectedPage.component}</div>
    </main>
  );
};
