import dynamic from 'next/dynamic';
import { FeaturesCardsSection } from './sections/features-cards';
import { HomeSection } from './sections/home';

const AboutSection = dynamic(() => import('./sections/about'));
const SkillsSection = dynamic(() => import('./sections/skills'), {});
const ExperiencesSection = dynamic(() => import('./sections/experiences'), {});
const ContactSection = dynamic(() => import('./sections/contact'), {});

export default function HomePage() {
  return (
    <div className="items-center justify-items-center gap-16">
      <HomeSection />
      <FeaturesCardsSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
    </div>
  );
}
