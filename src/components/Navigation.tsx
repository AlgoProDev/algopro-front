"use client";
import React, { useState } from "react";
import LogoAcademy from "../assets/icons/LogoAcademy.svg";
import styles from "@/componentStyles/navigation.module.css";
import EmailModal from "./EmailModal";

const Navigation = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.header_container}>
      <div className={styles.left_container}>
        <LogoAcademy className={styles.logo} />
      </div>{" "}
      <div className={styles.menu_icon}></div>
      <EmailModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Contact Us"
      />
      <div
        className={
          showNavbar ? styles.right_container_active : styles.right_container
        }
      >
        <ul>
          <li>
            <a href="#home" className={styles.menu_text}>
              Fillimi
            </a>
          </li>
          <li>
            <a href="#courses" className={styles.menu_text}>
              Trajnimet
            </a>
          </li>
          <li>
            <a href="#aboutus" className={styles.menu_text}>
              Rreth Nesh
            </a>
          </li>
          <li>
            <a href="#newsletter" className={styles.menu_text}>
              Newsletter
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
