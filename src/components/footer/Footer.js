import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
// import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Fait avec ❤️ par Bienvenue Mulebo")}
        </p> */}
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Thème basé sur{" "}
          <a href="https://github.com/saadpasta/developerFolio" target="_blank" rel="noopener noreferrer">
            DeveloperFolio
          </a>
        </p> */}

        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>© {new Date().getFullYear()} Bienvenue Mulebo. Tous droits réservés.</p>
      </div>
    </Fade>
  );
}
