"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LogoAcademy from "../assets/icons/LogoAcademy.svg";
import styles from "@/componentStyles/navigation.module.css";
import useIsMobile from "./IsMobile";

type Props = {};

const Navigation = (props: Props) => {
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.header_container}>
      <div className={styles.left_container}>
        <LogoAcademy className={styles.logo} />
        <div className={styles.separate} />
      </div>
      {isMobile ? (
        <></>
      ) : (
        <div className={styles.right_container}>
          <a href="/" className={styles.menu_text}>
            Work
          </a>
          <a href="/" className={styles.menu_text}>
            Courses
          </a>
          <a href="/" className={styles.menu_text}>
            About Us
          </a>
          <a href="/" className={styles.menu_text}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default Navigation;
