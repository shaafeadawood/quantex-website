import HeroNew from '@/components/HeroNew';
import AboutSectionNew from '@/components/sections/AboutSectionNew';
import ServicesSectionNew from '@/components/sections/ServicesSectionNew';
import CaseStudiesSectionNew from '@/components/sections/CaseStudiesSectionNew';
import TestimonialsSectionNew from '@/components/sections/TestimonialsSectionNew';
import CareersSectionNew from '@/components/sections/CareersSectionNew';
import ContactSectionNew from '@/components/sections/ContactSectionNew';
import { SectionSeparator } from '@/components/ScrollProvider';

export default function Home() {
  return (
    <main className="overflow-x-hidden scroll-smooth">
      <section id="home">
        <HeroNew />
      </section>
      
      <AboutSectionNew />
      
      <SectionSeparator 
        fromColor="from-gray-50 dark:from-gray-900" 
        toColor="to-white dark:to-gray-950" 
      />
      
      <ServicesSectionNew />
      
      <SectionSeparator 
        fromColor="from-white dark:from-gray-950" 
        toColor="to-gray-50 dark:to-gray-900" 
      />
      
      <CaseStudiesSectionNew />
      
      <SectionSeparator 
        fromColor="from-gray-50 dark:from-gray-900" 
        toColor="to-white dark:to-gray-950" 
      />
      
      <TestimonialsSectionNew />
      
      <SectionSeparator 
        fromColor="from-white dark:from-gray-950" 
        toColor="to-gray-50 dark:to-gray-900" 
      />
      
      <CareersSectionNew />
      
      <SectionSeparator 
        fromColor="from-gray-50 dark:from-gray-900" 
        toColor="to-gray-900 dark:to-gray-950" 
      />
      
      <ContactSectionNew />
    </main>
  );
}
