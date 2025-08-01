export interface TeamMember {
  _id?: string;
  id?: number;
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
  github?: string;
  year?: string;
  category?: 'core' | 'junior';
  order?: number;
}

export interface TeamYear {
  core: TeamMember[];
  junior: TeamMember[];
}

export interface TeamData {
  [year: string]: TeamYear;
}

export interface TeamMembersQueryResult extends Array<TeamMember> {}

export interface TeamYearsQueryResult extends Array<{ year: string }> {} 