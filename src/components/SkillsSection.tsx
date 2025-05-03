
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const SkillsSection = () => {
  const skills = [
    'Java', 
    'SQL (Oracle)', 
    'Spring', 
    'Hibernate', 
    'REST', 
    'SOAP', 
    'DSA', 
    'Design Patterns', 
    'Multithreading', 
    'Git', 
    'SVN', 
    'Redisson', 
    'Jira', 
    'WinSCP', 
    'IntelliJ', 
    'OOPS'
  ];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container px-4 md:px-6">
        <h2 className="section-title mb-12 text-center">Technical Skills</h2>
        
        <Card className="bg-background border-border shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-base px-4 py-2 transition-colors hover:bg-primary hover:text-white"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;
