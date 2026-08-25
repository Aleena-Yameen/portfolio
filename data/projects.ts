export type Project = {
  title: string;
  category: string;
  description: string;
  github: string;
  tech: string[];
};
export const projects: Project[] = [
  {
    title: "Invoice App",
    category: "Frontend",
    description: "Invoice creation and management application.",
    github: "https://github.com/Aleena-Yameen/invoice-app",
    tech: ["React", "JavaScript", "CSS"],
  },
  {
    title: "Weather App",
    category: "API",
    description: "Weather forecasting using external APIs.",
    github: "https://github.com/Aleena-Yameen/weather-app",
    tech: ["React", "API", "CSS"],
  },
  {
    title: "Password Generator",
    category: "Utility",
    description: "Generate secure passwords instantly.",
    github: "https://github.com/Aleena-Yameen/password-generator",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Todo App",
    category: "Frontend",
    description: "Task management with CRUD functionality.",
    github: "https://github.com/Aleena-Yameen/todo-app",
    tech: ["React", "State Management"],
  },
  {
    title: "Password Strength Checker",
    category: "Security",
    description: "Password security scoring application.",
    github: "https://github.com/Aleena-Yameen/password-strength-checker",
    tech: ["JavaScript", "Regex"],
  },
];