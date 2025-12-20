import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';

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
    title: '設計無障礙介面：2025 年最佳實踐',
    excerpt: '探索打造包容性、無障礙數位產品的關鍵原則和實用技巧，讓每位用戶都能享受愉悅的體驗。',
    category: '設計',
    readTime: '7 分鐘閱讀',
    publishDate: '2025年12月15日',
    featured: true,
    content: `在當今數位化的世界中，無障礙設計已不再是選項，而是必需品。一個真正優秀的產品應該能夠為所有用戶提供平等的使用體驗，無論他們的能力如何。

    本文將深入探討無障礙設計的核心原則，包括視覺、聽覺和認知無障礙的考量。我們將分享實用的設計模式和最佳實踐，幫助您打造更加包容的數位產品。

    從色彩對比度到鍵盤導航，從螢幕閱讀器支援到語義化 HTML，每個細節都至關重要。讓我們一起學習如何創建真正為每個人設計的介面。

    無障礙設計不僅是技術要求，更是一種設計哲學。當我們考慮到所有用戶的需求時，我們實際上是在創造更好的產品體驗。`
  };

  const posts = [
    {
      title: '現代網頁設計中的微互動藝術',
      excerpt: '微妙的動畫和回饋如何顯著提升用戶體驗和參與度。',
      category: '設計',
      readTime: '5 分鐘閱讀',
      publishDate: '2025年12月10日',
      content: `微互動是現代網頁設計中不可或缺的元素。它們不僅提供視覺回饋，還能引導用戶完成操作，增強整體使用體驗。

      從按鈕懸停效果到載入動畫，從表單驗證到成功提示，每個微互動都應該有其存在的意義。好的微互動應該是不引人注目但卻能有效傳達信息的。

      在設計微互動時，我們需要考慮動畫的時機、持續時間和緩動函數。過度使用動畫可能會分散用戶注意力，而恰到好處的動畫則能讓介面更加生動有趣。

      本文將分享一些優秀的微互動設計案例，以及如何在自己的專案中實現這些效果。`
    },
    {
      title: '創建一致的設計系統',
      excerpt: '建立可擴展設計系統的技巧，賦能團隊並確保品牌一致性。',
      category: '設計',
      readTime: '6 分鐘閱讀',
      publishDate: '2025年12月5日',
      content: `設計系統是現代產品開發的基石。一個好的設計系統不僅能提高開發效率，還能確保產品的一致性和可維護性。

      建立設計系統需要考慮多個層面：從基礎的顏色、字體、間距，到複雜的組件和模式。每個元素都應該有明確的規範和使用指南。

      在本文中，我們將探討如何從零開始建立一個設計系統，包括如何組織代碼、如何編寫文檔，以及如何讓團隊成員有效使用這個系統。

      一個成功的設計系統應該是活的、不斷演進的。它需要隨著產品和團隊的成長而調整和優化。`
    },
    {
      title: '行動優先設計：超越響應式',
      excerpt: '為什麼行動優先思維對現代網頁應用至關重要，以及如何有效實施。',
      category: '設計',
      readTime: '7 分鐘閱讀',
      publishDate: '2025年11月28日',
      content: `行動優先設計不僅僅是讓網站在手機上能正常顯示，它是一種從行動設備開始思考的設計哲學。

      在行動優先的設計過程中，我們首先考慮小螢幕的限制和優勢，然後逐步擴展到更大的螢幕。這種方法迫使我們專注於最重要的內容和功能。

      本文將深入探討行動優先設計的核心原則，包括觸控友好的介面設計、性能優化，以及如何在小螢幕上創造出色的用戶體驗。

      我們還將分享一些實用的技巧和工具，幫助您在設計過程中始終保持行動優先的思維。`
    },
    {
      title: '性能優化策略',
      excerpt: '提升網頁應用性能和用戶體驗的實證技巧。',
      category: '效能',
      readTime: '9 分鐘閱讀',
      publishDate: '2025年11月20日',
      content: `性能優化是現代網頁開發中不可忽視的重要環節。一個快速載入的網站不僅能提供更好的用戶體驗，還能提高轉換率和搜尋引擎排名。

      在本文中，我們將探討多種性能優化策略，包括代碼分割、懶加載、圖片優化、快取策略等。每個策略都有其適用場景和實施方法。

      我們還將介紹一些實用的工具和技術，幫助您識別性能瓶頸並進行針對性優化。從前端到後端，從靜態資源到動態內容，我們將全面覆蓋。

      記住，性能優化是一個持續的過程。隨著技術的發展和用戶需求的變化，我們需要不斷調整和優化我們的策略。`
    },
  ];

  const [filter, setFilter] = useState('全部');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['全部', '開發', '設計', '效能', '職涯'];
  
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
            分享來自開發和設計世界的知識、經驗與見解。讓我們一起學習和成長。
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

        {/* Coming Soon */}
        <Card className="p-8 lg:p-12 text-center shadow-card bg-gradient-primary text-white animate-fade-in">
          <div className="max-w-2xl mx-auto">
            <BookOpen className="h-12 w-12 mx-auto mb-6 opacity-80 text-white" />
            <h3 className="text-2xl lg:text-3xl font-serif font-bold mb-4 text-white">
              即將推出
            </h3>
            <p className="text-lg opacity-90 text-white">
              更多關於設計、開發和創意工作流程的文章即將推出。
              敬請期待更多新鮮見解和實用技巧！
            </p>
          </div>
        </Card>

        {/* Article Modal */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif font-bold mb-4">
                {selectedArticle?.title}
              </DialogTitle>
            </DialogHeader>
            
            {selectedArticle && (
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                
                <div className="prose prose-lg max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-foreground leading-relaxed">
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

