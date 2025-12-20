import company1 from '@/assets/company-1.webp';
import company2 from '@/assets/company-2.webp';
import airbnbLogo from '@/assets/airbnb.webp';
import nusLogo from '@/assets/nus.webp';

// Typing for experience items
export interface ExperienceItem {
  title: string;
  companyName: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

// Experience timeline data
export const experiences: ExperienceItem[] = [
  {
    title: '系統工程師',
    companyName: '耀瑄科技股份有限公司',
    icon: company1,
    iconBg: '',
    date: '2025/4 – 至今',
    points: [
      '進行系統巡檢、維護與版本更新，確保服務穩定',
      '處理系統故障與異常排除，快速恢復服務',
      '執行問題分析與改善，追蹤並提升系統可靠度',
      '協助系統部署、環境建置與整合測試',
      '監控系統效能與資源使用，維持最佳運作狀態',
      '提供技術支援並協作 PM／業務處理客戶需求',
      '撰寫維運紀錄與技術文件，建立可追溯的問題管理'
    ],
  },
  {
    title: '設備工程師',
    companyName: '日月光半導體製造股份有限公司',
    icon: company2,
    iconBg: '',
    date: '2025/3 – 2025/4',
    points: [
      '定期維護、保養生產設備機台',
      '生產機台故障排除及異常查修',
      '設備問題改善及異常分析與追蹤處理',
      '維持生產機台設備的正常運轉'
    ],
  },
  {
    title: '裝機設備工程師',
    companyName: '特瑞科技有限公司',
    icon: airbnbLogo,
    iconBg: '',
    date: '2024/12 – 2025/2',
    points: [
      '提供客戶處安裝機台',
      '檢修維護及保養機台設備'
    ],
  },
  {
    title: '職訓Java跨域培訓生',
    companyName: '資展國際',
    icon: nusLogo,
    iconBg: '',
    date: '2024/8',
    points: [
      '前端 Javascript/html/css/Vue基礎。',
      '資料庫 MSSQL 基礎',
      '後端 Java基礎/Spring Boot 入門實作',
    ],
  }
];

