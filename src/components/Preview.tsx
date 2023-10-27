import React from "react";
import styles from "@/componentStyles/preview.module.css";
import Image from "next/image";
import DisplayImage from "@/assets/images/girl-in-chair.png";
import Circle from "@/assets/decorations/circle.svg";
import Triangle from "@/assets/decorations/triangle.svg";
import Web from "@/assets/decorations/web.svg";
import Bulb from "@/assets/decorations/bulb.svg";
import Arrow1 from "@/assets/decorations/arrow1.svg";

const Preview = () => {
  return (
    <div className={styles.preview_container}>
      <div className={styles.information_container}>
        <h1 className={styles.information_text}>
          🙌 Hello friends !
          <br />I am Sofia and we want to start a web design course together. Do
          you like it too 😍 ?
        </h1>
        <div className={styles.arrow_container}>
          <Arrow1 className={styles.arrow1} />
        </div>
        <p className={styles.information_button}>
          <a href="/">Contact Us Now</a>
        </p>
      </div>
      <InformationImage />
    </div>
  );
};

const InformationImage = () => {
  return (
    <div className={styles.info_image_container}>
      <div className={styles.decorators}>
        <Circle className={styles.circle} />
        <Triangle className={styles.triangle} />
        <Bulb className={styles.bulb} />
        <Web className={styles.web} />
      </div>
      <div className={styles.circle_back}>
        <Image
          className={styles.display_image}
          src={DisplayImage}
          alt="Image"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Preview;
