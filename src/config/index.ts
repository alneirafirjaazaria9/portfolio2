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
      logo: "/logomoore.png",
      location: "South Jakarta, Jakarta", 
      startDate: "Jan, 2026",
      endDate: "now",
      image: ["/moore.png"],
      summary: [
        "Assisted in audit engagements for two corporate clients, including a subsidiary of a publicly listed company and a private company.",
        "Executed footing procedures on Financial Statement's draft to ensure mathematical accuracy.",
        "Fieldwork audit at client’s company.",
        "Analyzed and prepared Working Audit Paper for current audit engagements.",
        "Performed General Ledger (GL) reconciliation and verifying balances.",
        "Managed and reconciled 500+ supporting documents from third parties to multiple accounts (including cash/bank, AR/AP, inventory, expenses, and Cost of Sales) to ensure transaction validity and supporting documentation completeness",
        "Conducted 100+ Accounts Receivable (AR) aging analysis.",
        "Recalculated 20+ asset depreciations and amortizations.",
      ],
    },
    {
      company: "PT Pandu Mahardika Perdana (DAXTRO)",
      position: "Finance & Accounting Intern",
      logo: "/logodaxtro.png",
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
      certificateLink: "https://drive.google.com/file/d/1ifj-vACvaOgtmBF-EbTK8541VOT1dPpW/view",
    },
    {
      company: "KAP MNK & Partners (Surakarta Branch)",
      position: "Audit Intern",
      logo: "/logomnk.png",
      location: "Surakarta, Central Java", 
      startDate: "Jan, 2025",
      endDate: "Jun, 2025",
      image: ["/mnk1.png", "/mnk2.png"],
      summary: [
        "Assisted auditors in handled audits for over 10+ corporate clients (both general audit or special audit).",
        "Analyzed and Prepared Working Audit Papers.",
        "Verification of 300+ supporting cash documents (vouching).",
        "Performed General Ledger (GL) reconciliation and verifying balances.",
        "On-site audits at 7 client companies, includes inventory, assets, and cash opname.",
        "Prepared management letters as a finalize audit procedure.",
      ],
      certificateLink: "https://drive.google.com/file/d/1jYGw4AKwBT9hx4Z8gwP1nUQG6wIG1mtZ/view",
    },
    {
      company: "Komite Audit Mahasiswa",
      position: "Organization Internal Auditor",
      logo: "/logokam.png",
      location: "Bogor, West Java", 
      startDate: "Aug, 2024",
      endDate: "Oct, 2025",
      image: ["/kam1.png"],
      summary: [
        "Create teams audit work programs before the audit process begins.",
        "Played role as the Person in Charge of Audit activities for 2 Student Organizations.",
        "Analyze and examine evidence of 10+ student activity transactions and other financial documents.",
        "Provided recommendations for improvements to enhance organizational efficiency and effectiveness.",
      ],
      certificateLink: "https://drive.google.com/file/d/1jYGw4AKwBT9hx4Z8gwP1nUQG6wIG1mtZ/view"
    },
    {
      company: "Bank Rakyat Indonesia (Persero) Tbk.",
      position: "Unit Administrative Intern",
      logo: "/logobri.png",
      location: "Madiun, East Java", 
      startDate: "Jul, 2023",
      endDate: "Aug, 2023",
      image: ["/bri.png"],
      summary: [
        "Verifying the validity of recording unit transactions.",
        "Manage document archives from office units.",
        "Assisted in unit bookkeeping process.",
      ],
      certificateLink: "https://drive.google.com/file/u/1/d/1tMTLu41ROb7G-JVJ4LN357JDp0vVKlJq/view?usp=drivesdk",
    },
  ],
  organization: [
    {
      role: "Head of Internal Directorate",
      organization: "Komite Audit Mahasiswa IPB",
      date: "2024 - 2025",
      description: "I was trusted to be the Chairman of the Internal Directorate. I have prepared, monitor, and leading 10+ workprograms and monitor performance of 10 staff members in executing work programs.",
      certificateLink: "https://drive.google.com/file/d/1PkXJJ1dB13P8g0q0XYC2ZfgHOxcMj0gl/view",
photos: ["/internal.png", "/internal2.png", "/kam4.jpeg"],    },
    {
      role: "General Secretary",
      organization: "Paguyuban Sedulur Madiun (PASMAD) IPB",
      date: "2024 - 2025",
      description: "Managed all administrative activities and serving as the right hand of the organization",
      photos: ["/pasmad1.jpeg", "/pasmad2.jpeg", "/pasmad3.jpeg"], 
    },
    {
      role: "Staff of Internal Department",
      organization: "HIMAVO AKMAPESA IPB",
      date: "2023 - 2024",
      description: "Actively contributed to several work programs as the Design & Documentation Division Coordinator and Chief Executive",
            certificateLink: "https://drive.google.com/file/d/1ZHsjzZ5DRr4kUSMZ4-2sZxDzy2IiNQ2X/view",

    },
    {
      role: "1st General Treasurer",
      organization: "Computer High Intelligent Personal (CHIP) SMAN 5 MADIUN",
      date: "2021 - 2022",
      description: "Responsible for managed the organization's financial transparency and prepared detailed monthly financial reports",
                  certificateLink: "https://drive.google.com/file/u/1/d/1dX21VN0S-xs_i34W8Ld7JF1cjLQuv-w-/view?usp=drive_open",

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
  ],
};