import { NextResponse } from "next/server";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "jdenzelmab@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:jdenzelmab@gmail.com"
    },

  ],
  socialItems: [
    {
      platform: "github",
      icon: "/images/icon/github-icon.svg",
      link: "https://github.com/jdenzel"
    },
    {
      platform: "linkedin",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/jdenzelmabilangan/"
    },
  ]
};


const educationData = {
  education: [
    {
      title: "Bachelors Computer Science",
      description: "Towson University | May 2026"
    },
    {
      title: "Software Engineering",
      description: "Flatiron School | October 2023"
    },
    {
      title: "Associates of Science",
      description: "CCBC Essex | May 2022"
    },
  ],
}

const allSkills = [
  { name: "HTML", icon: "/images/technologies/html-icon.svg" },
  { name: "CSS", icon: "/images/technologies/css-icon.svg" },
  { name: "JavaScript", icon: "/images/technologies/javascript-icon.svg" },
  { name: "React", icon: "/images/technologies/react-icon.svg" },
  { name: "TypeScript", icon: "/images/technologies/typescript-icon.svg" },
  { name: "Next.js", icon: "/images/technologies/nextjs-icon.svg" },
  { name: "Supabase", icon: "/images/technologies/supabase-icon.svg" },
  { name: "Figma", icon: "/images/technologies/figma-icon.svg" },
  { name: "Vercel", icon: "/images/technologies/vercel-icon.svg" },
  { name: "Python", icon: "/images/technologies/python-icon.svg" },
  { name: "Django", icon: "/images/technologies/django-icon.svg" },
  { name: "Flask", icon: "/images/technologies/flask-icon.svg" },
  { name: "PostgreSQL", icon: "/images/technologies/postgresql-icon.svg" },
  { name: "Docker", icon: "/images/technologies/docker-icon.svg" },
  { name: "GitLab", icon: "/images/technologies/gitlab-icon.svg" },
  { name: "Prisma", icon: "/images/technologies/prisma-icon.svg" },
  { name: "Java", icon: "/images/technologies/java-icon.svg" },
  { name: "C++", icon: "/images/technologies/cplusplus-icon.svg" },
];

const experiences = [
  {
    title: "IT Lead",
    year: "June 2018 - Present",
    company: "River Of Life ICF",
    description:
      "Suffered alteration in some form by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum",
  },
  {
    title: "Board Member",
    year: "Aug 2023 - Present",
    company: "Infinite Group Inc.",
    description:
      "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
  },
  {
    title: "Developer Intern",
    year: "June 2025",
    company: "Mission Media",
    description: ""
  },
  {
    title: "Developer Intern",
    company: "Towson University CGIS",
    description:
      "Release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software",
  },
];


const contactLinks = {
  socialLinks: [
    {
      title: "Github",
      href: "https://github.com/jdenzel"
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/jdenzelmabilangan/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "jdenzelmab@gmail.com",
      link: "mailto:jdenzelmab@gmail.com"
    },
  ]
}

const brandList = [
  {
    image: "/images/technologies/react-icon.svg",
    lightimg: "/images/technologies/react-icon.svg",
    name: "React",
  },
  {
    image: "/images/technologies/html-icon.svg",
    lightimg: "/images/technologies/html-icon.svg",
    name: "HTML",
  },
  {
    image: "/images/technologies/css-icon.svg",
    lightimg: "/images/technologies/css-icon.svg",
    name: "CSS",
  },
  {
    image: "/images/technologies/javascript-icon.svg",
    lightimg: "/images/technologies/javascript-icon.svg",
    name: "JavaScript",
  },
  {
    image: "/images/technologies/typescript-icon.svg",
    lightimg: "/images/technologies/typescript-icon.svg",
    name: "TypeScript",
  },
  {
    image: "/images/technologies/nextjs-icon.svg",
    lightimg: "/images/technologies/nextjs-icon.svg",
    name: "Next.js",
  },
  {
    image: "/images/technologies/figma-icon.svg",
    lightimg: "/images/technologies/figma-icon.svg",
    name: "Figma",
  },
  {
    image: "/images/technologies/postgresql-icon.svg",
    lightimg: "/images/technologies/postgresql-icon.svg",
    name: "PostgreSQL",
  },
  {
    image: "/images/technologies/docker-icon.svg",
    lightimg: "/images/technologies/docker-icon.svg",
    name: "Docker",
  },
  {
    image: "/images/technologies/java-icon.svg",
    lightimg: "/images/technologies/java-icon.svg",
    name: "Java",
  },
  {
    image: "/images/technologies/python-icon.svg",
    lightimg: "/images/technologies/python-icon.svg",
    name: "Python",
  },
];



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks,
    allSkills,
    experiences,
    brandList
  });
};
