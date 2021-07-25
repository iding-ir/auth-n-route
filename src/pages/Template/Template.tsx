import React from "react";
import { Link } from "react-router-dom";

import * as URLS from "../../constants/urls";

interface IProps {}

export const Template = (props: IProps) => {
  return <Link to={URLS.HOME}>Go to Home</Link>;
};
