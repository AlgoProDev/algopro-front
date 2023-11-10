import React from "react";
import styles from "@/componentStyles/footer.module.css";
import SquareLogo from "@/assets/decorations/squareLogo.svg";
import Certificate from "@/assets/decorations/certificate.svg";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_legal}>
        <div>
          <p>
            <a href="">Privacy Policy</a>
            &nbsp;|&nbsp;
            <a href="">Terms & Conditions</a>
          </p>
        </div>
        <p>All Copyright (C) 2023 Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
