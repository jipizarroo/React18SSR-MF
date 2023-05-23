// import * as React from "react";
// import * as ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Image from "./Image";
// import EditAvatar from "./EditAvatar"

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Image />,
//   },
//   {
//     path:"edit",
//     element: <EditAvatar />
//   }
// ]);

// const App = () => <Image />;

// console.log(router)

// ReactDOM.createRoot(document.getElementById("remote2")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { createRouter } from "./routing/router-factory";

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: 'memory' | 'browser';
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  const root = createRoot(mountPoint);
  root.render(<RouterProvider router={router} />);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };