import React, { useState, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { SIDEBAR_WIDTH } from "../../constants/config";
import { closeSidebar } from "../../actions/sidebar";
import { routes, IRoute, IRouteGroup, IRoutes } from "../../routes";
import { IState } from "../../reducers";
import { useAuth } from "../../hooks/useAuth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      "& ul": {
        overflow: "auto",
        flexGrow: 10,
      },
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: SIDEBAR_WIDTH,
        flexShrink: 0,
      },
    },
    // necessary for content to be below app bar
    toolbar: {
      fontSize: "1.2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      ...theme.mixins.toolbar,
    },
    logo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 0.5rem",
      "& svg": {
        height: "2.5rem",
        width: "auto",
      },
    },
    title: {
      padding: "0 0.5rem",
    },
    footer: {
      fontSize: "1rem",
      padding: "0 0.5rem",
    },
    drawerPaper: {
      width: SIDEBAR_WIDTH,
    },
    item: {
      borderLeft: "3px solid",
      borderColor: "transparent",
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    selected: {
      borderLeft: "3px solid",
      borderColor: theme.palette.secondary.main,
    },
    link: {
      display: "flex",
      width: "100%",
      textDecoration: "none",
      color: theme.palette.primary.contrastText,
    },
  })
);

interface IProps {
  title?: ReactNode;
  logo?: ReactNode;
  footer?: ReactNode;
}

export const Sidebar = (props: IProps) => {
  const { title, logo, footer } = props;
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [collapseOpen, setCollapseOpen] = useState<{ [key: string]: boolean }>(
    {}
  );

  const sidebarOpen = useSelector((state: IState) => state.sidebar.open);
  const selectedPage = useSelector((state: IState) => state.page.selected);

  const { auth } = useAuth();

  const { isLoggedIn } = auth;

  const handleCloseDrawer = () => {
    dispatch(closeSidebar());
  };

  const renderList = (list: IRoutes, nested: boolean) => {
    const renderItems = () => {
      return list.map((item: IRoute | IRouteGroup) => {
        const className = clsx(classes.item, {
          [classes.nested]: nested,
          [classes.selected]: selectedPage.key === item.key,
        });

        const renderCollapse = () => {
          if ("items" in item) {
            return (
              <Collapse
                in={collapseOpen[item.key]}
                timeout="auto"
                unmountOnExit
              >
                {renderList(item.items, true)}
              </Collapse>
            );
          }
        };

        const renderCollapseIcon = () => {
          if ("items" in item) {
            return collapseOpen[item.key] ? <ExpandLess /> : <ExpandMore />;
          }
        };

        const onClick = () => {
          if (item.action) {
            item.action();
          }

          setCollapseOpen({
            ...collapseOpen,
            [item.key]: !collapseOpen[item.key],
          });
        };

        const renderItem = () => {
          if (item.custom) {
            return item.custom;
          }

          if (item.label) {
            const linkContent = (
              <ListItem button className={className} onClick={onClick}>
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText primary={t(item.label)} />

                {renderCollapseIcon()}
              </ListItem>
            );

            if (item.path) {
              return (
                <Link to={item.path} className={classes.link}>
                  {linkContent}
                </Link>
              );
            }

            return linkContent;
          }
        };

        return item.showInSidebar &&
          ((isLoggedIn && item.showPrivate) ||
            (!isLoggedIn && item.showPublic)) ? (
          <div key={item.key}>
            {renderItem()}

            {renderCollapse()}
          </div>
        ) : null;
      });
    };

    return <List>{renderItems()}</List>;
  };

  const drawer = (
    <div className={classes.wrapper}>
      <div className={classes.toolbar}>
        <div className={classes.logo}>{logo}</div>

        <div className={classes.title}>{title}</div>
      </div>

      <Divider />

      {renderList(routes, false)}

      <Divider />

      <div className={classes.toolbar}>
        <div className={classes.footer}>{footer}</div>
      </div>
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="drawer">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={sidebarOpen}
          onClose={handleCloseDrawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};
