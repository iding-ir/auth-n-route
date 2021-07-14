import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "react-i18next";

import { SIDEBAR_WIDTH } from "../../constants";
import { openSidebar } from "../../actions/sidebar";
import { IState } from "../../reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        marginLeft: SIDEBAR_WIDTH,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

interface IPropsHeader {}

export const Header = (props: IPropsHeader) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const selectedPage = useSelector((state: IState) => state.page.selected);

  const handleDrawerOpen = () => {
    dispatch(openSidebar());
  };

  const renderTitle = () => {
    if (selectedPage.label) {
      return t(selectedPage.label);
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
