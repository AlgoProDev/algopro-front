import React, { useState } from "react";

import styles from "@/componentStyles/preview.module.css";
import Image from "next/image";
import DisplayImage from "@/assets/images/PrevComp.svg";
import Arrow1 from "@/assets/decorations/arrow1.svg";
import EmailModal from "./EmailModal";

const Preview = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section id="home" className={styles.preview_container}>
      <div className={styles.information_container}>
        <h1 className={styles.information_text}>
          🎓 Fillo karrierën si Programer në AlgoPro!
          <br />{" "}
          <div>
            Zbuloni kurset tona inovative të Programimit, të udhëhequra nga
            specialistë të fushës.
            <br />
            Bashkohuni në komunitetin tonë dhe hapni dyert e mundësive të reja
            për zhvillimin profesional.
          </div>
        </h1>
        <div className={styles.arrow_container}>
          <Arrow1 className={styles.arrow1} />
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className={styles.information_button}
        >
          Na kontakto
        </button>
      </div>
      <InformationImage />{" "}
      <EmailModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Contact Us"
      />
    </section>
  );
};

const InformationImage = () => {
  return (
    <div className={styles.info_image_container}>
      <DisplayImage />
    </div>
  );
};

export default Preview;
