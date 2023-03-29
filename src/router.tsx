import { createBrowserRouter } from "react-router-dom";

import Landing from "@/pages/Landing";
import AppList from "@/pages/AppList";
import AppCreationProcess from "@/pages/AppCreationProcess";
import AppManagement, { PageType as AppManagementPageType  } from "@/pages/AppManagement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },{
    path: "/app",
    children: [
      {
        path: "list",
        element: <AppList />,
      },
      {
        path: "management",
        element: <AppManagement pageType={AppManagementPageType.CREATE} />,
      },
      {
        path: "management/:id",
        element: <AppManagement pageType={AppManagementPageType.UPDATE} />,
      },
      {
        path: "creation-process",
        element: <AppCreationProcess />
      }
    ]
  }
]);
