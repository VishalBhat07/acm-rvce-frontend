'use client'

import Link from "next/link"
import Image from "next/image"
import type { ProjectsQueryResult } from "@/sanity.types"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface ProjectCardProps {
  project: ProjectsQueryResult[0];
}

export function ProjectCard({ project }: ProjectCardProps) {
  const displayTag = project.tags && project.tags[0];

  if (!project.slug || !project.imageUrl) {
    return null;
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/projects/${project.slug}`} className="block group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={`Image for ${project.title || 'Project'}`}
            fill 
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {displayTag && (
            <Badge 
              variant="secondary" 
              className="absolute bottom-3 right-3 bg-background/70 backdrop-blur-sm text-foreground"
            >
              {displayTag}
            </Badge>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col justify-between bg-background p-4 sm:p-6">
        <div>
          <Link href={`/projects/${project.slug}`} className="block">
            <h3 className="mt-1 text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{project.date ? formatDate(project.date) : ''} by {project.author?.name || 'Anonymous'}</span>
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            Read post
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
