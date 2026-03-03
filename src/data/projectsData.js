import {
  FaCode,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";

export const allProjects = [
  {
    title: "FlavorVerse Pizza",
    category: "FullStack",
    description:
      "Modern pizza ordering website with size, flavors, and cart system.",
    tech: ["React", "Tailwind", "Framer Motion", "Context API"],
    github: "https://github.com/HameyDev/mern-food-app",
    live: "https://mern-food-app-frontend-0meh.onrender.com/",
    icon: <FaLaptopCode />,
  },
  {
    title: "Nutritionist Website",
    category: "FullStack",
    description: "Clients submit diet plans & book consultations with backend",
    tech: ["Next.js", "Tailwind", "MongoDB", "Node.js"],
    github: "https://github.com/HameyDev/mern-nutrition",
    live: "https://nutricare-6flv.onrender.com/",
    icon: <FaCode />,
  },
  {
    title: "API Authentication",
    category: "Backend",
    description: "Secure API backend with JWT auth and MongoDB.",
    tech: ["Node.js", "Express", "JWT", "MongoDB"],
    github: "https://github.com/yourname/api-auth",
    live: "#",
    icon: <FaServer />,
  },
];
