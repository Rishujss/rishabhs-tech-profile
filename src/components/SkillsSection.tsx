
import React from 'react';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillsByCategory = {
    'Languages': ['Java', 'SQL (Oracle)'],
    'Frameworks': ['Spring', 'Hibernate'],
    'APIs': ['REST', 'SOAP'],
    'Core Skills': ['DSA', 'Design Patterns', 'Multithreading'],
    'Version Control': ['Git', 'SVN'],
    'Libraries': ['Redisson'],
    'Tools': ['Jira', 'WinSCP', 'IntelliJ'],
    'Concepts': ['OOPS']
  };

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container px-4 md:px-6">
        <h2 className="section-title mb-12 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsByCategory).map(([category, skills]) => (
            <div key={category} className="bg-background rounded-lg p-6 shadow-lg border border-border card-hover">
              <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="text-sm px-3 py-1 transition-colors hover:bg-primary hover:text-white"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
