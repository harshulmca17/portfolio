import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Student",
    location: "New Delhi, IN",
    description:
      "I graduated after 3 Years of studying. I immediately found a job as a SDE Intern.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
  },
  {
    title: "Software Development Engineer Intern",
    location: "Gurugram, IN",
    description:
      "I was responsible for contributing to coding, testing, and collaborative software development efforts within an agile team environment.",
    icon: React.createElement(CgWorkAlt),
    date: "2020",
  },
  {
    title: "Software Development Engineer",
    location: "Gurugram, IN",
    description:
      "I worked as a Software Development Engineer for 2 years in same job. I also upskilled and got promoted to Software Development Engineer II.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Software Development Engineer II",
    location: "Gurugram, IN",
    description:
      "I am now working as Software Development Engineer II. With focus on system design, monitoring, and analysis of ongoing projects. Takes a hands-on approach to experimentation and problem-solving, proactively identifying and resolving issues to ensure robust system functionality. Demonstrates a high level of ownership and accountability, contributing to the entire software development lifecycle. Collaborates with cross-functional teams to drive innovation, optimize performance, and deliver high-quality solutions. Applies a deep understanding of software architecture and development principles to contribute to the growth and success of the organization.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "WordPress and ElasticSearch Integration",
    description:
      "Led WordPress customization for editorial needs and upgraded catalog support from MySQL to ElasticSearch, enhancing platform robustness.",
    tags: ["PHP", "WordPress", "JS", "ElasticSearch"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Webpage Performance Enhancement for SEO",
    description:
      "Optimized core web vitals, elevating Google ranking through performance tuning for optimal user experience in alignment with ranking algorithms.",
    tags: ["JS","PHP","Wordpress"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Experimentation Framework Implementation",
    description:
      "Initiated a self-handled experimentation framework, facilitating server-side and client-side experiments, and enabled data-driven decision-making through performance assessment and insightful trend identification.",
    tags: ["Mysql", "JS", "Wordpress", "PHP"],
    imageUrl: wordanalyticsImg,
  },{
    title: "Logging Infrastructure Enhancement",
    description:
      "Enhanced logging infrastructure, meticulously tracking user activities on webpages and minimizing the gap between logged events and Google Analytics for accurate data representation.",
    tags: ["Rest Api", "JS"],
    imageUrl: corpcommentImg,
  },{
    title: "Tech Stack Migration to Next.js",
    description:
      "Efficiently migrated PHP WordPress pages to Next.js, enhancing performance and user experience, with seamless integration of existing components and adherence to modern web development standards.",
    tags: ["Next.js", "JavaScript"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "Docker",
  "HTML",
  "JavaScript",
  "jQuery",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Git",
  "PHP",
  "Java Spring Boot",
  "Wordpress",
  "Go Lang",
  "Elastic Search",
  "Mysql",
  "Webpage Peformance"

] as const;
