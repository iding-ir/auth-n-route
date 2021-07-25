import React from "react";

import { IRoute, IRouteGroup } from "../../routes/index.d";
import { Default } from "../../templates/Default";

interface IProps {
  page: IRoute | IRouteGroup;
}

export const Template = (props: IProps) => {
  const { page } = props;

  return page.template ? (
    <page.template page={page} />
  ) : (
    <Default page={page} />
  );
};
