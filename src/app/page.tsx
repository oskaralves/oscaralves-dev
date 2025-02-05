import { AboutSection } from './sections/about-section';
import { ContactSection } from './sections/contact-section';
import { ExperiencesSection } from './sections/experiences-section';
import { FeaturesCardsSection } from './sections/features-cards-section';
import { HomeSection } from './sections/home-section';
import { RecommendationsSection } from './sections/recommendations-section';
import { SkillsSection } from './sections/skills-section';

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
