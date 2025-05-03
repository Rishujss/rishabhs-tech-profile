import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Building scalable and efficient enterprise applications.";
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);
  return <section id="home" className="min-h-screen flex flex-col justify-center pt-20 pb-12 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="space-y-2 fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                Hi, I'm <span className="text-primary">Rishabh Srivastava</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium fade-in-delay-1">Software Engineer</h2>
            </div>
            
            <div className="h-8 fade-in-delay-2">
              <p className="text-muted-foreground text-lg md:text-xl typing-animation">
                {typedText}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4 fade-in-delay-3">
              <a href="https://github.com/Rishujss" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-primary text-foreground rounded-full p-3 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/rishabhsrivastava13/" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-primary text-foreground rounded-full p-3 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://leetcode.com/u/Rishu_13/" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-primary text-foreground rounded-full p-3 transition-colors">
                <ExternalLink size={20} />
                <span className="sr-only">LeetCode</span>
              </a>
              <a href="https://www.hackerrank.com/profile/rishabhsrivasta9" target="_blank" rel="noopener noreferrer" className="bg-secondary hover:bg-primary text-foreground rounded-full p-3 transition-colors">
                <ExternalLink size={20} />
                <span className="sr-only">HackerRank</span>
              </a>
            </div>
            
            <div className="pt-6 fade-in-delay-4">
              <Button onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({
                  behavior: 'smooth'
                });
              }
            }} className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-md transition-colors text-lg">
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end fade-in">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img alt="Rishabh Srivastava" className="w-full h-full object-cover profile-image" src="/lovable-uploads/f6d26b35-79b4-43c0-9e50-f579bbaa3b93.png" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-card rounded-full flex items-center justify-center border-4 border-background">
                <span className="text-2xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;
