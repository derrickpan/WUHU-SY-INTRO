import { 
  Anchor, 
  Hammer, 
  FlaskConical, 
  Cpu, 
  Network, 
  Wallet, 
  Map, 
  Zap, 
  Globe, 
  Ship
} from 'lucide-react';
import { ReportSection, StatItem } from './types';

export const HERO_DATA = {
  title: "百年船厂创新跃迁",
  subtitle: "何以从长江驶向深蓝，于海事展上定义未来",
  intro: "在2025年中国国际海事展的聚光灯下，拥有逾百年历史的芜湖造船厂，以“河豚蔚蓝”系列及船电一体化PACK换电技术，展示了一场从“硬核技术”到“生态融合”再到“价值定义”的系统性革命。",
};

export const REPORT_SECTIONS: ReportSection[] = [
  {
    id: 'foundation',
    category: "01 / 根脉筑基",
    headline: "硬核何以炼成",
    subheadline: "在基础工艺与前沿科研埋下伏笔",
    colorTheme: "blue",
    items: [
      {
        title: "工匠精神淬炼新生",
        description: "举办“泛长三角芜船杯”技能竞赛，吸引百位焊接人才。评选42位“金牌焊将”，打造高技能人才孵化器。",
        icon: Hammer
      },
      {
        title: "科研攻坚冰级焊接",
        description: "与哈尔滨工程大学共建“冰级焊接实验室”，突破极地装备焊接工艺难题，培育特种焊接人才。",
        icon: FlaskConical
      },
      {
        title: "产研闭环缩短周期",
        description: "启用“深远海装备试验研究中心”，构建“基础研究-技术开发-试验验证”完整链条，实现家门口精准验证。",
        icon: Cpu
      }
    ]
  },
  {
    id: 'ecosystem',
    category: "02 / 生态融合",
    headline: "链条何以重塑",
    subheadline: "超越边界，构筑产业共同体",
    colorTheme: "teal",
    items: [
      {
        title: "向上游穿透",
        description: "建立永磁电机生产基地，实现核心动力系统本土化率大幅提升，从源头提升整船核心竞争力。",
        icon: Anchor
      },
      {
        title: "向服务延伸",
        description: "成立星融融资租赁公司，提供“制造+金融”一体化解决方案，解决重资产痛点，滋养实体制造。",
        icon: Wallet
      },
      {
        title: "向区域拓展",
        description: "牵头成立安徽省船舶工业协会，共建海工绿色科技产业园，实现芜湖研发优势与威海港口优势的强强联合。",
        icon: Map
      }
    ]
  },
  {
    id: 'future',
    category: "03 / 方案定义",
    headline: "价值何以超越",
    subheadline: "从交付产品到交付未来图景",
    colorTheme: "indigo",
    items: [
      {
        title: "水上高铁",
        description: "“河豚蔚蓝”系列内河运输船，依托船电共享换电体系，实现30分钟快速换电，被喻为“水运高铁”。",
        icon: Zap
      },
      {
        title: "交能融合",
        description: "提出船岸电储智能互动系统，船舶靠港可反向为电网供电，实现航运与能源网络的双向赋能。",
        icon: Network
      },
      {
        title: "水陆空天一体化",
        description: "集成无人艇、无人机、智能感知与卫星通信，勾勒出立体化、智能化的水上安全新图景。",
        icon: Globe
      }
    ]
  }
];

export const STATS_DATA: StatItem[] = [
  { label: "金牌焊将", value: 42, suffix: "位", description: "选拔出的行业顶尖高技能人才" },
  { label: "换电时间", value: 30, suffix: "分钟", description: "“河豚蔚蓝”系列实现快速补能" },
  { label: "高端船型", value: 5, suffix: "款", description: "海事展上发布的创新船型" },
];