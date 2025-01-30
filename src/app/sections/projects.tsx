import { memo } from 'react';

const ProjectsSectionComponent = () => {
  return (
    <section
      id="projects"
      className="flex min-h-[600px] w-full flex-col items-center justify-center bg-violet-500 p-4 md:h-[calc(100vh/2)] md:min-h-[calc(100vh-68px)] md:flex-row md:p-10"
    >
      <h1 className="text-5xl text-white">projects</h1>
    </section>
  );
};

ProjectsSectionComponent.displayName = 'ProjectsSection';

export const ProjectsSection = memo(ProjectsSectionComponent);
