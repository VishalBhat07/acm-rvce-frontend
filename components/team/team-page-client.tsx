"use client";

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { TeamMember, TeamData } from '@/lib/types/team';
import TeamHeader from '@/components/team/team-header';
import TeamYearSelector from '@/components/team/team-selector';
import TeamCategoryTabs from '@/components/team/tabs';
import TeamMembersGrid from '@/components/team/team-grid';

interface TeamPageClientProps {
  teamMembers: TeamMember[];
  years: string[];
}

export const TeamPageClient: React.FC<TeamPageClientProps> = ({ teamMembers, years }) => {
  const [selectedYear, setSelectedYear] = useState<string>(years[years.length - 1] || "2025");
  const [activeTab, setActiveTab] = useState<"core" | "junior">("core");
  const { theme } = useTheme();
  
  const availableYears = years.length > 0 ? years : ["2025"];
  
  const teamData: TeamData = React.useMemo(() => {
    console.log('TeamPageClient - teamMembers:', teamMembers);
    console.log('TeamPageClient - availableYears:', availableYears);
    
    const data: TeamData = {};
    
    availableYears.forEach(year => {
      data[year] = { core: [], junior: [] };
    });
    
    if (availableYears.length === 0 && selectedYear) {
      data[selectedYear] = { core: [], junior: [] };
    }
    
    // Safely iterate over teamMembers with null check
    if (teamMembers && Array.isArray(teamMembers)) {
      teamMembers.forEach(member => {
        console.log('Processing member:', member);
        const year = member.year || selectedYear;
        const category = member.category || 'core';
        
        console.log('Year:', year, 'Category:', category);
        
        if (!data[year]) {
          data[year] = { core: [], junior: [] };
        }
        
        // Ensure the category exists and is valid
        if (category === 'core' || category === 'junior') {
          data[year][category].push(member);
        } else {
          // Default to core if category is invalid
          console.log('Invalid category, defaulting to core:', category);
          data[year].core.push(member);
        }
      });
    }
    
    console.log('Final data structure:', data);
    
    Object.keys(data).forEach(year => {
      data[year].core.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return a.name.localeCompare(b.name);
      });
      
      data[year].junior.sort((a, b) => {
        if (a.order !== undefined && b.order !== undefined) {
          return a.order - b.order;
        }
        return a.name.localeCompare(b.name);
      });
    });
    
    return data;
  }, [teamMembers, selectedYear, availableYears]);

  return (
    <div className="min-h-screen py-12 pt-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <TeamHeader />
        <TeamYearSelector 
          years={availableYears} 
          selectedYear={selectedYear} 
          setSelectedYear={setSelectedYear} 
        />
        <TeamCategoryTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
        />
        <TeamMembersGrid 
          teamData={teamData} 
          selectedYear={selectedYear} 
          activeTab={activeTab} 
        />
      </div>
    </div>
  );
};
