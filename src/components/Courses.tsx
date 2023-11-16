"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

import styles from "@/componentStyles/courses.module.css";
import BookIcon from "@/assets/icons/book.svg";
import StudentIcon from "@/assets/icons/student.svg";
import DifficultyIcon from "@/assets/icons/level.svg";
import useIsMobile from "../hooks_data/IsMobile";

type Props = {
  image: any;
  course_name: string;
  lessons: string;
  students: string;
  level: string;
  price: string;
  url: String;
};

export const Courses = () => {
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setIsClient(true);
    fetchCourses();
  }, []);
  async function fetchCourses() {
    try {
      const response = await fetch("/api/courses");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: any = await response.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("There was an error fetching the courses:", error);
    }
  }
  return (
    <section id="courses" className={styles.courses_view}>
      <div className={styles.course_title}>
        <h3 className={styles.course_title_text}>
          <span>Trajnimet</span> tona
        </h3>
      </div>
      <div className={styles.course_box_container}>
        {isMobile && !loading
          ? data?.map((course: any, index: number) => (
              <CourseBox
                key={index}
                url={course.id}
                image={course.img_url}
                course_name={course.title}
                lessons={course.time}
                students={course.students}
                level={course.level}
                price={course.price}
              />
            ))
          : data?.map((course: any, index: number) => (
              <CourseBox
                key={index}
                url={course.id}
                image={course.img_url}
                course_name={course.title}
                lessons={course.time}
                students={course.students}
                level={course.level}
                price={course.price}
              />
            ))}
      </div>
    </section>
  );
};

function CourseBox({ image, course_name, lessons, students, level, price, url }: Props) {
  return (
    <div className={styles.course_container}>
      <img src={image} alt="course-image" className={styles.course_image} width="300px" />
      <h4 className={styles.course_name}>{course_name}</h4>
      <div className={styles.info}>
        <div className={styles.lessons}>
          <BookIcon />
          &nbsp; {lessons} orë
        </div>
        <div className={styles.student}>
          <StudentIcon />
          &nbsp; {students} studentë
        </div>
        <div className={styles.level}>
          <DifficultyIcon />
          &nbsp; {level}
        </div>
      </div>
      <div className={styles.button_container}>
        {course_name !== "Coming Soon" ? (
          <Link href={"/trajnimet/" + url} className={styles.information_button}>
            Më shumë
          </Link>
        ) : (
          <button
            disabled
            className={styles.information_button}
            style={{ background: "#ddd", color: "#eee", borderColor: "#ddd" }}>
            Coming Soon
          </button>
        )}
      </div>
    </div>
  );
}
