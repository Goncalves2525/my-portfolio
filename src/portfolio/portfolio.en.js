/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ricardo's Portfolio",
  description:
    "System Administrator and aspiring DevOps engineer with experience in Docker, Kubernetes, Terraform, and CI/CD. Based in Porto, Portugal.",
  og: {
    title: "Ricardo Gonçalves Portfolio",
    type: "website",
    url: "https://ricardo-goncalves.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Ricardo Gonçalves",
  logo_name: "Ricardo Gonçalves",
  nickname: "",
  subTitle:
    "I currently work as a System Administrator and I'm learning DevOps concepts. I've been exploring technologies such as Docker, Kubernetes, Terraform, Ansible, CI/CD with GitHub Actions, and monitoring with Prometheus. I believe that combining system knowledge with modern DevOps practices is essential to building scalable and efficient solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1IsOnky1f_R_cJbx0NlGebK3q8dOECcMR/view?usp=drive_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Goncalves2525",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Goncalves2525",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    display: true,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ricardo-gon%C3%A7alves-83643b21a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    display: true,
  },
  {
    name: "Outlook",
    link: "mailto:ricardo_goncalves2525@hotmail.com",
    fontAwesomeIcon: "fa-envelope", // Reference https://fontawesome.com/icons/envelope?style=solid
    iconType: "solid", // Specify icon type: 'solid' or 'brands' (default)
    backgroundColor: "#0078D4", // Reference https://simpleicons.org/?q=outlook
    display: true,
  },
  {
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
    display: false,
  },
  {
    name: "Gmail",
    link: "mailto:ricardo_goncalves2525@hotmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    display: false,
  },
  {
    name: "X-Twitter",
    link: "",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
    display: false,
  },
  {
    name: "Facebook",
    link: "",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
    display: false,
  },
  {
    name: "Instagram",
    link: "",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
    display: false,
  },
];

const skills = {
  data: [
    {
      title: "DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Configuring and managing Linux servers for production environments",
        "⚡ Building CI/CD pipelines with GitHub Actions for automated testing and deployment",
        "⚡ Containerizing applications with Docker and orchestrating them with Kubernetes",
        "⚡ Managing cloud infrastructure on AWS",
      ],
      softwareSkills: [
        {
          skillName: "Linux",
          fontAwesomeClassname: "flat-color-icons:linux",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassname: "devicon:githubactions",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web applications using React, Next.js and TypeScript",
        "⚡ Styling modern interfaces with Tailwind CSS",
        "⚡ Creating backend services with Node.js, MongoDB and PostgreSQL",
        "⚡ Using Claude Code as an AI-powered development assistant",
      ],
      softwareSkills: [
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "vscode-icons:file-type-tailwind",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Postgre SQL",
          fontAwesomeClassname: "devicon:postgresql",
        },
        {
          skillName: "Claude Code",
          fontAwesomeClassname: "material-icon-theme:claude",
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Credly",
      iconifyClassname: "simple-icons:credly",
      style: {
        color: "#f36c1a",
        fontSize: "7rem",
      },
      profileLink:
        "https://www.credly.com/users/ricardo-goncalves.1e7ec49b/badges#credly",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Instituto Superior de Engenharia do Porto",
      subtitle: "Computer Engineering",
      logo_path: "isep_logo.png",
      alt_name: "ISEP Logo",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Studied core subjects including software engineering, databases, data structures, computer architecture, networking and AI.",
        "⚡ Applied software engineering best practices: SOLID principles, Agile methodologies and clean architecture patterns (Clean, Onion, MVP).",
        "⚡ Covered the full engineering process from requirements gathering and analysis to design and implementation.",
        "⚡ Developed skills in systems administration, cybersecurity, project management and data analysis.",
      ],
      website_link: "https://www.isep.ipp.pt/Course/Course/26",
    },
  ],
};

const mainCertifications = {
  certifications: [
    {
      title: "CCNA",
      subtitle: "Networking Academy",
      logo_path: "Cisco_logo_blue.svg.png",
      certificate_link:
        "https://www.credly.com/badges/c28fd2a6-3df4-4ded-a887-2580efc1de24",
      alt_name: "Cisco",
    },
    {
      title: "IT Essentials",
      subtitle: "Networking Academy",
      logo_path: "Cisco_logo_blue.svg.png",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/e45d48a3-16ed-4db9-84c1-3a16c6b2587f",
      alt_name: "Cisco",
    },
    {
      title: "Windows Server Fundamentals",
      subtitle: "Microsoft Learn",
      iconifyClassname: "logos:microsoft-icon",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/0a1148f8-dd22-41db-91a9-fea8b5618303",
      alt_name: "Microsoft",
    },
    {
      title: "Networking Fundamentals",
      subtitle: "Microsoft Learn",
      iconifyClassname: "logos:microsoft-icon",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/a3b09317-187a-490e-be01-e57bb49ef0c1",
      alt_name: "Microsoft",
    },
    {
      title: "Security Fundamentals",
      subtitle: "Microsoft Learn",
      iconifyClassname: "logos:microsoft-icon",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/c16ff9ad-96be-4c5b-a766-6aafdb97a269",
      alt_name: "Microsoft",
    },
    {
      title: "Windows OS Fundamentals",
      subtitle: "Microsoft Learn",
      iconifyClassname: "logos:microsoft-icon",
      certificate_link:
        "https://www.credly.com/earner/earned/badge/35c8a1cf-15de-4d75-8810-3287e25e4d75",
      alt_name: "Microsoft",
    },
  ],
};

