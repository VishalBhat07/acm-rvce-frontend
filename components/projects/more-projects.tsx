import { sanityFetch } from '@/sanity/lib/fetch'
import { moreProjectsQuery } from '@/sanity/lib/queries'
import { ProjectCard } from './project-card'
import type { ProjectsQueryResult  } from '@/sanity.types'



export default async function MoreProjects({ skip, limit }: { skip: string; limit: number }) {
  const projects = await sanityFetch({
    query: moreProjectsQuery,
    params: { skip, limit },
    stega: false,
  })

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {projects?.map((project: ProjectsQueryResult[0]) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  )
}
