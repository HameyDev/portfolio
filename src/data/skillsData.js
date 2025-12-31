
import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaGitAlt,
  FaBrain,
  FaComments,
  FaUsers,
  FaSyncAlt,
  FaClock,
  FaCrown,
  FaNpm,
  FaFigma,
  FaServer,
  FaCloudUploadAlt,
  FaRocket,
} from "react-icons/fa";

export const technicalSkills = [
    {
      category: "Frontend Development",
      icon: FaReact, // Category icon
      skills: [
        { name: "React", icon: FaReact, percent: 90 },
        { name: "HTML", icon: FaHtml5, percent: 95 },
        { name: "CSS", icon: FaCss3Alt, percent: 90 },
        { name: "JavaScript", icon: FaJs, percent: 88 },
      ],
    },
    {
      category: "Backend Development",
      icon: FaNodeJs,
      skills: [{ name: "Node.js", icon: FaNodeJs, percent: 85 }],
    },
    {
      category: "Database & Cloud",
      icon: FaCloud,
      skills: [
        { name: "MongoDB", icon: FaDatabase, percent: 85 },
        { name: "Git", icon: FaGitAlt, percent: 90 },
        { name: "GitHub", icon: FaGithub, percent: 88 },
      ],
    },
  ];

  export const softSkills = [
    {
      name: "Problem Solving",
      icon: FaBrain,
      description: "Approach complex issues with structured thinking.",
      proficiency: "Expert",
    },
    {
      name: "Communication",
      icon: FaComments,
      description: "Clearly express ideas to teams and clients.",
      proficiency: "Advanced",
    },
    {
      name: "Team Collaboration",
      icon: FaUsers,
      description: "Work effectively with cross-functional teams.",
      proficiency: "Advanced",
    },
    {
      name: "Adaptability",
      icon: FaSyncAlt,
      description: "Quickly learn and adjust to new technologies.",
      proficiency: "Advanced",
    },
    {
      name: "Time Management",
      icon: FaClock,
      description: "Meet deadlines and manage workload efficiently.",
      proficiency: "Proficient",
    },
    {
      name: "Leadership",
      icon: FaCrown,
      description: "Guide and support team growth and productivity.",
      proficiency: "Intermediate",
    },
  ];

  export const tools = {
    development: [
      { name: "Git & GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
      { name: "NPM", icon: FaNpm },
    ],
    design: [{ name: "Figma", icon: FaFigma }],
    testingDeployment: [
      { name: "Postman", icon: FaServer },
      { name: "MongoDB Compass", icon: FaDatabase },
      { name: "Vercel", icon: FaCloudUploadAlt },
      { name: "Netlify", icon: FaCloudUploadAlt },
      { name: "Render", icon: FaRocket },
    ],
  };

   