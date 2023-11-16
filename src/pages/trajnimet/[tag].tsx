import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "@/pages/trajnimet/[tag].module.css";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import Loader from "@/components/LoadingIcon";

export default function Trajnimet() {
  const router = useRouter();
  const [read, setRead] = useState(true);
  const [course, setCourse] = useState<any>();
  const [courseID, setCourseID] = useState<any>();
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
      setCourseID(courseId);
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
          <h1 className={styles.title}>
            <span>Trajnimi</span> <br />
            {course.courses.title}
          </h1>

          <p className={read ? styles.description : styles.description_active}>
            {course.courses.content}
          </p>
          <button onClick={() => setRead(!read)} className={styles.readmore}>
            {read ? "Lexo më shumë" : "Fsheh"}
          </button>
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
            <div>
              <PermContactCalendarIcon
                style={{ fontSize: "128px", color: "#9d55eb" }}
                className={styles.icon}
              />
              <h2 className={styles.konsultohuni}>Konsultohuni</h2>
              <p className={styles.consult_desc}>
                Aplikoni për konsultimin falas duke përdorur formularin tonë të aplikimit. Jepni
                disa informacione për veten tuaj, kështu që ne kemi mundësinë të mësojmë më shumë
                rreth situatës dhe objektivave tuaja aktuale.
                <br />
                <br /> Pas sigurimit të të dhënave tuaja të kontaktit, ne do të ju kotaktojme për
                një bisedë përmes telefonit. Ne do të zbulojmë nëse përshtateni në programin tonë.
                Në rast se përputhemi, ne do të rregullojmë thirrjen vijuese konsultuese.
              </p>
              <a href={"/apply/" + courseID} className={styles.consult_button}>
                {" "}
                Konsultim Falas
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div
        style={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Loader lottiePath="../loading.json" width={300} height={300} />
      </div>
    );
  }
}
