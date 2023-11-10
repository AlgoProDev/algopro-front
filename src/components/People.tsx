import React from "react";
import Image from "next/image";
import styles from "@/componentStyles/people.module.css";
import { fetchPeople } from "../hooks_data/Data";
import { useState, useEffect } from "react";
type Props = {
  image: any;
  name: string;
  title: string;
};

const People = () => {
  const [people, setPeople] = useState<any>();
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const data = await fetchPeople();
      setPeople(data);
      setLoading(false);
    } catch {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section id="aboutus" className={styles.people_container}>
      <div className={styles.people_information}>
        <div className={styles.people_text}>
          <h1>
            <span> Our </span> Instructors
          </h1>
          <p>
            At AlgoPro Academy, our instructors are the cornerstone of our
            learning community, distinguished by their academic credentials,
            industry experience, and a profound commitment to student success.
            They are experts in their fields, ensuring that the education we
            offer is rich, current, and highly relevant.
            <br />
            <br />
            Our teaching philosophy centers around engaging, student-focused
            instruction, tailored to nurture individual potential and foster a
            passion for learning. Each instructor brings a unique blend of
            innovative teaching methods and personal mentorship, dedicated to
            guiding students not just academically but also in their future
            career paths. Join us to experience an educational journey shaped by
            excellence and driven by passion.
          </p>
        </div>
      </div>
      <div className={styles.people_displays}>
        <div className={styles.people_background} />
        <div className={styles.people_cards}>
          {people?.map((person: any, index: any) => (
            <PersonBox
              key={index}
              image={person.image}
              name={person.name}
              title={person.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
function PersonBox({ image, name, title }: Props) {
  return (
    <div className={styles.container_box}>
      <img src={image} alt="" className={styles.image} />
      <div className={styles.info}>
        <p>{name}</p>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default People;
