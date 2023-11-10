import BackendLogo from "@/assets/icons/backend-icon.svg";
import DataLogo from "@/assets/icons/data-icon.svg";
import FrontendLogo from "@/assets/icons/front-icon.svg";
import styles from "@/componentStyles/data.module.css";
import axios from "axios";
import { parse } from "papaparse";

type Course = {
  course_name: string;
  lessons: string;
  students: string;
  level: string;
  price: string;
  image: string;
};

export const fetchCourses = async (): Promise<Course[]> => {
  const headers = {
    Authorization: "Bearer ol_api_yqXI4zlfBaCaA5MZ6YXWpLaSSaONB4LdGoGLiJ",
    "Content-Type": "application/json",
  };

  const payload = {
    id: "all-courses-GBWw2f3w5b",
    shareId: "cc495877-1be4-476b-8281-a9fda178909c",
  };

  try {
    const response = await axios.post(
      "https://corsproxy.io/?https://app.getoutline.com/api/documents.info",
      payload,
      { headers }
    );
    const markdownTable = response.data.data.text;

    const csvTable = markdownTable.replace(/\|/g, ",").replace(/-{3,}/g, "");
    const parsedData = parse(csvTable, { header: true, skipEmptyLines: true });
    const courses: Course[] = [];
    for (const row of parsedData.data as any) {
      if (row[" Name "] && row[" Image "]) {
        const courseNameMatch = row[" Name "].match(/\[([^\]]+)\]/)[1];
        const courseName = courseNameMatch ? courseNameMatch : null;
        const imageUrl = row[" Image "];
        // Construct the course object
        courses.push({
          course_name: courseName || "",
          lessons: row[" Hours "],
          students: row[" Students "],
          level: row[" Level "],
          price: row[" Price "],
          image: imageUrl,
        });
      }
    }
    return courses;
  } catch (error) {
    console.error("There was an error fetching the courses:", error);
    return [];
  }
};

export const categories = [
  {
    cont_style: styles.back_container,
    svg_style: styles.back_svg,
    Logo: BackendLogo,
    text: ["Python", "Java", "Node.js"],
    url: ["/", "/", "/"],
  },
  {
    cont_style: styles.data_container,
    svg_style: styles.data_svg,
    Logo: DataLogo,
    text: ["Data Science", "Data Engineering"],
    url: ["/", "/"],
  },
  {
    cont_style: styles.front_container,
    svg_style: styles.front_svg,
    Logo: FrontendLogo,
    text: ["React", "Native", "Angular"],
    url: ["/", "/", "/"],
  },
];
type People = { image: string; name: string; title: string };

export const fetchPeople = async (): Promise<People[]> => {
  const headers = {
    Authorization: "Bearer ol_api_yqXI4zlfBaCaA5MZ6YXWpLaSSaONB4LdGoGLiJ",
    "Content-Type": "application/json",
  };

  const payload = {
    id: "tutors-H0qN4OvOGp",
    shareId: "3a65f504-d54a-4ff5-86e3-1ee0a856c5e3",
  };

  try {
    const response = await axios.post(
      "https://corsproxy.io/?https://app.getoutline.com/api/documents.info",
      payload,
      { headers }
    );
    const markdownTable = response.data.data.text;

    const csvTable = markdownTable.replace(/\|/g, ",").replace(/-{3,}/g, "");
    const parsedData = parse(csvTable, { header: true, skipEmptyLines: true });
    const people: People[] = [];
    for (const row of parsedData.data as any) {
      if (row[" Name "] && row[" Image "]) {
        people.push({
          image: row[" Image "],
          name: row[" Title "],
          title: row[" Name "],
        });
      }
    }

    return people;
  } catch (error) {
    console.error("There was an error fetching the courses:", error);
    return [];
  }
};