const otherCertifications = {
  certifications: [
    {
      title: "Docker",
      subtitle: "KodeKloud",
      logo_path: "kodekloud.png",
      certificate_link:
        "https://learn.kodekloud.com/user/certificate/a28fa8a4-9c40-4d36-a0bb-a2494d45dbb8",
      alt_name: "KodeKloud",
    },
    {
      title: "Github Actions",
      subtitle: "KodeKloud",
      logo_path: "kodekloud.png",
      certificate_link:
        "https://learn.kodekloud.com/user/certificate/5913c42b-3a5d-4c55-a0b3-8cd855554012",
      alt_name: "KodeKloud",
    },
    {
      title: "Linux",
      subtitle: "KodeKloud",
      logo_path: "kodekloud.png",
      certificate_link:
        "https://learn.kodekloud.com/user/certificate/bfd9e132-658a-40ae-8436-155fc6bd0d43",
      alt_name: "KodeKloud",
    },
    {
      title: "Fullstack Web Development",
      subtitle: "Udemy",
      iconifyClassname: "logos:udemy-icon",
      iconStyle: { color: "#A435F0" },
      certificate_link:
        "https://www.udemy.com/certificate/UC-6460fbeb-96a6-4943-bd52-6c53034458e3/",
      alt_name: "Udemy",
    },
    {
      title: "Flutter",
      subtitle: "Udemy",
      iconifyClassname: "logos:udemy-icon",
      iconStyle: { color: "#A435F0" },
      certificate_link:
        "https://www.udemy.com/certificate/UC-307f60a5-90d9-43cf-bd46-9882a3a50493/",
      alt_name: "Udemy",
    },
    {
      title: "Python",
      subtitle: "Udemy",
      iconifyClassname: "logos:udemy-icon",
      iconStyle: { color: "#A435F0" },
      certificate_link:
        "https://www.udemy.com/certificate/UC-146829c5-5f18-4b5b-a9d3-c6c2dabf4788/",
      alt_name: "Udemy",
    },
    {
      title: "Java",
      subtitle: "Udemy",
      iconifyClassname: "logos:udemy-icon",
      iconStyle: { color: "#A435F0" },
      certificate_link:
        "https://www.udemy.com/certificate/UC-570793ca-31f2-4637-8924-eaafa0bd86c1/",
      alt_name: "Udemy",
    },
  ],
};

