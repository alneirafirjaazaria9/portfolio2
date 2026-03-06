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
    summary: "Detail-oriented final-year Applied Accounting student at IPB University with hands-on experience in external audit across for several corporate clients and accounting exposure including budgeting, journal entries, and internal control procedures. Strong analytical skills with proven leadership experience as Head of Internal Directorate at Komite Audit Mahasiswa IPB.",
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
      location: "South Jakarta, Jakarta", // Tambahkan field ini
      startDate: "Jan, 2026",
      endDate: "now",
      image: ["/moore.png"],
      summary: [
        "Executed footing procedures on Financial Statement's draft to ensure mathematical accuracy.",
        "Analyzed and prepared Working Audit Paper for current audit engagements.",
        "Fieldwork audit at client’s company",
        "Performed General Ledger (GL) reconciliation and verifying balances.",
        "Managed and reconciled 500+ supporting documents from third parties and internal departments to ensure complete audit trails for all vouchers.",
        "Conducted 20+ Accounts Receivable (AR) aging analysis.",
        "Recalculate 20+ asset depreciation/amortization.",
      ],
    },
    {
      company: "PT Pandu Mahardika Perdana (DAXTRO)",
      position: "Finance & Accounting Intern",
      location: "Central Jakarta, Jakarta", 
      startDate: "Aug, 2025",
      endDate: "Dec, 2025",
      image: ["/daxtro1.jpeg", "/daxtro2.png"],
      summary: [
        "Designed a controlling budget tools based on Advanced Microsoft Excel for 6 office divisions.",
        "Internal audits, include stock opname of 30+ spareparts.",
        "Create a Standard Operational Procedure (SOP) of submission budgeting.",
        "Entry 100+ general journal for daily operational transactions in Accurate System (both budgeting, purchasing, payroll, etc.)",
        "Analyzed and recap 20+ transaction of disbursement activities and budget realization of the company divisions.",
      ],
    },
    {
      company: "KAP MNK & Partners (Surakarta Branch)",
      position: "Audit Intern",
      location: "Surakarta, Central Java", 
      startDate: "Jan, 2025",
      endDate: "Jun, 2025",
      image: ["/mnk1.png", "/mnk2.png"],
      summary: [
        "Participated in handled audits for over 10+ corporate clients.",
        "Analyzed and Prepared Working Audit Papers.",
        "Verification of 300+ supporting cash documents (vouching).",
        "Performed General Ledger (GL) reconciliation and verifying balances.",
        "On-site audits at 7 client companies, includes inventory, assets, and cash opname.",
        "Prepared management letters as a finalize audit procedure.",
      ],
    },
    {
      company: "Komite Audit Mahasiswa",
      position: "Organization Internal Auditor",
      location: "Bogor, West Java", 
      startDate: "Aug, 2024",
      endDate: "Oct, 2025",
      image: ["/kam3.png", "/kam1.png"],
      summary: [
        "Create teams audit work programs before the audit process begins.",
        "Played role as the Person in Charge of Audit activities for 2 Student Organizations.",
        "Analyze and examine evidence of 10+ student activity transactions and other financial documents.",
        "Provided recommendations for improvements to enhance organizational efficiency and effectiveness.",
      ],
    },
    {
      company: "Bank Rakyat Indonesia (Persero) Tbk.",
      position: "Unit Administrative Intern",
      location: "Madiun, East Java", 
      startDate: "Jul, 2023",
      endDate: "Aug, 2023",
      image: ["/bri.png"],
      summary: [
        "Verifying the validity of recording unit transactions.",
        "Manage document archives from office units.",
        "Assisted in unit bookkeeping process.",
      ],
    },
  ],
  organization: [
    {
      role: "Head of Internal Directorate",
      organization: "Komite Audit Mahasiswa IPB",
      date: "2024 - 2025",
      linkSource: "https://drive.google.com/file/d/1PkXJJ1dB13P8g0q0XYC2ZfgHOxcMj0gl/view",
      description: "I was trusted to be the Chairman of the Internal Directorate. I have prepared, monitor, and leading 10+ workprograms and monitor performance of 10 staff members in executing work programs.",
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
    {
      role: "1st General Treasurer ",
      organization: "Computer High Intelligent Personal (CHIP) SMAN 5 MADIUN",
      date: "2021 - 2022",
      description: "Responsible for managed the organization's financial transparency and prepared detailed monthly financial reports",
    },
  ],
  projects: [
    {
      name: "Excel-Based Budget Controlling Tool (R&D Project)",
      summary: "During my internship period as a Finance & Accounting at DAXTRO Ice Machine, I succesfully designed and implemented an integrated Budget Control System using Advanced Excel for 6 divisions. The key features include automated tracking, variance analysis, and help management to built an internal control from reminders to mitigate late reporting and ensure data integrity.",
      date: "Aug 2025 - Dec 2025",
      image: "/controlb.png",
    },
    {
      name: "MonifyIPB - Budgeting Website",
      summary: "MonifyIPB is designed to make it easier for users to monitor and manage monthly budgets to be more efficient and dynamic. In this project, I played role as an UI/UX Designer & Conceptualist",
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
      image: "/internal2.png",
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
      image: "/kam2.png",
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
      image: "/bri2.jpeg",
      linkSource: "https://drive.google.com/file/u/1/d/1tMTLu41ROb7G-JVJ4LN357JDp0vVKlJq/view?usp=drivesdk",
    },
  ], // Ini adalah penutup array certification
}; 