import React from "react";
import Image from "next/image";
import styles from "@/componentStyles/people.module.css";
import { people } from "../hooks_data/Data";

type Props = {
  image: any;
  name: string;
  title: string;
};

const People = () => {
  return (
    <div className={styles.people_container}>
      <div className={styles.people_information}>
        <div className={styles.people_text}>
          <h1>
            <span> Our </span> Instructors
          </h1>
          <p>
            At The Academy, We Strive To Bring Together The Best Professors For
            The Best Courses
          </p>
        </div>
        <a href="" className={styles.people_button}>
          All Instructors&nbsp;&nbsp;&nbsp;&gt;
        </a>
      </div>
      <div className={styles.people_displays}>
        <div className={styles.people_background} />
        <div className={styles.people_cards}>
          <div>
            {people.slice(0, 3).map((person, index) => (
              <PersonBox
                key={index}
                image={person.image}
                name={person.name}
                title={person.title}
              />
            ))}
          </div>
          <div>
            {people.slice(3, 6).map((person, index) => (
              <PersonBox
                key={index}
                image={person.image}
                name={person.name}
                title={person.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
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

export default People;
