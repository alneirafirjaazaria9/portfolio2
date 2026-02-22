import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alneira Firja Azaria — Accounting/Audit Enthusiast",
  author: "Alneira Firja Azaria",
  description: "A final-year Accounting student at IPB University with strong analytical skills and extensive internship experience in accounting/finance and auditing.",
  lang: "en",
  siteLogo: "/aal.png",
  navLinks: [
    { text: "Home", href: "/" },
        { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
        { text: "Organization", href: "#organization" },
    { text: "Projects", href: "#projects" },
    { text: "Certification", href: "#certification" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/alneira" },
    { text: "Github", href: "https://github.com/alneira" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://alneirafirjazaria.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Alneira Firja Azaria",
    specialty: "Accounting | Auditing Enthusiast",
    summary: "Detail-oriented final-year student of the Bachelor Applied of Accounting at Institut Pertanian Bogor with significant track record of academic improvement. I have interested and experienced in accounting and auditing. I have skills in conducting sharp financial data analysis, managing projects, and leading teams.",
    email: "/CV_AlneiraFirjaAzaria.pdf",
  },
 // ... di dalam SITE_CONTENT
 // Di dalam SITE_CONTENT
  skills: {
    technical: [
      { name: "Advanced Excel", level: "Advanced" },
      { name: "Accurate System", level: "Intermediate" },
      { name: "Kledo Accounting", level: "Certified" },
      { name: "Financial Reporting", level: "Intermediate" },
            { name: "External Audit", level: "Experienced" },
                        { name: "Internal Audit", level: "Certified" },
      { name: "Data Analyze", level: "Basic" },


    ],
    soft: [
    { name: "Leadership", level: "Expert" },
     { name: "Time Management", level: "Advanced" },
      { name: "Analytical Thinking", level: "Expert" },
      { name: "Communication", level: "Advanced" },
      { name: "Teamwork", level: "Advanced" },
      { name: "Problem Solving", level: "Expert" },
    ]
  },
  
  experience: [
    {
      company: "KAP Mirawati Sensi Idris (Moore Global)",
      position: "Audit Intern",
      startDate: "Jan, 2026",
      endDate: "now",
      image: ["/moore.png"],
      summary: [
        "Executing footing procedures on Financial Statement's draft to ensure mathematical accuracy.",
        "Analyze and prepare Working Audit Paper for current audit engagements.",
        "Performed General Ledger (GL) reconciliation and verifying balances.",
        "Performed substantive testing by vouching expenses transactions to source documents.",
        "Conducted Accounts Receivable (AR) aging analysis.",
        "Recalculate asset depreciation and amortization.",
      ],
    },
    {
      company: "PT Pandu Mahardika Perdana (DAXTRO)",
      position: "Finance & Accounting Intern",
      startDate: "Aug, 2025",
      endDate: "Dec, 2025",
      image: ["/daxtro1.jpeg", "/daxtro2.png"],
      summary: [
        "Designed a controlling budget tools based on Advanced Microsoft Excel for 6 office divisions.",
        "Internal audits, include stock opname of 30+ spareparts.",
        "Create a Standard Operational Procedure (SOP) of submission budgeting.",
        "Entry 100+ general journal for daily operational transactions in Accurate System (both budgeting, purchasing, payroll, etc.)",
        "Analyzing and recapping 20+ transaction of disbursement activities and budget realization of the company divisions.",
      ],
    },
    {
      company: "KAP MNK & Partners (Surakarta Branch)",
      position: "Audit Intern",
      startDate: "Jan, 2025",
      endDate: "Jun, 2025",
      image: ["/mnk1.png", "/mnk2.png"],
      summary: [
        "Participated in handling audits for over 10+ corporate clients.",
        "Analyzing and Preparing Audit Working Papers.",
        "Verification of 300+ supporting cash documents (vouching).",
        "Performed General Ledger (GL) reconciliation and verifying balances.",
        "On-site audits at 7 client companies, includes inventory, assets, and cash opname.",
        "Preparing management letters to finalize audit procedure.",
      ],
    },
    {
      company: "Komite Audit Mahasiswa",
      position: "Organization Internal Auditor",
      startDate: "Aug, 2024",
      endDate: "Oct, 2025",
      image: ["/kam3.png", "/kam1.png"],
      summary: [
        "Played role as the Person in Charge of Audit activities for 2 Student Organizations.",
        "Analyzing and examining evidence of 10+ student activity transactions and other financial documents.",
        "Evaluating the financial management conducted by KM IPB student organizations.",
      ],
    },
    {
      company: "Bank Rakyat Indonesia (Persero) Tbk.",
      position: "Unit Administrative Intern",
      startDate: "Jul, 2023",
      endDate: "Aug, 2023",
      image: ["/bri.png"],
      summary: [
        "Checking the validity of recording unit transactions.",
        "Manage document archives from units.",
        "Assisting in unit bookkeeping process.",
      ],
    },
  ],
  organization: [
    {
      role: "Head of Internal Directorate",
      organization: "Komite Audit Mahasiswa IPB",
      date: "2024 - 2025",
      linkSource: "https://drive.google.com/file/d/1PkXJJ1dB13P8g0q0XYC2ZfgHOxcMj0gl/view",
      description: "I was trusted to be the Chairman of the Internal Directorate. I have prepared, monitor, and leading 10+ workprograms.",
    },
    {
      role: "General Secretary ",
      organization: "Paguyuban Sedulur Madiun (PASMAD) IPB",
      date: "2024 - 2025",
      description: "Managed all administrative activities and serving as the right hand of the organization",
    },
    {
      role: "Staff of Internal Department ",
      organization: "HIMAVO AKMAPESA IPB",
      date: "2023 - 2024",
      description: "Actively contributed to several work programs as the Design & Documentation Division Coordinator and Chief Executive",
    },
  ],
  projects: [
    {
      name: "Excel-Based Budget Controlling Tool (R&D Project)",
      summary: "I designed and implemented an integrated Budget Control System using Advanced Excel for 6 divisions.",
      date: "Aug 2025 - Dec 2025",
      image: "/controlb.png",
    },
    {
      name: "MonifyIPB - Budgeting Website",
      summary: "Developed the visual identity and user interface for MonifyIPB, an accounting-based budget management platform.",
      date: "Oct 2024 - Dec 2024",
      image: "/monify.png",
    },
  ],
  certification: [
    {
      title: "Head of Internal Directorate 2024/2025",
      issuer: "Komite Audit Mahasiswa IPB",
      date: "2026",
      summary: "Certificate as Head of the Internal Directorate of KAM IPB 2024/2025.",
      image: "/internal.png",
      linkSource: "https://drive.google.com/file/d/1PkXJJ1dB13P8g0q0XYC2ZfgHOxcMj0gl/view",
    },
    {
      title: "Finance & Accounting Intern",
      issuer: "DAXTRO Ice Machine",
      date: "2025",
      summary: "Certified proficiency in financial statement analysis and corporate budgeting controls.",
      image: "/daxtro3.png",
      linkSource: "https://drive.google.com/file/d/1ifj-vACvaOgtmBF-EbTK8541VOT1dPpW/view",
    },
    {
      title: "Audit Intern Certification",
      issuer: "KAP MNK & Partners Surakarta",
      date: "2025",
      summary: "Certified for the successful completion of the Audit Internship program.",
      image: "/mnk2.png",
      linkSource: "https://drive.google.com/file/d/1jYGw4AKwBT9hx4Z8gwP1nUQG6wIG1mtZ/view",
    },
    {
      title: "Internal Audit Training Certification",
      issuer: "Kantor Audit Internal IPB",
      date: "2024",
      summary: "Successfully completed a comprehensive internal audit training program.",
      image: "/kam1.png",
      linkSource: "https://drive.google.com/file/d/1jYGw4AKwBT9hx4Z8gwP1nUQG6wIG1mtZ/view",
    },
    {
      title: "Awardee as Best of Head Directorate 2024",
      issuer: "Komite Audit Mahasiswa IPB",
      date: "2024",
      summary: "Recognized as the 'Best of Head Directorate' for exemplary leadership.",
      image: "/internal2.png",
      linkSource: "https://drive.google.com/file/u/1/d/1iFZkzags7uCuf4LVhKm4qXectsAuxrHD/view?usp=drivesdk",
    },
    {
      title: "Kledo Application Accounting Certification",
      issuer: "Kledo",
      date: "2024",
      summary: "Certified Kledo Professional in cloud-based accounting software.",
      image: "/kledo.png",
      linkSource: "https://drive.google.com/file/u/1/d/1wW276kzbyuJX_BpKBqvRghIT_GBWhsig/view?usp=drive_open",
    },
    {
      title: "Unit Administrator Intern",
      issuer: "Bank Rakyat Indonesia (Persero) Tbk.",
      date: "2023",
      summary: "Gained hands-on experience in banking administration and transaction verification.",
      image: "/bri.png",
      linkSource: "https://drive.google.com/file/u/1/d/1tMTLu41ROb7G-JVJ4LN357JDp0vVKlJq/view?usp=drivesdk",
    },
  ], // Ini adalah penutup array certification
}; 