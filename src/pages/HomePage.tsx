import { SEOHead } from '../components/SEOHead';
import { CookieConsent } from '../components/CookieConsent';
import { Header } from '../layouts/Header';
import { Footer } from '../layouts/Footer';
import { HeroSection } from '../layouts/sections/HeroSection';
import { TrustBarSection } from '../layouts/sections/TrustBarSection';
import { ServicesSection } from '../layouts/sections/ServicesSection';
import { HowItWorksSection } from '../layouts/sections/HowItWorksSection';
import { ShowcaseSection } from '../layouts/sections/ShowcaseSection';
import { PricingSection } from '../layouts/sections/PricingSection';
import { TestimonialsSection } from '../layouts/sections/TestimonialsSection';
import { BlogSection } from '../layouts/sections/BlogSection';
import { FAQSection } from '../layouts/sections/FAQSection';
import { AboutSection } from '../layouts/sections/AboutSection';
import { WhyChooseUsSection } from '../layouts/sections/WhyChooseUsSection';
import { ContactSection } from '../layouts/sections/ContactSection';
import { FinalCTASection } from '../layouts/sections/FinalCTASection';
import { homePageMetadata, homePageBreadcrumbs, localBusinessData } from '../config/seo';

export const HomePage = () => {
  return (
    <>
      <SEOHead
        metadata={homePageMetadata}
        breadcrumbs={homePageBreadcrumbs}
        localBusiness={localBusinessData}
      />
      <Header />
      <main>
        <HeroSection />
        <TrustBarSection />
        <ServicesSection />
        <HowItWorksSection />
        <ShowcaseSection />
        <PricingSection />
        <TestimonialsSection />
        <AboutSection />
        <WhyChooseUsSection />
        <BlogSection />
        <FAQSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
};
