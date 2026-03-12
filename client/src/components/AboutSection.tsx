import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code2, Palette, Smartphone, Globe, Users, Briefcase } from 'lucide-react';


const AboutSection = () => {
  const [skillProgress, setSkillProgress] = useState<number[]>([]);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Windows Server / AD', level: 65, icon: Globe },
    { name: '醫院資訊系統維運', level: 60, icon: Briefcase },
    { name: 'Python / Java / C#（入門）', level: 30, icon: Smartphone },
    { name: 'AI 輔助開發（Vibe Coding）', level: 70, icon: Code2 },
    { name: 'System Administration', level: 60, icon: Users },
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
            現任耀瑄科技系統維護工程師，主要負責 Windows Server 2022、醫院資訊系統維運與日常巡檢、備份與故障排除。
            在程式開發部分，目前以 AI 輔助（Vibe Coding / AI Coding）為主，透過實作小工具與練習專案持續累積經驗。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* Personal Story */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-serif font-semibold mb-6">我的轉職歷程</h3>
            <div className="space-y-6 text-muted-foreground">
              <p>
                我畢業於國立屏東科技大學水土保持系，求學過程中培養了系統化思考與問題分析能力。
                畢業後曾在工程顧問公司與研究單位擔任專案副工程師與研究助理，參與政府專案與系統測試相關工作，
                也在這段時間累積了資料整理、技術文件撰寫與跨部門協作的經驗。
              </p>
              <p>
                為了強化資訊技術能力，我參與了勞動部勞動力發展署的 JAVA 跨域培訓課程，系統性學習後端開發、資料庫與網頁技術，
                透過課程專案與實作訓練，建立了進入資訊系統領域所需的基礎能力，也更加確立自己往系統工程與維運方向發展的目標。
              </p>
              <p>
                目前在耀瑄科技擔任系統維護工程師，負責醫療院所資訊系統維運與技術支援，包含系統部署、日常維護、系統監控、備份與異常排除。
                在文件不完整或歷史背景複雜的情況下，我會結合同事經驗、官方文件與 GPT / Vibe Coding 的協助，整理出可重複使用的解決方案與維運紀錄。
              </p>
              <p>
                在前後端開發上目前仍屬入門階段，主要透過 Vibe Coding（AI Coding）完成練習型專案與小工具，
                在實作中累積對 React 以及後端技術（如 Flask / Spring Boot / Node.js / ASP.NET）的理解，
                並將這些學習逐步帶回到日常維運、自動化腳本與流程優化的工作上。
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

