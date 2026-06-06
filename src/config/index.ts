import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Alneira Firja Azaria",
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
    specialty: " Finance, Accounting, Audit Enthusiast",
    summary: "Detail-oriented final-year Applied Accounting student at IPB University with hands-on experience in external audit across for several corporate clients and accounting exposure including budgeting, journal entries, and internal control procedures. Strong analytical skills with proven leadership experience as Head of Internal Directorate at Komite Audit Mahasiswa IPB.",
    email: "/CV_AlneiraFirjaAzaria.pdf",
  },
  
  skills: {
    technical: [
      { name: "Intermediate Ms. Excel", level: "Certified" },
      { name: "Accurate Accounting System", level: "Intermediate" },
      { name: "Kledo Accounting System", level: "Certified" },
      { name: "Financial Reporting", level: "Intermediate" },
      { name: "External Audit", level: "Experienced" },
      { name: "Internal Audit", level: "Certified" },
      { name: "Data Analyze", level: "Certified" },
    ],
    soft: [
      { name: "Leadership", level: "Expert" },
      { name: "Time Management", level: "Experienced" },
      { name: "Adaptability", level: "Experienced" },
      { name: "Analytical Thinking", level: "Expert" },
      { name: "Communication", level: "Experienced" },
      { name: "Team Collaboration", level: "Experienced" },
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
      endDate: "May, 2026",
      image: ["/moore.png", "/moore2.png"],
      description: "Assisted auditor in audit engagements for two corporate clients.",
      summary: [
        "Assisted auditor in audit engagements for two corporate clients, including a subsidiary of a publicly listed company and a private company.",
        "Conducted analytical reviews on appriximately 15+ financial statement accounts within the Audit Working Paper to identify trends, inconsistencies, and investigation.",
        "Fieldwork audit at client’s company.",
        "Prepared and filling Working Audit Paper for current audit engagements.",
        "Performed General Ledger (GL) reconciliation and verifying balances.",
        "Managed and reconciled 500+ supporting documents from third parties to multiple accounts to ensure transaction validity and supporting documentation completeness",
        "Conducted 100+ Accounts Receivable (AR) aging analysis.",
        "Recalculated 100+ asset depreciations and amortizations.",
      ],
      certificateLink: "https://drive.google.com/open?id=1HmLlMQV_HNCeJOraOga1SYCW8Dcgv6jH&authuser=1",
    },
    {
      company: "PT Pandu Mahardika Perdana (DAXTRO)",
      position: "Finance & Accounting Intern",
      logo: "/logodaxtro.png",
      location: "Central Jakarta, Jakarta", 
      startDate: "Aug, 2025",
      endDate: "Dec, 2025",
      image: ["/daxtro1.jpeg", "/daxtro2.png"],
      description: "Optimized divisional budget controls via automated Excel tools, managed daily data entries, and assisted in asset internal audits.",
      summary: [
        "Optimized divisional budget controls via automated Excel tools, managed daily data entries, and assisted in asset internal audits.",
        "Designed a controlling budget tools based on advanced Microsoft Excel for all office divisions.",
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
      description: "Assisted in corporate external audits by executing substantive accounts testing, ledger reconciliation, and on-site fieldwork.",
      summary: [
        "Assisted in corporate external audits by executing substantive accounts testing, ledger reconciliation, and on-site fieldwork.",
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
      company: "Bank Rakyat Indonesia (Persero) Tbk.",
      position: "Unit Administrative Intern",
      logo: "/logobri.png",
      location: "Madiun, East Java", 
      startDate: "Jul, 2023",
      endDate: "Aug, 2023",
      image: ["/bri.png"],
      description: "Supported banking unit operations by verifying transaction records, organizing document archives, and assisting with daily bookkeeping.",
      summary: [
        "Supported banking unit operations by verifying transaction records, organizing document archives, and assisting with daily bookkeeping.",
        "Verifying the validity of recording unit transactions.",
        "Manage document archives from office units.",
        "Assisted in unit bookkeeping process.",
      ],
      certificateLink: "https://drive.google.com/file/u/1/d/1tMTLu41ROb7G-JVJ4LN357JDp0vVKlJq/view?usp=drivesdk",
    },
  ],
  organization: [
    {
      role: "Head of Internal Directorate/Internal Auditor",
      organization: "Komite Audit Mahasiswa IPB",
      date: "2024 - 2025",
      description: "As Chairman of the Internal Directorate, I led 10 staff members in executing 10+ work programs while serving as the PIC for internal audit activities. I specialized in analyzing financial transactions and developing audit programs to provide strategic recommendations to enhanced organizational efficiency and effectiveness.",
      certificateLink: "https://drive.google.com/file/d/1PkXJJ1dB13P8g0q0XYC2ZfgHOxcMj0gl/view",
      photos: ["/kam3.png", "/internal2.png"],    
    },
    {
      role: "General Secretary",
      organization: "Paguyuban Sedulur Madiun (PASMAD) IPB",
      date: "2024 - 2025",
      description: "As the General Secretary, I orchestrated the organization's administrative infrastructure and standardized internal documentation processes. I managed official correspondence and database records for all work programs",
      photos: ["/pasmad1.jpeg", "/pasmad2.jpeg"], 
      certificateLink: "https://drive.google.com/file/u/1/d/1dX21VN0S-xs_i34W8Ld7JF1cjLQuv-w-/view?usp=drive_open",
    },
    {
      role: "Staff of Internal Department",
      organization: "HIMAVO AKMAPESA IPB",
      date: "2023 - 2024",
      description: "Actively contributed to several work programs as the Design & Documentation Division Coordinator and Chief Executive",
      photos: ["/akma1.jpeg", "/akma3.jpeg"], 
      certificateLink: "https://drive.google.com/file/d/1ZHsjzZ5DRr4kUSMZ4-2sZxDzy2IiNQ2X/view",
    },
    {
      role: "1st General Treasurer",
      organization: "Computer High Intelligent Personal (CHIP) SMAN 5 MADIUN",
      date: "2021 - 2022",
      description: "Responsible for managed the organization's financial transparency and prepared detailed monthly financial reports",
      photos: ["/chip1.jpeg", "/chip2.jpeg"], 
      certificateLink: "https://drive.google.com/file/u/1/d/1dX21VN0S-xs_i34W8Ld7JF1cjLQuv-w-/view?usp=drive_open",
    },
  ],
  
  projects: [
    {
      name: "Excel-Based Budget Controlling Tool (R&D Project)",
      summary: "During my internship at DAXTRO, I developed an Excel-based Budget Control System for all divisions to automate tracking and variance analysis. Beyond calculation, the tool serves as an internal control mechanism—incorporating automated reminders and data validation to mitigate late realization reporting to ensure financial data integrity.",
      date: "Aug 2025 - Dec 2025",
      image: "/controlb.png",
      link: "https://link-ke-google-drive-kamu.com", 
      features: [
        "Automated Tracking", 
        "Budget Variance Analysis", 
        "Internal Control Reminders"
      ],
      outcomes: [
        { icon: "⏱️", title: "Improved reporting compliance", desc: "Late reporting frequency decreased significantly within 4 months." },
        { icon: "📊", title: "Enhanced management oversight", desc: "System became the primary tool for monthly budget evaluation meetings." },
        { icon: "🎯", title: "Real-time budget visibility", desc: "Management can track remaining division at any time." },
        { icon: "⚠️", title: "Early warning system", desc: "Visual indicators (red/yellow/green) enable proactive follow-up." }
      ],
      formulas: [
        { name: 'Status Pencairan Anggaran', code: '=IF(VLOOKUP(Desc)=MonthlyTotal, "Selesai", "Sebagian")' },
        { name: 'Tanggal Jatuh Tempo', code: '=WORKDAY(Tanggal_Selesai, 3)' },
        { name: 'Realisasi Anggaran', code: '=IF(ISBLANK(Date), "N/A", IF(Date<Due, "OnTime", "Late"))' },
        { name: 'Selisih (Variance)', code: '=(Actual_Budget - Budget)' },
        { name: 'Saldo Akhir Anggaran', code: '=(Monthly_Budget - Actual_Budget)' }
      ],
      tags: ["Advanced Excel", "Financial Analysis", "Budgeting", "Internal Audit"]
    },
    {
      name: "MonifyIPB - Budgeting Website",
      summary: "MonifyIPB is an Accounting Information System designed to streamline budget management. As UI/UX Designer & Lead Conceptualist, I translated bookkeeping principles and internal control frameworks into an intuitive digital experience, ensuring financial monitoring remains rigorous yet accessible.",
      date: "Oct 2024 - Dec 2024",
      image: "/monify.png",
      link: "https://link-demo-monify.com",
      features: [
        "Interactive Dashboard",
        "Dynamic Expense Categorization",
        "Overbudget Warning Notification"
      ],
      outcomes: [
        { icon: "🎨", title: "Intuitive UI/UX", desc: "Designed user-friendly interfaces to enhance user engagement for financial activities." },
        { icon: "📊", title: "Optimized Financial Data Visualization", desc: "Transformed complex accounting datasets into intuitive graphical representations, facilitating rapid financial health assessments." },
        { icon: "🛡️", title: "Mitigated Overexpenditure", desc: "Conceptualized a proactive warning system that effectively reduced discretionary spending through automated threshold notifications." }
      ],
      tags: ["UI/UX Design", "Budgeting", "Accounting Information System", "System Analyst"]
    },
  ],
  
  certification: [
   {
      title: "Microsoft Excel Bootcamp Certification",
      issuer: "Karirnex",
      date: "2026",
      summary: "Completed an intensive 2-week certification focused on advanced data modeling and business intelligence with INTERMEDIATE predicate.",
      image: "/karirnexcel.png",
      linkSource: "https://drive.google.com/file/d/1z3Ff9n4hl6O9L5hvSOAgLrqtQzdunPRo/view",
    },
    {
      title: "Internal Audit Training Certification",
      issuer: "Kantor Audit Internal IPB",
      date: "2024",
      summary: "Successfully completed a comprehensive internal audit training program.",
      image: "/kam1.png",
      linkSource: "https://drive.google.com/open?id=14erCI3gPdTP5CGjfUww9YEGPlwiWYVgA&authuser=1",
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