// Keep for backwards compatibility
const certifications = mainCertifications;

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I currently work as a System Administrator in the Portuguese Army, managing servers and network infrastructure. I also completed an internship as a Full Stack Developer, building web and mobile applications.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "System Administrator",
          company: "Portuguese Army",
          company_url: "https://www.exercito.pt/pt/",
          logo_path: "army.png",
          duration: "Febuary 2022 - Present",
          location: "Porto, Portugal",
          description:
            "Managing and configuring Windows and Linux servers, web applications, fileshares and other services. Managing users and groups in Active Directory. Configuring and managing the network infrastructure.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web/Mobile Developer",
          company: "ItsPossibleTech",
          company_url: "https://www.itspossible.tech/",
          logo_path: "ipt_logo.svg",
          duration: "Fev 2025 - Aug 2025",
          location: "Porto, Portugal",
          description:
            "Developed a Full Stack Web App and Mobile App for a Condominium Management System. Built the web application using Next.js and Express.js with MongoDB, and the mobile app using React Native.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Here are some of my personal and academic projects. They cover areas like DevOps, Full Stack Web Development, Mobile Development and Desktop Applications.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  sections: [
    {
      title: "Personal Projects",
      projects: [
        {
          id: "1",
          name: "My Portfolio",
          createdAt: "2026",
          url: "https://github.com/Goncalves2525/my-portfolio",
          description:
            "Personal portfolio website showcasing my skills, projects, and professional experience as a Computer Engineering student and System Administrator.",
          categories: ["Web"],
          isFork: false,
          languages: [
            {
              name: "JavaScript",
              iconifyClass: "logos:javascript",
            },
            {
              name: "React",
              iconifyClass: "devicon:reactnative",
            },
            {
              name: "Vercel",
              iconifyClass: "devicon:vercel",
            },
          ],
        },
        {
          id: "2",
          name: "Gestor-QR",
          createdAt: "2025",
          url: "https://github.com/Goncalves2525/gestor-qr",
          description:
            "A simple app to manage your stock with qr codes focused on best CI/CD practices.",
          categories: ["DevOps", "Web"],
          isFork: false,
          languages: [
            {
              name: "TypeScript",
              iconifyClass: "logos:typescript-icon",
            },
            {
              name: "Next.js",
              iconifyClass: "vscode-icons:file-type-next",
            },
            {
              name: "Github Actions",
              iconifyClass: "devicon:githubactions",
            },
            {
              name: "Supabase",
              iconifyClass: "devicon:supabase",
            },
            {
              name: "Vercel",
              iconifyClass: "devicon:vercel",
            },
          ],
        },
        {
          id: "3",
          name: "BMI Calculater",
          createdAt: "2025",
          url: "https://github.com/Goncalves2525/bmi-calculater-flutter",
          description:
            "A simple and elegant BMI (Body Mass Index) calculator built with Flutter.",
          categories: ["Mobile"],
          isFork: false,
          languages: [
            {
              name: "Flutter",
              iconifyClass: "devicon:flutter",
            },
          ],
        },
        {
          id: "4",
          name: "Flash Chat",
          createdAt: "2025",
          url: "https://github.com/Goncalves2525/flash-chat-flutter",
          description:
            "A modern real-time messaging application built with Flutter and Firebase. ",
          categories: ["Mobile"],
          isFork: false,
          languages: [
            {
              name: "Flutter",
              iconifyClass: "devicon:flutter",
            },
            {
              name: "Firebase",
              iconifyClass: "logos:firebase-icon",
            },
          ],
        },
      ],
    },
    {
      title: "Academic Projects",
      projects: [
        {
          id: "1",
          name: "Surgical Appointment and Resource Management System",
          createdAt: "2024",
          description:
            "Solution for managing surgical appointments, operation requests, patient records, and resource allocation in healthcare facilities. It includes features for 3D visualization of hospital floors, optimal scheduling of surgeries, and GDPR compliance.",
          url:
            "https://github.com/Goncalves2525/Surgical-Appointment-and-Resource-Management-System",
          categories: ["Web"],
          languages: [
            {
              name: ".NET",
              iconifyClass: "skill-icons:dotnet",
            },
            {
              name: "Angular",
              iconifyClass: "skill-icons:angular-light",
              style: { color: "#03589b" },
            },
            {
              name: "Prolog",
              iconifyClass: "devicon:prolog",
            },
          ],
        },
        {
          id: "2",
          name: "Talent Acquisition Management System",
          createdAt: "2024",
          description:
            "Optimized processes related to the selection and recruitment of candidates",
          url:
            "https://github.com/Goncalves2525/Jobs4U-Talent-Acquisition-Management-System",
          categories: ["Desktop"],
          languages: [
            {
              name: "Java",
              iconifyClass: "skill-icons:java-dark",
            },
            {
              name: "C",
              iconifyClass: "streamline-logos:c-language-logo-solid",
              style: { color: "#03589b" },
            },
            {
              name: "C++",
              iconifyClass: "streamline-logos:c-plus-language-logo-solid",
              style: { color: "#03589b" },
            },
          ],
        },
        {
          id: "3",
          name: "Organic Agriculture Management System",
          createdAt: "2023",
          description:
            "Integrated system to support the management of an agricultural facility in organic production mode",
          url:
            "https://github.com/Goncalves2525/organic-agriculture-management-system",
          categories: ["Desktop"],
          languages: [
            {
              name: "Java",
              iconifyClass: "skill-icons:java-dark",
            },
            {
              name: "C",
              iconifyClass: "streamline-logos:c-language-logo-solid",
              style: { color: "#03589b" },
            },
            {
              name: "Assembly",
              iconifyClass: "vscode-icons:file-type-assembly",
            },
          ],
        },
        {
          id: "4",
          name: "Real Estate Management System",
          createdAt: "2023",
          description:
            "Real estate management application for a fictional company called 'Real Estate USA'",
          url: "https://github.com/Goncalves2525/real-estate-management-system",
          categories: ["Desktop"],
          languages: [
            {
              name: "Java",
              iconifyClass: "skill-icons:java-dark",
            },
          ],
        },
        {
          id: "5",
          name: "Epidemiological Simulation",
          createdAt: "2022",
          description:
            "Epidemiological simulator using the SEIR model (Susceptible-Exposed-Infectious-Recovered) with differential equations.",
          url: "https://github.com/Goncalves2525/epidemiological-simulation",
          categories: ["Desktop"],
          languages: [
            {
              name: "Java",
              iconifyClass: "skill-icons:java-dark",
            },
          ],
        },
      ],
    },
  ],
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ricardo.svg",
    description:
      "Feel free to reach out to me for any opportunities or collaborations in DevOps and Web Development. I'll get back to you as soon as possible!",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  mainCertifications,
  otherCertifications,
  experience,
  projectsHeader,
  projects,
  publicationsHeader,
  publications,
  contactPageData,
};
