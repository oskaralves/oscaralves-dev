import dynamic from 'next/dynamic';
import { AboutSection } from './sections/about-section';
import { ExperiencesSection } from './sections/experiences-section';
import { FeaturesCardsSection } from './sections/features-cards-section';
import { HomeSection } from './sections/home-section';
import { SkillsSection } from './sections/skills-section';

const RecommendationsSection = dynamic(
  () => import('./sections/recommendations-section')
);
const ContactSection = dynamic(() => import('./sections/contact-section'));

export default function HomePage() {
  return (
    <div className="items-center justify-items-center gap-16">
      <HomeSection />
      <FeaturesCardsSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <RecommendationsSection />
      <ContactSection />
    </div>
  );
}
