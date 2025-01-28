import { AboutSection } from './sections/about';
import { ContactSection } from './sections/contact';
import { ExperiencesSection } from './sections/experiences';
import { FeaturesCardsSection } from './sections/features-cards';
import { HomeSection } from './sections/home';
import { ProjectsSection } from './sections/projects';
import { SkillsSection } from './sections/skills';

export default function HomePage() {
  return (
    <div className="items-center justify-items-center gap-16">
      <HomeSection />
      <FeaturesCardsSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
