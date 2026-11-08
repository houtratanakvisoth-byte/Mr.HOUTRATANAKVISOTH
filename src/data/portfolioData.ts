import { Profile, Post, CVData, AboutStats } from '../types';

export const initialProfile: Profile = {
  name: 'Hout Ratanakvisoth',
  initials: 'HR',
  siteTitle: 'Hout Ratanakvisoth',
  tagline: 'Digital Economics, Advanced Mathematics & Web Engineering',
  role: 'Digital Economic Student and Math Educator',
  location: 'Phnom Penh, Cambodia',
  bioShort: 'Second-year Digital Economics student at NUM International University and Advanced Mathematics Educator with a 100% student pass rate on national exams. Combines quantitative rigor with full-stack web development.',
  bioLong: 'Second-year Digital Economics student at NUM International University with an exceptional foundation in mathematical modeling, data analytics, and digital technology. Demonstrates proven expertise as an academic educator in advanced mathematics, achieving a 100% student pass rate on national examinations. Combines quantitative rigor with strong web development capabilities, project leadership, and strategic communication skills. Dedicated to leveraging digital tools and economic analytics to drive impactful solutions across business and educational environments.',
  avatarUrl: '/assets/aistudio/photo_2026-08-30_11-10-13_8d87d413.jpg',
  experienceYears: '2023 – Present',
  email: 'houtratanakvisoth@gmail.com',
  phone: '+855 977499016',
  linkedin: 'mr-soth-cvs.pages.dev',
  github: 'mr-soth-cvs.pages.dev',
};

export const initialAboutStats: AboutStats = {
  yearsShipping: '100%',
  productsBuilt: '3+',
  appsDelivered: '2023',
  customSystems: 'Top 8',
};

export const initialCategories = [
  'Web Development',
  'Digital Economics',
  'Mathematics & Pedagogy',
  'Data Analytics & Python',
  'Problem & Solution',
  'Tips & Tricks',
];

