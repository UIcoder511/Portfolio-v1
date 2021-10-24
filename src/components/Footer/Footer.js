import { Box } from "@mui/system";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import { ReactComponent as BehanceSVG } from "../../assets/icons/behance.svg";
import { IconButton } from "@mui/material";

const links = [
  {
    Icon: LinkedInIcon,
    link: "linkedin.com/in/umangpatel511/",
  },
  {
    Icon: GitHubIcon,
    link: "https://github.com/UIcoder511",
  },
  {
    Icon: BehanceSVG,
    link: "https://www.behance.net/umangpatel",
  },
];

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        padding: "20px",
        backgroundColor: (theme) => theme.palette.primary.main,
        color: "#fff",
        fontFamily: "Josefin sans",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ fontSize: "1.1rem", marginBottom: "10px" }}>
        FEEL FREE TO CONTACT
      </Box>
      <Box sx={{ display: "flex", gap: "20px", margin: "10px" }}>
        {links.map((link) => (
          <Box
            component="a"
            sx={{
              "&:hover": { opacity: 0.8 },
            }}
            target="_blank"
            href={link.link}
          >
            <link.Icon
              style={{
                fontSize: "1.5rem",
                width: "1em",
                height: "1em",
                color: "#fff",
              }}
            />
          </Box>
        ))}
      </Box>
      <Box
        component="a"
        href="mailto:umang25919998@gmail.com"
        sx={{ color: "#fff", margin: "8px", "&:hover": { opacity: 0.8 } }}
      >
        umang25919998@gmail.com
      </Box>
      <Box
        sx={{
          marginTop: "10px",
          fontSize: "0.8rem",
        }}
      >
        Last updated on October 2021
      </Box>
    </Box>
  );
};

export default Footer;
