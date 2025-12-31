
import { FaCode, FaUserFriends, FaTools } from "react-icons/fa";

export const tabs = ["technical", "soft", "tools"];
  export const labels = {
    technical: {
      label: "Technical",
      icon: <FaCode className="text-blue-600" />,
    },

    soft: {
      label: "Soft Skills",
      icon: <FaUserFriends className="text-blue-600" />,
    },

    tools: {
      label: "Tools",
      icon: <FaTools className="text-blue-600" />,
    },
  };