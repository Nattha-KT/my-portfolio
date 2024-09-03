import { ReactElement } from "react";
export type QualificationItem = {
  university?: string;
  company?: string;
  qualification?: string;
  role?: string;
  years: string;
};

export type QualificationSection = {
  title: string;
  data: QualificationItem[];
};

export type PersonalDataItem = {
  icon: ReactElement;
  text: string;
};

export type SkillItem = {
  name: string;
};

export type ToolItem = {
  imagePath: string;
};

export type SkillSection = {
  title: "skills" | "tools";
  data: (SkillItem | ToolItem)[];
};

export type ServiceDataItem = {
  icon: ReactElement;
  title: string;
  description: string;
};

