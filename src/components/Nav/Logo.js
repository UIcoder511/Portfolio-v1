import { styled } from "@mui/system";
import React from "react";

import logourl from "../../assets/LOGOS/logo.png";

// const Name = styled("div")(({ theme }) => ({
//   fontFamily: "Josefin Sans",
//   fontSize: "7rem",
//   fontWeight: 300,
//   color: "#fff",
//   lineHeight: 1.4,
// }));

const Root = styled("div", {
  shouldForwardProp: (prop) => prop !== "isScrolled",
})(({ theme, ...rest }) => ({
  // backgroundColor: rest.isScrolled ? "transparent" : "#000",
  padding: "10px",
  display: "flex",
  // cursor: "pointer",
  alignItems: "center",
  justifyContent: "center",
  "& img": {
    height: "50px",
    width: "auto",
    filter: rest.isScrolled ? "none" : "brightness(0) invert(1)",
  },
  // clipPath:
  //   "polygon(0 0, 100% 0, 100% 50%, 100% 50%, 70% 100%, 30% 100%, 0% 50%, 0% 30%)",
  // width: "100%",
}));

const Logo = ({ isScrolled }) => {
  return (
    <Root
      isScrolled={isScrolled}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
          /* you can also use 'auto' behaviour
           in place of 'smooth' */
        })
      }
    >
      <img src={logourl} />
    </Root>
  );
};

export default Logo;
