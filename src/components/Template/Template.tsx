import React from "react";
import { useTranslation } from "react-i18next";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Content } from "../Content";
import { IRoute, IRouteGroup } from "../../routes";
import { useTheme } from "../../themes";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

interface IProps {
  page: IRoute | IRouteGroup;
}

export const Template = (props: IProps) => {
  const { page } = props;

  const { t } = useTranslation();
  const { theme } = useTheme();

  return page.template ? (
    page.template()
  ) : (
    <>
      <Header page={page} />

      <Sidebar
        title={t("sidebar.title")}
        logo={
          <Logo
            stroke={theme.palette.primary.contrastText}
            fill={theme.palette.primary.light}
          />
        }
        footer={t("sidebar.footer")}
        page={page}
      />

      <Content page={page} />
    </>
  );
};
