"use client";
import React, { useEffect, useState } from "react";
import styles from "@/componentStyles/category.module.css";
import useIsMobile from "../hooks_data/IsMobile";
import { categories } from "../hooks_data/Data";

const Category = () => {
  return (
    <div className={styles.categories}>
      {categories.map((category, index) => (
        <CategoryBox
          key={index}
          logo={
            <div className={category.cont_style}>
              <category.Logo className={category.svg_style} />
            </div>
          }
          text={category.text}
          url={category.url}
        />
      ))}
    </div>
  );
};
type Props = {
  logo?: any;
  text: string[];
  url: string[];
};
const CategoryBox = ({ logo, text, url }: Props) => {
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
