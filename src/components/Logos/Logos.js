import React from "react";

import Section from "../../helpers/Section";

import { styled } from "@mui/material/styles";
import { allLOGOS } from "../../helpers/logos";

const Img = styled("img")(({ theme }) => ({
  height: "250px",
  width: "250px",
  objectFit: "cover",
  boxShadow: theme.shadows[3],
  transition: "0.3s",
  cursor: "pointer",
  "&:hover": {
    boxShadow: "0px 0px 10px 0px #dd2600",
  },
}));

const Logo = ({ src, openUrl, onClick }) => (
  <Img src={src} onClick={() => onClick({ src: openUrl, show: true })} />
);

const Logos = ({ setModal }) => {
  return (
    <Section title="Logos">
      {allLOGOS.map((art, i) => (
        <Logo src={art.url} openUrl={art.openUrl} key={i} onClick={setModal} />
      ))}
    </Section>
  );
};

export default Logos;
