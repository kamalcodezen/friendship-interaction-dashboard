import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";
import TimeLine from "../components/timeline/TimeLine";
import Stats from "../components/stats/Stats";
import FriendsDetails from "../pages/friendsDetails/FriendsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        // path : "/"
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <TimeLine />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/friendsDetails/:id",
        element: <FriendsDetails />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
