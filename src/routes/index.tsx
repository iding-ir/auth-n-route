import React, { ReactNode } from "react";
import HomeIcon from "@material-ui/icons/Home";
import MultimediaIcon from "@material-ui/icons/PermMedia";
import PhotoIcon from "@material-ui/icons/PhotoCamera";
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
// import { Multimedia } from "../pages/Multimedia";
import { Photo } from "../pages/Photo";
import { Video } from "../pages/Video";
import { Audio } from "../pages/Audio";
// import { Profile } from "../pages/Profile";
import { Inbox } from "../pages/Inbox";
import { Services } from "../pages/Services";
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
        key: "photo",
        showPrivate: true,
        showPublic: true,
        showInSidebar: true,
        path: URLS.URL_PHOTO,
        label: "sidebar.photo",
        icon: <PhotoIcon />,
        component: <Photo />,
      },
      {
        key: "video",
        showPrivate: true,
        showPublic: true,
        showInSidebar: true,
        path: URLS.URL_VIDEO,
        label: "sidebar.video",
        icon: <VideoIcon />,
        component: <Video />,
      },
      {
        key: "audio",
        showPrivate: true,
        showPublic: true,
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
      alert();
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
