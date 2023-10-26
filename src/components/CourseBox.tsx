import React from "react";
import styles from "@/componentStyles/coursebox.module.css";
import Image from "next/image";
import BookIcon from "@/assets/icons/book.svg";
import StudentIcon from "@/assets/icons/student.svg";
import DifficultyIcon from "@/assets/icons/level.svg";
type Props = {
  image: any;
  course_name: string;
  lessons: string;
  students: string;
  level: string;
  url: string;
  price: string;
};

function CourseBox({
  image,
  course_name,
  lessons,
  students,
  level,
  url,
  price,
}: Props) {
  return (
    <div className={styles.course_container}>
      <Image src={image} alt="course-image" className={styles.course_image} />
      <h4 className={styles.course_name}>{course_name}</h4>
      <div className={styles.info}>
        <div className={styles.lessons}>
          <BookIcon />
          &nbsp; Lessons: {lessons}
        </div>
        <div className={styles.student}>
          <StudentIcon />
          &nbsp; Students: {students}
        </div>
        <div className={styles.level}>
          <DifficultyIcon />
          &nbsp; Level: {level}
        </div>
      </div>
      <div className={styles.button_container}>
        <a className={styles.button} href={url}>
          Start Course
        </a>
        <p className={styles.price}>{price} €</p>
      </div>
    </div>
  );
}

export default CourseBox;
