import HomePageContent from "./pages/home";
import AboutPageContent from "./pages/about";
import OurWorkPageContent from "./pages/our-work";
import EconomicEmpowermentPageContent from "./pages/economic-empowerment";
import ClimateResiliencePageContent from "./pages/climate-resilience";
import EsgExportReadinessPageContent from "./pages/esg-export-readiness";
import ImpactPageContent from "./pages/impact";
import GetInvolvedPageContent from "./pages/get-involved";
import ContactPageContent from "./pages/contact";

export const pages = {
  "home": { component: HomePageContent, title: "Naqaash Foundation", description: "Naqaash Foundation helps women across Pakistan earn their own income, protect it from climate shocks, and grow ESG- and export-ready businesses." },
  "about": { component: AboutPageContent, title: "About · Naqaash Foundation", description: "Founded in Lahore in 2020, Naqaash Foundation works with marginalised women across Pakistan. Our story, mission, values and leadership." },
  "our-work": { component: OurWorkPageContent, title: "Our Work · Naqaash Foundation", description: "Explore Naqaash Foundation workshops, skills training and community programmes supporting women across Pakistan." },
  "economic-empowerment": { component: EconomicEmpowermentPageContent, title: "Economic Empowerment · Naqaash Foundation", description: "Interest-free microfinance, skills, enterprise support, market access and export readiness for women entrepreneurs in Pakistan." },
  "climate-resilience": { component: ClimateResiliencePageContent, title: "Climate Resilience · Naqaash Foundation", description: "Helping women in Pakistan prepare for, adapt to and recover from floods, drought, extreme heat, glacial floods and smog." },
  "esg-export-readiness": { component: EsgExportReadinessPageContent, title: "ESG & Export Readiness · Naqaash Foundation", description: "Carbon footprint measurement, ESG reporting and export readiness for women-led businesses, plus gender-lens ESG partnerships for companies." },
  "impact": { component: ImpactPageContent, title: "Impact · Naqaash Foundation", description: "Results and targets from Naqaash Foundation programs since 2020." },
  "get-involved": { component: GetInvolvedPageContent, title: "Get Involved · Naqaash Foundation", description: "Donate, partner, mentor or volunteer with Naqaash Foundation." },
  "contact": { component: ContactPageContent, title: "Contact · Naqaash Foundation", description: "Contact Naqaash Foundation, 112F Model Town, Lahore, Pakistan." },
};