export const initialPosts: Post[] = [
  {
    id: 'post-1',
    slug: 'architecting-haang-restaurant-operating-platform',
    title: 'Architecting Haang (ហាង): Full-Stack Operations & Real-Time Inventory for Local Restaurants',
    excerpt: 'How we designed a centralized web application to streamline daily business workflows, automated menu updates, order tracking, and sales analytics for restaurant owners in Cambodia.',
    category: 'Web Development',
    tags: ['webdevelopment', 'fullstack', 'inventory', 'analytics'],
    date: '2026-10-20',
    readTime: '5 min read',
    views: 1840,
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    content: `Small-to-medium restaurant owners in Cambodia face operational challenges managing paper-based orders, manual menu modifications, and delayed end-of-day revenue reconciliation.

### System Architecture
**Haang (ហាង)** was architected as an intuitive, multi-device web platform tailored specifically for localized restaurant workflows:

1. **Real-Time Inventory Engine**: Automatically decrements raw ingredient quantities as incoming kitchen orders are processed.
2. **Automated Menu Updates**: Dynamic pricing and instant stockout tagging across tablet terminals.
3. **Sales Analytics Dashboard**: Daily revenue breakdowns, peak operating hours, and top-selling culinary items.

\`\`\`javascript
// Inventory transaction validation rule
function processOrderDeduction(orderItems, currentStock) {
  return orderItems.map(item => {
    const stockRef = currentStock[item.ingredientId];
    if (stockRef.quantity < item.requiredAmount) {
      throw new Error(\`Insufficient stock for \${stockRef.name}\`);
    }
    return { ...stockRef, quantity: stockRef.quantity - item.requiredAmount };
  });
}
\`\`\`

By simplifying complex inventory math into an approachable touch interface, local owners reduce stock wastage while gaining clear financial transparency.`,
  },
  {
    id: 'post-2',
    slug: 'achieving-100-percent-pass-rate-bac-ii-mathematics',
    title: 'Advanced Calculus & Probability: How We Achieved a 100% Student Pass Rate in the Bac II Exam',
    excerpt: 'Pedagogical strategies, structured problem-solving frameworks, and 1-on-1 analytical mentorship that guided all our Grade 12 students to national examination victory.',
    category: 'Mathematics & Pedagogy',
    tags: ['mathematics', 'calculus', 'probability', 'pedagogy'],
    date: '2026-09-18',
    readTime: '6 min read',
    views: 2150,
    coverImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80',
    content: `Preparing Grade 12 students for the Cambodian National High School Examination (Bac II) requires more than repetitive drill exercises—it requires conceptual mastery and confidence.

### The Pedagogical Framework
At START UP COMMUNITY, we implemented a structured 4-step framework focusing on calculus, probability, spatial geometry, and algebra:

1. **Deconstruct the Core Theorem**: Break down complex derivatives and integrals into visual geometric representations before algebraic formulas.
2. **Step-by-Step Problem Categorization**: Teach students to classify problem patterns within the first 15 seconds of reading the exam prompt.
3. **Bi-Weekly Analytical Evaluations**: Diagnose individual logic blind spots early and deploy customized 1-on-1 mentorship.
4. **Timed Simulation Exams**: Replicate high-stakes examination room conditions to train emotional composure and time management.

In the 2026 Bac II National Examination, this disciplined methodology delivered a **100% student pass rate**, with top-tier individual scores across calculus and probability.`,
  },
  {
    id: 'post-3',
    slug: 'quantitative-economics-with-python-and-r',
    title: 'Computational Economics with Python & R: Modeling Market Equilibrium and Elasticity',
    excerpt: 'Combining economic theory with quantitative scripting to analyze consumer demand shifts, regression models, and macro indicators.',
    category: 'Digital Economics',
    tags: ['digitaleconomics', 'python', 'statistics', 'modeling'],
    date: '2026-08-30',
    readTime: '4 min read',
    views: 1290,
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    content: `At NUM International University, our Digital Economics focus centers on bridging theoretical market principles with computational algorithms.

Using **Python** (\`numpy\`, \`pandas\`, \`statsmodels\`) and **R**, we model consumer surplus, supply-demand equilibriums, and price elasticity:

\`\`\`python
import numpy as np

def calculate_market_equilibrium(demand_intercept, demand_slope, supply_intercept, supply_slope):
    # Qd = a - bP, Qs = c + dP => P* = (a - c) / (b + d)
    equilibrium_price = (demand_intercept - supply_intercept) / (demand_slope + supply_slope)
    equilibrium_quantity = demand_intercept - (demand_slope * equilibrium_price)
    return equilibrium_price, equilibrium_quantity

price, quantity = calculate_market_equilibrium(120, 2.5, 20, 1.5)
print(f"Equilibrium Price: USD {price:.2f}, Volume: {quantity:.0f} units")
\`\`\`

Computational modeling transforms abstract graphs into actionable forecasting tools for digital commerce.`,
  },
  {
    id: 'post-4',
    slug: 'cambodia-interactive-travel-map-development',
    title: 'Engineering the Cambodia Interactive Travel Map: Geolocation & Dynamic Filtering',
    excerpt: 'Building a responsive, cultural exploration web platform detailing historical sites and regional landmarks across all Cambodian provinces.',
    category: 'Web Development',
    tags: ['webdevelopment', 'geolocation', 'javascript', 'mapping'],
    date: '2026-07-25',
    readTime: '4 min read',
    views: 1470,
    coverImage: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=800&q=80',
    content: `The **Cambodia Interactive Travel Map** was designed to celebrate the rich cultural heritage and tourism potential across Cambodia's 25 provinces.

### Core Technical Features
- **Vector Geo-Mapping**: Interactive SVG coordinate mapping providing instant highlight states upon province hovering.
- **Dynamic Category Filtering**: Seamlessly toggle between UNESCO World Heritage sites, eco-tourism trails, culinary hotspots, and historical temples.
- **Lightweight Mobile UI**: Engineered for seamless performance across varying 4G connection speeds in provincial regions.`,
  },
  {
    id: 'post-5',
    slug: 'real-time-streaming-architecture-pink-messenger',
    title: 'Real-Time Audio, Video & Instant Messaging: Architecture of Pink Messenger',
    excerpt: 'Implementing WebRTC media streams, websocket dispatching, and cross-browser responsive interfaces for low-latency communication.',
    category: 'Web Development',
    tags: ['webrtc', 'chat', 'realtime', 'streaming'],
    date: '2026-06-14',
    readTime: '5 min read',
    views: 1610,
    coverImage: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=800&q=80',
    content: `**Pink Messenger** was built to explore peer-to-peer audio/video streaming alongside persistent text messaging.

Key considerations included:
- Establishing STUN/TURN candidate negotiation for firewall traversal.
- Designing responsive call controls that maintain fluid 60fps animations during active video streams.
- Ensuring graceful fallbacks when client network conditions degrade.`,
  },
  {
    id: 'post-6',
    slug: 'public-speaking-and-debate-in-software-leadership',
    title: 'From Competitive Debate to Engineering Leadership: The Power of Structured Logic',
    excerpt: 'How competing in the National Public Speaking & Debate Championship honed the critical reasoning skills needed for technical problem-solving.',
    category: 'Tips & Tricks',
    tags: ['leadership', 'debate', 'communication', 'problemsolving'],
    date: '2026-05-10',
    readTime: '3 min read',
    views: 950,
    coverImage: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    content: `In 2023, competing as a Top 8 Finalist in the National Public Speaking & Debate Championship among 34 regional teams reinforced that clarity of thought precedes clarity of code.

Whether structuring a rebuttal under a 2-minute time constraint or architecting a software database schema, the underlying discipline remains the same:
1. Identify the fundamental premise.
2. Isolate false assumptions and potential bottlenecks.
3. Formulate a rigorous, defensible, and step-by-step solution.`,
  },
];

