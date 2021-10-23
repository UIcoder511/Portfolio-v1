import React from "react";
import CloseIcon from "@mui/icons-material/Close";

import IconButton from "@mui/material/IconButton";
import Modal from "react-modal";
import { styled } from "@mui/material/styles";

const Img = styled("img")(({ theme }) => ({
  width: "100%",
}));

const FullModal = ({ src, open, handleClose }) => {
  return (
    <Modal
      isOpen={open}
      ariaHideApp={false}
      onAfterOpen={() => {
        document.body.style.overflow = "hidden";
      }}
      onAfterClose={() => {
        document.body.style.overflow = "auto";
      }}
      onRequestClose={handleClose}
      style={{
        overlay: {
          zIndex: 2,
          backgroundColor: "#00000090",

          backdropFilter: "blur(10px)",
          //   display: "flex",
        },
        content: {
          padding: "0px",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          zIndex: 2,
          margin: "auto",
          maxWidth: "700px",
          maxHeight: "100vh",
          height: "auto",
          height: "max-content",
          //   display: "flex",
          //   position: "relative",
          // top: '50%',
          // left: '50%',
          // right: 'auto',
          // bottom: 'auto',
          // marginRight: '-50%',
          // transform: 'translate(-50%, -50%)',
        },
      }}
      contentLabel="Example Modal"
    >
      <IconButton
        sx={{ position: "fixed", right: 0, top: 0, zIndex: 2 }}
        style={{ backgroundColor: "#00000080", borderRadius: 0 }}
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        disableTouchRipple
      >
        <CloseIcon
          sx={{
            fontSize: { xs: "1.5rem", md: "2.1rem" },
          }}
          style={{ color: "#fff" }}
        />
      </IconButton>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Img src={src} />
      </div>
    </Modal>
  );
};

export default FullModal;
