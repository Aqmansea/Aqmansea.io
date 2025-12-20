import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code2, Palette, Smartphone, Globe, Users, Briefcase } from 'lucide-react';


const AboutSection = () => {
  const [skillProgress, setSkillProgress] = useState<number[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Frontend (React/Vue)', level: 50, icon: Code2 },
    { name: 'Backend (Node.js/Python)', level: 60, icon: Briefcase },
    { name: 'Windows Server', level: 65, icon: Globe },
    { name: 'Database (MySQL/SQL)', level: 60, icon: Smartphone },
    { name: 'AI Coding (Vibe Coding)', level: 75, icon: Code2 },
    { name: 'System Administration', level: 70, icon: Users },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate skill progress bars
          setTimeout(() => {
            setSkillProgress(skills.map(skill => skill.level));
          }, 300);
        }
      });
    }, observerOptions);

    if (skillsRef.current) skillsObserver.observe(skillsRef.current);

    return () => {
      skillsObserver.disconnect();
    };
  }, []);

  const values = [
    {
      icon: Code2,
      title: '自動化',
      description: '以 AI 輔助快速建立原型，提高工作效率與流程自動化。',
    },
    {
      icon: Users,
      title: '問題解決',
      description: '在文件不足情況下，透過 GPT 與知識傳承快速定位與解決問題。',
    },
    {
      icon: Globe,
      title: '網頁開發',
      description: '具前後端開發經驗，能透過AI輔助完成從設計到部署的全流程。',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            關於 <span className="text-accent-gradient">Zane</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            現任耀瑄科技系統維護工程師，具 Windows Server 2022 與醫院資訊系統維運經驗。
            能以 AI 輔助（Vibe Coding / AI Coding）快速建立原型並完成日常維護與自動化。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Personal Story */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-serif font-semibold mb-6">跨域經歷</h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                大學主修水土保持系。後來在國立臺北科技大學水環境研究中心擔任研究助理
                ，回家鄉後遇上轉職機會，參與職訓局辦理的職訓課程，學習Web前端開發與後端開發。
              </p>
              <p>
                目前在耀瑄科技擔任系統維護工程師，負責醫院系統維運、資料備份、系統建置、例行檢查與故障排除。
                能在文件不足的情況下，透過官方文件或AI輔助與同事知識傳承快速定位問題。
              </p>
              <p>
                前端有 React 作品經驗；後端具 Flask / Spring Boot / Node.js / ASP.NET 入門實作
                與 API 串接經驗。
                持續在 Vibe Coding（AI Coding） 學習與實作。
              </p>
            </div>
          </div>

          {/* Skills */}
          <div ref={skillsRef} className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-serif font-semibold mb-6">語言經驗</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4 text-accent" />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skillProgress[index] || 0} 
                      className="h-2"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>



        {/* Values */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-serif font-semibold mb-8 text-center">核心價值</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index} 
                  className="p-6 text-center shadow-card hover:shadow-elegant transition-smooth animate-scale-hover"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                  <p className="text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

