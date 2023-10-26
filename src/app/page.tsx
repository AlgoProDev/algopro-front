"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
import Category from "@/components/Category";
import Arrow1 from "@/assets/decorations/arrow1.svg";
import SquareLogo from "@/assets/decorations/squareLogo.svg";
import Certificate from "@/assets/decorations/certificate.svg";
import InformationImage from "@/components/InformationImage";
import CourseBox from "@/components/CourseBox";
import PersonBox from "@/components/PersonBox";
import useIsMobile from "@/components/IsMobile";
import { categories, courses, people } from "@/components/Data";

export default function Home() {
  const isMobile = useIsMobile();
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className={styles.home}>
      <Navigation />
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <Category
            key={index}
            logo={
              <div className={category.cont_style}>
                <category.Logo className={category.svg_style} />
              </div>
            }
            text={category.text}
            url={category.url}
          />
        ))}
      </div>
      <div className={styles.preview_container}>
        <div className={styles.information_container}>
          <h1 className={styles.information_text}>
            🙌 Hello friends !
            <br />I am Sofia and we want to start a web design course together.
            Do you like it too 😍 ?
          </h1>
          <div className={styles.arrow_container}>
            <Arrow1 className={styles.arrow1} />
          </div>
          <a href="/" className={styles.information_button}>
            Contact Us Now &nbsp;&nbsp;&nbsp;&gt;
          </a>
        </div>
        <InformationImage />
      </div>
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
      <div className={styles.people_container}>
        <div className={styles.people_information}>
          <div className={styles.people_text}>
            <h1>
              <span> Our </span> Instructors
            </h1>
            <p>
              At The Academy, We Strive To Bring Together The Best Professors
              For The Best Courses
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
                  image={person.image}
                  name={person.name}
                  title={person.title}
                />
              ))}
            </div>
            <div>
              {people.slice(3, 6).map((person, index) => (
                <PersonBox
                  image={person.image}
                  name={person.name}
                  title={person.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
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
      <div className={styles.footer_container}>
        <div className={styles.footer_information}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
            faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
            velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum
            varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris
            a diam maecenas sed enim. Velit ut tortor pretium
          </p>
          <SquareLogo className={styles.footer_logo} />
        </div>
        <div className={styles.footer_link_container}>
          <div>
            <h3>
              <span>&#9632;&nbsp;&nbsp;&nbsp;</span>
              MEMBERSHIP CERTIFICATE
            </h3>
            <Certificate className={styles.footer_cert} />
          </div>
          <div>
            <h3>
              <span>&#9632;&nbsp;&nbsp;&nbsp;</span>
              CATEGORIES
            </h3>
            <div>
              <p>
                <a href="">Text One and Text</a>
              </p>
              <p>
                <a href="">Text Two</a>
              </p>
              <p>
                <a href="">Text Three some</a>
              </p>
              <p>
                <a href="">Text Four Lo</a>
              </p>
              <p>
                <a href="">Text Five Lorem Ipsum</a>
              </p>
            </div>
          </div>
          <div>
            <h3>
              <span>&#9632;&nbsp;&nbsp;&nbsp;</span>
              QUICK ACCESS
            </h3>
            <div>
              <p>
                <a href="">Text One and Text</a>
              </p>
              <p>
                <a href="">Text Two</a>
              </p>
              <p>
                <a href="">Text Three some</a>
              </p>
              <p>
                <a href="">Text Four Lo</a>
              </p>
              <p>
                <a href="">Text Five Lorem Ipsum</a>
              </p>
            </div>
          </div>
          <div>
            <h3>
              <span>&#9632;&nbsp;&nbsp;&nbsp;</span>
              QUICK ACCESS
            </h3>
            <div>
              <p>
                <a href="">Text One and Text</a>
              </p>
              <p>
                <a href="">Text Two</a>
              </p>
              <p>
                <a href="">Text Three some</a>
              </p>
              <p>
                <a href="">Text Four Lo</a>
              </p>
              <p>
                <a href="">Text Five Lorem Ipsum</a>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.footer_legal}>
          <div>
            <p>
              <a href="">Privacy Policy</a>
              &nbsp;|&nbsp;
              <a href="">Terms & Conditions</a>
            </p>
          </div>
          <p>All Copyright (C) 2023 Reserved</p>
        </div>
      </div>
    </div>
  );
}
