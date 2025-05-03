
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Database, LineChart, Shield, Clock } from 'lucide-react';

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "Database Optimization",
      icon: <Database className="text-primary" size={32} />,
      description: "Reduced database query execution time by 80% through effective query restructuring and Hibernate optimization techniques.",
      details: "Applied advanced query optimization techniques, database indexing strategies, and Hibernate tuning to significantly improve performance in a high-load, transaction-intensive environment. Implemented connection pooling and caching mechanisms to maximize resource utilization."
    },
    {
      id: 2,
      title: "Performance Enhancement",
      icon: <LineChart className="text-primary" size={32} />,
      description: "Implemented multithreaded components and managed transactions using Java and Spring, ensuring data consistency.",
      details: "Designed and developed high-performance concurrent processing systems using Java's multithreading capabilities and Spring's transaction management. Created thread pools, implemented producer-consumer patterns, and utilized concurrent data structures to maximize throughput while maintaining data integrity."
    },
    {
      id: 3,
      title: "Quality Assurance",
      icon: <Shield className="text-primary" size={32} />,
      description: "Maintained zero daily customer bug count and reduced bug resolution time by 90%.",
      details: "Established comprehensive test coverage with unit tests, integration tests, and end-to-end tests. Implemented automated testing pipelines and code quality metrics. Created detailed debugging procedures and documentation to expedite issue resolution."
    },
    {
      id: 4,
      title: "Timely Delivery",
      icon: <Clock className="text-primary" size={32} />,
      description: "Received multiple Spot Awards for high code quality and timely delivery of features.",
      details: "Consistently delivered complex features ahead of schedule while maintaining high code quality standards. Utilized agile development methodologies, effective task prioritization, and continuous integration practices to optimize development workflows."
    }
  ];
  
  return (
    <section id="portfolio" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="section-title mb-12 text-center">Portfolio</h2>
        
        <div className="mb-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-2xl font-semibold mb-3">Finnone-Neo</h3>
            <p className="text-muted-foreground mb-4">
              Worked on Finnone-Neo, a banking product used for loan management by top financial institutions. Designed and implemented new functionalities based on customer requirements and RBI regulatory guidelines.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {projects.map((project) => (
                <Card 
                  key={project.id}
                  className="card-hover cursor-pointer bg-background"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-3 bg-secondary rounded-full">
                        {project.icon}
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-2xl font-semibold mb-3">Key Accomplishments</h3>
          
          <ul className="space-y-3 mt-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Developed and optimized high-performance backend modules using Java, Spring, and Hibernate</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Leveraged design patterns, efficient data structures, and ORM tuning techniques</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Improved concurrency handling and optimized performance in high-throughput enterprise applications</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Debugged complex backend and frontend issues, improving software stability and reliability</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Assisted in customer upgrades and migration processes, ensuring seamless transitions</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Project Details Modal */}
      {selectedProject !== null && (
        <Dialog open={selectedProject !== null} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>{projects[selectedProject - 1].title}</DialogTitle>
            </DialogHeader>
            <div className="flex justify-center my-6">
              <div className="p-4 bg-secondary rounded-full">
                {projects[selectedProject - 1].icon}
              </div>
            </div>
            <DialogDescription className="text-foreground/80 text-base">
              {projects[selectedProject - 1].details}
            </DialogDescription>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default PortfolioSection;
