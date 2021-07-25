import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MUIBreadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";

import { useBreadcrumbs } from "./useBreadcrumbs";
import { IRoute, IRouteGroup } from "../../routes/index.d";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      alignItems: "center",

      "& nav": {
        display: "flex",
      },
    },
    root: {},
    item: {
      display: "flex",
      textDecoration: "none",
    },
    icon: {
      marginRight: theme.spacing(1),
      width: "24px",
      height: "24px",

      "& svg": {
        width: "100%",
        height: "100%",
      },
    },
    iconActive: {
      color: theme.palette.secondary.light,
    },
    iconInactive: {
      color: theme.palette.grey[500],
    },
    link: {
      color: theme.palette.secondary.light,
    },
    label: {
      color: theme.palette.grey[500],
    },
  })
);

interface IProps {
  page: IRoute | IRouteGroup;
}

export const Breadcrumbs = (props: IProps) => {
  const { page } = props;

  const classes = useStyles();
  const { t } = useTranslation();
  const { breadcrumbs } = useBreadcrumbs(page);
  const minWidth = useMediaQuery("(min-width: 960px)");

  const renderBreadcrumbs = () => {
    return breadcrumbs.map((breadcrumb, index: number) => {
      if (breadcrumb.path && index !== breadcrumbs.length - 1) {
        return (
          <Link
            key={breadcrumb.key}
            to={breadcrumb.path}
            className={classes.item}
          >
            <span className={`${classes.icon} ${classes.iconActive}`}>
              {breadcrumb.icon}
            </span>

            <span className={classes.link}>{t(breadcrumb.label || "")}</span>
          </Link>
        );
      } else {
        return (
          <Typography
            key={breadcrumb.key}
            color="textPrimary"
            className={classes.item}
          >
            <span className={`${classes.icon} ${classes.iconInactive}`}>
              {breadcrumb.icon}
            </span>

            <span className={classes.label}>{t(breadcrumb.label || "")}</span>
          </Typography>
        );
      }
    });
  };

  return (
    <>
      <div className={classes.toolbar}>
        <MUIBreadcrumbs
          className={classes.root}
          maxItems={minWidth ? 5 : 2}
          aria-label="breadcrumb"
        >
          {renderBreadcrumbs()}
        </MUIBreadcrumbs>
      </div>

      <Divider />
    </>
  );
};
