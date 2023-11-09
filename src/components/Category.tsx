"use client";
import React, { useState, useRef } from "react";
import styles from "@/componentStyles/category.module.css";
import useIsMobile from "../hooks_data/IsMobile";
import { categories } from "../hooks_data/Data";

const Category = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [animationClass, setAnimationClass] = useState("");
  const buttonDropRef = useRef<HTMLDivElement>(null);

  function handleLogoClick(index: number) {
    if (activeCategory !== null) {
      if (activeCategory === index) {
        setAnimationClass(styles.animate_up);

        setTimeout(() => {
          setActiveCategory(null);
        }, 500);
      } else {
        setAnimationClass(styles.animate_up);

        setTimeout(() => {
          setActiveCategory(index);
          setAnimationClass(styles.animate_down);
        }, 500);
      }
    } else {
      setAnimationClass(styles.animate_down);
      setActiveCategory(index);
    }
  }
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
            onLogoClick={() => handleLogoClick(index)}
          />
        ))}
      </div>
      {isMobile && activeCategory !== null && (
        <div
          className={`${styles.button_drop} ${animationClass}`}
          ref={buttonDropRef}
        >
          {categories[activeCategory].text.map((item, index) => (
            <a
              key={index}
              href={categories[activeCategory].url[index]}
              className={styles.button}
            >
              {item}
            </a>
          ))}
        </div>
      )}
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
