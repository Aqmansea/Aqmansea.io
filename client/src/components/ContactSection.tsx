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
      value: 'exentric0421@gmail.com',
      href: 'mailto:exentric0421@gmail.com',
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
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            讓我們 <span className="text-accent-gradient">保持聯絡</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            有任何想法或想詢問一下嗎？我很樂意與您溝通。讓我們一起討論如何實現您的想法。
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
            
            {/* Left Column - Availability */}
            <div className="order-2 lg:order-1">
              <Card className="p-8 shadow-card bg-gradient-subtle h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">靈感激發</h3>
                  <Badge variant="outline" className="bg-success-soft text-success border-success">
                    IDEA
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  我目前可以Vibe coding。不論是前端開發、後端開發或系統維運，我都樂意了解您的需求，給我你的創意與法想。
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>回覆時間：</strong> 24 小時內</p>
                  <p><strong>偏好項目：</strong> 前端開發、系統維運、全端開發</p>
                  <p><strong>合作風格：</strong> 實現你的想法</p>
                </div>
              </Card>
            </div>

            {/* Right Column - Contact Details and Social Links */}
            <div className="space-y-8 order-1 lg:order-2">
              
              {/* Contact Details */}
              <Card className="p-8 shadow-card">
                <h3 className="text-2xl font-serif font-semibold mb-6">聯絡我</h3>
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
              </Card>

              {/* Social Links */}
              <Card className="p-8 shadow-card">
                <h3 className="text-xl font-semibold mb-6">Follow Me</h3>
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
              </Card>

            </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <Card className="p-8 lg:p-12 bg-gradient-primary text-white shadow-elegant">
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4 text-white">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto text-white">
              Every great project starts with a conversation. Let's discuss your vision 
              and explore how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" className="text-white">
                Schedule a Call
              </Button>
              <Button variant="elegant" size="lg" className="text-white">
                View Pricing
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

