import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    let isValid = true;
    const errors = {
      name: '',
      email: '',
      message: ''
    };
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        
        setIsSubmitting(false);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container px-4 md:px-6">
        <h2 className="section-title mb-12 text-center">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:rishabhsrivastava492@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    rishabhsrivastava492@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+918318915003" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 8318915003
                  </a>
                </div>
              </div>
              
              <div className="pt-8">
                <h4 className="font-medium mb-3">Connect on Social</h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/Rishujss" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-background hover:bg-primary text-foreground hover:text-white rounded-full p-3 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/rishabhsrivastava13/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-background hover:bg-primary text-foreground hover:text-white rounded-full p-3 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://leetcode.com/u/Rishu_13/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-background hover:bg-primary text-foreground hover:text-white rounded-full p-3 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="sr-only">LeetCode</span>
                  </a>
                  <a 
                    href="https://www.hackerrank.com/profile/rishabhsrivasta9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-background hover:bg-primary text-foreground hover:text-white rounded-full p-3 transition-colors"
                  >
                    <ExternalLink size={20} />
                    <span className="sr-only">HackerRank</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={formErrors.name ? "border-destructive" : ""}
                />
                {formErrors.name && <p className="text-destructive text-sm mt-1">{formErrors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className={formErrors.email ? "border-destructive" : ""}
                />
                {formErrors.email && <p className="text-destructive text-sm mt-1">{formErrors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  className={formErrors.message ? "border-destructive" : ""}
                />
                {formErrors.message && <p className="text-destructive text-sm mt-1">{formErrors.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
