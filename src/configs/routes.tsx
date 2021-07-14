import React, { ReactNode } from "react";
import HomeIcon from "@material-ui/icons/Home";
import LoginIcon from "@material-ui/icons/AccountBox";
import InboxIcon from "@material-ui/icons/Inbox";
import MultimediaIcon from "@material-ui/icons/PermMedia";
import PhotoIcon from "@material-ui/icons/PhotoCamera";
import VideoIcon from "@material-ui/icons/Movie";
import AudioIcon from "@material-ui/icons/Audiotrack";
import ProfileIcon from "@material-ui/icons/Person";
import NotFoundIcon from "@material-ui/icons/PanTool";

import * as URLS from "../constants/urls";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Multimedia } from "../pages/Multimedia";
import { Photo } from "../pages/Photo";
import { Video } from "../pages/Video";
import { Audio } from "../pages/Audio";
import { Profile } from "../pages/Profile";
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
    icon: <HomeIcon />,
    component: Home,
    exact: true,
  },
  {
    key: "login",
    isPrivate: false,
    path: URLS.login,
    label: "sidebar.login",
    icon: <LoginIcon />,
    component: Login,
  },
  {
    key: "multimedia",
    isPrivate: false,
    path: URLS.multimedia,
    label: "sidebar.multimedia",
    icon: <MultimediaIcon />,
    component: Multimedia,
    items: [
      {
        key: "photo",
        isPrivate: false,
        path: URLS.photo,
        label: "sidebar.photo",
        icon: <PhotoIcon />,
        component: Photo,
      },
      {
        key: "video",
        isPrivate: false,
        path: URLS.video,
        label: "sidebar.video",
        icon: <VideoIcon />,
        component: Video,
      },
      {
        key: "audio",
        isPrivate: false,
        path: URLS.audio,
        label: "sidebar.audio",
        icon: <AudioIcon />,
        component: Audio,
      },
    ],
  },
  {
    key: "profile",
    isPrivate: true,
    path: URLS.profile,
    label: "sidebar.profile",
    icon: <ProfileIcon />,
    component: Profile,
  },
  {
    key: "not-found",
    isPrivate: false,
    path: URLS.notFound,
    label: "sidebar.notFound",
    icon: <NotFoundIcon />,
    component: NotFound,
  },
];
