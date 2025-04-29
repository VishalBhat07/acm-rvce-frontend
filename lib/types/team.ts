export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

export interface TeamYear {
  core: TeamMember[];
  junior: TeamMember[];
}

export interface TeamData {
  [year: string]: TeamYear;
} 