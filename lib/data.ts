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
  {
    title: "Airbnb Data Engineering Pipeline",
    description:
      "Built an end-to-end ELT pipeline that processes Airbnb data using AWS S3, Snowflake, and dbt Core. Implemented a Bronze, Silver, and Gold medallion architecture to organize data ingestion, transformation, and analytics-ready modeling.\n\nKey Features:\n- Loaded raw Airbnb data from AWS S3 into Snowflake\n- Incremental loading on Silver-layer booking models\n- dbt snapshots for SCD Type 2 historical change tracking\n- Gold-layer One Big Table (OBT) for analytics\n- Jinja macros and dbt tests for reusable transformations and data quality",
    tags: ["AWS S3", "Snowflake", "dbt Core", "SQL", "Jinja", "ETL/ELT"],
    githubUrl: "https://github.com/Varunsaketh/Airbnb-project",
  },
  {
    title: "Retrieval-Augmented Generation (RAG) Pipeline",
    description:
      "Developed a document-based Retrieval-Augmented Generation pipeline that processes multiple document formats, converts content into chunks, generates embeddings, and stores vectors for semantic retrieval.\n\nKey Features:\n- Ingested PDF, Excel, and text documents\n- Multiple chunking strategies (Recursive, SpaCy, and NLTK splitters)\n- Embeddings with Sentence Transformers (all-MiniLM-L6-v2)\n- Persistent ChromaDB storage of embeddings and document metadata\n- Query embedding generation and similarity-based retrieval of relevant chunks",
    tags: [
      "Python",
      "LangChain",
      "ChromaDB",
      "Sentence Transformers",
      "NLP",
      "Embeddings",
    ],
    githubUrl: "https://github.com/Varunsaketh/RAG-Learning-project",
  },
  {
    title: "AI Research Assistant",
    description:
      "Developed a multi-agent AI research assistant using CrewAI to gather information from the internet, analyze research findings, and generate structured written reports.\n\nKey Features:\n- Three specialized agents: Research, Analysis, and Writer\n- Research Agent collects web information using Serper and website scraping tools\n- Analysis Agent reviews gathered material and produces insights\n- Writer Agent converts the analysis into a structured report\n- Groq as the default LLM, with Gemini supported through CrewAI's Google GenAI extra",
    tags: ["Python", "CrewAI", "Gemini", "Groq", "LLMs", "Multi-Agent Systems"],
    githubUrl: "https://github.com/Varunsaketh/AI-Research-Assistant-",
  },
] as const;

export const skillsData = [
  "Python",
  "SQL",
  "C++",
  "PySpark",
  "dbt",
  "Snowflake",
  "AWS",
  "MS SQL Server",
  "Databricks",
  "Power BI",
  "LangChain",
  "CrewAI",
  "Git",
  "GitHub",
] as const;
