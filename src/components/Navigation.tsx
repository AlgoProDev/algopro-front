"use client";
import React, { useState, useEffect } from "react";
import LogoAcademy from "../assets/icons/LogoAcademy.svg";
import styles from "@/componentStyles/navigation.module.css";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
type Props = {};

const Navigation = (props: Props) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleLinkClick = () => {
    setShowNavbar(false);
  };

  return (
    <div className={styles.header_container}>
      <div className={styles.left_container}>
        <LogoAcademy className={styles.logo} />
      </div>{" "}
      <div className={styles.menu_icon} onClick={handleShowNavbar}>
        {!showNavbar ? (
          <MenuIcon style={{ fontSize: "2rem" }} />
        ) : (
          <CloseIcon style={{ fontSize: "2rem" }} />
        )}
      </div>{" "}
      <div
        className={
          showNavbar ? styles.right_container_active : styles.right_container
        }
      >
        <ul>
          <li>
            <a href="/" className={styles.menu_text} onClick={handleLinkClick}>
              Work
            </a>
          </li>
          <li>
            <a href="/" className={styles.menu_text} onClick={handleLinkClick}>
              Courses
            </a>
          </li>
          <li>
            <a href="/" className={styles.menu_text} onClick={handleLinkClick}>
              About Us
            </a>
          </li>
          <li>
            <a href="/" className={styles.menu_text} onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
