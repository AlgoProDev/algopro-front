import React from "react";
import styles from "@/componentStyles/informationimage.module.css";
import Image from "next/image";
import DisplayImage from "@/assets/images/girl-in-chair.png";
import Circle from "@/assets/decorations/circle.svg";
import Triangle from "@/assets/decorations/triangle.svg";
import Web from "@/assets/decorations/web.svg";
import Bulb from "@/assets/decorations/bulb.svg";
type Props = {};

const InformationImage = (props: Props) => {
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

export default InformationImage;
