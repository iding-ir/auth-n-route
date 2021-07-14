import React, { ReactNode } from "react";
import HomeIcon from "@material-ui/icons/Home";
import MultimediaIcon from "@material-ui/icons/PermMedia";
import PhotoIcon from "@material-ui/icons/PhotoCamera";
import VideoIcon from "@material-ui/icons/Movie";
import AudioIcon from "@material-ui/icons/Audiotrack";
import ProfileIcon from "@material-ui/icons/Person";
import LoginIcon from "@material-ui/icons/AccountBox";
import LogoutIcon from "@material-ui/icons/MeetingRoom";
import NotFoundIcon from "@material-ui/icons/PanTool";

import * as URLS from "../constants";
import { Home } from "../pages/Home";
// import { Multimedia } from "../pages/Multimedia";
import { Photo } from "../pages/Photo";
import { Video } from "../pages/Video";
import { Audio } from "../pages/Audio";
import { Profile } from "../pages/Profile";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { NotFound } from "../pages/NotFound";

export interface IRoute {
  key: string;
  isPrivate: boolean;
  isPublic: boolean;
  showInSidebar: boolean;
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
    isPrivate: true,
    isPublic: true,
    showInSidebar: true,
    path: URLS.URL_HOME,
    label: "sidebar.home",
    icon: <HomeIcon />,
    component: <Home />,
    exact: true,
  },
  {
    key: "multimedia",
    isPrivate: true,
    isPublic: true,
    showInSidebar: true,
    // path: URLS.URL_MULTIMEDIA,
    label: "sidebar.multimedia",
    icon: <MultimediaIcon />,
    // component: <Multimedia />,
    items: [
      {
        key: "photo",
        isPrivate: true,
        isPublic: true,
        showInSidebar: true,
        path: URLS.URL_PHOTO,
        label: "sidebar.photo",
        icon: <PhotoIcon />,
        component: <Photo />,
      },
      {
        key: "video",
        isPrivate: true,
        isPublic: true,
        showInSidebar: true,
        path: URLS.URL_VIDEO,
        label: "sidebar.video",
        icon: <VideoIcon />,
        component: <Video />,
      },
      {
        key: "audio",
        isPrivate: true,
        isPublic: true,
        showInSidebar: true,
        path: URLS.URL_AUDIO,
        label: "sidebar.audio",
        icon: <AudioIcon />,
        component: <Audio />,
      },
    ],
  },
  {
    key: "profile",
    isPrivate: true,
    isPublic: false,
    showInSidebar: true,
    path: URLS.URL_PROFILE,
    label: "sidebar.profile",
    icon: <ProfileIcon />,
    component: <Profile />,
  },
  {
    key: "login",
    isPrivate: false,
    isPublic: true,
    showInSidebar: true,
    path: URLS.URL_LOGIN,
    label: "sidebar.login",
    icon: <LoginIcon />,
    component: <Login />,
  },
  {
    key: "logout",
    isPrivate: true,
    isPublic: false,
    showInSidebar: true,
    path: URLS.URL_LOGOUT,
    label: "sidebar.logout",
    icon: <LogoutIcon />,
    component: <Logout />,
  },
  {
    key: "not-found",
    isPrivate: true,
    isPublic: true,
    showInSidebar: false,
    path: URLS.URL_NOT_FOUND,
    label: "sidebar.notFound",
    icon: <NotFoundIcon />,
    component: <NotFound />,
  },
];
