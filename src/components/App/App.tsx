import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import { useTranslation } from "react-i18next";

import { useTheme } from "../../themes";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Content } from "../Content";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    App: {},
  })
);

interface IProps {}

export const App = (props: IProps) => {
  const classes = useStyles();
  const { theme } = useTheme();
  const { t } = useTranslation();

  return (
    <div className={classes.App}>
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Header />

          <Sidebar
            title={t("sidebar.title")}
            logo={
              <Logo
                stroke={theme.palette.primary.contrastText}
                fill={theme.palette.primary.light}
              />
            }
            footer={t("sidebar.footer")}
          />

          <Content />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};
