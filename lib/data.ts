import React from "react";
import {
  FaBookOpen,
  FaDatabase,
  FaCode,
  FaRobot,
} from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Learning Journey",
    hash: "#experience",
  },
] as const;

export const experiencesData = [
  {
    title: "Learning Journey",
    location: "Programming Foundations",
    description:
      "Started my programming journey by learning the fundamentals of C++ and Python. Built a strong foundation in problem-solving and core programming concepts.",
    icon: React.createElement(FaBookOpen),
    date: "2023 - 2024",
  },
  {
    title: "Learning Journey",
    location: "Machine Learning, SQL, and DSA",
    description:
      "Explored core concepts of Machine Learning and SQL through hands-on practice in data preprocessing, basic ML algorithms, SQL queries, and database fundamentals. Also actively practiced Data Structures and Algorithms on LeetCode to strengthen problem-solving skills.",
    icon: React.createElement(FaDatabase),
    date: "2024 - 2025",
  },
  {
    title: "Learning Journey",
    location: "Applied Machine Learning and SQL Projects",
    description:
      "Focused on building real-world projects in Machine Learning and SQL. Applied practical knowledge to develop predictive models and data-driven solutions.\n\n• Built a Data Warehouse using ETL pipelines and implemented a 3-layer architecture (Bronze, Silver, and Gold layers) for efficient data processing and management.\n• Designed and developed interactive Power BI dashboards for business insights and data visualization.\n• Explored and implemented Star Schema and Snowflake Schema data models for analytical reporting and warehouse optimization.\n• Gained hands-on experience in data modeling, data transformation, and reporting workflows.",
    icon: React.createElement(FaCode),
    date: "2025 - 2026",
  },
  {
    title: "Learning Journey",
    location: "AI Agents, RAG, Data Analytics and Data Engineering",
    description:
      "Currently exploring and building AI Agents and Retrieval-Augmented Generation (RAG) applications. Learning LangChain, vector databases, embeddings, prompt engineering, document chunking, and agent workflows. Expanding knowledge in Data Engineering, Databricks, and analytics tools while building intelligent AI-powered solutions.",
    icon: React.createElement(FaRobot),
    date: "2026 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "SQL Data Warehouse for Analytics",
    description:
      "Designed and implemented a scalable data warehouse using MS SQL Server.\n\nBuilt a complete ETL pipeline using a multi-layer architecture:\n- Bronze Layer: Raw data ingestion\n- Silver Layer: Data cleaning, transformation, and standardization\n- Gold Layer: Analytics-ready datasets\n\nKey Features:\n- ETL pipeline using SQL stored procedures\n- Data modeling and schema design\n- Data cleaning and transformation\n- Optimized queries for analytics",
    tags: ["MS SQL Server", "T-SQL", "ETL", "Data Modeling"],
    githubUrl: "https://github.com/Varunsaketh/SQL---Data-Warehouse",
  },
  {
    title: "Machine Learning Prediction Systems",
    description:
      "Developed multiple machine learning models across different domains, including:\n- Diabetes Prediction\n- House Price Prediction\n- Spam Mail Detection\n- Fake News Detection\n- Wine Quality Prediction\n\nKey Features:\n- Data preprocessing (handling null values, standardization, feature engineering)\n- Text processing using TF-IDF Vectorizer (for NLP tasks)\n- Model training using Logistic Regression and Random Forest Classifier\n- Model evaluation and performance tuning",
    tags: ["Python", "Scikit-learn", "Pandas", "NumPy", "TF-IDF"],
    githubUrl: "https://github.com/Varunsaketh/Machine-Learning",
  },
  {
    title: "Chocolate Sales Analytics Dashboard",
    description:
      "Built an interactive Power BI dashboard to analyze sales performance of a chocolate company across multiple countries.\n\nKey Features:\n- Data transformation using Power Query\n- KPI tracking (revenue, sales trends, region performance)\n- Interactive visualizations and filters\n- DAX measures for advanced analytics",
    tags: ["Power BI", "Power Query", "DAX"],
    githubUrl: "https://github.com/Varunsaketh/Chocolate-sales-dashboard-",
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "AWS",
  "Power BI",
  "MS SQL Server",
  "Databricks",
  "Git",
  "GitHub",
] as const;
