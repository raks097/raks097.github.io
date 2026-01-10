export const experiences = [
    {
        id: 'extrahop',
        title: 'Data Scientist',
        company: 'ExtraHop Networks',
        shortDesc: 'ML Systems, GenAI',
        location: 'Seattle',
        period: 'Apr 2024 – Present',
        icon: 'security',
        description: "As a Data Scientist on ExtraHop's research team, I build and productionize machine-learning systems that power enterprise-scale threat detection and network intelligence.",
        additionalInfo: "I collaborate with security researchers, detection engineers, and platform teams to ensure each model is performant, explainable, and actionable: helping SOCs respond faster and with higher confidence.",
        bullets: [
            'Productionized a streaming SQL Injection detector using Naive Bayes and Firehose telemetry for drift monitoring, containerized and deployed via ExtraHop\'s async stack; reduced false positives by 53% while maintaining sub-100 ms latency.',
            'Developed a multi-agent RAG system (LangGraph + GPT-4o + ChromaDB + BGE embeddings) that parsed 2K+ merge requests to surface tribal knowledge and internal conventions—enabled context-aware code reviews and accelerated development.',
        ]
    },
    {
        id: 'cognira',
        title: 'Data Science Intern',
        company: 'Cognira',
        shortDesc: 'PySpark, Retail Analytics',
        location: 'Atlanta',
        period: 'May 2023 – Aug 2023',
        icon: 'analytics',
        description: 'Built PySpark pipelines integrating fragmented retail data into comprehensive promotional datasets, driving inventory optimization.',
        additionalInfo: null,
        bullets: [
            'Designed PySpark pipelines, integrating fragmented retail data into comprehensive promotional datasets.',
            'Predicted post-promo demand drops using regression models, driving $485K in inventory optimization for a flagship client.',
        ]
    },
    {
        id: 'jio',
        title: 'Machine Learning Engineer',
        company: 'Reliance Jio AI-COE',
        shortDesc: 'Telecom AI, ETL',
        location: 'India',
        period: 'Aug 2020 – Jul 2022',
        icon: 'telecom',
        description: "Led AI initiatives for one of the world's largest telecom networks to solve real-time customer quality and performance issues.",
        additionalInfo: null,
        bullets: [
            'Optimized ETL pipelines using PySpark & Apache Airflow, reducing batch job runtime from 13h to 3.3h across 400M+ users.',
            'Trained an end-to-end Digital Twin for regional internet performance, leveraging LightGBM/XGBoost with advanced feature engineering and tuning—boosted AUC from 0.61 to 0.82 for accurate download speed prediction.',
            'Used SHAP explainability to drive root cause analysis in 4G/5G failures—powering proactive service interventions.',
            'Integrated root cause codes into network optimization and marketing use cases'
        ]
    }
];

export const education = [
    {
        id: 'gatech',
        school: 'Georgia Tech',
        institution: 'Georgia Institute of Technology',
        degree: 'M.S. Computational Data Analytics',
        location: 'Atlanta, GA',
        period: 'Aug 2022 – Dec 2023'
    },
    {
        id: 'iiitb',
        school: 'IIIT Bangalore',
        institution: 'International Institute of Information Technology Bangalore',
        degree: "M.Tech Computer Science, Dean's Merit List",
        location: 'Bangalore, India',
        period: 'Jun 2015 – Jul 2020'
    }
];
