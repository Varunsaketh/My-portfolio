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
        I&apos;m a Computer Science Engineering student specializing in
        Artificial Intelligence and Machine Learning at SRM Institute of Science
        and Technology, Ramapuram, with a CGPA of 9.64/10. My work spans data
        engineering, data analytics, machine learning, and Generative AI — areas
        where I focus on building practical, well-structured technical solutions.
      </p>

      <p className="mb-3">
        On the data engineering side, I have hands-on experience designing
        pipelines that move raw data through Bronze, Silver, and Gold medallion
        layers using tools like MS SQL Server, Snowflake, dbt Core, and AWS S3.
        I work with incremental loading, SCD Type 2 historical tracking, and
        data modeling patterns to produce analytics-ready datasets. I also build
        analytical dashboards in Power BI using DAX and Power Query.
      </p>

      <p className="mb-3">
        In Generative AI, I have built a document-based RAG pipeline that
        handles ingestion, chunking, embedding generation, and vector retrieval
        using ChromaDB and LangChain, as well as a multi-agent research
        assistant with CrewAI that coordinates specialized agents for research,
        analysis, and report writing. I have also developed several machine
        learning models across classification and prediction tasks using Python
        and scikit-learn, and have solved over 150 problems on LeetCode.
      </p>

      <div className="mt-5 inline-block rounded-xl border border-black/10 bg-white px-5 py-3 text-sm leading-relaxed dark:bg-white/10 dark:border-white/20 dark:text-white/80">
        <p className="font-semibold text-gray-900 dark:text-white">B.Tech CSE (AI &amp; ML)</p>
        <p className="text-gray-600 dark:text-white/60">SRM Institute of Science and Technology</p>
        <p className="text-gray-600 dark:text-white/60">CGPA: 9.64 / 10 &nbsp;·&nbsp; 2023 – 2027</p>
      </div>
    </motion.section>
  );
}
