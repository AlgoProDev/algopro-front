"use client";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
import Category from "@/components/Category";
import Preview from "@/components/Preview";
import { Courses } from "@/components/Courses";
import People from "@/components/People";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";
import Loader from "@/components/LoadingIcon";

export default function Home() {
  const [loading, setLoading] = useState(false);
  setTimeout(() => {
    setLoading(false);
  }, 0);
  return (
    <>
      <div className={styles.loader} style={loading ? {} : { display: "none" }}>
        <Loader lottiePath="loading.json" width={300} height={300} />
      </div>
      <div className={styles.home} style={loading ? { display: "none" } : {}}>
        <Navigation style={true} show={true} />
        <Category />
        <Preview />
        <Courses />
        <People />
        <NewsLetter />
        <Footer />
      </div>
    </>
  );
}
