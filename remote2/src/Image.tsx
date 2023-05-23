import React from "react";

import MenuSvg from "../assets/MenuSVG.jsx";
import MenuBar from "./MenuBar";
import AvatarMenu from "./AvatarMenu"



const Image: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <div
      style={{
        width: "500px",
        padding: "1rem",
        borderRadius: "0.25rem",
        border: "4px dashed #4169e1",
      }}
    >
      <h2>Remote 2: Test</h2>
      <p>
        Hey there! This is the image component from remote2. It is being
        rendered server-side.
      </p>
      <div onClick={() => setOpenMenu(!openMenu)}>
        <MenuSvg  />
      </div>
      {openMenu && <MenuBar />}
      <AvatarMenu />
    </div>
  );
};

export default Image;
