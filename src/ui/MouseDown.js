import React, { useContext } from "react";

import { styled } from "@mui/system";
// import { ScrollContext } from "../App";

const Mouse = styled("div", {
  shouldForwardProp: (prop) => prop !== "show",
})(({ theme, ...rest }) => ({
  bottom: "20px",
  width: "40px",
  height: "70px",
  border: "2px solid #111",
  borderRadius: "60px",
  position: "absolute",
  opacity: rest.show ? 1 : 0,
  transition: "100ms opacity  ease-in-out",
  "&::before": {
    content: "''",
    width: "12px",
    height: "12px",
    position: "absolute",
    top: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#111",
    borderRadius: "50%",
    opacity: 1,
    animation: "wheel 2s infinite",
    WebkitAnimation: "wheel 2s infinite",
  },

  "@keyframes wheel": { to: { opacity: 0, top: "60px" } },
}));

const MouseDown = ({ isScrolled }) => {
  // const context = useContext(ScrollContext);

  return <Mouse show={!isScrolled} />;
};

export default MouseDown;
