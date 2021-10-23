import React from "react";

import Section from "../../helpers/Section";

import { styled } from "@mui/material/styles";
// import { allLOGOS } from "../../helpers/logos";
import { allUIs } from "../../helpers/ui";

const Img = styled("img")(({ theme }) => ({
  height: "auto",
  width: "100%",
  maxWidth: "600px",
  objectFit: "cover",
  boxShadow: theme.shadows[3],
  transition: "0.3s",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0px 0px 10px 0px #dd2600",
  },
}));

const UI = ({ src, openUrl, onClick }) => (
  <Img src={src} onClick={() => onClick({ src: openUrl, show: true })} />
);

const UIDesigns = ({ setModal }) => {
  return (
    <Section
      title="UI Designs"
      bodyStyles={{ flexDirection: "column", alignItems: "center" }}
    >
      {allUIs.map((art, i) => (
        <UI src={art.url} openUrl={art.openUrl} key={i} onClick={setModal} />
      ))}
    </Section>
  );
};

export default UIDesigns;
