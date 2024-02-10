import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createHashRouter,
  RouterProvider,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { About, Contact, ErrorPage, Home, Menu, Work } from "./pages";
import { AnimatePresence } from "framer-motion";

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

const AnimatedOutlet: React.FC = () => {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
};

function MenuWrapper() {
  const location = useLocation();
  return (
    <div>
      <Menu />
      <AnimatePresence>
        <div key={location.pathname}>
          <AnimatedOutlet />
        </div>
      </AnimatePresence>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
