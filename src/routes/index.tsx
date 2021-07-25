import React from "react";
import { Link } from "react-router-dom";
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
    component: <Home />,
  },
  {
    key: "multimedia",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    // path: URLS.MULTIMEDIA,
    label: "sidebar.multimedia",
    icon: <MultimediaIcon />,
    // component: <Multimedia />,
    items: [
      {
        key: "photos",
        showPrivate: true,
        showPublic: true,
        showInSidebar: true,
        path: URLS.PHOTOS,
        label: "sidebar.photos",
        icon: <PhotosIcon />,
        component: <Photos />,
        items: [
          {
            key: "public-photos",
            showPrivate: true,
            showPublic: true,
            showInSidebar: true,
            path: URLS.PHOTOS_PUBLIC,
            label: "sidebar.publicPhotos",
            icon: <PublicPhotosIcon />,
            component: <PublicPhotos />,
          },
          {
            key: "private-photos",
            showPrivate: true,
            showPublic: false,
            showInSidebar: true,
            path: URLS.PHOTOS_PRIVATE,
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
        path: URLS.VIDEOS,
        label: "sidebar.videos",
        icon: <VideoIcon />,
        component: <Video />,
      },
      {
        key: "audios",
        showPrivate: true,
        showPublic: true,
        showInSidebar: true,
        path: URLS.AUDIOS,
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
    // path: URLS.PROFILE,
    label: "sidebar.profile",
    icon: <ProfileIcon />,
    // component: <Profile />,
    items: [
      {
        key: "inbox",
        showPrivate: true,
        showPublic: false,
        showInSidebar: true,
        path: URLS.INBOX,
        label: "sidebar.inbox",
        icon: <InboxIcon />,
        component: <Inbox />,
      },
      {
        key: "services",
        showPrivate: true,
        showPublic: false,
        showInSidebar: true,
        path: URLS.SERVICES,
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
    key: "template",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    path: URLS.TEMPLATE,
    label: "sidebar.template",
    icon: <TemplateIcon />,
    template: () => {
      return (
        <Link
          to={URLS.HOME}
          style={{
            padding: "1rem",
            color: "#ffffff",
            textDecoration: "none",
          }}
        >
          Go to Home
        </Link>
      );
    },
  },
  {
    key: "login",
    showPrivate: false,
    showPublic: true,
    showInSidebar: true,
    path: URLS.LOGIN,
    label: "sidebar.login",
    icon: <LoginIcon />,
    component: <Login />,
  },
  {
    key: "logout",
    showPrivate: true,
    showPublic: false,
    showInSidebar: true,
    path: URLS.LOGOUT,
    label: "sidebar.logout",
    icon: <LogoutIcon />,
    component: <Logout />,
  },
  {
    key: "not-found",
    showPrivate: true,
    showPublic: true,
    showInSidebar: false,
    path: URLS.NOT_FOUND,
    label: "sidebar.notFound",
    icon: <NotFoundIcon />,
    component: <NotFound />,
  },
];
