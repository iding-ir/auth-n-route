import React, { useState, useCallback, ReactNode } from "react";
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

import { closeSidebar } from "../../actions/sidebar";
import { routes, IRoute, IRouteGroup, IRoutes } from "../../routes";
import { IState } from "../../reducers";
import { useAuth } from "../../hooks/useAuth";
import { toggleItem } from "../../actions/items";
import { useSidebar } from "./useSidebar";

interface IProps {
  title?: ReactNode;
  logo?: ReactNode;
  footer?: ReactNode;
}

const useStyles = (sidebarWidth: number) =>
  makeStyles((theme: Theme) =>
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
        [theme.breakpoints.up("md")]: {
          width: sidebarWidth,
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
          height: "2rem",
          width: "auto",
          [theme.breakpoints.up("md")]: {
            height: "2.5rem",
          },
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
        width: sidebarWidth,
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
      dragger: {
        width: theme.spacing(1),
        cursor: "ew-resize",
        padding: "4px 0 0",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 100,
        backgroundColor: theme.palette.divider,
      },
    })
  );

export const Sidebar = (props: IProps) => {
  const { title, logo, footer } = props;

  const sidebarOpen = useSelector((state: IState) => state.sidebar.open);
  const selectedPage = useSelector((state: IState) => state.page.selected);
  const sidebarItems = useSelector((state: IState) => state.items);
  const sidebarWidth = useSelector((state: IState) => state.sidebar.width);

  const theme = useTheme();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { auth } = useAuth();
  const classes = useStyles(sidebarWidth)();
  const { drawerWidth, handleMouseDown } = useSidebar();

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
                in={sidebarItems[item.key]}
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
            return sidebarItems[item.key] ? <ExpandLess /> : <ExpandMore />;
          }
        };

        const onClick = () => {
          if (item.action) {
            item.action();
          }

          dispatch(toggleItem(item.key));
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
          PaperProps={{ style: { width: drawerWidth } }}
        >
          {drawer}
        </Drawer>
      </Hidden>

      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
          PaperProps={{ style: { width: drawerWidth } }}
        >
          <div
            onMouseDown={(e) => handleMouseDown(e)}
            className={classes.dragger}
          />

          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};
