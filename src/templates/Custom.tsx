import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { IRoute, IRouteGroup } from "../routes/index.d";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",

      "& a": {
        color: "#ffffff",
      },
    },
  })
);

interface IProps {
  page: IRoute | IRouteGroup;
}

export const Custom = (props: IProps) => {
  const { page } = props;

  const classes = useStyles();

  return <div className={classes.root}>{page.contents}</div>;
};
