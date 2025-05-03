
import React from 'react';
import { Briefcase, GraduationCap, Heart, Award, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container px-4 md:px-6">
        <h2 className="section-title mb-12 text-center">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Bio Section */}
          <div className="col-span-1 lg:col-span-7">
            <Card className="h-full bg-background/70 backdrop-blur-sm shadow-xl border-2 border-primary/20 overflow-hidden">
              <CardHeader className="pb-2 bg-gradient-to-r from-primary/10 to-transparent">
                <CardTitle className="flex items-center text-2xl text-primary">
                  <span className="bg-primary/10 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </span>
                  Professional Journey
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6 pt-6">
                <div className="bg-card/30 p-6 rounded-xl shadow-inner border border-primary/10">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Star className="h-5 w-5 text-primary mr-2" />
                    About Me
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Software Engineer with <span className="text-primary font-medium">3 years</span> of hands-on experience 
                    building robust, scalable backend systems for financial institutions. Currently delivering 
                    high-impact solutions at <span className="text-primary font-medium">Nucleus Software</span> 
                    with proven success in reducing bug resolution time and optimizing system performance.
                  </p>
                </div>
                
                <div className="bg-card/30 p-6 rounded-xl shadow-inner border border-primary/10">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Award className="h-5 w-5 text-primary mr-2" />
                    Technical Expertise
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    With strong expertise in <span className="text-primary font-medium">Java, Spring, and Hibernate</span>, 
                    I specialize in developing high-performance applications that meet strict quality standards and business requirements. 
                    I've successfully reduced database query execution time by 
                    <span className="text-primary font-medium"> 80%</span> through effective optimization techniques.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    Interests & Hobbies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["Chess", "Writing", "Reading Books", "Cooking"].map((hobby) => (
                      <Badge key={hobby} variant="outline" className="bg-primary/5 hover:bg-primary/20 px-3 py-1 text-sm transition-all">
                        {hobby}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Side Content */}
          <div className="col-span-1 lg:col-span-5 space-y-6">
            {/* Education Card */}
            <Card className="bg-background/70 backdrop-blur-sm shadow-xl border-2 border-accent/20">
              <CardHeader className="pb-2 bg-gradient-to-r from-accent/10 to-transparent">
                <CardTitle className="flex items-center text-2xl text-accent">
                  <span className="bg-accent/10 p-2 rounded-full mr-3">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </span>
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-5">
                {[
                  {
                    title: "B.Tech in Electronics and Communication Engineering",
                    institution: "JSS Academy of Technical Education",
                    grade: "7.77 CGPA",
                    period: "2016 - 2020"
                  },
                  {
                    title: "12th Standard",
                    institution: "Saraswati Shishu Mandir Senior Secondary School",
                    grade: "87%",
                    period: "2014 - 2015"
                  },
                  {
                    title: "10th Standard",
                    institution: "Saraswati Shishu Mandir Senior Secondary School",
                    grade: "9.0 CGPA",
                    period: "2012 - 2013"
                  }
                ].map((education, index) => (
                  <div 
                    key={index}
                    className="rounded-lg bg-card/30 p-5 transition-all hover:shadow-md hover:translate-y-[-2px] border border-accent/10"
                  >
                    <h4 className="font-semibold text-accent">{education.title}</h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      {education.institution} | {education.grade} | {education.period}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Professional Summary Card */}
            <Card className="bg-background/70 backdrop-blur-sm shadow-xl border-2 border-primary/20">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-transparent">
                <CardTitle className="text-2xl text-primary">Professional Highlights</CardTitle>
                <Separator className="my-2 bg-primary/20" />
              </CardHeader>
              <CardContent className="space-y-3 pt-3">
                {[
                  {
                    title: "Backend Expert",
                    description: "Specialized in Java, Spring Boot, and Hibernate"
                  },
                  {
                    title: "Performance Optimizer",
                    description: "Reduced query execution time by 80%"
                  },
                  {
                    title: "Bug Solver",
                    description: "Maintained zero daily customer bug count"
                  },
                  {
                    title: "Award Winner",
                    description: "Multiple Spot Awards for code quality and timely delivery"
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col space-y-1 p-4 rounded-lg bg-card/30 hover:bg-card/50 hover:shadow-md transition-all border border-primary/10"
                  >
                    <h4 className="font-medium text-primary">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
