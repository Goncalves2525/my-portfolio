/* Ficheiro de configuração do Portfólio — Português (Portugal) */

// Website related settings
const settings = {
  isSplash: false,
};

//SEO Related settings
const seo = {
  title: "Portfólio do Ricardo",
  description:
    "Administrador de Sistemas e aspirante a engenheiro DevOps com experiência em Docker, Kubernetes, Terraform e CI/CD. Baseado no Porto, Portugal.",
  og: {
    title: "Portfólio Ricardo Gonçalves",
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
    "Atualmente trabalho como Administrador de Sistemas e estou a aprender conceitos DevOps. Tenho explorado tecnologias como Docker, Kubernetes, Terraform, Ansible, CI/CD com GitHub Actions e monitorização com Prometheus. Acredito que combinar conhecimento de sistemas com práticas modernas de DevOps é essencial para construir soluções escaláveis e eficientes.",
  resumeLink:
    "https://drive.google.com/file/d/1IsOnky1f_R_cJbx0NlGebK3q8dOECcMR/view?usp=drive_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Goncalves2525",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Goncalves2525",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
    display: true,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ricardo-gon%C3%A7alves-83643b21a/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
    display: true,
  },
  {
    name: "Outlook",
    link: "mailto:ricardo_goncalves2525@hotmail.com",
    fontAwesomeIcon: "fa-envelope",
    iconType: "solid",
    backgroundColor: "#0078D4",
    display: true,
  },
  {
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
    display: false,
  },
  {
    name: "Gmail",
    link: "mailto:ricardo_goncalves2525@hotmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
    display: false,
  },
  {
    name: "X-Twitter",
    link: "",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
    display: false,
  },
  {
    name: "Facebook",
    link: "",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
    display: false,
  },
  {
    name: "Instagram",
    link: "",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
    display: false,
  },
];

const skills = {
  data: [
    {
      title: "DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Configuração e gestão de servidores Linux para ambientes de produção",
        "⚡ Construção de pipelines CI/CD com GitHub Actions para testes e deploy automatizados",
        "⚡ Containerização de aplicações com Docker e orquestração com Kubernetes",
        "⚡ Gestão de infraestrutura cloud na AWS",
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
      title: "Desenvolvimento Full Stack",
      fileName: "FullStackImg",
      skills: [
        "⚡ Construção de aplicações web responsivas com React, Next.js e TypeScript",
        "⚡ Estilização de interfaces modernas com Tailwind CSS",
        "⚡ Criação de serviços backend com Node.js, MongoDB e PostgreSQL",
        "⚡ Utilização do Claude Code como assistente de desenvolvimento com IA",
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
      subtitle: "Engenharia Informática",
      logo_path: "isep_logo.png",
      alt_name: "ISEP Logo",
      duration: "2022 - 2025",
      descriptions: [
        "⚡ Estudei disciplinas fundamentais incluindo engenharia de software, bases de dados, estruturas de dados, arquitetura de computadores, redes e IA.",
        "⚡ Apliquei boas práticas de engenharia de software: princípios SOLID, metodologias Ágeis e padrões de arquitetura limpa (Clean, Onion, MVP).",
        "⚡ Cobri todo o processo de engenharia desde o levantamento e análise de requisitos até ao design e implementação.",
        "⚡ Desenvolvi competências em administração de sistemas, cibersegurança, gestão de projetos e análise de dados.",
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
  title: "Experiência",
  subtitle: "Trabalho e Estágio",
  description:
    "Atualmente trabalho como Administrador de Sistemas no Exército Português, gerindo servidores e infraestrutura de rede. Também completei um estágio como Desenvolvedor Full Stack, construindo aplicações web e mobile.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Trabalho",
      work: true,
      experiences: [
        {
          title: "Administrador de Sistemas",
          company: "Exército Português",
          company_url: "https://www.exercito.pt/pt/",
          logo_path: "army.png",
          duration: "Fevereiro 2022 - Presente",
          location: "Porto, Portugal",
          description:
            "Gestão e configuração de servidores Windows e Linux, aplicações web, partilhas de ficheiros e outros serviços. Gestão de utilizadores e grupos no Active Directory. Configuração e gestão da infraestrutura de rede.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Estágios",
      experiences: [
        {
          title: "Desenvolvedor Web/Mobile",
          company: "ItsPossibleTech",
          company_url: "https://www.itspossible.tech/",
          logo_path: "ipt_logo.svg",
          duration: "Fev 2025 - Ago 2025",
          location: "Porto, Portugal",
          description:
            "Desenvolvi uma aplicação web Full Stack e uma aplicação mobile para um Sistema de Gestão de Condomínios. Construí a aplicação web com Next.js e Express.js com MongoDB, e a aplicação mobile com React Native.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projetos",
  description:
    "Aqui estão alguns dos meus projetos pessoais e académicos. Cobrem áreas como DevOps, Desenvolvimento Web Full Stack, Desenvolvimento Mobile e Aplicações Desktop.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  sections: [
    {
      title: "Projetos Pessoais",
      projects: [
        {
          id: "1",
          name: "My Portolfio",
          createdAt: "2026",
          url: "https://github.com/Goncalves2525/my-portfolio",
          description:
            "Website de portefólio pessoal que apresenta as minhas competências, projetos e experiência profissional como estudante de Engenharia Informática e Administrador de Sistemas.",
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
            "Uma aplicação simples para gerir o stock com códigos QR, focada nas melhores práticas de CI/CD.",
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
            "Uma calculadora de IMC (Índice de Massa Corporal) simples e elegante construída com Flutter.",
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
            "Uma aplicação de mensagens em tempo real moderna construída com Flutter e Firebase.",
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
      title: "Projetos Académicos",
      projects: [
        {
          id: "1",
          name: "Sistema de Gestão de Consultas Cirúrgicas e Recursos",
          createdAt: "2024",
          description:
            "Solução para gestão de consultas cirúrgicas, pedidos de operação, registos de pacientes e alocação de recursos em unidades de saúde. Inclui funcionalidades de visualização 3D de pisos hospitalares, agendamento otimizado de cirurgias e conformidade com o RGPD.",
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
          name: "Sistema de Gestão de Aquisição de Talentos",
          createdAt: "2024",
          description:
            "Processos otimizados relacionados com a seleção e recrutamento de candidatos",
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
          name: "Sistema de Gestão de Agricultura Orgânica",
          createdAt: "2023",
          description:
            "Sistema integrado para suporte à gestão de uma exploração agrícola em modo de produção biológico",
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
          name: "Sistema de Gestão Imobiliária",
          createdAt: "2023",
          description:
            "Aplicação de gestão imobiliária para uma empresa fictícia chamada 'Real Estate USA'",
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
          name: "Simulação Epidemiológica",
          createdAt: "2022",
          description:
            "Simulador epidemiológico usando o modelo SEIR (Suscetível-Exposto-Infecioso-Recuperado) com equações diferenciais.",
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
  title: "Publicações",
  description: "Alguns dos meus artigos, blogs e investigações publicados.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Artigo publicado no KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog publicado no Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog publicado no Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contacte-me",
    profile_image_path: "ricardo.svg",
    description:
      "Sinta-se à vontade para me contactar para quaisquer oportunidades ou colaborações em DevOps e Desenvolvimento Web. Responderei assim que possível!",
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
