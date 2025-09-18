import Hero from "@/components/Hero";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CareersSection from "@/components/sections/CareersSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section id="home" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <CareersSection />
      <ContactSection />
    </main>
  );
}
