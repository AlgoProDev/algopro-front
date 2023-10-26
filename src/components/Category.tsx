"use client";
import React, { useEffect, useState } from "react";
import styles from "@/componentStyles/category.module.css";
import useIsMobile from "./IsMobile";

type Props = {
  logo?: any;
  text: string[];
  url: string[];
};

const Category = ({ logo, text, url }: Props) => {
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className={styles.button_cluster}>
      {isMobile ? (
        <>
          <a key={0} href="/">
            {logo}
          </a>
        </>
      ) : (
        <>
          {logo}
          {text.map((item, index) => (
            <a key={item} href={url[index]} className={styles.button}>
              {item}
            </a>
          ))}
        </>
      )}
    </div>
  );
};

export default Category;
