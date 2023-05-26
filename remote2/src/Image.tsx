import React from "react";
import MenuSvg from "../assets/MenuSVG.jsx";
import MenuBar from "./MenuBar";
import AvatarMenu from "./AvatarMenu"

const Image: React.FC = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  function handler (){
    console.log("Hola")
  }

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
      </p>
      <div onClick={() => setOpenMenu(!openMenu)}>
        <MenuSvg  />
      </div>
      {openMenu && <MenuBar />}
    </div>
  );
};

export default Image;
