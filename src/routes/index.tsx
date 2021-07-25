import React from "react";
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
import TemplateIcon from "@material-ui/icons/Pages";
import LoginIcon from "@material-ui/icons/AccountBox";
import LogoutIcon from "@material-ui/icons/MeetingRoom";
import NotFoundIcon from "@material-ui/icons/PanTool";

import * as URLS from "../constants/urls";
import { IRoutes } from "./index.d";
import { Home } from "../pages/Home";
// import { Multimedia } from "../pages/Multimedia";
import { Photos } from "../pages/Multimedia/Photos";
import { PublicPhotos } from "../pages/Multimedia/Photos/Public";
import { PrivatePhotos } from "../pages/Multimedia/Photos/Private";
import { Video } from "../pages/Multimedia/Videos";
import { Audio } from "../pages/Multimedia/Audios";
// import { Profile } from "../pages/Profile";
import { Inbox } from "../pages/Profile/Inbox";
import { Services } from "../pages/Profile/Services";
import { Template } from "../pages/Template";
import { Custom } from "../templates/Custom";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { NotFound } from "../pages/NotFound";
import { ThemeSwitch } from "../components/ThemeSwitch";
import { SettingsModal } from "../components/SettingsModal";

export const routes: IRoutes = [
  {
    key: "home",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    exact: true,
    path: URLS.HOME,
    label: "sidebar.home",
    icon: <HomeIcon />,
    contents: <Home />,
  },
  {
    key: "multimedia",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    // path: URLS.MULTIMEDIA,
    label: "sidebar.multimedia",
    icon: <MultimediaIcon />,
    // contents: <Multimedia />,
    items: [
      {
        key: "photos",
        showPrivate: true,
        showPublic: true,
        showInSidebar: true,
        path: URLS.PHOTOS,
        label: "sidebar.photos",
        icon: <PhotosIcon />,
        contents: <Photos />,
        items: [
          {
            key: "public-photos",
            showPrivate: true,
            showPublic: true,
            showInSidebar: true,
            path: URLS.PHOTOS_PUBLIC,
            label: "sidebar.publicPhotos",
            icon: <PublicPhotosIcon />,
            contents: <PublicPhotos />,
          },
          {
            key: "private-photos",
            showPrivate: true,
            showPublic: false,
            showInSidebar: true,
            path: URLS.PHOTOS_PRIVATE,
            label: "sidebar.privatePhotos",
            icon: <PrivatePhotosIcon />,
            contents: <PrivatePhotos />,
          },
        ],
      },
      {
        key: "videos",
        showPrivate: true,
        showPublic: true,
        showInSidebar: true,
        path: URLS.VIDEOS,
        label: "sidebar.videos",
        icon: <VideoIcon />,
        contents: <Video />,
      },
      {
        key: "audios",
        showPrivate: true,
        showPublic: true,
        showInSidebar: true,
        path: URLS.AUDIOS,
        label: "sidebar.audios",
        icon: <AudioIcon />,
        contents: <Audio />,
      },
    ],
  },
  {
    key: "profile",
    showPrivate: true,
    showPublic: false,
    showInSidebar: true,
    // path: URLS.PROFILE,
    label: "sidebar.profile",
    icon: <ProfileIcon />,
    // contents: <Profile />,
    items: [
      {
        key: "inbox",
        showPrivate: true,
        showPublic: false,
        showInSidebar: true,
        path: URLS.INBOX,
        label: "sidebar.inbox",
        icon: <InboxIcon />,
        contents: <Inbox />,
      },
      {
        key: "services",
        showPrivate: true,
        showPublic: false,
        showInSidebar: true,
        path: URLS.SERVICES,
        label: "sidebar.services",
        icon: <ServicesIcon />,
        contents: <Services />,
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
    key: "template",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    path: URLS.TEMPLATE,
    label: "sidebar.template",
    icon: <TemplateIcon />,
    contents: <Template />,
    template: Custom,
  },
  {
    key: "login",
    showPrivate: false,
    showPublic: true,
    showInSidebar: true,
    path: URLS.LOGIN,
    label: "sidebar.login",
    icon: <LoginIcon />,
    contents: <Login />,
  },
  {
    key: "logout",
    showPrivate: true,
    showPublic: false,
    showInSidebar: true,
    path: URLS.LOGOUT,
    label: "sidebar.logout",
    icon: <LogoutIcon />,
    contents: <Logout />,
  },
  {
    key: "not-found",
    showPrivate: true,
    showPublic: true,
    showInSidebar: false,
    path: URLS.NOT_FOUND,
    label: "sidebar.notFound",
    icon: <NotFoundIcon />,
    contents: <NotFound />,
  },
];
