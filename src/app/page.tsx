"use client";
import React from "react";
import styles from "./page.module.css";
import Navigation from "@/components/Navigation";
import Category from "@/components/Category";
import Preview from "@/components/Preview";
import { Courses } from "@/components/Courses";
import People from "@/components/People";
import NewsLetter from "@/components/NewsLetter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className={styles.home}>
      <Navigation style={true} show={true} />
      <Category />
      <Preview />
      <Courses />
      <People />
      <NewsLetter />
      <Footer />
    </div>
  );
}
