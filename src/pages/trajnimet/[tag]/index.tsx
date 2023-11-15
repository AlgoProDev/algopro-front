import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
export default function Home() {
  const params = useParams();
  const [course, setCourse] = useState<any>();
  const [loading, setLoading] = useState(true);

  async function fetchPeople() {
    try {
      const param = params?.tag;
      const response = await fetch(`/api/course_details?course_id=${param}`);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data: any = await response.json();
      setCourse(data);
      console.log(data);
      setLoading(false);
    } catch (error) {
      console.error("There was an error fetching the courses:", error);
    }
  }
  useEffect(() => {
    fetchPeople();
  });

  return (
    <div>
      Trajnimet<h1>{!loading ? course?.title : <></>}</h1>
    </div>
  );
}
