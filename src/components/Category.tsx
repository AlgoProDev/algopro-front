"use client";
import React, { useState, useRef } from "react";
import styles from "@/componentStyles/category.module.css";
import useIsMobile from "../hooks_data/IsMobile";
import BackendLogo from "@/assets/icons/backend-icon.svg";
import DataLogo from "@/assets/icons/data-icon.svg";
import FrontendLogo from "@/assets/icons/front-icon.svg";
const Category = () => {
  const isMobile = useIsMobile();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [animationClass, setAnimationClass] = useState("");
  const buttonDropRef = useRef<HTMLDivElement>(null);
  const categories = [
    {
      cont_style: styles.back_container,
      svg_style: styles.back_svg,
      Logo: BackendLogo,
      text: ["Python", "Java", "Node.js"],
      url: ["/", "/", "/"],
    },
    {
      cont_style: styles.data_container,
      svg_style: styles.data_svg,
      Logo: DataLogo,
      text: ["Data Science", "Data Engineering"],
      url: ["/", "/"],
    },
    {
      cont_style: styles.front_container,
      svg_style: styles.front_svg,
      Logo: FrontendLogo,
      text: ["React", "Native", "Angular"],
      url: ["/", "/", "/"],
    },
  ];
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
      <section id="home" className={styles.categories}>
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
      </section>
      {isMobile && activeCategory !== null && (
        <section
          id="home"
          className={`${styles.button_drop} ${animationClass}`}
          ref={buttonDropRef}>
          {categories[activeCategory].text.map((item, index) => (
            <a key={index} className={styles.button}>
              {item}
            </a>
          ))}
        </section>
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
            <a key={item} className={styles.button}>
              {item}
            </a>
          ))}
        </>
      )}
    </div>
  );
};

export default Category;
