import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Graduated Web Development bootcamp",
    location: "Brisbane, QLD",
    description:
      "I graduated after 12 months of studying.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Property Manager",
    location: "Brisbane, QLD",
    description:
      "I worked as a property manager.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2021",
  },
  {
    title: "Business Intelligence Analyst",
    location: "Kuala Lumpur, Malaysia",
    description:
      "First job as an data analyst. My stack includes Qlikview, SQL, MS SQL server.",
    icon: React.createElement(FaReact),
    date: "2016 - 2017",
  },
] as const;

export const projectsData = [
  {
    title: "Coming Soon",
    description:
      "News Curators website using Nextjs and Mediacutoe API.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "GraphQL"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;