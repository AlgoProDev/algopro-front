"use client";
import React, { useState, useRef } from "react";
import styles from "@/componentStyles/category.module.css";
import useIsMobile from "../hooks_data/IsMobile";
import { categories } from "../hooks_data/Data";

const Category = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  return (
    <>
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
            isActive={isMobile && activeCategory === index}
            onLogoClick={() => {
              setActiveCategory((prev) => {
                const newIndex = prev === index ? null : index;
                console.log("Setting active category to", newIndex);
                return newIndex;
              });
            }}
          />
        ))}
      </div>
      {isMobile &&
        activeCategory !== null &&
        categories[activeCategory].text.map((item, index) => (
          <a
            key={index}
            href={categories[activeCategory].url[index]}
            className={styles.button}
          >
            {item}
          </a>
        ))}
    </>
  );
};

type Props = {
  logo?: any;
  text: string[];
  url: string[];
  isActive: boolean;
  onLogoClick: () => void;
};

const CategoryBox = ({ logo, text, url, isActive, onLogoClick }: Props) => {
  const isMobile = useIsMobile();

  return (
    <div className={styles.button_cluster}>
      {isMobile ? (
        <div onClick={onLogoClick}>{logo}</div>
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
