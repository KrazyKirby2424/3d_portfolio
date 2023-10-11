import {
    backend,
    web,
    unity,
    java,
    csharp,
    cplus,
    blender,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    dreamscape,
    miax,
    webdevmovies,
    wilty,
    threejs,

    github,
    itch,
    resume,
    resumeImg,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Unity Developer",
      icon: unity,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "C++",
      icon: cplus,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Blender",
      icon: blender,
    },

    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Unity Developer",
      company_name: "Dreamscape Immersive",
      icon: dreamscape,
      iconBg: "#E6DEDD",
      date: "July 2022 - April 2023",
      points: [
        "Developing the release of groundbreaking educational VR content.",
        "Collaborating with cross-functional teams including Art, Animation, Audio, Creative, and other developers to create a seamless experience.",
        "Created an array of scripts to implement immersive interactivity and meld with respective assets.",
        "Wrote unit tests to safeguard potential code breaking changes for Utility packages.",
        "Troubleshot bug fixes from QA testing before release.",
      ],
    },
    {
      title: "Corporate Information Technology and Business Strategy Intern",
      company_name: "MIAX",
      icon: miax,
      iconBg: "#E6DEDD",
      date: "Summer 2019",
      points: [
        "Spearheaded the rebuild of over 60 desktops and laptops, including hardware removal and preparation for re-imaging, encryption and a variety of office software installations during a major Corporate expansion.",
        "Gained valuable experience with PGP encryption, Shell commands, and software distribution and management using SCCM.",
        "Optimized the Daily Business Report by leveraging Excel expertise to reduce processing time and automate manual tasks.",
        "Acquired in depth understanding of the Software Development Life Cycle and the Project Development Life Cycle.",
      ],
    },
  ];
  const links = [
    {
      link:
        "https://github.com/KrazyKirby2424",
      image: github,
    },
    {
      link:
        "https://krazykirby2424.itch.io/",
      image: itch,
    },
    {
      link:
        resume,
      image: resumeImg,
    },
  ];
  /*
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  */
  const projects = [
    {
      name: "WebDevMovies",
      description:
        "Web-based platform that allows users to search for directors and movies and create/edit/delete entries.",
      tags: [
        {
          name: "node",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: webdevmovies,
      source_code_link: "https://github.com/KrazyKirby2424/WebDevMovies",
    },
    {
      name: "WILTY_Prototype",
      description:
        "Unity application to turn Would I Lie to You into a simple easily accessible party game. Windows download and WebGL version available on itch.io, link accessible on github.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: wilty,
      source_code_link: "https://github.com/KrazyKirby2424/WILTY_Prototype",
    },
  ];
  
  export { services, technologies, experiences, /*testimonials,*/ links, projects };