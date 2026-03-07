// src/types/index.ts

// 1. Definisikan dulu props untuk setiap komponen
export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface SkillProps {
  name: string;
  level: string;
}

export interface EducationProps {
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights: string[];
}

export interface ExperienceProps {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  summary: string[];
  logo?: string;
  image?: string | string[];
}

export interface OrganizationProps {
  role: string;
  organization: string;
  date: string;
  description: string;
  linkSource?: string;
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string | string[];
  date?: string;
  linkPreview?: string;
  linkSource?: string;
}

export interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  summary: string;
  image: string;
  linkSource?: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}

// 2. Gabungkan ke dalam SiteContent
export interface SiteContent {
  hero: HeroProps;
  skills: { technical: SkillProps[]; soft: SkillProps[] };
  experience: ExperienceProps[];
  organization: OrganizationProps[];
  projects: ProjectProps[];
  certification: CertificationProps[];
}

// 3. Konfigurasi Site utama
export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}