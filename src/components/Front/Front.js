import { styled } from "@mui/system";
import React from "react";

import BG from "../../assets/imgs/back3.png";

import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import { Chip, Stack } from "@mui/material";
import MouseDown from "../../ui/MouseDown";

const Root = styled("div")(({ theme }) => ({
  position: "relative",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url("${BG}")`,
  backgroundSize: "100% 100%",
  backgroundRepeat: "no-repeat",
  "& .text": {
    fontSize: "1.4rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.8rem",
    },
  },
  filter: "grayscale(1)",
  animationName: "grayed",
  animationDuration: "5s",
  animationIterationCount: "infinite",
  "@keyframes grayed": {
    "0%": {
      filter: "grayscale(0)",
    },
    "50%": {
      filter: "grayscale(1)",
    },
    "100%": {
      filter: "grayscale(0)",
    },
  },
}));

const Name = styled("div")(({ theme }) => ({
  fontFamily: "Josefin Sans",
  fontSize: "5rem",
  fontWeight: 300,
  color: "#fff",
  lineHeight: 1,
  textAlign: "center",
  margin: "10px 0px",
  [theme.breakpoints.up("md")]: {
    fontSize: "7rem",
    margin: "20px 0px",
  },
}));

const Profile = styled(Stack)(({ theme }) => ({
  display: "flex",
  gap: "5px",

  "& .muiChip": {
    fontFamily: "Poppins",
    backgroundColor: "#00000030",
    fontSize: "0.8rem",
    fontWeight: 500,
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
    // padding:'10px'
  },
  "& .MuiChip-icon": {
    color: "#000000 !important",
  },
}));

const Front = ({ isScrolled }) => {
  return (
    <Root>
      <div className={"text"}>Hey I'm</div>
      <Name>UMANG PATEL</Name>
      <Profile direction="row" spacing={1}>
        <Chip
          icon={<BrushIcon htmlColor="#ff2560" />}
          className="muiChip"
          label="Artist"
        />
        <Chip
          icon={<DesignServicesIcon />}
          className="muiChip"
          label="UI Designer"
        />
        <Chip icon={<CodeIcon />} className="muiChip" label="Coder" />
      </Profile>
      <MouseDown isScrolled={isScrolled} />
    </Root>
  );
};

export default Front;
