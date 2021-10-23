import { Box } from "@mui/system";
import React from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import IconButton from "@mui/material/IconButton";

const ScrollToTopBtn = () => {
  return (
    <IconButton
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
          /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
      }}
      style={{ backgroundColor: "#00000030" }}
      sx={{
        cursor: "pointer",
        position: "fixed",
        bottom: "10px",
        right: "10px",
        color: "#000",
      }}
    >
      <ArrowUpwardIcon fontSize="large" />
    </IconButton>
  );
};

export default ScrollToTopBtn;
