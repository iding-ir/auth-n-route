import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    BlogHome: {
      "& a": {
        color: "#ffffff",
      },
    },
  })
);

interface IProps {}

export const BlogHome = (props: IProps) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <ul className={classes.BlogHome}>
      <li>
        <Link to="/blog/1">{t("blog.page", { page: "1" })}</Link>
      </li>

      <li>
        <Link to="/blog/2">{t("blog.page", { page: "2" })}</Link>
      </li>

      <li>
        <Link to="/blog/3">{t("blog.page", { page: "3" })}</Link>
      </li>
    </ul>
  );
};
