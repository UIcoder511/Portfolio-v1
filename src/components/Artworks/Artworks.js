import React from "react";
import { allDrawings } from "../../helpers/artworks";
import Section from "../../helpers/Section";

import { styled } from "@mui/material/styles";

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

const Artwork = ({ src, onClick }) => (
  <Img src={src} onClick={() => onClick({ src, show: true })} />
);

const Artworks = ({ setModal }) => {
  return (
    <Section
      title="Artworks"
      titleSx={{
        color: "#000000aa",
      }}
      dividerSx={{
        backgroundColor: "#000000aa",
      }}
    >
      {allDrawings.map((art, i) => (
        <Artwork src={art.url} key={i} onClick={setModal} />
      ))}
    </Section>
  );
};

export default Artworks;
