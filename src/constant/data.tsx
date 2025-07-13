import {
  learning1,
  learning2,
  learning3,
  timealphablue,
  timealphared,
  timealphaviolet,
  v1,
  v10,
  v2,
  v3,
  v4,
  v5,
  v6,
  v8,
  v9,
} from "@/assets";
import {
  Award,
  CheckCheck,
  Database,
  Eye,
  FileKey,
  Handshake,
  HeartHandshake,
  Lock,
  Shield,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const WHY_CHOOSE_US = (t: any) => [
  {
    id: 1,
    title: t("whyChooseUs.item1.title"),
    description: t("whyChooseUs.item1.description"),
    image:
      "https://images.unsplash.com/photo-1579226905180-636b76d96082?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: t("whyChooseUs.item2.title"),
    description: t("whyChooseUs.item2.description"),
    image:
      "https://images.unsplash.com/photo-1519493442754-8eb0a6cec050?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: t("whyChooseUs.item3.title"),
    description: t("whyChooseUs.item3.description"),
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: t("whyChooseUs.item4.title"),
    description: t("whyChooseUs.item4.description"),
    image:
      "https://images.unsplash.com/photo-1676911809788-5b9ee7f145fe?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    title: t("whyChooseUs.item5.title"),
    description: t("whyChooseUs.item5.description"),
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    title: t("whyChooseUs.item6.title"),
    description: t("whyChooseUs.item6.description"),
    image:
      "https://images.unsplash.com/photo-1628434752727-28e7d8061435?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const teamMembers = (t: any) => [
  {
    name: "Gourav Chahal",
    designation: t("team.gourav.designation"),
    description: t("team.gourav.description"),
    image: "/team1.jpg",
  },
  {
    name: "Priyanka Desai",
    designation: t("team.priyanka.designation"),
    description: t("team.priyanka.description"),
    image: "/team2.jpg",
  },
  {
    name: "Nikita Bhatt",
    designation: t("team.nikita.designation"),
    description: t("team.nikita.description"),
    image: "/team3.jpg",
  },
  {
    name: "Renu Yadav",
    designation: t("team.renu.designation"),
    description: t("team.renu.description"),
    image: "/team4.jpg",
  },
  {
    name: "Shivam Verma",
    designation: t("team.shivam.designation"),
    description: t("team.shivam.description"),
    image: "/team5.jpg",
  },
  {
    name: "Ved Grover",
    designation: t("team.ved.designation"),
    description: t("team.ved.description"),
    image: "/team6.jpg",
  },
];

export const OUR_SERVICES = (t: any) => [
  {
    id: 1,
    title: t("services.items.item1.title"),
    description: t("services.items.item1.description"),
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
    slug: "data-collection",
    content: t("services.items.item1.content"),
  },
  {
    id: 2,
    title: t("services.items.item2.title"),
    description: t("services.items.item2.description"),
    image: "/surv-a1.jpg",
    slug: "online-sampling",
    content: t("services.items.item2.content"),
  },
  {
    id: 3,
    title: t("services.items.item3.title"),
    description: t("services.items.item3.description"),
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    slug: "survey-programming-and-hosting",
    content: t("services.items.item3.content"),
  },
  {
    id: 4,
    title: t("services.items.item4.title"),
    description: t("services.items.item4.description"),
    image:
      "https://images.unsplash.com/photo-1623282033815-40b05d96c903?q=80&w=2070&auto=format&fit=crop",
    slug: "advanced-api-solutions",
    content: t("services.items.item4.content"),
  },
  {
    id: 5,
    title: t("services.items.item5.title"),
    description: t("services.items.item5.description"),
    image:
      "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?q=80&w=2076&auto=format&fit=crop",
    slug: "qualitative-and-quantitative-research",
    content: t("services.items.item5.content"),
  },
  {
    id: 6,
    title: t("services.items.item6.title"),
    description: t("services.items.item6.description"),
    image:
      "https://plus.unsplash.com/premium_photo-1722945683602-fa3b05086316?q=80&w=2037&auto=format&fit=crop",
    slug: "website-software-development",
    content: t("services.items.item6.content"),
  },
  {
    id: 7,
    title: t("services.items.item7.title"),
    description: t("services.items.item7.description"),
    image: "/surv-a13.jpg",
    slug: "digital-seo-solutions",
    content: t("services.items.item7.content"),
  },
  {
    id: 8,
    title: t("services.items.item8.title"),
    description: t("services.items.item8.description"),
    image: "/surv-bg2.jpg",
    slug: "technical",
    content: t("services.items.item8.content"),
  },
];

export const TECHNICAL_SOLUTIONS = (t: any) => [
  {
    id: 1,
    title: t("technicalSolutions.items.globalPanelIntegration.title"),
    description: t(
      "technicalSolutions.items.globalPanelIntegration.description"
    ),
    image: "/1.jpg",
  },
  {
    id: 2,
    title: t("technicalSolutions.items.adaptiveSamplingMethods.title"),
    description: t(
      "technicalSolutions.items.adaptiveSamplingMethods.description"
    ),
    image: "/2.jpg",
  },
  {
    id: 3,
    title: t("technicalSolutions.items.realTimeValidation.title"),
    description: t("technicalSolutions.items.realTimeValidation.description"),
    image: "/3.jpg",
  },
  {
    id: 4,
    title: t("technicalSolutions.items.surveyRouting.title"),
    description: t("technicalSolutions.items.surveyRouting.description"),
    image: "/4.jpg",
  },
  {
    id: 5,
    title: t("technicalSolutions.items.dataSecurity.title"),
    description: t("technicalSolutions.items.dataSecurity.description"),
    image: "/5.jpg",
  },
  {
    id: 6,
    title: t("technicalSolutions.items.realTimeReporting.title"),
    description: t("technicalSolutions.items.realTimeReporting.description"),
    image: "/6.jpg",
  },
  {
    id: 7,
    title: t("technicalSolutions.items.aiInsights.title"),
    description: t("technicalSolutions.items.aiInsights.description"),
    image: "/1-1.jpg",
  },
  {
    id: 8,
    title: t("technicalSolutions.items.automatedPanel.title"),
    description: t("technicalSolutions.items.automatedPanel.description"),
    image: "/2-1.jpg",
  },
  {
    id: 9,
    title: t("technicalSolutions.items.multilingualSupport.title"),
    description: t("technicalSolutions.items.multilingualSupport.description"),
    image: "/2-1.jpg",
  },
];

export const surventixHighlights = (t: any) => [
  {
    title: t("surventixHighlights.purposeDriven.title"),
    description: t("surventixHighlights.purposeDriven.description"),
    image: "/Inno_feature_card_innovative.png",
    icon: Shield,
  },
  {
    title: t("surventixHighlights.realPeople.title"),
    description: t("surventixHighlights.realPeople.description"),
    image: "/Inno_feature_card_optimize.png",
    icon: CheckCheck,
  },
  {
    title: t("surventixHighlights.builtInProtection.title"),
    description: t("surventixHighlights.builtInProtection.description"),
    image: "/Inno_feature_card_learn_over_time.png",
    icon: Lock,
  },
  {
    title: t("surventixHighlights.compliance.title"),
    description: t("surventixHighlights.compliance.description"),
    image: "/Inno_feature_card_quality.png",
    icon: FileKey,
  },
  {
    title: t("surventixHighlights.cleanData.title"),
    description: t("surventixHighlights.cleanData.description"),
    image: "/Inno_feature_card_flexible.png",
    icon: Database,
  },
  {
    title: t("surventixHighlights.researchImpact.title"),
    description: t("surventixHighlights.researchImpact.description"),
    image: "/Inno_feature_card_collab.png",
    icon: Eye,
  },
];

export const SECURITY_CHECK = (t: any) => [
  {
    id: 1 ,
    title: t("securityCheck.advancedEncryption.title"),
    items: [
      t("securityCheck.advancedEncryption.item1"),
      t("securityCheck.advancedEncryption.item2"),
    ],
    image: "/Advanced Data.png",
  },
  {
    id: 2,
    title: t("securityCheck.verifiedIdentities.title"),
    items: [
      t("securityCheck.verifiedIdentities.item1"),
      t("securityCheck.verifiedIdentities.item2"),
      t("securityCheck.verifiedIdentities.item3"),
      t("securityCheck.verifiedIdentities.item4"),
      t("securityCheck.verifiedIdentities.item5"),
    ],
    image: "/Verified Respondent Identities.png",
  },
  {
    id: 3,
    title: t("securityCheck.dataPrivacy.title"),
    items: [
      t("securityCheck.dataPrivacy.item1"),
      t("securityCheck.dataPrivacy.item2"),
      t("securityCheck.dataPrivacy.item3"),
    ],
    image: "/Strict Data Privacy.png",
  },
  {
    id: 4,
    title: t("securityCheck.apiSolutions.title"),
    items: [
      t("securityCheck.apiSolutions.item1"),
      t("securityCheck.apiSolutions.item2"),
      t("securityCheck.apiSolutions.item3"),
      t("securityCheck.apiSolutions.item4"),
    ],
    image: "/Advanced API Solutions.png",
  },
  {
    id: 5,
    title: t("securityCheck.systemSecurity.title"),
    items: [
      t("securityCheck.systemSecurity.item1"),
      t("securityCheck.systemSecurity.item2"),
      t("securityCheck.systemSecurity.item3"),
    ],
    image: "/Robust System Security.png",
  },
  {
    id: 6,
    title: t("securityCheck.dataStorage.title"),
    items: [
      t("securityCheck.dataStorage.item1"),
      t("securityCheck.dataStorage.item2"),
      t("securityCheck.dataStorage.item3"),
      t("securityCheck.dataStorage.item4"),
    ],
    image: "/Secure Data Storage.png",
  },
  {
    id: 7,
    title: t("securityCheck.geoTagging.title"),
    items: [
      t("securityCheck.geoTagging.item1"),
      t("securityCheck.geoTagging.item2"),
    ],
    image: "/Geo-Tagging & Location Verification.png",
  },
  {
    id: 8,
    title: t("securityCheck.realTimeMonitoring.title"),
    items: [
      t("securityCheck.realTimeMonitoring.item1"),
      t("securityCheck.realTimeMonitoring.item2"),
    ],
    image: "/Real-Time Monitoring & Alerts.png",
  },
  {
    id: 9,
    title: t("securityCheck.transparency.title"),
    items: [
      t("securityCheck.transparency.item1"),
      t("securityCheck.transparency.item2"),
      t("securityCheck.transparency.item3"),
    ],
    image: "/Transparency & Accountability.png",
  },
  {
    id: 10,
    title: t("securityCheck.digitalSecurity.title"),
    items: [
      t("securityCheck.digitalSecurity.item1"),
      t("securityCheck.digitalSecurity.item2"),
      t("securityCheck.digitalSecurity.item3"),
      t("securityCheck.digitalSecurity.item4"),
    ],
    image: "/Digital Security Measures.png",
  },
  {
    id: 11,
    title: t("securityCheck.dupeScore.title"),
    description: t("securityCheck.dupeScore.description"),
    image:
      "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];


export const CODE_OF_CONDUCT = (t: any) => [
  {
    id: 1,
    title: t("codeOfConduct.items.integrity.title"),
    description: t("codeOfConduct.items.integrity.description"),
    image:
      "https://images.unsplash.com/photo-1607000975509-de2f74eb8d36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: () => <HeartHandshake />,
    bg: "#69C8C9",
    text: "black",
  },
  {
    id: 2,
    title: t("codeOfConduct.items.quality.title"),
    description: t("codeOfConduct.items.quality.description"),
    image:
      "https://plus.unsplash.com/premium_photo-1683749809341-23a70a91b195?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: () => <Award />,
    bg: "#BDEF6F",
    text: "black",
  },
  {
    id: 3,
    title: t("codeOfConduct.items.respect.title"),
    description: t("codeOfConduct.items.respect.description"),
    image:
      "https://images.unsplash.com/photo-1529546628049-75f334518ab5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    icon: () => <Handshake />,
    bg: "#009DE1",
    text: "white",
  },
];

export const COMMITMENTS = (t: any) => [
  {
    id: 1,
    title: t("commitments.items.panelists.title"),
    image: "/surv-a7.jpg",
    lists: [
      t("commitments.items.panelists.privacy"),
      t("commitments.items.panelists.compensation"),
      t("commitments.items.panelists.experience"),
    ],
  },
  {
    id: 2,
    title: t("commitments.items.clients.title"),
    image:
      "https://images.unsplash.com/photo-1524758870432-af57e54afa26?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lists: [
      t("commitments.items.clients.insights"),
      t("commitments.items.clients.professionalism"),
      t("commitments.items.clients.integrity"),
    ],
  },
  {
    id: 3,
    title: t("commitments.items.employees.title"),
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lists: [
      t("commitments.items.employees.culture"),
      t("commitments.items.employees.innovation"),
      t("commitments.items.employees.diversity"),
    ],
  },
];

export const ETHICS = (t: any) => [
  {
    id: 1,
    title: t("ethics.items.transparency.title"),
    description: t("ethics.items.transparency.description"),
    className: "mr-auto md:mb-20 mb-10 bg-[#E2062E]",
    animation: timealphared,
  },
  {
    id: 2,
    title: t("ethics.items.legal.title"),
    description: t("ethics.items.legal.description"),
    className: "ml-auto md:mb-20 mb-10 bg-[#460073]",
    animation: timealphaviolet,
  },
  {
    id: 3,
    title: t("ethics.items.discrimination.title"),
    description: t("ethics.items.discrimination.description"),
    className: "mr-auto mb-20 bg-[#0041F0]",
    animation: timealphablue,
  },
];

export const FAQ = (t: any) => [
  {
    id: 1,
    title: t("faq.items.commitment.title"),
    description: t("faq.items.commitment.description"),
    image:
      "https://images.unsplash.com/photo-1491602917301-a0d24c462b8b?q=80&w=2078&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: t("faq.items.evolution.title"),
    description: t("faq.items.evolution.description"),
    image:
      "https://images.unsplash.com/photo-1533601017-dc61895e03c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: t("faq.items.accountability.title"),
    description: t("faq.items.accountability.description"),
    image:
      "https://images.unsplash.com/photo-1595928796398-1d0ac507eed0?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const EXPERTISE = (t: any) => [
  {
    id: 1,
    title: t("expertise.1.title"),
    description: t("expertise.1.description"),
    image: "/think.png",
  },
  {
    id: 2,
    title: t("expertise.2.title"),
    description: t("expertise.2.description"),
    image: "/data.png",
  },
  {
    id: 3,
    title: t("expertise.3.title"),
    description: t("expertise.3.description"),
    image: "/colab.webp",
  },
];

export const BLOGS = (t: any) => {
  return [
    {
      thumbnail: "/blog-1.jpg",
      title: t("blogsSection.blogs.blog1.title"),
      description: t("blogsSection.blogs.blog1.description"),
      category: "tech",
      date: "10 Jan 2025",
      slug: "surventix-the-power-of-global-insights-at-your-fingertips",
      content: `
      <p class="mb-2">${t("blogsSection.blogs.blog1.content.heading")}</p>
      <h2 class="text-xl text-blue-600 italic mb-6">
        "${t("blogsSection.blogs.blog1.content.subheading")}"
      </h2>
      <p class="mb-4">${t("blogsSection.blogs.blog1.content.paragraph1")}</p>
      <p>${t("blogsSection.blogs.blog1.content.paragraph2")}</p>
    `,
    },
    {
      thumbnail: "/blog-2.jpg",
      title: t("blogsSection.blogs.blog2.title"),
      description: t("blogsSection.blogs.blog2.description"),
      content: `
      <p class="mb-2">${t("blogsSection.blogs.blog2.content.heading")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog2.content.paragraph1")}</p>
      <p>${t("blogsSection.blogs.blog2.content.paragraph2")}</p>
    `,
      category: "tech",
      date: "10 Jan 2025",
      slug: "a-spectrum-of-voices-a-world-of-knowledge-the-power-of-a-diverse-respondent-panel",
    },
    {
      thumbnail: "/blog-3.png",
      title: t("blogsSection.blogs.blog3.title"),
      description: t("blogsSection.blogs.blog3.description"),
      content: `
      <p class="mb-4">${t("blogsSection.blogs.blog3.content.heading")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog3.content.paragraph1")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog3.content.paragraph2")}</p>
      <p class="font-semibold text-blue-700">${t(
        "blogsSection.blogs.blog3.content.paragraph3"
      )}</p>
    `,
      category: "tech",
      date: "10 Jan 2025",
      slug: "the-power-of-real-people-in-market-research-real-people-real-data-real-impact",
    },
    {
      thumbnail: "/blog-4.png",
      title: t("blogsSection.blogs.blog4.title"),
      description: t("blogsSection.blogs.blog4.description"),
      content: `
      <p class="mb-4">${t("blogsSection.blogs.blog4.content.paragraph1")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog4.content.paragraph2")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog4.content.paragraph3")}</p>
      <p class="font-semibold text-blue-700">${t(
        "blogsSection.blogs.blog4.content.paragraph4"
      )}</p>
    `,
      category: "tech",
      date: "10 Jan 2025",
      slug: "more-than-numbers-how-surventix-turns-data-into-your-secret-weapon",
    },
    {
      thumbnail: "/blog-5.png",
      title: t("blogsSection.blogs.blog5.title"),
      description: t("blogsSection.blogs.blog5.description"),
      content: `
      <p class="mb-4">${t("blogsSection.blogs.blog5.content.paragraph1")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog5.content.paragraph2")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog5.content.paragraph3")}</p>
      <p class="font-semibold text-blue-700">${t(
        "blogsSection.blogs.blog5.content.paragraph5"
      )}</p>
    `,
      category: "tech",
      date: "10 Jan 2025",
      slug: "more-than-numbers-how-surventix-turns-data-into-your-secret-weapon",
    },
    {
      thumbnail: "/blog-6.png",
      title: t("blogsSection.blogs.blog6.title"),
      description: t("blogsSection.blogs.blog6.description"),
      content: `
      <p class="mb-4">${t("blogsSection.blogs.blog6.content.paragraph1")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog6.content.paragraph2")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog6.content.paragraph3")}</p>
      <p class="font-semibold text-blue-700">${t(
        "blogsSection.blogs.blog6.content.paragraph6"
      )}</p>
    `,
      category: "tech",
      date: "10 Jan 2025",
      slug: "more-than-numbers-how-surventix-turns-data-into-your-secret-weapon",
    },
    {
      thumbnail: "/blog-7.png",
      title: t("blogsSection.blogs.blog7.title"),
      description: t("blogsSection.blogs.blog7.description"),
      content: `
      <p class="mb-4">${t("blogsSection.blogs.blog7.content.paragraph1")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog7.content.paragraph2")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog7.content.paragraph3")}</p>
      <p class="font-semibold text-blue-700">${t(
        "blogsSection.blogs.blog7.content.paragraph7"
      )}</p>
    `,
      category: "tech",
      date: "10 Jan 2025",
      slug: "more-than-numbers-how-surventix-turns-data-into-your-secret-weapon",
    },
    {
      thumbnail: "/blog-8.png",
      title: t("blogsSection.blogs.blog8.title"),
      description: t("blogsSection.blogs.blog8.description"),
      content: `
      <p class="mb-4">${t("blogsSection.blogs.blog8.content.paragraph1")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog8.content.paragraph2")}</p>
      <p class="mb-4">${t("blogsSection.blogs.blog8.content.paragraph3")}</p>
      <p class="font-semibold text-blue-700">${t(
        "blogsSection.blogs.blog8.content.paragraph8"
      )}</p>
    `,
      category: "tech",
      date: "10 Jan 2025",
      slug: "more-than-numbers-how-surventix-turns-data-into-your-secret-weapon",
    },
  ];
};

export const OUR_REACH = [
  { icon: "US", text: "United States" },
  { icon: "GB", text: "United Kingdom" },
  { icon: "CA", text: "Canada" },
  { icon: "DE", text: "Germany" },
  { icon: "FR", text: "France" },
  { icon: "IN", text: "India" },
  { icon: "AU", text: "Australia" },
  { icon: "JP", text: "Japan" },
  { icon: "CN", text: "China" },
  { icon: "BR", text: "Brazil" },
  { icon: "ES", text: "Spain" },
  { icon: "IT", text: "Italy" },
  { icon: "NL", text: "Netherlands" },
  { icon: "MX", text: "Mexico" },
  { icon: "KR", text: "South Korea" },
  { icon: "AE", text: "UAE" },
  { icon: "ZA", text: "South Africa" },
  { icon: "SG", text: "Singapore" },
  { icon: "SE", text: "Sweden" },
  { icon: "CH", text: "Switzerland" },
  { icon: "TR", text: "Turkey" },
  { icon: "AR", text: "Argentina" },
  { icon: "ID", text: "Indonesia" },
  { icon: "MY", text: "Malaysia" },
  { icon: "NO", text: "Norway" },
  { icon: "PL", text: "Poland" },
  { icon: "RU", text: "Russia" },
  { icon: "TH", text: "Thailand" },
  { icon: "VN", text: "Vietnam" },
  { icon: "EG", text: "Egypt" },
  { icon: "SA", text: "Saudi Arabia" },
  { icon: "PH", text: "Philippines" },
  { icon: "DK", text: "Denmark" },
  { icon: "FI", text: "Finland" },
  { icon: "CL", text: "Chile" },
  { icon: "PT", text: "Portugal" },
  { icon: "IE", text: "Ireland" },
  { icon: "NZ", text: "New Zealand" },
  { icon: "HK", text: "Hong Kong" },
  { icon: "CO", text: "Colombia" },
  { icon: "CZ", text: "Czech Republic" },
  { icon: "HU", text: "Hungary" },
  { icon: "GR", text: "Greece" },
  { icon: "RO", text: "Romania" },
  { icon: "BE", text: "Belgium" },
  { icon: "AT", text: "Austria" },
  { icon: "PE", text: "Peru" },
  { icon: "IL", text: "Israel" },
  { icon: "KE", text: "Kenya" },
  { icon: "BD", text: "Bangladesh" },
  { icon: "UA", text: "Ukraine" },
];

export const companyValues = (t: any) => [
  {
    title: t("companyValues.integrity.title"),
    description: t("companyValues.integrity.description"),
    icon: "shield-check",
    image: v1,
  },
  {
    title: t("companyValues.diversity.title"),
    description: t("companyValues.diversity.description"),
    icon: "users",
    image: v2,
  },
  {
    title: t("companyValues.respect.title"),
    description: t("companyValues.respect.description"),
    icon: "user-heart",
    image: v3,
  },
  {
    title: t("companyValues.clientsFirst.title"),
    description: t("companyValues.clientsFirst.description"),
    icon: "handshake",
    image: v4,
  },
  {
    title: t("companyValues.strategicPerspective.title"),
    description: t("companyValues.strategicPerspective.description"),
    icon: "chart-bar",
    image: v5,
  },
  {
    title: t("companyValues.valueDelivered.title"),
    description: t("companyValues.valueDelivered.description"),
    icon: "check-circle",
    image: v6,
  },
  {
    title: t("companyValues.partnership.title"),
    description: t("companyValues.partnership.description"),
    icon: "handshake",
    image: v8,
  },
  {
    title: t("companyValues.expandingPossibilities.title"),
    description: t("companyValues.expandingPossibilities.description"),
    icon: "lightbulb",
    image: v9,
  },
  {
    title: t("companyValues.socialImpact.title"),
    description: t("companyValues.socialImpact.description"),
    icon: "globe",
    image: v10,
  },
];

export const OPPORTUNITIES = (t: any) => [
  {
    id: 1,
    title: t("opportunities.items.corporate.title"),
    content: [
      t("opportunities.items.corporate.content.0"),
      t("opportunities.items.corporate.content.1"),
      t("opportunities.items.corporate.content.2"),
    ],
    className: "mr-auto md:mb-20 mb-10 bg-[#E2062E]",
    animation: timealphared,
    bg: "bg-[#E2062E]",
    image: learning1,
    icon: () => <HeartHandshake />,
  },
  {
    id: 2,
    title: t("opportunities.items.learning.title"),
    content: [
      t("opportunities.items.learning.content.0"),
      t("opportunities.items.learning.content.1"),
      t("opportunities.items.learning.content.2"),
      t("opportunities.items.learning.content.3"),
    ],
    className: "ml-auto md:mb-20 mb-10 bg-[#460073]",
    animation: timealphaviolet,
    bg: "bg-[#460073]",
    image: learning2,
    icon: () => <Award />,
  },
  {
    id: 3,
    title: t("opportunities.items.culture.title"),
    content: [t("opportunities.items.culture.content.0")],
    className: "mr-auto mb-20 bg-[#0041F0]",
    animation: timealphablue,
    bg: "bg-[#0041F0]",
    image: learning3,
    icon: () => <Handshake />,
  },

  {
    id: 4,
    title: t("opportunities.items.engaging.title"),
    content: [t("opportunities.items.engaging.content.0")],
    className: "mr-auto md:mb-20 mb-10 bg-[#E2062E]",
    animation: timealphared,
    bg: "bg-[#E2062E]",
  },
  {
    id: 5,
    title: t("opportunities.items.impact.title"),
    content: [t("opportunities.items.impact.content.0")],
    className: "ml-auto md:mb-20 mb-10 bg-[#460073]",
    animation: timealphaviolet,
    bg: "bg-[#460073]",
  },
  {
    id: 6,
    title: t("opportunities.items.support.title"),
    content: [t("opportunities.items.support.content.0")],
    className: "mr-auto mb-20 bg-[#0041F0]",
    animation: timealphablue,
    bg: "bg-[#0041F0]",
  },
  {
    id: 7,
    title: t("opportunities.items.learning.title"),
    content: [t("opportunities.items.learning.content.0")],
    className: "ml-auto md:mb-20 mb-10 bg-[#E2062E]",
    animation: timealphared,
    bg: "bg-[#E2062E]",
  },
  {
    id: 8,
    title: t("opportunities.items.professional.title"),
    content: [t("opportunities.items.professional.content.0")],
    className: "mr-auto md:mb-20 mb-10 bg-[#460073]",
    animation: timealphaviolet,
    bg: "bg-[#460073]",
  },
];
