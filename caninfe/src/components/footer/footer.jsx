import React from "react";
import logo from "../../assets/images/logo.PNG";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo del sitio web" className="footer-logo" />
      <p className="footer" style={{ textAlign: "center" }}>
        © 2024 BreastHub. Todos los derechos reservados.
      </p>
      <p className="footer" style={{ textAlign: "center" }}>
        Desarrollado por{" "}
        <span>
          <a
            href="https://lucho-netizen.github.io/SoftDevCode/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SoftDevCode S.A.S
          </a>
        </span>
      </p>
      <div className="footer-social-icons">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="facebook"></i>
        </a>
        <a
          href="https://www.twitter.com/tusitio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://www.instagram.com/tusitio"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/tunombre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
