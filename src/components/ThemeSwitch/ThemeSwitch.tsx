import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ThemeIcon from "@material-ui/icons/EventNote";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { toggleSwitch } from "../../actions/switches";
import { changeTheme } from "../../actions/theme";
import { IState } from "../../reducers";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    item: {
      borderLeft: "3px solid",
      borderColor: "transparent",
    },
  })
);

export const ThemeSwitch = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const checked = useSelector((state: IState) => state.switches.theme);
  const theme = useSelector((state: IState) => state.theme);

  return (
    <ListItem className={classes.item}>
      <ListItemIcon>
        <ThemeIcon />
      </ListItemIcon>

      <ListItemText id="switch-label-theme" primary={t("sidebar.theme")} />

      <ListItemSecondaryAction>
        <Switch
          edge="end"
          onChange={() => {
            const newTheme = theme === "light" ? "dark" : "light";

            dispatch(changeTheme(newTheme));

            dispatch(toggleSwitch("theme"));
          }}
          checked={checked}
          inputProps={{ "aria-labelledby": "switch-label-theme" }}
        />
      </ListItemSecondaryAction>
    </ListItem>
  );
};
