## Index

- [Intro](#intro)
- [Demo](#demo)
- [Features](#features)
- [Usage](#usage)

## Intro

Basic React, Redux and MUI authentication and routing.

## Demo

[Live demo](http://auth-n-route.iding.ir)

## Features

It supports:

- Nested sidebar items
- Authenticated routes
- Custom sidebar actions
- Custom Sidebar components
- Custom Page templates
- URL params

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
    path: URLS.SCHEDULE,
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
    path: URLS.THEME,
    custom: <ThemeSwitch />,
  },
  {
    key: "settings",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    path: URLS.SETTINGS,
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
    key: "blog-home",
    showPrivate: true,
    showPublic: true,
    showInSidebar: true,
    exact: true,
    path: URLS.BLOG_HOME,
    label: "sidebar.blog",
    icon: <BlogIcon />,
    contents: <BlogHome />,
  },
  {
    key: "blog-page",
    showPrivate: true,
    showPublic: true,
    showInSidebar: false,
    exact: true,
    path: URLS.BLOG_PAGE,
    label: "sidebar.blog",
    icon: <BlogIcon />,
    contents: <BlogPage />,
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
```
