const BLOG = 'https://blog.magneo.ca/blog';

export const articles = {
  clinicVideo: ['Video Marketing for Clinics: Patient Trust Through Short-Form Video', `${BLOG}/video-marketing-for-clinics-patient-trust-through-short-form-video/`],
  medicalSeo: ['Educational Content as a National SEO Strategy for Medical Providers', `${BLOG}/educational-content-as-a-national-seo-strategy-for-medical-providers/`],
  clinicLocalSeo: ['Local SEO for Clinics: Google Business Profiles, Location Pages & Reviews', `${BLOG}/local-seo-for-clinics-google-business-profiles-location-pages-reviews/`],
  microSaas: ['Micro-SaaS & Niche Tech Solutions: Big Impact in Small Markets', `${BLOG}/micro-saas-niche-tech-solutions-big-impact-in-small-markets/`],
  productLed: ['Product-Led Growth: Turning Free Trials Into High-Intent Conversions', `${BLOG}/product-led-growth-turning-free-trials-into-high-intent-conversions/`],
  aiPersonalization: ['Hyper-Personalization with AI for SaaS & Tech Brands', `${BLOG}/hyper-personalization-with-ai-for-saas-tech-brands/`],
  financeWebinars: ['Webinars & Micro-Events for Financial Firms', `${BLOG}/webinars-micro-events-for-financial-firms-in-2025/`],
  financeContent: ['Quality Over Quantity: Creating Engaging Financial Content That Converts', `${BLOG}/quality-over-quantity-creating-engaging-financial-content-that-converts/`],
  legalSocial: ['Omnichannel & Social Media Strategies for Legal Services', `${BLOG}/omnichannel-social-media-strategies-for-legal-services/`],
  legalSeo: ['Law Firm SEO: Cross-Channel Strategies for Lawyers', `${BLOG}/law-firm-seo-2025-cross-channel-strategies-for-lawyers/`],
  legalFundamentals: ['Digital Marketing Fundamentals for Law Firms', `${BLOG}/reimagining-digital-marketing-fundamentals-for-law-firms-2025/`],
  legalAnalytics: ['Measuring Marketing Incrementality and ROI in Legal Practices', `${BLOG}/law-firm-marketing-analytics-2025/`],
  advisorEmail: ['Email Marketing for Advisors: Timing, Personalization & Conversions', `${BLOG}/email-marketing-for-advisors-in-2025-timing-personalization-conversions/`],
  saasCommunity: ['Community Building & User-Generated Content for SaaS & AI Companies', `${BLOG}/community-building-user-generated-content-for-saas-ai-companies/`],
  healthcareAds: ['Google Ads & PerformanceMax Strategies for Healthcare Providers', `${BLOG}/google-ads-performance%e2%80%91max-strategies-for-healthcare-providers/`],
  financeSocial: ['Authentic Social Media Marketing for Financial Professionals', `${BLOG}/authentic-social-media-marketing-for-financial-professionals/`],
  advisorAi: ['Using AI to Repurpose Content and Personalize Advisor Outreach', `${BLOG}/using-ai-to-repurpose-content-and-personalize-advisor-outreach/`],
  legalAi: ['AI Marketing for Law Firms: Balancing AI and Human Creativity', `${BLOG}/ai-marketing-for-law-firms/`],
  clinicReputation: ['Reputation Management for Clinics: Keeping Your Google Profile Accurate', `${BLOG}/reputation-management-for-clinics-growing-your-google-profile-in-2025/`],
  lawyerVideo: ['Video Marketing for Lawyers: 4 Short-Form Formats That Build Trust and Attention', `${BLOG}/video-marketing-for-lawyers/`],
};

const a = articles;
const familyByIndustry = {
  websites: {
    legal: [a.legalFundamentals, a.legalSeo, a.legalSocial], finance: [a.financeContent, a.advisorEmail, a.financeSocial],
    healthcare: [a.clinicLocalSeo, a.clinicReputation, a.medicalSeo], tech: [a.productLed, a.microSaas, a.saasCommunity],
  },
  seo: {
    legal: [a.legalSeo, a.legalFundamentals, a.legalAnalytics], finance: [a.financeContent, a.advisorEmail, a.financeSocial],
    healthcare: [a.medicalSeo, a.clinicLocalSeo, a.clinicReputation],
  },
  social: {
    legal: [a.lawyerVideo, a.legalSocial, a.legalFundamentals], finance: [a.financeSocial, a.financeContent, a.financeWebinars],
    healthcare: [a.clinicVideo, a.clinicReputation, a.medicalSeo], tech: [a.saasCommunity, a.aiPersonalization, a.microSaas],
  },
  automation: {
    legal: [a.legalAi, a.legalAnalytics, a.legalFundamentals], finance: [a.advisorAi, a.advisorEmail, a.financeContent],
    healthcare: [a.medicalSeo, a.clinicReputation, a.clinicVideo], tech: [a.aiPersonalization, a.productLed, a.microSaas],
  },
  ppc: {
    legal: [a.legalAnalytics, a.legalFundamentals, a.legalSeo], finance: [a.financeContent, a.advisorEmail, a.financeSocial],
    healthcare: [a.healthcareAds, a.clinicLocalSeo, a.clinicReputation],
  },
  branding: {
    legal: [a.lawyerVideo, a.legalSocial, a.legalFundamentals], finance: [a.financeSocial, a.financeContent, a.financeWebinars],
  },
};

const bySlug = {
  'website-design-for-regulated-professional-industries-magneo': [a.legalFundamentals, a.clinicLocalSeo, a.productLed],
  'seo-for-regulated-industries': [a.legalSeo, a.medicalSeo, a.financeContent],
  'seo-for-the-legal-industry': [a.legalSeo, a.legalFundamentals, a.legalAnalytics],
  'seo-for-financial-advisors-wealth-firms': [a.financeContent, a.advisorEmail, a.financeSocial],
  'seo-for-the-healthcare-medtech-industry': [a.medicalSeo, a.clinicLocalSeo, a.clinicReputation],
  'social-media-linkedin-marketing-for-regulated-industries': [a.lawyerVideo, a.clinicVideo, a.financeSocial],
  'ai-automation-for-regulated-industries-magneo': [a.aiPersonalization, a.advisorAi, a.legalAi],
  'ai-powered-digital-marketing': [a.aiPersonalization, a.advisorAi, a.legalAi],
  'ppc-landing-pages-for-regulated-industries': [a.healthcareAds, a.legalAnalytics, a.productLed],
  'personal-branding-for-regulated-professionals': [a.financeSocial, a.lawyerVideo, a.financeContent],
  'healthcare-medtech': [a.medicalSeo, a.clinicLocalSeo, a.clinicReputation],
  'ai-seo': [a.aiPersonalization, a.medicalSeo, a.legalSeo],
  'ai-social-media-marketing': [a.advisorAi, a.saasCommunity, a.financeSocial],
  'ai-ugc-ai-video-production': [a.lawyerVideo, a.clinicVideo, a.saasCommunity],
  'ai-web-design-conversion': [a.productLed, a.aiPersonalization, a.microSaas],
  'ai-content-marketing': [a.advisorAi, a.financeContent, a.medicalSeo],
  'crypto-and-ai-social-media': [a.saasCommunity, a.aiPersonalization, a.microSaas],
};

export function relatedArticlesFor({ slug, family, industry } = {}) {
  return bySlug[slug] || familyByIndustry[family]?.[industry] || [a.legalFundamentals, a.medicalSeo, a.aiPersonalization];
}
