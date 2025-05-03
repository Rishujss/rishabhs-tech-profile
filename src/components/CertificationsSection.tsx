
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      id: 1,
      title: 'Data Structures & Algorithms',
      provider: 'Udemy & Codedamn',
      year: '2021',
      link: '#'
    },
    {
      id: 2,
      title: 'E-Yantra',
      provider: 'IIT Bombay',
      year: '2020',
      link: '#'
    },
    {
      id: 3,
      title: 'Computer System Security',
      provider: 'IIT Kanpur',
      year: '2019',
      link: '#'
    },
    {
      id: 4,
      title: 'Course on Computer Concepts',
      provider: 'NIELIT',
      year: '2018',
      link: '#'
    }
  ];

  return (
    <section id="certifications" className="py-20">
      <div className="container px-4 md:px-6">
        <h2 className="section-title mb-12 text-center">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-card border border-border rounded-lg overflow-hidden card-hover">
              <div className="p-1 bg-gradient-to-r from-primary to-accent">
                <div className="bg-card p-6 h-full">
                  <div className="flex justify-between items-start">
                    <Award className="text-primary" size={28} />
                    <span className="text-sm text-muted-foreground">{cert.year}</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mt-4 mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{cert.provider}</p>
                  
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline text-sm"
                  >
                    View Certificate
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Continuously learning and improving skills through professional courses and certifications
          </p>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
