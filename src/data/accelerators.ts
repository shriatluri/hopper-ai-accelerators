export interface Accelerator {
  id: string;
  title: string;
  description: string;
  status: "Live" | "Coming Soon";
  personas: string[];
}

export const accelerators: Accelerator[] = [
  {
    id: "code-intent",
    title: "Code Intent Agent",
    description: "Explain code's business and technical purpose",
    status: "Live",
    personas: ["Business Analyst"]
  },
  {
    id: "code-conversion",
    title: "Code Conversion Agent",
    description: "Convert T-SQL to PySpark for Databricks",
    status: "Live",
    personas: ["Data Engineer"]
  },
  {
    id: "data-modeler",
    title: "Data Modeler Agent",
    description: "Generate data models from schemas",
    status: "Live",
    personas: ["Data Engineer", "Data Architect"]
  },
  {
    id: "language-translator",
    title: "Language Translator Agent",
    description: "Translate column names, values, or datasets",
    status: "Live",
    personas: ["Data Steward"]
  },
  {
    id: "test-data-generation",
    title: "Test Data Generation Agent",
    description: "Create mock data for dev/testing",
    status: "Coming Soon",
    personas: ["Data Steward"]
  },
  {
    id: "data-profiler",
    title: "Data Profiler Agent",
    description: "Scan and summarize data quality issues",
    status: "Live",
    personas: ["Data Steward"]
  },
  {
    id: "etl-converter",
    title: "ETL Converter Agent",
    description: "Migrate legacy pipelines (SSIS → PySpark)",
    status: "Live",
    personas: ["Data Engineer"]
  },
  {
    id: "question-to-sql",
    title: "Question-to-SQL Agent",
    description: "Natural language to query",
    status: "Coming Soon",
    personas: ["Business Analyst"]
  },
  {
    id: "dbt-model-generator",
    title: "DBT Model Generator Agent",
    description: "Generate DBT models from SQL",
    status: "Coming Soon",
    personas: ["Analytics Engineer"]
  },
  {
    id: "observability",
    title: "Observability Agent",
    description: "Explain job failures and suggest fixes",
    status: "Coming Soon",
    personas: ["Data Operator"]
  }
];

export const personaDescriptions = {
  "All": "Hopper offers a comprehensive suite of AI-powered accelerators designed to streamline data workflows for all types of data professionals, from analysts to engineers to leaders.",
  "Business Analyst": "Business Analysts bridge business requirements and technical implementation, requiring tools for code understanding and query generation.",
  "Data Engineer": "Data Engineers build and maintain data pipelines, needing tools for code conversion, ETL migration, and data modeling.",
  "Data Architect": "Data Architects design data systems and structures, focusing on modeling tools and architectural best practices.",
  "Data Steward": "Data Stewards ensure data quality and governance, utilizing profiling, translation, and testing tools.",
  "Data Modeler": "Data Modelers create logical and physical data models, requiring specialized modeling and schema generation tools.",
  "Analytics Engineer": "Analytics Engineers work with transformation frameworks like DBT, focusing on model generation and analytics workflows.",
  "Data Operator": "Data Operators monitor and maintain data systems, needing observability and troubleshooting tools.",
  "Data Leader": "Data Leaders oversee data strategy and operations, requiring tools that provide insights across all data disciplines."
};

export const allPersonas = [
  "All",
  "Business Analyst", 
  "Data Engineer", 
  "Data Architect", 
  "Data Steward",
  "Data Modeler", 
  "Analytics Engineer", 
  "Data Operator", 
  "Data Leader"
];

export const personaTooltips = {
  "All": "Show all available accelerators across all roles",
  "Business Analyst": "Professionals who analyze business requirements and translate them into technical specifications",
  "Data Engineer": "Technical professionals who build, maintain, and optimize data pipelines and infrastructure",
  "Data Architect": "Senior professionals who design overall data architecture and system structures",
  "Data Steward": "Professionals responsible for data quality, governance, and compliance",
  "Data Modeler": "Specialists who create logical and physical data models for databases and systems",
  "Analytics Engineer": "Professionals who build data transformations and analytics workflows using tools like DBT",
  "Data Operator": "Professionals who monitor, maintain, and troubleshoot data systems and operations",
  "Data Leader": "Senior leaders who oversee data strategy, teams, and organizational data initiatives"
};