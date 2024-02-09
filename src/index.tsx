import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createHashRouter, RouterProvider, Outlet } from "react-router-dom";
import { About, Contact, ErrorPage, Home, Menu, Work } from "./pages";

const router = createHashRouter([
  {
    path: "/",
    element: <MenuWrapper />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function MenuWrapper() {
  return (
    <div>
      <Menu />
      <Outlet />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
