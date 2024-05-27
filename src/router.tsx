/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const ExamplePage = lazy(() => import('./Pages/index'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <ExamplePage />,
  },
]);

export default router;