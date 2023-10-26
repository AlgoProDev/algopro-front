import React from "react";
import Image from "next/image";
import styles from "@/componentStyles/personbox.module.css";
type Props = {
  image: any;
  name: string;
  title: string;
};

function PersonBox({ image, name, title }: Props) {
  return (
    <div className={styles.container_box}>
      <Image src={image} alt="" className={styles.image} />
      <div className={styles.info}>
        <p>{name}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default PersonBox;
