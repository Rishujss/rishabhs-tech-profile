
import React from 'react';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container px-4 md:px-6">
        <h2 className="section-title mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="col-span-1 lg:col-span-7">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <span className="text-primary mr-2">
                    <Briefcase size={24} />
                  </span>
                  Professional Background
                </h3>
                <p className="text-muted-foreground">
                  Rishabh Srivastava is a Software Engineer with hands-on experience building robust, scalable backend systems for financial institutions. He is currently working at Nucleus Software and has a proven track record of reducing bug resolution time and improving system performance.
                </p>
                <p className="text-muted-foreground">
                  With strong expertise in Java, Spring, and Hibernate, Rishabh specializes in developing high-performance applications that meet strict quality standards and business requirements.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <span className="text-primary mr-2">
                    <GraduationCap size={24} />
                  </span>
                  Education
                </h3>
                <div className="space-y-3">
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <h4 className="font-medium">B.Tech in Electronics and Communication Engineering</h4>
                    <p className="text-sm text-muted-foreground">JSS Academy of Technical Education | 7.77 CGPA | 2016 - 2020</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <h4 className="font-medium">12th Standard</h4>
                    <p className="text-sm text-muted-foreground">Saraswati Shishu Mandir Senior Secondary School | 87% | 2014 - 2015</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4 py-1">
                    <h4 className="font-medium">10th Standard</h4>
                    <p className="text-sm text-muted-foreground">Saraswati Shishu Mandir Senior Secondary School | 9.0 CGPA | 2012 - 2013</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold flex items-center">
                  <span className="text-primary mr-2">
                    <Heart size={24} />
                  </span>
                  Interests
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="tech-tag">Chess</span>
                  <span className="tech-tag">Writing</span>
                  <span className="tech-tag">Reading Books</span>
                  <span className="tech-tag">Cooking</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 lg:col-span-5">
            <div className="bg-background p-6 rounded-lg shadow-lg border border-border">
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">01</div>
                  <div>
                    <h4 className="font-medium">Backend Expert</h4>
                    <p className="text-sm text-muted-foreground">Specialized in Java, Spring Boot, and Hibernate</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">02</div>
                  <div>
                    <h4 className="font-medium">Performance Optimizer</h4>
                    <p className="text-sm text-muted-foreground">Reduced query execution time by 80%</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">03</div>
                  <div>
                    <h4 className="font-medium">Bug Solver</h4>
                    <p className="text-sm text-muted-foreground">Maintained zero daily customer bug count</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">04</div>
                  <div>
                    <h4 className="font-medium">Award Winner</h4>
                    <p className="text-sm text-muted-foreground">Multiple Spot Awards for code quality and timely delivery</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm">Years of Experience</span>
                    <span className="font-semibold">5+</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
