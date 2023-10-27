import React from "react";
import styles from "@/componentStyles/newsletter.module.css";
type Props = {};

const NewsLetter = (props: Props) => {
  return (
    <div className={styles.news_container}>
      <h1 className={styles.news_text}>
        Find out about the latest Courses with
        <span>&nbsp;Academy&nbsp;</span>Newsletter
      </h1>
      <div className={styles.news_form}>
        <input
          placeholder="Email Adress..."
          className={styles.news_input}
          type="email"
          name=""
          id=""
        />
        <div className={styles.news_submit}>
          <button>Submit</button>
        </div>
        <div className={styles.news_decoration} />
      </div>
    </div>
  );
};

export default NewsLetter;
