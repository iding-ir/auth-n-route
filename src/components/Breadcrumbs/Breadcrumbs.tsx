import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MUIBreadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useBreadcrumbs } from "./useBreadcrumbs";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",
      borderBottom: `1px solid ${theme.palette.grey[800]}`,

      "& nav": {
        display: "flex",
      },
    },
    icon: {
      marginRight: theme.spacing(1),
      width: 20,
      height: 20,
      color: theme.palette.grey[100],
    },
    breadcrumb: {
      display: "flex",
    },
    link: {
      color: theme.palette.secondary.dark,
    },
    label: {
      color: theme.palette.grey[500],
    },
  })
);

interface IProps {}

export const Breadcrumbs = (props: IProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { breadcrumbs } = useBreadcrumbs();

  const renderBreadcrumbs = () => {
    return breadcrumbs.map((breadcrumb) => {
      if (breadcrumb.path) {
        return (
          <Link to={breadcrumb.path} className={classes.breadcrumb}>
            <span className={classes.icon}>{breadcrumb.icon}</span>

            <span className={classes.link}>{t(breadcrumb.label || "")}</span>
          </Link>
        );
      } else {
        return (
          <Typography color="textPrimary" className={classes.breadcrumb}>
            <span className={classes.icon}>{breadcrumb.icon}</span>

            <span className={classes.label}>{t(breadcrumb.label || "")}</span>
          </Typography>
        );
      }
    });
  };

  return (
    <div className={classes.toolbar}>
      <MUIBreadcrumbs aria-label="breadcrumb">
        {renderBreadcrumbs()}
      </MUIBreadcrumbs>
    </div>
  );
};
