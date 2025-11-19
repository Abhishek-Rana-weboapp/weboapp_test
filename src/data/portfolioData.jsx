import { ChartLine, Database, History, Plus, UserRoundCog } from "lucide-react";

export const projects = [

  // Project Comment
  {
    id: 1,
    title: "Custom ERP Development for a Manufacturing Company",
    description:
      "Transforming operations with a modern, integrated ERP solution",
    client: {
      description:
        "The client is a mid-sized automotive parts manufacturer with over 20 years of experience in the industry. They operate three manufacturing units and supply parts to major automotive companies. Their legacy ERP system was built on outdated technology, leading to inefficiencies in inventory management, production planning, and financial reporting",
      img: "/automation.jpeg",
      points: [
        {
          to: 20,
          description: "Years Experience",
          icon: <Plus color="#1d4ed8" />,
        },
        {
          to: 3,
          description: "Manufacturing Units",
        },
      ],
    },
    challenges:{
        points:[
            {
              title: "OutDated System",
              description:
                "Legacy ERP built on monolithic architecture, difficult to scale or integrate",
              icon: <History size={25} color="#1d4ed8" />,
            },
            {
              title: "Data Silos",
              description:
                "Seperate system leading to inconsistencies and delayed decision-making",
              icon: <Database size={25} color="#1d4ed8" />,
            },
            {
              title: "Manual Processes",
              description:
                "Error prone manual tasks in inventory tracking and production scheduling",
              icon: <UserRoundCog size={25} color="#1d4ed8" />,
            },
            {
              title: "Lack of Insights",
              description:
                "No real time visibility into inventory, production and performance",
              icon: <ChartLine size={25} color="#1d4ed8" />,
            },
          ]
    },
    solution:{
        description:"We developed a custom ERP system tailored to the client's needs. The system was built using Python (Django) for the backend and ReactJS for the frontend. It included the following modules:",
        points:[
            {
              title: "Inventory Management",
              description: "Real-time tracking of raw materials and finished goods.",
              icon: <></>,
            },
            {
              title: "Production Planning",
              description:
                "Automated scheduling of production tasks based on demand and resource availability.",
              icon: <></>,
            },
            {
              title: "Quality Control",
              description: "Tracking and reporting of product quality metrics.",
              icon: <></>,
            },
            {
              title: "Financial Accounting",
              description:
                "Automated invoicing, expense tracking, and financial reporting.",
              icon: <></>,
            },
            {
              title: "Integration",
              description:
                "Seamless integration with Zoho CRM for customer data and PowerBI for analytics.",
              icon: <></>,
            },
          ]
    },
    implementation:{
      points:[
        {
          title:"Requirement Gathering",
          description:"We conducted workshops with key stakeholders to understand their pain points and requirements."
        },
        {
          title:"System Design",
          description:"We designed a modular architecture to ensure scalability and flexibility."
        },
        {
          title:"Development",
          description:"The system was developed using Agile methodology, with regular feedback from the client."
        },
        {
          title:"Testing",
          description:"Rigorous testing was conducted to ensure data accuracy and system performance."
        },
        {
          title:"Deployment",
          description:"The system was deployed in phases to minimize disruption to operations."
        },
        {
          title:"Training",
          description:"We provided comprehensive training to the client's staff to ensure smooth adoption."
        },
      ]
    },
    results:{
      image:"/portfolio/projects/erpProject.webp",
      points:[
        {
          to:20,
          description:"Reduction in Operational Costs",
          icon:"%"
        },
        {
          to:100,
          description:"Real-time Visibility",
          icon:"%"
        },
        {
          to:3,
          description:"Faster Decision Making",
          icon:"x"
        },
        {
          to:20,
          description:"Reduction in Operational Costs",
          icon:"%"
        },
      ]
    },
    technologies:
    {

      points:[
        {
          title:"Python(Django)",
          description:"Backend development with Django REST framework",
          img:"/icons/technologies/Python.png"
        },
        {
        title:"ReactJS",
        description:"Frontend development with Redux state management",
        img:"/icons/technologies/react.png"
      },
      {
        title:"PostgreSQL",
        description:"Primary database with ACID compliance",
        img:"/icons/technologies/PostgresSQL.png"
      },
      {
        title:"Docker",
        description:"Used for deployment and container orchestration",
        img:"/icons/technologies/Docker.png"
      },
      {
        title:"Kubernetes",
        description:"Used for deployment and container orchestration",
        img:"/icons/technologies/Kubernetes.png"
      },
      {
        title:"Zoho",
        description:"Used for deployment and container orchestration",
        img:"/icons/technologies/zoho.png"
      },
      {
        title:"PowerBI",
        description:"Frontend development with Redux state management",
        img:"/icons/technologies/chart.png"
      },
    ]
    }
    
  },

   // Project Comment
   {
    id: 2,
    title: "Odoo Plugin for E-commerce",
    description:
      "Transforming operations with a Odoo Plugin for E-commerce",
    client: {
      description:
        "The client is an e-commerce business specializing in handmade crafts. They needed a custom Odoo plugin to manage their unique inventory requirements, including custom pricing based on material costs and labor.",
      img: "/automation.jpeg",
      points: [
        {
          to: 20,
          description: "Years Experience",
          icon: <Plus color="#1d4ed8" />,
        },
        {
          to: 3,
          description: "Manufacturing Units",
        },
      ],
    },
    challenges:{
        points:[
            {
              title: "OutDated System",
              description:
                "Legacy ERP built on monolithic architecture, difficult to scale or integrate",
              icon: <History size={25} color="#1d4ed8" />,
            },
            {
              title: "Data Silos",
              description:
                "Seperate system leading to inconsistencies and delayed decision-making",
              icon: <Database size={25} color="#1d4ed8" />,
            },
            {
              title: "Manual Processes",
              description:
                "Error prone manual tasks in inventory tracking and production scheduling",
              icon: <UserRoundCog size={25} color="#1d4ed8" />,
            },
            {
              title: "Lack of Insights",
              description:
                "No real time visibility into inventory, production and performance",
              icon: <ChartLine size={25} color="#1d4ed8" />,
            },
          ]
    },
    solution:{
        description:"We developed a custom ERP system tailored to the client's needs. The system was built using Python (Django) for the backend and ReactJS for the frontend. It included the following modules:",
        points:[
            {
              title: "Inventory Management",
              description: "Real-time tracking of raw materials and finished goods.",
              icon: <></>,
            },
            {
              title: "Production Planning",
              description:
                "Automated scheduling of production tasks based on demand and resource availability.",
              icon: <></>,
            },
            {
              title: "Quality Control",
              description: "Tracking and reporting of product quality metrics.",
              icon: <></>,
            },
            {
              title: "Financial Accounting",
              description:
                "Automated invoicing, expense tracking, and financial reporting.",
              icon: <></>,
            },
            {
              title: "Integration",
              description:
                "Seamless integration with Zoho CnpRM for customer data and PowerBI for analytics.",
              icon: <></>,
            },
          ]
    },
    implementation:{
      points:[
        {
          title:"Requirement Gathering",
          description:"We conducted workshops with key stakeholders to understand their pain points and requirements."
        },
        {
          title:"System Design",
          description:"We designed a modular architecture to ensure scalability and flexibility."
        },
        {
          title:"Development",
          description:"The system was developed using Agile methodology, with regular feedback from the client."
        },
        {
          title:"Testing",
          description:"Rigorous testing was conducted to ensure data accuracy and system performance."
        },
        {
          title:"Deployment",
          description:"The system was deployed in phases to minimize disruption to operations."
        },
        {
          title:"Training",
          description:"We provided comprehensive training to the client's staff to ensure smooth adoption."
        },
      ]
    },
    results:{
      image:"/portfolio/projects/erpProject.webp",
      points:[
        {
          to:20,
          description:"Reduction in Operational Costs",
          icon:"%"
        },
        {
          to:100,
          description:"Real-time Visibility",
          icon:"%"
        },
        {
          to:3,
          description:"Faster Decision Making",
          icon:"x"
        },
        {
          to:20,
          description:"Reduction in Operational Costs",
          icon:"%"
        },
      ]
    },
    technologies:
    {

      points:[
        {
          title:"Python(Django)",
          description:"Backend development with Django REST framework",
          img:"/icons/technologies/Python.png"
        },
        {
        title:"ReactJS",
        description:"Frontend development with Redux state management",
        img:"/icons/technologies/react.png"
      },
      {
        title:"PostgreSQL",
        description:"Primary database with ACID compliance",
        img:"/icons/technologies/PostgresSQL.png"
      },
      {
        title:"Docker",
        description:"Used for deployment and container orchestration",
        img:"/icons/technologies/Docker.png"
      },
      {
        title:"Kubernetes",
        description:"Used for deployment and container orchestration",
        img:"/icons/technologies/Kubernetes.png"
      },
      {
        title:"Zoho",
        description:"Used for deployment and container orchestration",
        img:"/icons/technologies/zoho.png"
      },
      {
        title:"PowerBI",
        description:"Frontend development with Redux state management",
        img:"/icons/technologies/chart.png"
      },
    ]
    }
    
  },

   // Project Comment
   {
    id: 3,
    title: "Zoho CRM for a Real Estate Agency",
    description: "Streamlining property management and lead tracking with Zoho CRM",
    client: {
      description:
        "The client is a real estate agency managing over 500 properties across multiple cities. They previously relied on spreadsheets and manual processes to manage leads, properties, and client communication, resulting in inefficiencies and missed opportunities.",
      img: "/real_estate.jpeg",
      points: [
        {
          to: 500,
          description: "Properties Managed",
        },
        {
          to: 30,
          description: "% Increase in Lead Conversion",
        },
      ],
    },
    challenges: {
      points: [
        {
          title: "Manual Processes",
          description:
            "Managing leads, properties, and communication manually was time-consuming and error-prone.",
        },
        {
          title: "Data Silos",
          description:
            "Data was stored in separate spreadsheets, preventing a unified view of operations.",
        },
        {
          title: "Lack of Automation",
          description:
            "No automation for lead follow-ups or property updates led to missed opportunities.",
        },
        {
          title: "Poor Reporting",
          description:
            "The client lacked real-time insights into sales performance and lead conversion rates.",
        },
      ],
    },
    solution: {
      description:
        "We implemented a customized Zoho CRM solution to streamline operations and improve efficiency.",
      points: [
        {
          title: "Lead Management",
          description: "Automated lead capture, scoring, and follow-ups.",
        },
        {
          title: "Property Management",
          description: "Centralized database with real-time property updates.",
        },
        {
          title: "Client Communication",
          description: "Automated email and SMS campaigns for client engagement.",
        },
        {
          title: "Reporting and Analytics",
          description: "Real-time dashboards for sales performance and lead conversion rates.",
        },
      ],
    },
    implementation: {
      points: [
        {
          title: "Requirement Gathering",
          description: "Workshops with the client to understand workflows and requirements."
        },
        {
          title: "CRM Configuration",
          description: "Configured Zoho CRM with custom fields, workflows, and automation."
        },
        {
          title: "Data Migration",
          description: "Migrated data from spreadsheets to Zoho CRM, ensuring data accuracy."
        },
        {
          title: "Integration",
          description: "Integrated Zoho CRM with the client's website and social media platforms for lead capture."
        },
        {
          title: "Training",
          description: "Provided hands-on training for the client's staff to ensure smooth adoption."
        },
      ],
    },
    results: {
      image:"/portfolio/projects/crmProject.jpg",
      points: [
        {
          to: 50,
          description: "Reduction in Manual Effort",
          icon: "%",
        },
        {
          to: 30,
          description: "Increase in Lead Conversion Rates",
          icon: "%",
        },
        {
          to: 100,
          description: "Real-time Data Visibility",
          icon: "%",
        },
      ],
    },
    technologies: {
      points: [
        {
          title: "Zoho CRM",
          description: "Core platform for lead and property management with automation.",
          img: "/icons/technologies/zoho.png",
        },
        {
          title: "Zoho CRM API",
          description: "For real-time integration with websites and social media.",
          img: "/icons/technologies/zoho.png",
        },
        {
          title: "JavaScript",
          description: "Custom scripts for workflow automation and CRM customization.",
          img: "/icons/technologies/js.png",
        },
        {
          title: "Google Sheets API",
          description: "For data migration from spreadsheets to Zoho CRM.",
          img: "/icons/technologies/sheets.png",
        },
      ],
    },
  },
   // Project Comment
   {
    id: 4,
    title: "Zoho Desk for an IT Support Company",
    description: "Enhancing customer support management with Zoho Desk",
    client: {
      description:
        "The client is an IT support company providing services to SMEs. They were previously using email and spreadsheets to manage support tickets, leading to inefficiencies and poor customer satisfaction.",
      img: "/it_support.jpeg",
      points: [
        {
          to: 40,
          description: "% Reduction in Manual Effort",
        },
        {
          to: 25,
          description: "% Increase in Customer Satisfaction",
        },
      ],
    },
    challenges: {
      points: [
        {
          title: "Manual Ticket Management",
          description:
            "Managing support tickets manually was time-consuming and error-prone.",
        },
        {
          title: "Lack of Automation",
          description:
            "No automated ticket assignment or follow-ups led to delays in resolutions.",
        },
        {
          title: "Poor Reporting",
          description:
            "The client lacked real-time insights into ticket resolution times and customer satisfaction.",
        },
      ],
    },
    solution: {
      description:
        "We implemented a customized Zoho Desk solution to streamline support operations and improve customer satisfaction.",
      points: [
        {
          title: "Ticket Management",
          description: "Automated ticket capture, assignment, and follow-ups.",
        },
        {
          title: "Knowledge Base",
          description: "Centralized knowledge base for common issues and solutions.",
        },
        {
          title: "Reporting and Analytics",
          description: "Real-time dashboards for ticket resolution times and customer satisfaction.",
        },
      ],
    },
    implementation: {
      points: [
        {
          title: "Requirement Gathering",
          description: "Conducted workshops to understand the client's workflows and pain points."
        },
        {
          title: "Desk Configuration",
          description: "Configured Zoho Desk with custom fields, workflows, and automation."
        },
        {
          title: "Data Migration",
          description: "Migrated data from spreadsheets to Zoho Desk, ensuring data accuracy."
        },
        {
          title: "Integration",
          description: "Integrated Zoho Desk with email and chat platforms for automated ticket capture."
        },
        {
          title: "Training",
          description: "Provided hands-on training to the client's staff to ensure smooth adoption."
        },
      ],
    },
    results: {
      points: [
        {
          to: 40,
          description: "Reduction in Manual Effort",
          icon: "%",
        },
        {
          to: 25,
          description: "Increase in Customer Satisfaction",
          icon: "%",
        },
        {
          to: 100,
          description: "Real-time Data Visibility",
          icon: "%",
        },
      ],
    },
    technologies: {
      points: [
        {
          title: "Zoho Desk",
          description: "Core platform for ticket management with automation.",
          img: "/icons/technologies/zoho.png",
        },
        {
          title: "Zoho Desk API",
          description: "For real-time integration with email and chat platforms.",
          img: "/icons/technologies/api.png",
        },
        {
          title: "JavaScript",
          description: "Custom scripts for workflow automation and CRM customization.",
          img: "/icons/technologies/js.png",
        },
        {
          title: "Google Sheets API",
          description: "For data migration from spreadsheets to Zoho Desk.",
          img: "/icons/technologies/google_sheets.png",
        },
      ],
    },
  },

   // Project Comment
   {
    id: 1,
    title: "Custom ERP Development for a Manufacturing Company",
    description:
      "Transforming operations with a modern, integrated ERP solution",
    client: {
      description:
        "The client is a mid-sized automotive parts manufacturer with over 20 years of experience in the industry. They operate three manufacturing units and supply parts to major automotive companies. Their legacy ERP system was built on outdated technology, leading to inefficiencies in inventory management, production planning, and financial reporting",
      img: "/automation.jpeg",
      points: [
        {
          to: 20,
          description: "Years Experience",
          icon: <Plus color="#1d4ed8" />,
        },
        {
          to: 3,
          description: "Manufacturing Units",
        },
      ],
    },
    challenges:{
        points:[
            {
              title: "OutDated System",
              description:
                "Legacy ERP built on monolithic architecture, difficult to scale or integrate",
              icon: <History size={25} color="#1d4ed8" />,
            },
            {
              title: "Data Silos",
              description:
                "Seperate system leading to inconsistencies and delayed decision-making",
              icon: <Database size={25} color="#1d4ed8" />,
            },
            {
              title: "Manual Processes",
              description:
                "Error prone manual tasks in inventory tracking and production scheduling",
              icon: <UserRoundCog size={25} color="#1d4ed8" />,
            },
            {
              title: "Lack of Insights",
              description:
                "No real time visibility into inventory, production and performance",
              icon: <ChartLine size={25} color="#1d4ed8" />,
            },
          ]
    },
    solution:{
        description:"We developed a custom ERP system tailored to the client's needs. The system was built using Python (Django) for the backend and ReactJS for the frontend. It included the following modules:",
        points:[
            {
              title: "Inventory Management",
              description: "Real-time tracking of raw materials and finished goods.",
              icon: <></>,
            },
            {
              title: "Production Planning",
              description:
                "Automated scheduling of production tasks based on demand and resource availability.",
              icon: <></>,
            },
            {
              title: "Quality Control",
              description: "Tracking and reporting of product quality metrics.",
              icon: <></>,
            },
            {
              title: "Financial Accounting",
              description:
                "Automated invoicing, expense tracking, and financial reporting.",
              icon: <></>,
            },
            {
              title: "Integration",
              description:
                "Seamless integration with Zoho CRM for customer data and PowerBI for analytics.",
              icon: <></>,
            },
          ]
    },
    implementation:{
      points:[
        {
          title:"Requirement Gathering",
          description:"We conducted workshops with key stakeholders to understand their pain points and requirements."
        },
        {
          title:"System Design",
          description:"We designed a modular architecture to ensure scalability and flexibility."
        },
        {
          title:"Development",
          description:"The system was developed using Agile methodology, with regular feedback from the client."
        },
        {
          title:"Testing",
          description:"Rigorous testing was conducted to ensure data accuracy and system performance."
        },
        {
          title:"Deployment",
          description:"The system was deployed in phases to minimize disruption to operations."
        },
        {
          title:"Training",
          description:"We provided comprehensive training to the client's staff to ensure smooth adoption."
        },
      ]
    },
    results:{
      points:[
        {
          to:20,
          description:"Reduction in Operational Costs",
          icon:"%"
        },
        {
          to:100,
          description:"Real-time Visibility",
          icon:"%"
        },
        {
          to:3,
          description:"Faster Decision Making",
          icon:"x"
        },
        {
          to:20,
          description:"Reduction in Operational Costs",
          icon:"%"
        },
      ]
    },
    technologies:
    {

      points:[
        {
          title:"Python(Django)",
          description:"Backend development with Django REST framework",
          img:"/icons/technologies/Python.png"
        },
        {
        title:"ReactJS",
        description:"Frontend development with Redux state management",
        img:"/icons/technologies/react.png"
      },
      {
        title:"PostgreSQL",
        description:"Primary database with ACID compliance",
        img:"/icons/technologies/PostgresSQL.png"
      },
      {
        title:"Docker",
        description:"Used for deployment and container orchestration",
        img:"/icons/technologies/Docker.png"
      },
      {
        title:"Kubernetes",
        description:"Used for deployment and container orchestration",
        img:"/icons/technologies/Kubernetes.png"
      },
      {
        title:"Zoho",
        description:"Used for deployment and container orchestration",
        img:"/icons/technologies/zoho.png"
      },
      {
        title:"PowerBI",
        description:"Frontend development with Redux state management",
        img:"/icons/technologies/chart.png"
      },
    ]
    }
    
  },
];
