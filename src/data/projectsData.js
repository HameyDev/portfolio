import {
  FaCode,
  FaServer,
  FaLaptopCode,
} from "react-icons/fa";

export const allProjects = [
  {
    title: "Event Booking App",
    category: "Frontend",
    description: "Book and manage events with full CRUD and admin panel.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourname/event-booking",
    live: "#",
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
