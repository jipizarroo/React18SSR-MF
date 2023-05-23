import React from 'react';
import Image from "../Image"
import EditAvatar from '../EditAvatar';

export const routes = [
  {
    path: "/",
    element: <Image />,
  },
  {
    path: "/edit",
    element: <EditAvatar />
  }
];