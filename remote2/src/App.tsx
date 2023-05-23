import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Image from "./Image";
import EditAvatar from "./EditAvatar"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Image />,
  },
  {
    path:"edit",
    element: <EditAvatar />
  }
]);

const App = () => <Image />;

console.log(router)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
