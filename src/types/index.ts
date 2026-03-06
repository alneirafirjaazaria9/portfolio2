export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  experience: ExperienceProps[];
    organization: OrganizationProps[];
  projects: ProjectProps[];
  certification: CertificationProps[]; // <--- TAMBAHKAN BARIS INI!
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}export interface SiteContent {
  hero: HeroProps;
skills: {
    technical: SkillProps[];
    soft: SkillProps[];
  };  experience: ExperienceProps[];
  organization: OrganizationProps[];
  projects: ProjectProps[];
  certification: CertificationProps[];
}

// TAMBAHKAN JUGA INTERFACE INI DI BAWAHNYA
export interface SkillProps {
  name: string;
  level: string;
}
export interface ExperienceProps {
  company: string;
  position: string;
    location: string;

  startDate: string;
  endDate: string;
  summary: string[]; 
  image: string | string[]; // <--- TAMBAHKAN INI agar Vercel tidak error
}

export interface ProjectProps {
  name: string;
  summary: string;
image: string | string[];
  date?: string;
  linkPreview?: string;
  linkSource?: string;
}
export interface OrganizationProps {
  role: string;
  organization: string;
  date: string;
  description: string;
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
