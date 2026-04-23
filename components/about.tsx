"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am currently pursuing Computer Science Engineering (AI & ML) at SRM
        Ramapuram. My primary interests lie in machine learning, data analytics,
        and data engineering.
      </p>

      <p className="mb-3">
        I enjoy working with data, understanding patterns, and solving
        real-world problems through practical approaches. I have been building a
        strong foundation in Python and SQL, and I am continuously exploring how
        data can be transformed into meaningful insights.
      </p>

      <p className="mb-3">
        As part of my learning journey, I have worked on multiple projects
        involving data preprocessing, basic machine learning models, and
        analytics dashboards. These experiences have helped me understand the
        importance of clean data, structured workflows, and effective
        visualization.
      </p>

      <p className="mb-3">
        I am also gaining hands-on experience with tools like Power BI and
        Databricks to strengthen my skills in data analysis and data engineering
        workflows.
      </p>

      <p>
        I am focused on continuously improving my problem-solving skills and
        applying what I learn to real-world scenarios. I am always eager to
        learn new technologies and grow in the field of AI and data.
      </p>
    </motion.section>
  );
}
