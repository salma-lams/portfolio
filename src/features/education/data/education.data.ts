import { EducationItem, LanguageItem } from "../types";

export const educationData: readonly EducationItem[] = [
  {
    degree: "Diploma in Full-Stack Web Development",
    institution: "OFPPT, Hay Salam, Salé",
    period: "2023 – 2025",
  },
  {
    degree: "Bachelor studies in Physical Sciences",
    institution: "Mohammed V University, Rabat",
    period: "2021 – 2022",
  },
] as const;

export const languagesData: readonly LanguageItem[] = [
  { language: "English", proficiency: "Fluent" },
  { language: "Arabic", proficiency: "Native" },
  { language: "French", proficiency: "Intermediate" },
] as const;
