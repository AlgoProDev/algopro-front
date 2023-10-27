import React from "react";
import styles from "@/componentStyles/footer.module.css";
import SquareLogo from "@/assets/decorations/squareLogo.svg";
import Certificate from "@/assets/decorations/certificate.svg";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_information}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium
        </p>
        <SquareLogo className={styles.footer_logo} />
      </div>
      <div className={styles.footer_link_container}>
        <div>
          <h3>
            <span>&#9632;&nbsp;&nbsp;&nbsp;</span>
            MEMBERSHIP CERTIFICATE
          </h3>
          <Certificate className={styles.footer_cert} />
        </div>
        <div>
          <h3>
            <span>&#9632;&nbsp;&nbsp;&nbsp;</span>
            CATEGORIES
          </h3>
          <div>
            <p>
              <a href="">Text One and Text</a>
            </p>
            <p>
              <a href="">Text Two</a>
            </p>
            <p>
              <a href="">Text Three some</a>
            </p>
            <p>
              <a href="">Text Four Lo</a>
            </p>
            <p>
              <a href="">Text Five Lorem Ipsum</a>
            </p>
          </div>
        </div>
        <div>
          <h3>
            <span>&#9632;&nbsp;&nbsp;&nbsp;</span>
            QUICK ACCESS
          </h3>
          <div>
            <p>
              <a href="">Text One and Text</a>
            </p>
            <p>
              <a href="">Text Two</a>
            </p>
            <p>
              <a href="">Text Three some</a>
            </p>
            <p>
              <a href="">Text Four Lo</a>
            </p>
            <p>
              <a href="">Text Five Lorem Ipsum</a>
            </p>
          </div>
        </div>
        <div>
          <h3>
            <span>&#9632;&nbsp;&nbsp;&nbsp;</span>
            QUICK ACCESS
          </h3>
          <div>
            <p>
              <a href="">Text One and Text</a>
            </p>
            <p>
              <a href="">Text Two</a>
            </p>
            <p>
              <a href="">Text Three some</a>
            </p>
            <p>
              <a href="">Text Four Lo</a>
            </p>
            <p>
              <a href="">Text Five Lorem Ipsum</a>
            </p>
          </div>
        </div>
      </div>

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
