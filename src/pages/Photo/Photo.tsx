import React from "react";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "react-i18next";

interface IProps {}

export const Photo = (props: IProps) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography paragraph>{t("content")}</Typography>
    </>
  );
};
