import { ReactNode } from "react";

export interface IRoute {
  key: string;
  showPrivate: boolean;
  showPublic: boolean;
  showInSidebar: boolean;
  exact?: boolean;
  path?: string;
  label?: string;
  icon?: JSX.Element;
  component?: ReactNode;
  template?: () => JSX.Element;
  action?: () => void;
  custom?: JSX.Element;
}

export interface IRouteGroup extends IRoute {
  items: IRoutes;
}

export type IRoutes = (IRoute | IRouteGroup)[];
