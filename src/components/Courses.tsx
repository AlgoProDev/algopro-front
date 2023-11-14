"use client";
import React, { useState, useEffect } from "react";
import styles from "@/componentStyles/courses.module.css";
import BookIcon from "@/assets/icons/book.svg";
import StudentIcon from "@/assets/icons/student.svg";
import DifficultyIcon from "@/assets/icons/level.svg";
import EmailModal from "./EmailModal";
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
  return (
    <section id="courses" className={styles.courses_view}>
      <div className={styles.courses_header}>
        <div className={styles.course_title}>
          <p className={styles.course_square}>&#9632;&nbsp;&nbsp;&nbsp;</p>
          <h3 className={styles.course_title_text}>Our Courses</h3>
        </div>
        <p></p>
      </div>
      <div className={styles.course_box_container}>
        {isMobile && !loading
          ? data?.map((course: any, index: number) => (
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
          : data?.map((course: any, index: number) => (
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
    </section>
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
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.course_container}>
      <img
        src={image}
        alt="course-image"
        className={styles.course_image}
        width="300px"
      />
      <h4 className={styles.course_name}>{course_name}</h4>
      <div className={styles.info}>
        <div className={styles.lessons}>
          <BookIcon />
          &nbsp; {lessons}
        </div>
        <div className={styles.student}>
          <StudentIcon />
          &nbsp; {students}
        </div>
        <div className={styles.level}>
          <DifficultyIcon />
          &nbsp; {level}
        </div>
      </div>
      <div className={styles.button_container}>
        {course_name !== "Coming Soon" ? (
          <button
            onClick={() => setModalOpen(true)}
            className={styles.information_button}
          >
            Apply Now
          </button>
        ) : (
          <button
            disabled
            className={styles.information_button}
            style={{ background: "#ddd", color: "#eee", borderColor: "#ddd" }}
          >
            Coming Soon
          </button>
        )}
        <p className={styles.price}>{price} €</p>
      </div>
      <EmailModal
        open={isModalOpen}
        onClose={() => setModalOpen(false)}
        title={course_name + " Application"}
      />
    </div>
  );
}
