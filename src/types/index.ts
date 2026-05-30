// src/types/index.ts

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
  position: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  logo?: string;
  certificateLink?: string;
  image?: string | string[];
  description?: string; 
  summary: string[];   
}

export interface OrganizationProps {
  role: string;
  organization: string;
  date: string;
  description: string;
  linkSource?: string;
  certificateLink?: string;
  photos?: string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image: string | string[];
  link?: string;
  date?: string;
  tags?: string[];
  features?: string[];
  outcomes?: {
    icon: string;
    title: string;
    desc: string;
  }[];
  formulas?: {
    name: string;
    code: string;
  }[];
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

export interface SiteContent {
  hero: HeroProps;
  skills: { technical: SkillProps[]; soft: SkillProps[] };
  experience: ExperienceProps[];
  organization: OrganizationProps[];
  projects: ProjectProps[];
  certification: CertificationProps[];
}

export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}