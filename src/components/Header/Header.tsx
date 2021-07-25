import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "react-i18next";

import { openSidebar } from "../../actions/sidebar";
import { IState } from "../../reducers";
import { IRoute, IRouteGroup } from "../../routes/index.d";

const useStyles = (sidebarWidth: number) =>
  makeStyles((theme: Theme) =>
    createStyles({
      appBar: {
        [theme.breakpoints.up("md")]: {
          width: `calc(100% - ${sidebarWidth}px)`,
          marginLeft: sidebarWidth,
        },
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("md")]: {
          display: "none",
        },
      },
    })
  );

interface IProps {
  page: IRoute | IRouteGroup;
}

export const Header = (props: IProps) => {
  const { page } = props;

  const sidebarWidth = useSelector((state: IState) => state.sidebar.width);

  const classes = useStyles(sidebarWidth)();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleDrawerOpen = () => {
    dispatch(openSidebar());
  };

  const renderTitle = () => {
    if (page.label) {
      return t(page.label);
    }
  };

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerOpen}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" noWrap>
          {renderTitle()}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
