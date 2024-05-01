import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Report from "./pages/Report";
import FoodDetails from "./pages/FoodDetails";

const Food = lazy(() => import("./pages/Food"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Food />
          </Suspense>
        ),
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/food/:foodId",
        element: <FoodDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
