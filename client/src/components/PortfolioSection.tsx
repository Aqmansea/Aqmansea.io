import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Github } from 'lucide-react';
import projectWebDev from '@/assets/project-web-dev.webp';
import projectMobileApp from '@/assets/project-mobile-app.webp';
import projectBranding from '@/assets/project-branding.webp';

const PortfolioSection = () => {
  const [filter, setFilter] = useState('all');
  const assetBase = (import.meta.env.BASE_URL || '').replace(/\/?$/, '/');
  const buildPublicUrl = (path: string) => `${assetBase}${path.replace(/^\/+/, '')}`;

  const projects = [
    {
      id: 2,
      title: '成績計算器',
      description: '單頁成績計算工具，可輸入多筆分數即時計算平均、最高 / 最低值並輸出評語，練習原生前端資料處理能力。',
      image: projectWebDev,
      category: 'web',
      technologies: ['HTML5', 'CSS3', 'Font Awesome', 'Responsive'],
      liveUrl: buildPublicUrl('projects/grade/index.html'),
      githubUrl: 'https://github.com/Aqmansea/Aqmansea.github.io/tree/main/Grade',
      results: {
        functionality: '加總 / 平均 / 統計',
        responsive: '行動版優化',
        interactive: '輸入即刻更新'
      }
    },
    {
      id: 3,
      title: '貪吃蛇遊戲',
      description: '以 Vanilla JS 製作的經典貪吃蛇遊戲，涵蓋 Canvas 繪圖、鍵盤事件處理與狀態管理，專注在遊戲邏輯與操作手感。',
      image: buildPublicUrl('projects/snake/snake.png'),
      category: 'web',
      technologies: ['HTML5', 'Canvas', 'Game Logic', 'Event Handling'],
      liveUrl: buildPublicUrl('projects/snake/index.html'),
      githubUrl: 'https://github.com/Aqmansea/Aqmansea.github.io/tree/main/snake',
      results: {
        games: '貪吃蛇核心玩法',
        learning: '展示遊戲邏輯',
        interactive: '鍵盤互動體驗'
      }
    },
    {
      id: 4,
      title: 'Canvas 彈跳球遊戲',
      description: '運用 Canvas API 與基本物理運動，實作彈跳碰撞動畫並提供速度、重力與色彩調整，專注在畫面更新效能。',
      image: buildPublicUrl('projects/ball/ball.png'),
      category: 'web',
      technologies: ['HTML5', 'Canvas'],
      liveUrl: buildPublicUrl('projects/ball/index.html'),
      githubUrl: '#',
      results: {
        interactive: '即時動畫',
        physics: '基礎物理模擬',
        learning: 'Canvas 更新技巧'
      }
    },
    {
      id: 5,
      title: '猜數字小遊戲',
      description: '透過亂數產生秘密數字與高低提示，讓玩家在有限次數內猜中，強化流程控制、狀態管理與提示體驗。',
      image: buildPublicUrl('projects/guess/guess.png'),
      category: 'web',
      technologies: ['HTML5', 'DOM'],
      liveUrl: buildPublicUrl('projects/guess/index.html'),
      githubUrl: '#',
      results: {
        logic: '強化推理流程',
        feedback: '即時提示訊息',
        usability: '介面直覺易懂'
      }
    },
    {
      id: 5,
      title: 'Web Run Code（jQuery）',
      description: '線上 HTML / CSS / JS 即時編輯器，透過 jQuery 動態注入程式並立即預覽結果，方便 Demo 或教學快速驗證想法。',
      image: buildPublicUrl('projects/web-run-code/Web run.png'),
      category: 'web',
      technologies: ['jQuery', 'HTML5', 'CSS3'],
      liveUrl: buildPublicUrl('projects/web-run-code/index.html'),
      githubUrl: '#',
      results: {
        utility: '快速測試環境',
        integration: '即貼即跑',
        speed: '立即預覽結果'
      }
    },
  ];

  const categories = [
    { id: 'all', label: '全部作品' },
    { id: 'web', label: '網頁開發' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            我的 <span className="text-accent-gradient">作品</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            精選練習與 Side Project，展示我在 HTML/CSS、Bootstrap 以及互動式體驗上的實作成果。
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={filter === category.id ? 'accent' : 'minimal'}
                onClick={() => setFilter(category.id)}
                className="transition-spring"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 gap-12">
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row">
                
                {/* Project Image */}
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 lg:h-full object-cover transition-smooth group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-smooth" />
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col h-full">
                  <div className="mb-4">
                    <Badge variant="outline" className="mb-4 bg-gradient-accent text-accent-foreground">
                      {project.category === 'web' ? '網頁開發' : 
                       project.category === 'api' ? 'API 開發' :
                       project.category === 'fullstack' ? '全端開發' :
                       project.category === 'game' ? '遊戲開發' :
                       project.category === 'automation' ? '自動化' : '其他'}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">使用技術</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">重點亮點</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(project.results).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-muted rounded-lg">
                          <div className="font-semibold text-accent">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <div className="flex gap-4 mt-auto">
                      <Button variant="accent" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4 mr-2" />
                          查看演示
                        </a>
                      </Button>
                      <Button variant="minimal" className="flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          檢視原始碼
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            想進一步了解這些作品或合作方式嗎？歡迎與我聊聊！
          </p>
          <Button 
            variant="hero" 
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            開始對話
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
