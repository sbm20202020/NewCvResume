/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen v2

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Bienvenue MULEBO",
  title: "Ingénieur Logiciel & DevOps | Expert Odoo",
  subTitle: emoji(
    "20bis, Avenue Mobutu, Masina, Kinshasa • +243 816468966 • bienvenue.mulebo@gmail.com"
  ),
  resumeLink: "https://www.linkedin.com/in/bienvenue-mulebo-916650117",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sbm20202020",
  linkedin: "https://www.linkedin.com/in/bienvenue-mulebo-916650117",
  gmail: "bienvenue.mulebo@gmail.com",
  gitlab: "https://gitlab.com/sbm20202020",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Expertise Technique",
  subTitle: "Compétences clés acquises au fil de 5+ années d'expérience en développement et opérations",
  skills: [
    emoji("🚀 Développement Backend: Architecture logicielle, API REST, Microservices, Optimisation des performances"),
    emoji("🔧 DevOps & CI/CD: Automatisation des déploiements, Infrastructure as Code, Monitoring et logging"),
    emoji("☁️ Cloud & Infrastructure: Architecture Cloud Native, Conteneurisation, Hébergement et scaling"),
    emoji("🔒 Sécurité: Bonnes pratiques de sécurité, Authentification, Chiffrement, Conformité")
  ],

  softwareSkills: [
    // Langages de programmation
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    // Frameworks & Outils
    {
      skillName: "Odoo",
      fontAwesomeClassname: "fas fa-cubes"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-play",
      style: { transform: 'rotate(-90deg)' } // Rotation du triangle pour pointer vers la droite
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    
    // DevOps & Cloud
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    // {
    //   skillName: "Kubernetes",
    //   fontAwesomeClassname: "fab fa-kubernetes"
    // },
    {
      skillName: "Docker Swarm",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Google Cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitLab",
      fontAwesomeClassname: "fab fa-gitlab"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    
    // Base de données
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    },
    
    // Autres outils
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "Nginx",
      fontAwesomeClassname: "fas fa-server"
    }
  ],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Université de Kinshasa",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Licence (BAC + 5), en Sciences & Technologies - Génie Informatique",
      duration: "2013 - 2018",
      desc: "Formation complète en génie informatique avec spécialisation en développement logiciel et systèmes d'information.",
      descBullets: [
        "Mémoire: Mise en place d'un protocole VPN-GRE/IPSEC pour l'interconnexion de sites distants",
        "Projet: Application de gestion d'inscription en ligne"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Développement Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Architecture Logicielle",
      progressPercentage: "85%"
    },
    {
      Stack: "DevOps & CI/CD",
      progressPercentage: "85%"
    },
    {
      Stack: "Sécurité Informatique",
      progressPercentage: "80%"
    },
    {
      Stack: "Cloud & Infrastructure",
      progressPercentage: "85%"
    },
    {
      Stack: "Développement Frontend",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Ingénieur Logiciel & DevOps",
      company: "Quantum Vertex SAS",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Juin 2022 – Présent",
      location: "Kinshasa, RDC (Télétravail)",
      desc: "En tant qu'ingénieur polyvalent, j'assure la conception, le développement et le déploiement de solutions logicielles évolutives pour divers secteurs d'activité.",
      descBullets: [
        "Architecture et développement d'applications métier avec Odoo (v14-v17) et Python/Django",
        "Mise en place et optimisation d'infrastructures cloud (GCP, Azure) avec une approche Infrastructure as Code",
        "Automatisation des processus CI/CD avec GitLab CI et GitHub Actions",
        "Sécurisation des applications et conformité aux bonnes pratiques de sécurité",
        "Encadrement technique d'une équipe de développeurs et revue de code"
      ],
      technologies: "Python, Odoo, Django, PostgreSQL, Docker, GCP, Azure, Terraform, GitLab CI, GitHub Actions"
    },
    {
      role: "Développeur Odoo Senior",
      company: "LandP",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "Octobre 2020 – Mai 2022",
      location: "Kinshasa, RDC",
      desc: "Développement de solutions ERP sur mesure avec Odoo pour divers secteurs (santé, éducation, services).",
      descBullets: [
        "Conception et développement de modules Odoo personnalisés",
        "Intégration de systèmes tiers via des API REST/GraphQL",
        "Optimisation des performances des bases de données PostgreSQL",
        "Formation des utilisateurs et rédaction de documentation technique"
      ],
      technologies: "Python, Odoo, PostgreSQL, JavaScript, XML, Linux, Nginx, Let's Encrypt"
    },
    {
      role: "Développeur Full Stack",
      company: "CIGA SARL",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Janvier 2020 – Septembre 2020",
      location: "Kinshasa, RDC",
      desc: "Développement d'applications web sur mesure avec Laravel et ReactJS.",
      descBullets: [
        "Conception et développement d'API RESTful",
        "Création d'interfaces utilisateur réactives avec ReactJS",
        "Modélisation de bases de données relationnelles",
        "Mise en production et maintenance des applications"
      ],
      technologies: "PHP, Laravel, MySQL, JavaScript, ReactJS, HTML5, CSS3, Git"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications & Formations 🏆"),
  subtitle: "Mes certifications professionnelles et formations complémentaires",
  display: true,

  achievementsCards: [
    {
      title: "Certified Information Systems Security Professional (CISSP)",
      subtitle: "Spécialisation en sécurité des systèmes d'information",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "CISSP Certification",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.coursera.org/account/accomplishments/specialization/certificate/AEC6EB5193P4"
        }
      ]
    },
    {
      title: "Microsoft Azure - Administration",
      subtitle: "Création et déploiement de machines virtuelles",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Azure Certification",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.coursera.org/account/accomplishments/records/JVDJSJJF10AQ"
        }
      ]
    },
    {
      title: "Google IT Support Professional",
      subtitle: "Certification en support informatique et administration système",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google IT Support",
      footerLink: [
        {
          name: "Voir la certification",
          url: "https://www.coursera.org/account/accomplishments/professional-cert/A8JX75X9RK4J"
        }
      ]
    },
    {
      title: "Python 3 Programming Specialization",
      subtitle: "Spécialisation en programmation Python avancée",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Python Certification",
      footerLink: [
        {
          name: "Voir les certifications",
          url: "https://coursera.org/verify/NJS52ZX2HKF9"
        }
      ]
    },
    {
      title: "Odoo Technique",
      subtitle: "Installation et Configuration d'Odoo",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Odoo Certification",
      footerLink: [
        {
          name: "Voir l'attestation",
          url: "https://www.alphorm.com/Attestation/ANnnKxqWyJRop"
        }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {
  title: "Articles & Publications",
  subtitle: "Partage de connaissances et réflexions sur le développement logiciel et DevOps",
  displayMediumBlogs: "false", // Désactivé pour utiliser les blogs codés en dur
  blogs: [
    {
      url: "#",
      title: "Optimisation des performances Odoo en production",
      description: "Guide pratique pour améliorer les performances des déploiements Odoo en environnement de production."
    },
    {
      url: "#",
      title: "Intégration continue avec GitLab CI pour applications Python",
      description: "Mise en place d'un pipeline CI/CD efficace pour des applications Python avec GitLab CI."
    },
    {
      url: "#",
      title: "Sécurisation des APIs avec OAuth2 et JWT",
      description: "Bonnes pratiques pour sécuriser vos APIs avec des jetons d'accès et des stratégies d'authentification robustes."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
      
