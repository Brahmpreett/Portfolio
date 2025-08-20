import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import SectionHeader from '@/components/ui/section-header';
import CardComponent from '@/components/ui/card-component';

const socialLinks = [
  { icon: Github, href: 'https://github.com/Brahmpreett', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/brahmpreet-singh-5b2a5029a/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/brahmpreett_645', label: 'Twitter' },
];


const contactInfo = [
  { icon: Mail, label: 'Email', value: 'brahmpreetsarna@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 78377 36168' },
  { icon: MapPin, label: 'Location', value: 'Amritsar, India' },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="py-16">
      <SectionHeader
        title="Get In Touch"
        subtitle="Let's discuss your next project or just say hello"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <CardComponent>
          <h3 className="text-2xl font-bold mb-6 gradient-text-primary">
            Send a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="focus-ring"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="focus-ring"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="focus-ring"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="min-h-[120px] focus-ring"
                required
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-primary text-white hover:scale-105 transition-transform duration-200 focus-ring"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </CardComponent>

        {/* Contact Info & Social */}
        <div className="space-y-8">
          {/* Contact Information */}
          <CardComponent>
            <h3 className="text-2xl font-bold mb-6 gradient-text-secondary">
              Contact Information
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center">
                    <Icon className="w-5 h-5 mr-4 text-gradient-primary-start" />
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardComponent>

          {/* Social Links */}
          <CardComponent>
            <h3 className="text-xl font-bold mb-6">Find Me Online</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-surface-elevated rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200 focus-ring"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gradient-primary-start" />
                  </a>
                );
              })}
            </div>
          </CardComponent>

          {/* Quick Response Promise */}
          <CardComponent gradient>
            <div className="text-center">
              <h4 className="text-lg font-bold mb-2">Quick Response Promise</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to all messages within 24 hours. 
                Looking forward to hearing from you!
              </p>
            </div>
          </CardComponent>
        </div>
      </div>
    </div>
  );
};

export default Contact;