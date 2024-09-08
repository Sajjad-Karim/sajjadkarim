import {
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  springboot,
  postgres,
  angular,
  typescript,
  tailwind,
  nodejs,
  mongodb,
  mysql,
  lpm,
  ipeim,
  enis,
  lordroid,
  quebec,
  spotify,
  bl,
} from "../assets";
import xNFT from "../assets/myprojects/xNFT.jpg";
import redux from "../assets/myprojects/redux.png";
import todos from "../assets/myprojects/todos.png";
import picplace from "../assets/myprojects/picplace.png";
import comfy from "../assets/myprojects/comfy.png";
import lumi from "../assets/myprojects/lumi.png";
export const navLinks = [
  {
    id: "",
    title: "Home",
  },
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
  // {
  //   title: "Software Engineer",
  //   icon: "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/web.png?raw=true",
  // },
  {
    title: "Frontend Developer",
    icon: "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/mobile.png?raw=true",
  },
  {
    title: "WordPress Developer",
    icon: "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/backend.png?raw=true",
  },
  {
    title: "Freelancer",
    icon: "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/creator.png?raw=true",
  },
];

const technologies = [
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
    name: "Typescript",
    icon: typescript,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Bootstrap 5",
    icon: bootstrap,
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
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
];

const experiences = [
  {
    title: "Bachelor of Computer Science",
    company_name: "Szabist University, Islamabad ",
    icon: quebec,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - jan 2024",
    points: [
      "Focused on core computer science subjects including data structures, algorithms, and web development.",
      "Participated in coding competitions and hackathons to enhance problem-solving and coding abilities.",
      "Developed projects using HTML, CSS, JavaScript, and React.js, Java, Database, Python, C++ showcasing web software development  skills.",
      "Ensured data security measures for user privacy.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Webloop",
    icon: lpm,
    iconBg: "#383E56",
    date: "2020 - 2021",
    points: [
      "Assisted the senior development team in building responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.js.",
      "Gained hands-on experience in integrating APIs and managing state using Redux Toolkit.",
      "Collaborated with UX/UI designers to implement visually appealing web components and enhance user experience.",
      "Participated in code reviews and debugging processes to ensure high-quality code and application performance.",
      "Improved the performance of web pages by optimizing loading times and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Frontend Web Developer",
    company_name: "Webloop.pk",
    icon: lpm,
    iconBg: "#E6DEDD",
    date: "2021 - Present",
    points: [
      "Utilized React.js to build the client-side of the NFT marketplace, implementingdynamic and interactive user interfaces that showcased digital artwork and collectibles.",
      "Led the development of dynamic, responsive web applications using HTML, CSS, and JavaScript frameworks, enhancing user experience and engagement by 25%",
      "Implemented advanced front-end functionalities, including animations and real-time data updates, leveraging React and Redux to improve site performance and interactivity",
      "Conducted code reviews and provided mentorship to junior developers, fostering a culture of quality and continuous improvement within the team",
    ],
  },
  {
    title: "Freelance Front-End Web Developer",
    company_name: "Fiverr",
    icon: ipeim,
    iconBg: "#383E56",
    date: "2019 - Continue",
    points: [
      "Designed and developed custom websites and web applications for small businesses and startups using React.js, HTML5, CSS3, and JavaScript.",
      "Collaborated with clients to understand project requirements, providing tailored web solutions to meet their business needs.",
      "Integrated third-party APIs and developed responsive, mobile-first websites to enhance user experience.",
      "Optimized web performance, focusing on loading speed, SEO, and cross-browser compatibility.",
    ],
  },
];

const certifications = [
  {
    certification: "HTML5, CSS3 and Javascript",
    name: "graphail",
    date: "Mar 2018",
    // image:
    // "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/udemy.png?raw=true",
  },
  {
    certification: "Front End Development ",
    name: "Webloop",
    date: "Nov 2019",
    image: lpm,
  },
  {
    certification: "Responsive Web Design ",
    name: "FreeCodeCamp",
    date: "May 2022",
    image:
      "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/fcc.png?raw=true",
  },
  {
    certification: "JavaScript Algorithms and Data Structures ",
    name: "FreeCodeCamp",
    date: "Jun 2022",
    image:
      "https://github.com/Bahri-Adem/3D-Web-Developer-Portfolio-in-React-JS/blob/main/src/assets/fcc.png?raw=true",
  },
 
];
const projects = [
  {
    name: "XNFT",
    description:
      "A user-friendly platform for buying, selling, and trading NFTs. It allows creators to mint digital assets and collectors to browse and purchase securely, all powered by blockchain technology.",
    tags: [
      {
        name: "React js",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "blue-text-gradient",
      },
    ],
    image: xNFT,
    source_code_link: "https://xnfts.ai/",
    live: true,
  },
  {
    name: "Lumi Place",
    description:
      "A  platform for trading and showcasing NFTs. which enables users to buy, sell, and mint digital assets with ease, offering a secure experience powered by blockchain. With an intuitive design and advanced features, it caters to both creators and collectors.",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "React Js & Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Material Ui",
        color: "pink-text-gradient",
      },
    ],
    live: true,
    image: lumi,
    source_code_link: "https://lumiplace.io/",
  },
  {
    name: "Comfy Store",
    description:
      "An online shopping platform built with React, designed to provide users with a seamless browsing experience. Comfy offers a wide range of cozy home essentials, allowing customers to easily explore, filter, and purchase products.",
    tags: [
      {
        name: "HTML & CSS",
        color: "blue-text-gradient",
      },
      {
        name: "React Js & Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: comfy,
    source_code_link: "https://github.com/AliyanAkmal/E-commerce-Website.git",
  },
  {
    name: "Redux-Toolkit Crud",
    description:
      "A web application that allows users to create, read, update, and delete data efficiently. Built with React and Redux Toolkit for state management, the app features a clean, responsive interface and provides seamless data handling across multiple components.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "Api Handling",
        color: "pink-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: redux,
    source_code_link: "https://github.com/Sajjad-Karim/redux-crud-asynThunk",
  },
  {
    name: "Advanced Todos",
    description:
      "A task management app built using React and the useContext hook for global state management. It allows users to add, edit, and delete tasks, with features like filtering, task prioritization, and a sleek, intuitive interface to enhance productivity.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind ",
        color: "green-text-gradient",
      },
      {
        name: "ContextApi",
        color: "pink-text-gradient",
      },
    ],
    image: todos,
    source_code_link: "https://github.com/Sajjad-Karim/todolist-contextapi",
  },
  {
    name: "Pic Place",
    description:
      "Discover and purchase stunning images in my React-based Image Marketplace. Browse through various categories, find high-quality visuals, and connect with talented artists. Enjoy a seamless shopping experience with secure transactions. Join us and explore a world of creativity!",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux ",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "pink-text-gradient",
      },
    ],
    image: picplace,
    source_code_link: "https://github.com/Sajjad-Karim/pic-place",
  },
];

export { services, technologies, experiences, certifications, projects };
