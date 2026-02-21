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
  projects: ProjectProps[];
  certification: CertificationProps[]; // <--- TAMBAHKAN BARIS INI!
  about: AboutProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
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
export interface CertificationProps {
  title: string;
  issuer: string;
  date: string;
  summary: string;
  image: string;
  linkSource?: string;
}
export interface AboutProps {
  description: string;
  image: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
}
