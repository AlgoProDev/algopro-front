import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "@/pages/trajnimet/[tag]/index.module.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Trajnimet() {
  const router = useRouter();
  const [course, setCourse] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [openModule, setOpenModule] = useState<string | null>(null);
  const toggleModule = (module: string) => {
    if (openModule === module) {
      setOpenModule(null);
    } else {
      setOpenModule(module);
    }
  };
  async function fetchCourseDetails() {
    try {
      const courseId = router.query.tag;
      if (!courseId) {
        console.log("Course ID is undefined");
        return;
      }

      const response = await fetch(`/api/course_details?course_id=${courseId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCourse(data);
      setLoading(false);
    } catch (error) {
      console.error("There was an error fetching the course:", error);
    }
  }

  useEffect(() => {
    if (router.isReady) {
      fetchCourseDetails();
    }
  }, [router.isReady, router.query.course_id]);
  if (!loading && course) {
    return (
      <div className={styles.main_container}>
        <Navigation style={false} show={false} />
        <div className={styles.content_container}>
          <h1 className={styles.title}>{course.courses.title}</h1>
          <p className={styles.description}>{course.courses.content}</p>
          <div className={styles.information_container}>
            <div>
              <h2>Modulet</h2>
              <ul className={styles.modules}>
                {Array.from(new Set(course.modules.map((item: any) => item.sub_module))).map(
                  (module: any) => (
                    <li
                      key={module}
                      className={
                        openModule === module
                          ? styles.button_container_active
                          : styles.button_container
                      }>
                      <button className={styles.button} onClick={() => toggleModule(module)}>
                        <ArrowForwardIosIcon
                          style={{
                            transition: "transform 0.2s ease-in-out",
                            transform: openModule === module ? "rotate(90deg)" : "rotate(0)",
                            color: "#9d55eb",
                          }}
                        />
                        {module}
                      </button>
                      <ul
                        className={
                          openModule === module
                            ? styles.sub_module_container_active
                            : styles.sub_module_container
                        }>
                        {course.modules
                          .filter((item: any) => item.sub_module === module)
                          .map((filteredItem: any) => (
                            <li className={styles.sub_modules} key={filteredItem.title}>
                              <LibraryBooksIcon />
                              {filteredItem.title}
                            </li>
                          ))}
                      </ul>
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return <div></div>;
  }
}
