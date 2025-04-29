"use client";

import React, { useState } from 'react';
import { useTheme } from 'next-themes';
import { teamData } from '@/lib/config/teamData';
import TeamHeader from '@/components/team/TeamHeader';
import TeamYearSelector from '@/components/team/TeamYearSelector';
import TeamCategoryTabs from '@/components/team/TeamCategoryTabs';
import TeamMembersGrid from '@/components/team/TeamMembersGrid';

const TeamPage: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>("2024");
  const [activeTab, setActiveTab] = useState<"core" | "junior">("core");
  const { theme } = useTheme();
  
  const years = Object.keys(teamData).sort();

  return (
    <div className="min-h-screen py-12 pt-20 px-4 sm:px-6 lg:px-8 bg-background text-foreground">
      <div className="max-w-7xl mx-auto">
        <TeamHeader />
        <TeamYearSelector 
          years={years} 
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

export default TeamPage; 