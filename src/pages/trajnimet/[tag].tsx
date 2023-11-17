import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "@/pages/trajnimet/[tag].module.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";

export default function Trajnimet() {
  const router = useRouter();
  const [read, setRead] = useState(true);
  const [course, setCourse] = useState<any>();
  const [courseID, setCourseID] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [openModule, setOpenModule] = useState<string | null>(null);

  const [showParagraph1, setShowParagraph1] = useState(false);
  const [showParagraph2, setShowParagraph2] = useState(false);
  const [showParagraph3, setShowParagraph3] = useState(false);
  const [showParagraph4, setShowParagraph4] = useState(false);

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
          <div className={styles.title_container}>
            <img src={course.courses.img_url} alt="" width="40%" height="20%" />
            <h1 className={styles.title}>
              <span>Trajnimi</span> <br />
              {course.courses.title}
            </h1>
          </div>
          <div className={read ? styles.description : styles.description_active}>
            <h4>Çfarë do bëj ky program për ju?</h4>
            <p
              dangerouslySetInnerHTML={{
                __html: course.courses.content.split(". ").join(".<br/> • "),
              }}></p>
          </div>
          <button onClick={() => setRead(!read)} className={styles.readmore}>
            {read ? "Lexo më shumë" : "Fsheh"}
          </button>
          <div className={styles.information_container}>
            <div>
              <div className={styles.why_container}>
                <h2>
                  Pse <span>AlgoPro</span>?
                </h2>
                <div>
                  <div>
                    <button onClick={() => setShowParagraph1(!showParagraph1)}>
                      <ArrowForwardIosIcon
                        sx={{ fontSize: 20 }}
                        style={showParagraph1 ? { transform: "rotate(90deg)" } : {}}
                      />
                      PROGRAMIMI PROFESIONAL
                    </button>
                    <p style={{ maxHeight: showParagraph1 ? "500px" : "0", overflow: "hidden" }}>
                      Ndërtoni njohuritë tuaja për programimin profesional. Mos e humbni kohën tuaj
                      me teori të thatë dhe filloni kodimin menjëherë.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <button onClick={() => setShowParagraph2(!showParagraph2)}>
                      <ArrowForwardIosIcon
                        sx={{ fontSize: 20 }}
                        style={showParagraph2 ? { transform: "rotate(90deg)" } : {}}
                      />
                      PROJEKTE PËR PORTFOLIO
                    </button>
                    <p style={{ maxHeight: showParagraph2 ? "500px" : "0", overflow: "hidden" }}>
                      Ju do të krijoni aplikacionet tuaja të para, por jo vetëm për qëllime
                      trajnimi. Përdorni këto projekte për të bindur kompanitë për aftësitë tuaja.
                      Konkurrenca juaj do të jetë xheloze.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <button onClick={() => setShowParagraph3(!showParagraph3)}>
                      <ArrowForwardIosIcon
                        sx={{ fontSize: 20 }}
                        style={
                          showParagraph3
                            ? {
                                transform: "rotate(90deg)",
                              }
                            : {}
                        }
                      />
                      MUNDËSIA PËR PRAKTIKË
                    </button>
                    <p style={{ maxHeight: showParagraph3 ? "500px" : "0", overflow: "hidden" }}>
                      Studentët do të kenë mundësinë për një praktikë tre mujore në kompaninë tonë
                      AlgoPro LLC.
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <button onClick={() => setShowParagraph4(!showParagraph4)}>
                      <ArrowForwardIosIcon
                        sx={{ fontSize: 20 }}
                        style={showParagraph4 ? { transform: "rotate(90deg)" } : {}}
                      />
                      VENDI I PUNËS
                    </button>
                    <p style={{ maxHeight: showParagraph4 ? "500px" : "0", overflow: "hidden" }}>
                      Ne dhe komuniteti do të ju mbështesim derisa të gjeni punën tuaj të parë.
                      Përgatituni për intervistat tuaja dhe si të bindni punëdhënësit që jeni i
                      duhuri për të punësuar.
                    </p>
                  </div>
                </div>
              </div>
              {/* <h2>Modulet</h2>
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
              </ul> */}
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
        {/* <Loader lottiePath="../loading.json" width={300} height={300} /> */}
      </div>
    );
  }
}
