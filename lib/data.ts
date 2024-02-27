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
    icon: React.createElement(CgWorkAlt),
    date: "2020",
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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Php",
  "Java Spring Boot",
  "Wordpress",
  "Mysql",
  "Webpage Peformance"

] as const;
