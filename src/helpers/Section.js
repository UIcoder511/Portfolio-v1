import { Divider } from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";
// import { Box } from "@mui/system";

const SectionComp = styled("div")(({ theme }) => ({
  margin: "30px 0px",
  padding: "30px",
}));

const TitleComp = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: "1.6rem",
  fontFamily: "Josefin sans",
  textTransform: "uppercase",
  textAlign: "center",
  lineHeight: 1,
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
}));

const BodyComp = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
}));

const Section = ({
  title,
  children,
  titleSx = {},
  dividerSx = {},
  bodySx = {},
}) => {
  return (
    <SectionComp>
      <TitleComp sx={titleSx}>{title}</TitleComp>
      <Divider
        sx={{
          //   padding: "10px",
          backgroundColor: (theme) => theme.palette.primary.main,
          height: "3px",
          margin: "10px 0px 20px 0px",
          ...dividerSx,
        }}
      />

      <BodyComp sx={bodySx}>{children}</BodyComp>
    </SectionComp>
  );
};

export default Section;
