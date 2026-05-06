import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import NotFoundPage from "../pages/notFoundPage/NotFoundPage";

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
    ],
    errorElement: <NotFoundPage />,
  },
]);
