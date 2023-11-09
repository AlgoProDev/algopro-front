"use client";
import React, { useState, useEffect } from "react";
import styles from "@/componentStyles/courses.module.css";
import Image from "next/image";
import BookIcon from "@/assets/icons/book.svg";
import StudentIcon from "@/assets/icons/student.svg";
import DifficultyIcon from "@/assets/icons/level.svg";
import useIsMobile from "../hooks_data/IsMobile";
import { fetchCourses } from "../hooks_data/Data";
type Props = {
  image: any;
  course_name: string;
  lessons: string;
  students: string;
  level: string;
  price: string;
};

export const Courses = () => {
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setIsClient(true);
    getData();
  }, []);
  const getData = async () => {
    try {
      const courses = await fetchCourses();
      setData(courses);
      setLoading(false);
    } catch {}
  };
  console.log(data);
  return (
    <div className={styles.courses_view}>
      <div className={styles.courses_header}>
        <div className={styles.course_title}>
          <p className={styles.course_square}>&#9632;&nbsp;&nbsp;&nbsp;</p>
          <h3 className={styles.course_title_text}>Our Courses</h3>
        </div>
        <a href="" className={styles.more_courses}>
          All Courses
        </a>
      </div>
      <div className={styles.course_box_container}>
        {isMobile && !loading
          ? data
              ?.slice(0, 3)
              .map((course: any, index: number) => (
                <CourseBox
                  key={index}
                  image={course.image}
                  course_name={course.course_name}
                  lessons={course.lessons}
                  students={course.students}
                  level={course.level}
                  price={course.price}
                />
              ))
          : data
              ?.slice(0, 8)
              .map((course: any, index: number) => (
                <CourseBox
                  key={index}
                  image={course.image}
                  course_name={course.course_name}
                  lessons={course.lessons}
                  students={course.students}
                  level={course.level}
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
  price,
}: Props) {
  // Encode the subject for the mailto link
  const encodedSubject = encodeURIComponent(`${course_name} Application`);

  return (
    <div className={styles.course_container}>
      <img src={image} alt="course-image" className={styles.course_image} />
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
        <a
          className={styles.button}
          href={`mailto:info@algopro.dev?subject=${encodedSubject}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Course
        </a>
        <p className={styles.price}>{price} €</p>
      </div>
    </div>
  );
}
