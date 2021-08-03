import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

import * as URLS from "../../constants/urls";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    BlogPage: {
      "& a": {
        color: "#ffffff",
      },
    },
  })
);

interface Params {
  id: string;
}

interface IProps {}

export const BlogPage = (props: IProps) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const { params } = useRouteMatch<Params>();

  return (
    <div className={classes.BlogPage}>
      <h3>{t("blog.title", { page: params.id })}</h3>

      <Link to={URLS.BLOG_HOME}>{t("blog.back")}</Link>
    </div>
  );
};
