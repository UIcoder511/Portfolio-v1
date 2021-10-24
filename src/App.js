import React, { useEffect, useState } from "react";
import "./App.css";
import Artworks from "./components/Artworks/Artworks";
import Footer from "./components/Footer/Footer";
import Front from "./components/Front/Front";
import Logos from "./components/Logos/Logos";
import Nav from "./components/Nav/Nav";
import UIDesigns from "./components/UIDesigns/UIDesigns";
import FullModal from "./ui/FullModal";
import ScrollToTopBtn from "./ui/ScrollToTopBtn";

// export const ScrollContext = React.createContext();

function App() {
  const [activeLink, setactiveLink] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);

  const [modal, setModal] = useState({ show: false, src: "" });

  useEffect(() => {
    document.title = "Umang Patel (v1)";
    document.addEventListener("scroll", () => {
      const transNav = window.scrollY < 100;
      // console.log(window.scrollY, transNav);
      // if (transNav !== showTransNav) {
      setIsScrolled(!transNav);
      // }
    });
  }, []);

  return (
    // <ScrollContext.Provider value={{ isScrolled, setModal }}>
    <div className="App">
      <Nav activeLink={activeLink} isScrolled={isScrolled} />
      <Front isScrolled={isScrolled} />
      <Artworks setModal={setModal} />
      <Logos setModal={setModal} />
      <UIDesigns setModal={setModal} />
      <Footer />
      <FullModal
        src={modal.src}
        open={modal.show}
        handleClose={() => setModal({ show: false, src: "" })}
      />
      {isScrolled && <ScrollToTopBtn />}
    </div>
    // </ScrollContext.Provider>
  );
}

export default App;
