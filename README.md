## Index

- [Intro](#intro)
- [Demo](#demo)
- [Usage](#usage)

## Intro

Basic React, Redux and MUI authentication and routing.

## Demo

[Live demo](http://auth-n-route.iding.ir)

## Usage

It converts the object below to an MUI dashboard.

```
src\routes\routes.tsx
```

```
const routes: IRoutes = [
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
```
