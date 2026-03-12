import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface Article {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishDate: string;
  content: string;
  featured?: boolean;
}

const BlogSection = () => {
  const featuredPost = {
    title: '系統工程師的一天：從巡檢到故障排除',
    excerpt: '分享我在醫院資訊系統維運現場的一天工作流程，包含巡檢、異常處理、備份與與同仁協作的實際經驗。',
    category: '系統維運',
    readTime: '6 分鐘閱讀',
    publishDate: '2025年12月15日',
    featured: true,
    content: `身為醫院資訊系統的系統工程師，每一天的工作都圍繞在「穩定」這兩個字上。從一早登入監控系統、檢查服務狀態，到確認前一天的備份是否成功，任何一個細節出錯，都可能影響臨床端的正常運作。

    通常我的一天會從系統巡檢開始：檢查 Windows Server 2022 的事件檢視器、磁碟空間使用狀況、關鍵服務是否在線，以及排程工作的執行情形。如果發現異常，會先依照既有SOP處理，必要時再跟開發或廠商窗口討論。

    當臨床端回報系統變慢或功能異常時，我會先從網路與伺服器端著手，例如：確認連線狀態、資源使用率（CPU / RAM / IO）、相關服務 Log，再搭配同事的經驗與 GPT 協助，縮小問題範圍。很多時候，文件不完整或版本歷史複雜，這時候能有效整理資訊與問對問題就很重要。

    除了日常維運之外，我也會參與新系統或新模組的建置，包含測試環境的準備、權限設定、簡單的腳本或批次工具撰寫，協助讓部署流程更順。過程中會把重點步驟與踩過的坑記錄下來，變成團隊內部的知識文件。

    對我來說，系統工程師的價值不只是「把系統顧好」，更是在壓力環境下，持續優化流程、降低人工作業風險，讓醫院同仁可以放心把系統交給我們。`
  };

  const posts = [
    {
      title: '醫院資訊系統巡檢流程實務',
      excerpt: '分享我在 Windows Server 與醫院系統巡檢時的重點檢查項目與實際做法。',
      category: '系統維運',
      readTime: '5 分鐘閱讀',
      publishDate: '2025年12月10日',
      content: `在醫院環境中，系統故障往往不只是「服務暫停」，而是會直接影響到臨床作業。因此，規律且有系統的巡檢非常重要。

      我的巡檢流程大致會從以下幾個面向展開：

      1. 事件檢視器：查看是否有重複發生的錯誤或警告，特別是與磁碟、網路、服務相關的事件。
      2. 資源監控：觀察 CPU、記憶體、磁碟 IO、網路流量是否有異常尖峰或長時間滿載情況。
      3. 服務與排程：確認關鍵服務是否在線、排程工作有無失敗記錄，備份與批次工作是否正常完成。
      4. 日誌與應用層：視系統特性檢查應用 Log，留意錯誤訊息或效能警示。

      巡檢過程中，我會將異常與處理方式記錄下來，逐步整理成內部文件，讓團隊成員可以快速對照，也方便之後持續優化巡檢項目。`
    },
    {
      title: '使用 GPT 輔助系統問題排除',
      excerpt: '實際案例分享：如何在文件不足的情況下，利用 GPT 與同事經驗一起定位問題。',
      category: '系統維運',
      readTime: '6 分鐘閱讀',
      publishDate: '2025年12月5日',
      content: `在維運現場常見的一個情境是：「系統歷史久遠、文件不完整、原始開發人員已經不在公司」。這時候，如何快速理解系統行為並找到問題來源，就變成很關鍵的能力。

      我自己的做法通常會結合同事經驗、實際操作觀察，以及 GPT 的輔助：

      1. 先用自己的理解把問題現象描述清楚（發生時間、影響範圍、環境差異）。
      2. 蒐集相關 Log、錯誤碼、事件記錄，整理成有條理的輸入給 GPT，請它協助推測可能原因與檢查方向。
      3. 將 GPT 提出的方向與同事的經驗交叉比對，優先從風險較低、可快速驗證的步驟開始。
      4. 每一步試過的結果都簡單記錄，之後可以回顧哪些方向有效，哪些是誤判。

      GPT 對我來說不是「直接給答案的工具」，比較像是可以一起討論的技術夥伴，幫忙補齊關鍵字、技術背景與可能路線，讓排錯過程更有效率。`
    },
    {
      title: '從裝機工程到系統工程師的轉職歷程',
      excerpt: '分享自己從裝機設備工程師、職訓到系統工程師的轉職心路歷程與學習重點。',
      category: '職涯',
      readTime: '7 分鐘閱讀',
      publishDate: '2025年11月28日',
      content: `在成為系統工程師之前，我曾在不同產業擔任裝機設備工程師，也參加過職訓中心的 Java 跨域培訓課程。這些經歷看起來分散，但其實都累積成今天工作很重要的底子。

      在裝機工作裡，我學到的是現場溝通與動手解決問題的能力：到客戶端安裝機台、排除硬體與環境問題、在壓力下維持冷靜。職訓課程則幫我補上程式語言、資料庫與後端框架的基礎。

      轉到系統工程師之後，我把這兩塊結合起來：一方面理解系統在「機房與網路」這一層的實際限制，另一方面也能看懂簡單的程式碼與 Log，和開發團隊有共同語言。

      如果你也在考慮從非本科或硬體相關工作轉往系統或軟體領域，我會建議：
      - 先選一兩個核心領域打底（例如網路 + 一種程式語言）
      - 找實際專案或 side project 練習，而不是只看書
      - 把每次解決問題的過程記錄下來，久了會變成很有價值的知識庫。`
    },
    {
      title: '維運文件怎麼寫才有用？',
      excerpt: '談談我在實務上整理維運紀錄與技術文件的做法，避免文件變成「寫了也沒人在看」。',
      category: '系統維運',
      readTime: '8 分鐘閱讀',
      publishDate: '2025年11月20日',
      content: `很多團隊都有文件，但遇到問題時大家還是習慣直接問人，代表文件內容常常「找不到、看不懂或不可信」。在維運工作中，要讓文件真的被使用，我自己有幾個原則：

      1. 針對情境寫，而不是只列指令：例如「遇到某某錯誤碼時怎麼處理」，包含前置條件、檢查步驟與風險說明。
      2. 保留實際案例：把真實發生過的 incident 紀錄下來，說明當時的判斷與最後證實的原因。
      3. 持續整理而不是一次寫完：每次處理完問題，就順手補充或修正相關文件。
      4. 放在大家找得到的地方，並在新人訓練時真的帶他們用一次。

      當文件開始能幫大家省時間、降低重複問問題的頻率，團隊就會願意一起維護，久而久之就會形成一套屬於自己團隊的知識系統。`
    },
  ];

  const [filter, setFilter] = useState('全部');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['全部', '系統維運', '職涯'];
  
  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedArticle(null);
  };

  const filteredPosts = filter === '全部'
    ? posts
    : posts.filter(post => post.category === filter);

  return (
    <section id="blog" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
            我的 <span className="text-accent-gradient">部落格</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            記錄我在醫院資訊系統維運、Windows Server 管理，以及轉職系統工程師過程中的實際經驗與學習心得。
          </p>
        </div>

        {/* Featured Post */}
        <Card className="mb-12 overflow-hidden shadow-elegant hover:shadow-glow transition-smooth animate-slide-up cursor-pointer" onClick={() => openArticle(featuredPost)}>
          <div className="p-8 lg:p-12">
            <div className="flex items-center gap-4 mb-4">
              <Badge variant="outline" className="bg-gradient-accent text-accent-foreground">
                精選
              </Badge>
              <Badge variant="secondary">
                {featuredPost.category}
              </Badge>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-4 text-gradient">
              {featuredPost.title}
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {featuredPost.publishDate}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {featuredPost.readTime}
                </div>
              </div>
              
              <Button variant="accent" className="group self-start sm:self-auto">
                閱讀文章
                <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((categoryName) => (
            <Button
              key={categoryName}
              variant={filter === categoryName ? 'accent' : 'minimal'}
              onClick={() => setFilter(categoryName)}
              className="transition-spring"
            >
              {categoryName}
            </Button>
          ))}
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredPosts.map((post, index) => (
            <Card 
              key={index} 
              className="p-6 shadow-card hover:shadow-elegant transition-smooth animate-fade-in group cursor-pointer flex flex-col h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openArticle(post)}
            >
              <div className="mb-4">
                <Badge variant="secondary" className="mb-3">
                  {post.category}
                </Badge>
                <h4 className="text-xl font-serif font-semibold mb-3 group-hover:text-accent transition-smooth">
                  {post.title}
                </h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.publishDate}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                
                <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
            </Card>
          ))}
        </div>

        {/* Article Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-border shadow-xl text-neutral-900 dark:text-neutral-100">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                {selectedArticle?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedArticle && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                  <Badge variant="secondary">{selectedArticle.category}</Badge>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {selectedArticle.publishDate}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {selectedArticle.readTime}
                  </div>
                </div>
                
                <div className="max-w-none space-y-4 leading-relaxed text-neutral-900 dark:text-neutral-100">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-neutral-900 dark:text-neutral-100">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default BlogSection;