export const initialCVData: CVData = {
  personalData: [
    { label: 'Full Name', value: 'Hout Ratanakvisoth' },
    { label: 'Academic Standing', value: 'Second-Year Bachelor of Science in Digital Economics' },
    { label: 'University', value: 'NUM International University, Phnom Penh, Cambodia' },
    { label: 'Location & Residence', value: 'Phnom Penh, Cambodia' },
    { label: 'Electronic Mail', value: 'houtratanakvisoth@gmail.com' },
    { label: 'Telephone Contact', value: '+855 977499016' },
    { label: 'Portfolio & Web Platform', value: 'mr-soth-cvs.pages.dev' },
    { label: 'National Exam Distinction', value: '100% Bac II Student Pass Rate in Advanced Mathematics' },
  ],
  skills: [
    {
      category: 'Programming & Development',
      items: ['Python', 'R', 'HTML5', 'CSS3', 'JavaScript (Basic)', 'Web Applications', 'Responsive UI'],
    },
    {
      category: 'Software & Digital Tools',
      items: ['CapCut Video Suite', 'Microsoft Excel (Advanced Modeling)', 'Microsoft Word & PowerPoint', 'Git / GitHub'],
    },
    {
      category: 'Analytical & Business Rigor',
      items: ['Quantitative Analysis', 'Statistical Modeling', 'Microeconomics & Macroeconomics', 'Sales Strategy', 'Digital Marketing'],
    },
    {
      category: 'Interpersonal & Leadership',
      items: ['Pedagogical Leadership', 'Public Speaking & Debate', 'Teamwork', 'Curriculum Design', 'Structured Problem-Solving'],
    },
  ],
  experiences: [
    {
      period: '2023 – Present',
      role: 'Senior Grade 12 Mathematics Educator',
      company: 'START UP COMMUNITY • Phnom Penh, Cambodia',
      description: 'Design and deliver comprehensive mathematics curricula for Grade 12 students preparing for the Cambodian National High School Examination (Bac II), focusing on calculus, probability, geometry, and algebra. Achieved an outstanding 100% pass rate among all enrolled students in the 2026 Bac II National Examination, with top-tier individual subject scores. Develop original practice exams, problem sets, and interactive learning frameworks. Conduct bi-weekly evaluations and customized 1-on-1 mentorship.',
    },
    {
      period: '2024',
      role: 'Marketing & Commercial Strategy Intern',
      company: 'Spring Corporate Internship Program • Phnom Penh, Cambodia',
      description: 'Executed market analysis, business customer outreach, sales strategy frameworks, and commercial operations reporting.',
    },
  ],
  projects: [
    {
      name: 'Haang (ហាង)',
      title: 'Restaurant Operating Platform • In Active Development',
      link: 'https://mr-soth-cvs.pages.dev',
      description: 'Full-Stack Web Application for Restaurant Operations. Centralized platform designed for small-to-medium restaurant owners in Cambodia to streamline daily business workflows, real-time inventory management, automated menu updates, order tracking, and sales analytics.',
      tech: ['Full-Stack Web', 'Inventory Engine', 'Real-Time Analytics', 'Responsive UI'],
    },
    {
      name: 'Cambodia Interactive Travel Map',
      title: 'Front-End Cultural & Geographic Explorer • Lead Developer (2024)',
      link: 'https://mr-soth-cvs.pages.dev',
      description: 'Interactive web-based geographical platform detailing cultural landmarks, historical sites, and regional highlights across all Cambodian provinces with responsive mapping and dynamic data filtering.',
      tech: ['Web Mapping', 'Geolocation', 'Interactive SVG', 'Dynamic Filtering'],
    },
    {
      name: 'Pink Messenger',
      title: 'Real-Time Chat & Video Call Platform • Project Developer (2024)',
      link: 'https://mr-soth-cvs.pages.dev',
      description: 'Web communication tool incorporating live instant messaging, audio transmission, and interactive video conferencing functionality with cross-browser compatibility and optimized real-time data streaming.',
      tech: ['WebRTC', 'Audio/Video Streaming', 'Instant Messaging', 'Responsive Web'],
    },
  ],
  certificates: [
    {
      year: '2024 – Present',
      title: 'Bachelor of Science in Digital Economics (Year 2)',
      issuer: 'NUM International University • Phnom Penh, Cambodia',
    },
    {
      year: '2022 – 2024',
      title: 'High School Diploma (Bac II) – Grade B (High Distinction in Math, Physics & Logic)',
      issuer: 'Cheasim Sonthormuk High School • Phnom Penh, Cambodia',
    },
    {
      year: '2023',
      title: 'Angkor Mathematics Competition – Official Certificate of Excellence',
      issuer: 'Angkor Mathematics Organization',
    },
    {
      year: '2023',
      title: 'National Public Speaking & Debate Championship – Top 8 Finalist (Out of 34 Teams)',
      issuer: 'National Debate Federation of Cambodia',
    },
    {
      year: '2024',
      title: 'Spring Corporate Internship Certificate (Marketing, Sales & Strategic Operations)',
      issuer: 'Spring Corporate Program',
    },
    {
      year: '2018 – 2023',
      title: 'General English & Secondary Education Certificate',
      issuer: 'Beltie International School • Phnom Penh, Cambodia',
    },
  ],
  languages: [
    { language: 'Khmer', proficiency: 'Native Language' },
    { language: 'English', proficiency: 'Full Professional Working Proficiency' },
  ],
};
