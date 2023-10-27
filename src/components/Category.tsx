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
        // The dropdown is currently visible and the same category was clicked.
        // We need to hide the dropdown, so animate upwards
        setAnimationClass(styles.animate_up);

        setTimeout(() => {
          setActiveCategory(null);
        }, 500); // matches animation duration
      } else {
        // A different category was clicked while the dropdown is visible.
        // First, animate upwards as if the current category content is going away.
        setAnimationClass(styles.animate_up);

        setTimeout(() => {
          // Once the upwards animation is done, set the active category to the new index and animate downwards.
          setActiveCategory(index);
          setAnimationClass(styles.animate_down);
        }, 500); // this delay gives the impression of a transition between categories
      }
    } else {
      // The dropdown is currently hidden and needs to be shown, so animate downwards
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
