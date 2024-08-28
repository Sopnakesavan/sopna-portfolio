import arthPinkLogo from './assets/arth-pink.png';
import happyLogo from './assets/happyneo.png';
import accioLogo from './assets/accio.svg';
import bioconLogo from './assets/biocon.jpg'

export const services = [
    {
        title: "QA Intern",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Junior Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
    {
        title: "Software Engineer",
        icon: 'https://csgeeek.github.io/web.png',
    },
];

export const name = 'Sopna Kesavan';

export const experiences = [
    {
        'company': 'Arth Impact',
        'role': 'Software Engineer',
        'duration': 'April 2023 - Present',
        'logo': arthPinkLogo,
        'points': [
      'Backend Software Engineer along with DevOps expertise with hands-on experience in Angular for frontend development and Django for backend and AWS.',
      'Angular Application - Loan Report Management System: Developed and implemented an Angular-based application for managing loan reports, focusing on intuitive user interfaces and responsive design.',
      'Django Backend: Designed and deployed a Django-backed backend system for a loan onboarding application, ensuring efficient data management and integration with frontend interfaces.',
      'AWS DevOps Responsibilities: Deployment Using ECS and CloudFormation: Managed AWS infrastructure independently as a solo DevOps engineer, utilizing ECS for containerized deployments and CloudFormation for automated infrastructure provisioning. Implemented CI/CD pipelines to automate build, test, and deployment processes, ensuring consistent and reliable application updates.',
      'Monitoring and Security: Implemented monitoring solutions using AWS CloudWatch for real-time insights into application performance and health. Enhanced security measures by implementing access controls, IAM policies, and encryption to safeguard AWS resources and data.',
      'Jenkins and Kubernetes for Development Server: Utilized Jenkins for managing CI/CD pipelines, automating software delivery processes from development through to production. Implemented Kubernetes for container orchestration in development server environments, optimizing application scalability and resource management.'
    ],
        'url': 'https://arthimpact.in/',
    },
    {
        'company': 'Acciojob',
        'role': 'Technical Mentor',
        'duration': 'Feb 2023 - Present',
        'logo': accioLogo,
        'points': [
            'Mock Interviewer - Conducts technical interviews for full stack developer students from bootcamp, evaluating their DSA coding skills and providing guidance to improve their performance for job placements'
        ],
        'url': 'https://acciojob.com/',
    },
    {
        "company": "Happy Neo",
        "role": "Junior Software Engineer",
        "duration": "Jan 2023 - March 2023",
        "logo": happyLogo,
        "points": [
            "Played a key role in Django-based backend projects for a sales application and partner portal within the fintech industry, focusing on optimizing the design, development, and maintenance of robust backend systems.",
            "Specialized in AWS deployment, proficient in setting up scalable and reliable infrastructure using services like Elastic Beanstalk, RDS, and Lambda.",
            "Seamlessly integrated APIs with third-party services to enhance system functionality and interoperability."
        ],
        "url": "https://happyness.net/"
    },
    
    {
        'company': 'Biocon Biologics',
        'role': 'QA Intern',
        'duration': 'Oct 2021 - April 2022',
        'logo': bioconLogo,
        'points': [
            'Worked in Lab automation,LabWare,LIMS. Hands on learning in eQMS(CAPA,change control,Market complaince) and Process tech📱.'
        ],
        'url': 'https://www.bioconbiologics.com/',
    },
]



export const EMAIL_JS_SERVICE_ID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
export const EMAIL_JS_TEMPLATE_ID = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
export const EMAIL_JS_PUBLIC_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
