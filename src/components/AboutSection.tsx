
import React from 'react';
import { Briefcase, GraduationCap, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="container px-4 md:px-6">
        <h2 className="section-title mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="col-span-1 lg:col-span-7">
            <Card className="h-full bg-background shadow-lg border border-border">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center">
                  <span className="text-primary mr-2">
                    <Briefcase size={24} />
                  </span>
                  Professional Background
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-card/50 p-5 rounded-lg shadow-sm border border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    Software Engineer with <span className="text-primary font-medium">3 years</span> of hands-on experience building robust, scalable backend systems for financial institutions. I am currently working at <span className="text-primary font-medium">Nucleus Software</span> and have a proven track record of reducing bug resolution time and improving system performance.
                  </p>
                </div>
                
                <div className="bg-card/50 p-5 rounded-lg shadow-sm border border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    With strong expertise in <span className="text-primary font-medium">Java, Spring, and Hibernate</span>, I specialize in developing high-performance applications that meet strict quality standards and business requirements. I've successfully reduced database query execution time by <span className="text-primary font-medium">80%</span> through effective optimization techniques.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <span className="text-primary mr-2">
                      <Heart size={22} />
                    </span>
                    Interests & Hobbies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="tech-tag">Chess</span>
                    <span className="tech-tag">Writing</span>
                    <span className="tech-tag">Reading Books</span>
                    <span className="tech-tag">Cooking</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="col-span-1 lg:col-span-5">
            <Card className="bg-background shadow-lg border border-border h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-primary mr-2">
                    <GraduationCap size={24} />
                  </span>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-card/50 p-4 transition-all hover:shadow-md border border-border/50">
                  <h4 className="font-medium text-primary">B.Tech in Electronics and Communication Engineering</h4>
                  <p className="text-sm text-muted-foreground">JSS Academy of Technical Education | 7.77 CGPA | 2016 - 2020</p>
                </div>
                
                <div className="rounded-lg bg-card/50 p-4 transition-all hover:shadow-md border border-border/50">
                  <h4 className="font-medium text-primary">12th Standard</h4>
                  <p className="text-sm text-muted-foreground">Saraswati Shishu Mandir Senior Secondary School | 87% | 2014 - 2015</p>
                </div>
                
                <div className="rounded-lg bg-card/50 p-4 transition-all hover:shadow-md border border-border/50">
                  <h4 className="font-medium text-primary">10th Standard</h4>
                  <p className="text-sm text-muted-foreground">Saraswati Shishu Mandir Senior Secondary School | 9.0 CGPA | 2012 - 2013</p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6 bg-background shadow-lg border border-border">
              <CardHeader>
                <CardTitle>Professional Summary</CardTitle>
                <Separator className="my-2" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col space-y-2 p-4 rounded-lg bg-card/50 hover:shadow-md transition-all border border-border/50">
                  <h4 className="font-medium text-primary">Backend Expert</h4>
                  <p className="text-sm text-muted-foreground">Specialized in Java, Spring Boot, and Hibernate</p>
                </div>
                
                <div className="flex flex-col space-y-2 p-4 rounded-lg bg-card/50 hover:shadow-md transition-all border border-border/50">
                  <h4 className="font-medium text-primary">Performance Optimizer</h4>
                  <p className="text-sm text-muted-foreground">Reduced query execution time by 80%</p>
                </div>
                
                <div className="flex flex-col space-y-2 p-4 rounded-lg bg-card/50 hover:shadow-md transition-all border border-border/50">
                  <h4 className="font-medium text-primary">Bug Solver</h4>
                  <p className="text-sm text-muted-foreground">Maintained zero daily customer bug count</p>
                </div>
                
                <div className="flex flex-col space-y-2 p-4 rounded-lg bg-card/50 hover:shadow-md transition-all border border-border/50">
                  <h4 className="font-medium text-primary">Award Winner</h4>
                  <p className="text-sm text-muted-foreground">Multiple Spot Awards for code quality and timely delivery</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
