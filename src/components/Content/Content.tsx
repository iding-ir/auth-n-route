import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Breadcrumbs } from "../Breadcrumbs";
import { IRoute, IRouteGroup } from "../../routes";

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

interface IProps {
  page: IRoute | IRouteGroup;
}

export const Content = (props: IProps) => {
  const { page } = props;

  const classes = useStyles();

  return (
    <main className={classes.wrapper}>
      <div className={classes.toolbar} />

      <Breadcrumbs page={page} />

      <div className={classes.content}>{page.component}</div>
    </main>
  );
};
