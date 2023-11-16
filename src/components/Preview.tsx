import React, { useState } from "react";

import styles from "@/componentStyles/preview.module.css";
import DisplayImage from "@/assets/images/PrevComp.svg";
import Arrow1 from "@/assets/decorations/arrow1.svg";
import EmailModal from "./EmailModal";
import TrefoilLoader from "./LoadingIcon";
import useIsMobile from "@/hooks_data/IsMobile";
const Preview = () => {
  const isMobile = useIsMobile();

  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section id="home" className={styles.preview_container}>
      <div className={styles.information_container}>
        <h1 className={styles.information_text}>
          🎓 Fillo karrierën si Programer në AlgoPro!
          <br />{" "}
          <div>
            Zbuloni kurset tona inovative të Programimit, të udhëhequra nga specialistë të fushës.
            <br />
            Bashkohuni në komunitetin tonë dhe hapni dyert e mundësive të reja për zhvillimin
            profesional.
          </div>
        </h1>
        <div className={styles.arrow_container}>
          <Arrow1 className={styles.arrow1} />
        </div>
        <button onClick={() => setModalOpen(true)} className={styles.information_button}>
          Na kontakto
        </button>
      </div>
      <TrefoilLoader
        lottiePath="previewAnim.json"
        width={isMobile ? "100%" : "35%"}
        height={isMobile ? "100%" : "35%"}
      />{" "}
      <EmailModal open={isModalOpen} onClose={() => setModalOpen(false)} title="Contact Us" />
    </section>
  );
};

export default Preview;
