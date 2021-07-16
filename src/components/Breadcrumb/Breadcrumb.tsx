import React from "react";
import { useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { IState } from "../../reducers";
import { routes, IRoutes } from "../../routes";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      margin: "-1rem 0 1rem 0",
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

export const Breadcrumb = (props: IProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const selectedPage = useSelector((state: IState) => state.page.selected);

  const lookInto = (routes: IRoutes, prev: IRoutes) => {
    let result: IRoutes = [];

    for (let index in routes) {
      const route = routes[index];

      if (route.key === selectedPage.key) {
        result = [...result, ...prev, route];

        break;
      } else if ("items" in route) {
        result = [...result, ...lookInto(route.items, [...prev, route])];
      }
    }

    return result;
  };

  const breadcrumbs = lookInto(routes, []);

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
      <Breadcrumbs aria-label="breadcrumb">{renderBreadcrumbs()}</Breadcrumbs>
    </div>
  );
};
