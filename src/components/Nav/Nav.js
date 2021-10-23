import { styled } from "@mui/system";
import React, { useContext, useEffect, useState } from "react";
import { ScrollContext } from "../../App";
import Logo from "./Logo";

const navLinks = ["About", "Work", "Contact me"];

const NavComp = styled("nav")(({ theme }) => ({
  display: "flex",
  height: "80px",
  // padding: theme.spacing(1),
  justifyContent: "center",
  // justifyContent: "space-between",
  boxShadow: theme.shadows[0],
  position: "fixed",
  width: "100%",
  zIndex: 1,
  "&.underNav": {
    backgroundColor: "#fff",
    boxShadow: theme.shadows[2],
  },
}));

const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  listStyle: "none",
  gap: "5px",
  margin: 0,
  // padding: theme.spacing(1),
}));

const Li = styled("li", {
  shouldForwardProp: (props) => props !== "isUnderNav",
})(({ theme, ...props }) => ({
  padding: theme.spacing(1.6),
  fontSize: "1.2rem",
  backgroundColor: "transparent",
  color: props.isUnderNav ? "#fff" : theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.primary.main,
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  "&.active": {
    color: theme.palette.primary.main,
    backgroundColor: "#fff",
  },
}));

const Nav = ({ activeLink, isScrolled }) => {
  //  .log(context.isScrolled);

  return (
    <NavComp className={isScrolled && "underNav"}>
      <Logo isScrolled={isScrolled} />
      {/* <Ul>
        {navLinks.map((link) => (
          <Li
            key={link}
            isUnderNav={!context.isScrolled}
            className={activeLink === link ? "active" : ""}
          >
            {" "}
            {link}
          </Li>
        ))}
      </Ul> */}
    </NavComp>
  );
};

export default Nav;
