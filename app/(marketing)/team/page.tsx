import { sanityFetch } from '@/sanity/lib/fetch'
import { teamMembersQuery, teamYearsQuery } from '@/sanity/lib/queries'
import { TeamMembersQueryResult, TeamYearsQueryResult } from '@/lib/types/team'
import { TeamPageClient } from '@/components/team/team-page-client'

export const revalidate = 600

export default async function TeamPage() {
  try {
    const [teamMembers, teamYearsData] = await Promise.all([
      sanityFetch({
        query: teamMembersQuery,
        stega: false,
      }) as Promise<TeamMembersQueryResult>,
      sanityFetch({
        query: teamYearsQuery,
        stega: false,
      }) as Promise<TeamYearsQueryResult>
    ])

    const years = teamYearsData && teamYearsData.length > 0 
      ? [...new Set(teamYearsData.map(item => item.year).filter(Boolean))].sort()
      : [];

    return <TeamPageClient teamMembers={teamMembers || []} years={years} />
  } catch (error) {
    console.error('Error fetching team data:', error);
    // Return with empty data on error
    return <TeamPageClient teamMembers={[]} years={[]} />
  }
} 