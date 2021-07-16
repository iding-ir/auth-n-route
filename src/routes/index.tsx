import React, { ReactNode } from "react";
import HomeIcon from "@material-ui/icons/Home";
import MultimediaIcon from "@material-ui/icons/PermMedia";
import PhotosIcon from "@material-ui/icons/PhotoCamera";
import PublicPhotosIcon from "@material-ui/icons/LockOpen";
import PrivatePhotosIcon from "@material-ui/icons/Lock";
import VideoIcon from "@material-ui/icons/Movie";
import AudioIcon from "@material-ui/icons/Audiotrack";
import ProfileIcon from "@material-ui/icons/Person";
import InboxIcon from "@material-ui/icons/Email";
import ServicesIcon from "@material-ui/icons/Assessment";
import ScheduleIcon from "@material-ui/icons/Alarm";
import LoginIcon from "@material-ui/icons/AccountBox";
import LogoutIcon from "@material-ui/icons/MeetingRoom";
import NotFoundIcon from "@material-ui/icons/PanTool";

import * as URLS from "../constants/urls";
import { Home } from "../pages/Home";
import { Multimedia } from "../pages/Multimedia";
import { Photos } from "../pages/Multimedia/Photos";
import { PublicPhotos } from "../pages/Multimedia/Photos/Public";
import { PrivatePhotos } from "../pages/Multimedia/Photos/Private";
import { Video } from "../pages/Multimedia/Videos";
import { Audio } from "../pages/Multimedia/Audios";
import { Profile } from "../pages/Profile";
import { Inbox } from "../pages/Profile/Inbox";
import { Services } from "../pages/Profile/Services";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { NotFound } from "../pages/NotFound";
import { ThemeSwitch } from "../components/ThemeSwitch";
import { SettingsModal } from "../components/SettingsModal";

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
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    exact: true,
    path: URLS.URL_HOME,
    label: "sidebar.home",
    icon: <HomeIcon />,
    component: <Home />,
  },
  {
    key: "multimedia",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    // path: URLS.URL_MULTIMEDIA,
    label: "sidebar.multimedia",
    icon: <MultimediaIcon />,
    // component: <Multimedia />,
    items: [
      {
        key: "photos",
        showPrivate: true,
        showPublic: true,
        showInSidebar: true,
        path: URLS.URL_PHOTOS,
        label: "sidebar.photos",
        icon: <PhotosIcon />,
        component: <Photos />,
        items: [
          {
            key: "public-photos",
            showPrivate: true,
            showPublic: true,
            showInSidebar: true,
            path: URLS.URL_PHOTOS_PUBLIC,
            label: "sidebar.publicPhotos",
            icon: <PublicPhotosIcon />,
            component: <PublicPhotos />,
          },
          {
            key: "private-photos",
            showPrivate: true,
            showPublic: false,
            showInSidebar: true,
            path: URLS.URL_PHOTOS_PRIVATE,
            label: "sidebar.privatePhotos",
            icon: <PrivatePhotosIcon />,
            component: <PrivatePhotos />,
          },
        ],
      },
      {
        key: "videos",
        showPrivate: true,
        showPublic: true,
        showInSidebar: true,
        path: URLS.URL_VIDEOS,
        label: "sidebar.videos",
        icon: <VideoIcon />,
        component: <Video />,
      },
      {
        key: "audios",
        showPrivate: true,
        showPublic: true,
        showInSidebar: true,
        path: URLS.URL_AUDIOS,
        label: "sidebar.audios",
        icon: <AudioIcon />,
        component: <Audio />,
      },
    ],
  },
  {
    key: "profile",
    showPrivate: true,
    showPublic: false,
    showInSidebar: true,
    // path: URLS.URL_PROFILE,
    label: "sidebar.profile",
    icon: <ProfileIcon />,
    // component: <Profile />,
    items: [
      {
        key: "inbox",
        showPrivate: true,
        showPublic: false,
        showInSidebar: true,
        path: URLS.URL_INBOX,
        label: "sidebar.inbox",
        icon: <InboxIcon />,
        component: <Inbox />,
      },
      {
        key: "services",
        showPrivate: true,
        showPublic: false,
        showInSidebar: true,
        path: URLS.URL_SERVICES,
        label: "sidebar.services",
        icon: <ServicesIcon />,
        component: <Services />,
      },
    ],
  },
  {
    key: "schedule",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    label: "sidebar.schedule",
    icon: <ScheduleIcon />,
    action: () => {
      alert("Custom action");
    },
  },
  {
    key: "theme",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    custom: <ThemeSwitch />,
  },
  {
    key: "settings",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    custom: <SettingsModal />,
  },
  {
    key: "login",
    showPrivate: false,
    showPublic: true,
    showInSidebar: true,
    path: URLS.URL_LOGIN,
    label: "sidebar.login",
    icon: <LoginIcon />,
    component: <Login />,
  },
  {
    key: "logout",
    showPrivate: true,
    showPublic: false,
    showInSidebar: true,
    path: URLS.URL_LOGOUT,
    label: "sidebar.logout",
    icon: <LogoutIcon />,
    component: <Logout />,
  },
  {
    key: "not-found",
    showPrivate: true,
    showPublic: true,
    showInSidebar: false,
    path: URLS.URL_NOT_FOUND,
    label: "sidebar.notFound",
    icon: <NotFoundIcon />,
    component: <NotFound />,
  },
];

export const iRoute: IRoute | IRouteGroup = routes[0];

export const flatRoutes = (routes: IRoutes) => {
  let result: IRoute[] = [];

  routes.forEach((route) => {
    result =
      "items" in route
        ? [...result, ...flatRoutes(route.items)]
        : [...result, route];
  });

  return result;
};
