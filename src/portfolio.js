/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ricardo's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ricardo Gonçalves Portfolio",
    type: "website",
    url: "http://ricardogoncalves.com/",
  },
};

//Home Page
const greeting = {
  title: "Ricardo Gonçalves",
  logo_name: "Ricardo Gonçalves",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
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
    link: "https://github.com/ashutosh1919",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    display: true,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ashutosh1919/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
    display: true,
  },
  {
    name: "YouTube",
    link: "https://youtube.com/c/DevSense19",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
    display: false,
  },
  {
    name: "Gmail",
    link: "mailto:ashutoshhathidara98@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    display: true,
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/ashutosh_1919",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
    display: false,
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/laymanbrother.19/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
    display: false,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/layman_brother/",
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
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
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
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
    }
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
      profileLink: "https://www.credly.com/users/ricardo-goncalves.1e7ec49b/badges#credly",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Instituto Superior de Engenharia do Porto",
      subtitle: "Bachelor's degree in Computer Engineering",
      logo_path: "isep_logo.png",
      alt_name: "ISEP Logo",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://www.isep.ipp.pt/",
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
      iconifyClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-6460fbeb-96a6-4943-bd52-6c53034458e3/",
      alt_name: "Udemy",
    },
    {
      title: "Flutter",
      subtitle: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-307f60a5-90d9-43cf-bd46-9882a3a50493/",
      alt_name: "Udemy",
    },
    {
      title: "Python",
      subtitle: "Udemy",
      iconifyClassname: "simple-icons:udemy",
      certificate_link:
        "https://www.udemy.com/certificate/UC-146829c5-5f18-4b5b-a9d3-c6c2dabf4788/",
      alt_name: "Udemy",
    },
    {
      title: "Java",
      subtitle: "Udemy",
      iconifyClassname: "simple-icons:udemy",
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
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Present",
          location: "San Jose, CA, USA",
          description:
            "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
          color: "#000000",
        },
        {
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - Aug 2021",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "TikTok Inc.",
          company_url: "https://www.tiktok.com/en/",
          logo_path: "tiktok_logo.png",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
          color: "#000000",
        },
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "July 2019 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
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
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
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
  publicationsHeader,
  publications,
  contactPageData,
};
