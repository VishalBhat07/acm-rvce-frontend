'use client'

import { ProjectCard } from "@/components/projects/project-card";
import type { ProjectsQueryResult } from "@/sanity.types";

interface ProjectListProps {
  projects: ProjectsQueryResult;
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
}
