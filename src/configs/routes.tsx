import React, { ReactNode } from "react";
import InboxIcon from "@material-ui/icons/Inbox";

import * as URLS from "../constants/urls";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { PublicPage } from "../pages/PublicPage";
import { Photo } from "../pages/Photo";
import { Video } from "../pages/Video";
import { Audio } from "../pages/Audio";
import { PrivatePage } from "../pages/PrivatePage";
import { NotFound } from "../pages/NotFound";

export interface IRoute {
  key: string;
  isPrivate: boolean;
  path?: string;
  label?: string;
  icon?: JSX.Element;
  component?: ReactNode;
  exact?: boolean;
  action?: () => void;
  custom?: JSX.Element;
}

export interface IRouteGroup extends IRoute {
  items: IRoutes;
}

export type IRoutes = (IRoute | IRouteGroup)[];

export const routes: IRoutes = [
  {
    key: "home",
    isPrivate: false,
    path: URLS.home,
    label: "sidebar.home",
    icon: <InboxIcon />,
    component: Home,
    exact: true,
  },
  {
    key: "login",
    isPrivate: false,
    path: URLS.login,
    label: "sidebar.login",
    icon: <InboxIcon />,
    component: Login,
  },
  {
    key: "public-page",
    isPrivate: false,
    path: URLS.publicPage,
    label: "sidebar.publicPage",
    icon: <InboxIcon />,
    component: PublicPage,
    items: [
      {
        key: "photo",
        isPrivate: false,
        path: URLS.photo,
        label: "sidebar.photo",
        icon: <InboxIcon />,
        component: Photo,
      },
      {
        key: "video",
        isPrivate: false,
        path: URLS.video,
        label: "sidebar.video",
        icon: <InboxIcon />,
        component: Video,
      },
      {
        key: "audio",
        isPrivate: false,
        path: URLS.audio,
        label: "sidebar.audio",
        icon: <InboxIcon />,
        component: Audio,
      },
    ],
  },
  {
    key: "private-page",
    isPrivate: true,
    path: URLS.privatePage,
    label: "sidebar.privatePage",
    icon: <InboxIcon />,
    component: PrivatePage,
  },
  {
    key: "not-found",
    isPrivate: false,
    path: URLS.notFound,
    label: "sidebar.notFound",
    icon: <InboxIcon />,
    component: NotFound,
  },
];
