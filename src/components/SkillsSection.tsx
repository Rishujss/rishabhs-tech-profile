
import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'Java', level: 90, category: 'Language' },
    { name: 'SQL (Oracle)', level: 85, category: 'Database' },
    { name: 'Spring', level: 85, category: 'Framework' },
    { name: 'Hibernate', level: 80, category: 'ORM' },
    { name: 'REST', level: 75, category: 'API' },
    { name: 'SOAP', level: 70, category: 'API' },
    { name: 'DSA', level: 80, category: 'Core' },
    { name: 'Git', level: 75, category: 'Version Control' },
    { name: 'SVN', level: 70, category: 'Version Control' },
    { name: 'Design Patterns', level: 85, category: 'Core' },
    { name: 'Multithreading', level: 80, category: 'Core' },
    { name: 'Redisson', level: 70, category: 'Library' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 bg-card">
      <div className="container px-4 md:px-6">
        <h2 className="section-title mb-12 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
            
            <div className="space-y-6">
              {skills.slice(0, 6).map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.category}</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Additional Skills</h3>
            
            <div className="space-y-6">
              {skills.slice(6).map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.category}</span>
                  </div>
                  <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%`, animationDelay: `${(index + 6) * 0.1}s` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-center">Skills by Category</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <div key={index} className="mb-6 md:mb-0">
                <div className="bg-background p-4 rounded-lg border border-border">
                  <h4 className="text-lg font-medium mb-3 text-primary">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.filter(skill => skill.category === category).map((skill, skillIndex) => (
                      <span key={skillIndex} className="tech-tag">{skill.name}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
