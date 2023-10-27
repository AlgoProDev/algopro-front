"use client";
import React, { useState, useEffect } from "react";
import styles from "@/componentStyles/courses.module.css";
import Image from "next/image";
import BookIcon from "@/assets/icons/book.svg";
import StudentIcon from "@/assets/icons/student.svg";
import DifficultyIcon from "@/assets/icons/level.svg";
import useIsMobile from "../hooks_data/IsMobile";
import { courses } from "../hooks_data/Data";
type Props = {
  image: any;
  course_name: string;
  lessons: string;
  students: string;
  level: string;
  url: string;
  price: string;
};

export const Courses = () => {
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className={styles.courses_view}>
      <div className={styles.courses_header}>
        <div className={styles.course_title}>
          <p className={styles.course_square}>&#9632;&nbsp;&nbsp;&nbsp;</p>
          <h3 className={styles.course_title_text}>OUR COURSES</h3>
        </div>
        <a href="" className={styles.more_courses}>
          All Courses
        </a>
      </div>
      <div className={styles.course_box_container}>
        {isMobile
          ? courses
              .slice(0, 3)
              .map((course, index) => (
                <CourseBox
                  key={index}
                  image={course.image}
                  course_name={course.course_name}
                  lessons={course.lessons}
                  students={course.students}
                  level={course.level}
                  url={course.url}
                  price={course.price}
                />
              ))
          : courses
              .slice(0, 8)
              .map((course, index) => (
                <CourseBox
                  key={index}
                  image={course.image}
                  course_name={course.course_name}
                  lessons={course.lessons}
                  students={course.students}
                  level={course.level}
                  url={course.url}
                  price={course.price}
                />
              ))}
      </div>
    </div>
  );
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
