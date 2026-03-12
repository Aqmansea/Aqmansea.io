import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { socialLinks, xLink } from '@/constants/socialLinks';
const ContactSection = () => {


  const contactInfo = [
    {
      icon: faEnvelope,
      label: 'Email',
      value: 'p4445556684@gmail.com',
      href: 'mailto:p4445556684@gmail.com',
    },
    {
      icon: faPhone,
      label: 'Phone',
      value: '0989-475-297',
      href: 'tel:+886989475297',
    },
    {
      icon: faLocationDot,
      label: 'Location',
      value: '高雄市鳳山區',
      href: '#',
    },
  ];

  // Use centralized social links and include X for this contact section
  const contactSocialLinks = [...socialLinks, xLink];



  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto animate-slide-up">
          <Card className="p-8 shadow-card">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6 text-center">
              聯絡方式
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                      <FontAwesomeIcon icon={item.icon} className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{item.label}</p>
                      <a 
                        href={item.href} 
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        {item.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <div className="flex gap-4">
                {contactSocialLinks.map((social, index) => {
                  const linkProps = social.type === 'external' 
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  
                  return (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:shadow-glow hover:bg-accent hover:text-accent-foreground transition-spring"
                      asChild
                    >
                      <a href={social.href} aria-label={social.label} {...linkProps}>
                        <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

