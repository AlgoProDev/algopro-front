import React from "react";
import styles from "@/componentStyles/people.module.css";
import { useState, useEffect } from "react";
type Props = {
  image: any;
  name: string;
  title: string;
};

const People = () => {
  const [people, setPeople] = useState<any>();
  const [loading, setLoading] = useState(true);

  async function fetchPeople() {
    try {
      const response = await fetch("/api/people");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: any = await response.json();
      setPeople(data);
      setLoading(false);
    } catch (error) {
      console.error("There was an error fetching the courses:", error);
    }
  }
  useEffect(() => {
    fetchPeople();
  }, []);
  return (
    <section id="aboutus" className={styles.people_container}>
      <div className={styles.people_information}>
        <div className={styles.people_text}>
          <h1>
            <span> Instruktorët </span> tanë
          </h1>
          <p>
            Në AlgoPro Academy, instruktorët tanë janë themeli i komunitetit tonë të mësimit, të
            dalluar për kredencialet e tyre akademike, përvojën në industrinë, dhe angazhimin e
            thellë ndaj suksesit të studentëve. Ata janë ekspertë në fushat e tyre, duke siguruar që
            edukimi që ofrojmë është i pasur, aktual dhe shumë i relevant.
            <br />
            <br />
            Filozofia jonë mësimore është e qendruar rreth një mësimdhënieje angazhuese, të fokusuar
            tek studenti, e përshtatur për të kultivuar potencialin individual dhe për të nxitur
            pasionin për të mësuar. Çdo instruktor sjell një përzierje unike të metodash inovative
            të mësimdhënies dhe mentorimit personal, të dedikuar për të udhëzuar studentët jo vetëm
            akademikisht, por edhe në rrugëtimet e tyre të ardhshme profesionale. Bashkohuni me ne
            për të përjetuar një udhëtim arsimor të formësuar nga përsosmëria dhe të drejtuar nga
            pasioni.
          </p>
        </div>
      </div>
      <div className={styles.people_displays}>
        <div className={styles.people_background} />
        <div className={styles.people_cards}>
          {people?.map((person: any, index: any) => (
            <PersonBox key={index} image={person.img_url} name={person.name} title={person.title} />
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
