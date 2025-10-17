export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Work',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Mantu Kumar',
    position: 'Director at LearnThose Institute',
    img: 'assets/ld.png',
    review:
      'Ashish transformed our traditional coaching institute into a modern digital platform. His implementation of AI-generated timetables and comprehensive content management system exceeded our expectations. The platform has significantly improved our student engagement and administrative efficiency.',
    tags: ['Next.js', 'AI Integration', 'CMS', 'Ed-Tech']
  },
  {
    id: 2,
    name: 'Mobile Phone Repair Specialist Team',
    position: 'Owner of Sydney CBD Mobile Repairs',
    img: 'assets/sydcbd.jpg',
    review:
      'Working with Ashish was a game-changer for our mobile repair business. He developed a seamless online booking system that increased our customer base by 40%. The website perfectly showcases our services and pricing, making it easier for customers to find and book our services.',
    tags: ['React', 'Booking System', 'Business Website', 'UI/UX']
  },
  {
    id: 3,
    name: 'Abhishek Kumar',
    position: 'CEO at Into Two (Ekah Retail)',
    img: 'assets/er.png',
    review:
      'Ashish delivered an exceptional e-commerce platform that perfectly aligned with our business needs. His technical expertise and attention to detail helped us create a robust online presence. The platform has significantly improved our sales and customer experience.',
    tags: ['E-Commerce', 'Full Stack', 'Payment Integration', 'Scalable']
  },
  {
    id: 4,
    name: 'Sarah Williams',
    position: 'Tech Lead at EtherSquad',
    img: 'assets/review4.png',
    review:
      'As a collaborator on multiple projects, Ashish consistently demonstrates strong problem-solving abilities and technical expertise. His work on our platforms has been instrumental in delivering high-quality solutions that meet both user needs and business objectives.',
    tags: ['Team Collaboration', 'MERN Stack', 'Problem Solving', 'Quality Code']
  },
];

export const myProjects = [

    {
    title: 'NIT Patna Intranet - College Management System',
    desc: 'A comprehensive web-based college management system built with Next.js, designed to streamline educational institution operations. Currently serving 800+ faculty members and 10,000+ students at NIT Patna with real-time deployment on internal network.',
    subdesc: 'Advanced role-based access control system with Super Admin, Department Admin, Faculty, and Student roles. Features cryptography-based document forgery protection and comprehensive report generation system.',
    
    // Links Section
    liveDemo: '', // Live demo URL (optional)
    github: '', // GitHub repository URL (optional)
    documentation: '', // Documentation URL (optional)
    presentation: '', // Presentation/slides URL (optional)
    note: 'Access restricted to NIT Patna internal network (intranet.nitp.ac.in). Source code is private.',
    
    // Media Section
    images: [
      'https://i.postimg.cc/g245YFDz/Screenshot-2025-10-18-004443.png',
'https://i.postimg.cc/Sxm3FNWJ/Screenshot-2025-10-18-004511.png',
'https://i.postimg.cc/9QcK5FGM/Screenshot-2025-10-18-004525.png',
'https://i.postimg.cc/YCtZKq1p/Screenshot-2025-10-18-004535.png',
'https://i.postimg.cc/L8mwK6zS/Screenshot-2025-10-18-004552.png',
'https://i.postimg.cc/0y9FR2pq/Screenshot-2025-10-18-004622.png',
'https://i.postimg.cc/W1sCLb0Q/Screenshot-2025-10-18-004628.png',
'https://i.postimg.cc/8zT9QPLY/Screenshot-2025-10-18-004633.png',
'https://i.postimg.cc/X7fmzyy0/Screenshot-2025-10-18-004642.png',
'https://i.postimg.cc/MK7NFjfC/Screenshot-2025-10-18-004704.png',
'https://i.postimg.cc/hPL657Qw/Screenshot-2025-10-18-004714.png',
'https://i.postimg.cc/sDYqNZGT/Screenshot-2025-10-18-004724.png',
'https://i.postimg.cc/15G2jNVF/Screenshot-2025-10-18-004728.png',
'https://i.postimg.cc/yYmtbS3S/Screenshot-2025-10-18-004740.png',
'https://i.postimg.cc/m2fKjSkS/Screenshot-2025-10-18-004749.png',
'https://i.postimg.cc/7Y8j9Nhg/Screenshot-2025-10-18-004754.png',
'https://i.postimg.cc/zXZ47kv3/Screenshot-2025-10-18-004858.png',
'https://i.postimg.cc/CLT9745Z/Screenshot-2025-10-18-004905.png',
'https://i.postimg.cc/dtPg693h/Screenshot-2025-10-18-004918.png',
'https://i.postimg.cc/wT8n2kMM/Screenshot-2025-10-18-004924.png',
'https://i.postimg.cc/pVngKSWW/Screenshot-2025-10-18-004938.png',
'https://i.postimg.cc/3rnn4Cpx/Screenshot-2025-10-18-010335.png'

      // Main video/image for carousel
      // Add more images as needed
    ],
    thumbnail: 'https://i.postimg.cc/g245YFDz/Screenshot-2025-10-18-004443.png', // Card thumbnail image
    logo: '/assets/nitp.jpg', // Project logo
    
    // Styling for logo
    logoStyle: {
      backgroundColor: '#1a1a2e',
      border: '0.2px solid #16213e',
      boxShadow: '0px 0px 60px 0px #0f3460',
    },
    
    // Technologies used
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.jpg',
      },
      {
        id: 2,
        name: 'NextAuth.js',
        path: '/assets/next.jpg',
      },
      {
        id: 3,
        name: 'MySQL',
        path: '/assets/mysql.png',
      },
      {
        id: 4,
        name: 'Tailwind CSS',
        path: '/assets/tailwindcss.png',
      },
    ],
    
    // Additional project details (optional)
    category: 'Enterprise Web Application / Ed-Tech', // Project category
    duration: 'Ongoing since Aug 2023', // Project duration
    teamSize: 'NIT Patna Web Team', // Team size
    role: 'Lead Web Developer', // Your role in the project
    status: 'In Production', // Project status
    featured: true, // Whether to feature this project
    
    // Achievement/Recognition (optional)
    achievements: [
      'Serving 800+ faculty members in real-time',
      'Managing 10,000+ student records',
      'Successfully deployed on institutional network',
      'Enhanced institutional workflow efficiency'
    ],
    
    // Key features (optional)
    features: [
      'Role-Based Access Control (Super Admin, Department Admin, Faculty, Students)',
      'Student & Faculty Management System',
      'Course Administration & Material Distribution',
      'Attendance Tracking & Assessment System',
      'Cryptography-based document forgery protection',
      'Comprehensive report generation with hash-based verification',
      'Academic Records Management',
      'Department-wise Administration'
    ],
  },
    {
    title: 'File Management System - S3-like Local Storage',
    desc: 'A robust file management system built with Next.js, providing a local S3-like storage solution with an admin dashboard for managing users, warehouses, and files. Currently deployed at NIT Patna Intranet, handling 2000+ requests/sec with daily bandwidth exceeding 2TB.',
    subdesc: 'Enterprise-grade file storage system serving 10,000+ active users with secure API key management, time-limited signed URLs for downloads, and role-based access control. Features warehouse-based file organization and comprehensive admin controls.',
    
    // Links Section
    liveDemo: '', // Live demo URL (optional)
    github: 'https://github.com/ashishkr375/file-management-system', // GitHub repository URL (optional)
    documentation: '', // Documentation URL (optional)
    presentation: '', // Presentation/slides URL (optional)
    
    // Media Section
    images: [
'https://i.postimg.cc/HL0LWtnd/Screenshot-2025-10-18-010636.png',
'https://i.postimg.cc/cJ7J1cCS/Screenshot-2025-10-18-010702.png',
'https://i.postimg.cc/5t5t9myM/Screenshot-2025-10-18-010708.png',
'https://i.postimg.cc/VN9NsF6D/Screenshot-2025-10-18-010716.png',
'https://i.postimg.cc/MG0GZYT3/Screenshot-2025-10-18-010729.png',
'https://i.postimg.cc/0NGN5CQt/Screenshot-2025-10-18-010757.png',
'https://i.postimg.cc/5t5t9m0s/Screenshot-2025-10-18-010805.png',
'https://i.postimg.cc/pdMTtS2f/Screenshot-2025-10-18-011154.png',

      // Add more images as needed
    ],
    thumbnail: 'https://i.postimg.cc/HL0LWtnd/Screenshot-2025-10-18-010636.png', // Card thumbnail image
    logo: '/assets/project-logo1.png', // Project logo
    
    // Styling for logo
    logoStyle: {
      backgroundColor: '#0f172a',
      border: '0.2px solid #1e293b',
      boxShadow: '0px 0px 60px 0px #334155',
    },
    
    // Technologies used
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.jpg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/ts.jpg',
      },
      {
        id: 3,
        name: 'Tailwind CSS',
        path: '/assets/tailwindcss.png',
      },
      {
        id: 4,
        name: 'JWT',
        path: '/assets/js.jpg',
      },
    ],
    
    // Additional project details (optional)
    category: 'Enterprise Storage Solution / Backend System', // Project category
    duration: 'Ongoing', // Project duration
    teamSize: 'Solo Developer', // Team size
    role: 'Full Stack Developer', // Your role in the project
    status: 'In Production', // Project status
    featured: true, // Whether to feature this project
    
    // Achievement/Recognition (optional)
    achievements: [
      'Handling 2000+ requests per second in production',
      'Managing 2TB+ daily data bandwidth',
      'Serving 10,000+ active users at NIT Patna',
      'Successfully deployed enterprise-grade storage system'
    ],
    
    // Key features (optional)
    features: [
      'JWT-based secure user authentication',
      'Admin dashboard for system management',
      'Warehouse-based file organization',
      'Signed URLs with time-limited access (TLE)',
      'Protected API keys for programmatic access',
      'Role-based access control (Superadmin, Admin, User)',
      'Local S3-like storage architecture',
      'User and file management system'
    ],
  },
  {
    title: 'Multi-Channel E-Commerce Fulfillment Hub',
    desc: 'A comprehensive full-stack platform designed to manage multiple e-commerce stores (Shopify, WooCommerce, Amazon) with integrated inventory, order, and shipment processes. Currently integrated with Shopify API, with planned expansion for MCF API and multi-platform support.',
    subdesc: 'Achieved Top 12 Finalist position among 12,000+ teams in National E-Commerce Hackathon 2024. Implemented automated tasks and centralized management system.',
    
    // Links Section
    liveDemo: 'https://mcf-sambhav.vercel.app/mcfstatus', // Live demo URL (optional)
    github: 'https://github.com/ashishkr375/mcf-project', // GitHub repository URL (optional)
    documentation: '', // Documentation URL (optional)
    presentation: '', // Presentation/slides URL (optional)
    
    // Media Section
    images: [
      'https://i.postimg.cc/wMhqrGgj/image.png', // Main video/image for carousel
      'https://i.postimg.cc/9FmHVMBb/image.png',
      'https://i.postimg.cc/hGx5VWr4/image.png' // Additional screenshots (optional)

      // Add more images as needed
    ],
    thumbnail: 'https://i.postimg.cc/wMhqrGgj/image.png', // Card thumbnail image
    logo: '/assets/project-logo1.png', // Project logo
    
    // Styling for logo
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    
    // Technologies used
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/node.jpg',
      },
      {
        id: 3,
        name: 'Express.js',
        path: '/assets/express.jpg',
      },
      {
        id: 4,
        name: 'Shopify API',
        path: '/assets/aws.jpg',
      },
    ],
    
    // Additional project details (optional)
    category: 'Full Stack Web Application', // Project category
    duration: '72 Hours', // Project duration
    teamSize: '2 members', // Team size
    role: 'Lead Developer', // Your role in the project
    status: 'Completed', // Project status: 'Completed', 'In Progress', 'Paused'
    featured: true, // Whether to feature this project
    
    // Achievement/Recognition (optional)
    achievements: [
      'Top 12 Finalist among 12,000+ teams ( National Finalist )',
      'Amazon Sambhav National E-Commerce Hackathon 2024',
      'Best Innovation Award'
    ],
    
    // Key features (optional)
    features: [
      'Multi-platform integration',
      'Real-time inventory management',
      'Automated order processing',
      'Advanced analytics dashboard'
    ],
  },
  {
    title: 'KoinX - Crypto Tracking Platform',
    desc: 'A comprehensive cryptocurrency tracking platform built with Next.js and TypeScript. Integrated real-time data from CoinGecko APIs and TradingView charts to provide live crypto prices, trends, and market analysis.',
    subdesc: 'Features include real-time price tracking in USD/INR, trending coins display, advanced TradingView charts integration, and responsive design following Figma specifications.',
    
    // Links Section
    liveDemo: 'https://koinx-sooty.vercel.app/bitcoin', // Live demo URL (optional)
    github: '', // GitHub repository URL (optional)
    documentation: '', // Documentation URL (optional)
    presentation: '', // Presentation/slides URL (optional)
    
    // Media Section
    images: [
      'https://i.postimg.cc/q7PXXNRV/image.png',
      'https://i.postimg.cc/DyFNVwTd/Screenshot-2025-10-18-003955.png',
      'https://i.postimg.cc/yYBGq8Hh/Screenshot-2025-10-18-004001.png',
      'https://i.postimg.cc/QNcznWRQ/Screenshot-2025-10-18-004010.png', // Main video/image for carousel
      // Add more images as needed
    ],
    thumbnail: 'https://i.postimg.cc/q7PXXNRV/image.png', // Card thumbnail image
    logo: '/assets/project-logo5.png', // Project logo
    
    // Styling for logo
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    
    // Technologies used
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/next.jpg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/ts.jpg',
      },
      {
        id: 3,
        name: 'TradingView',
        path: '/assets/tv.jpg',
      },
      {
        id: 4,
        name: 'CoinGecko API',
        path: '/assets/cg.jpg',
      },
    ],
    
    // Additional project details (optional)
    category: 'Frontend Web Application', // Project category
    duration: '10 days', // Project duration
    teamSize: '', // Team size
    role: 'Frontend Developer', // Your role in the project
    status: 'Completed', // Project status
    featured: true, // Whether to feature this project
    
    // Achievement/Recognition (optional)
    achievements: [],
    
    // Key features (optional)
    features: [
      'Real-time crypto price tracking',
      'TradingView charts integration',
      'Multi-currency support (USD/INR)',
      'Responsive design'
    ],
  },
  {
    title: 'Dark Pattern Detection Extension',
    desc: 'A sophisticated browser extension that detects dark patterns on websites in real-time. As Lead Developer, successfully trained a machine learning model with over 3,000 instances and incorporated iterative user feedback, improving detection accuracy by 40%.',
    subdesc: 'Grand Finalist at DPBH 2023, presented at IIT BHU. The extension utilizes artificial intelligence to detect patterns and provides real-time feedback to users.',
    
    // Links Section
    liveDemo: '', // Live demo URL (optional)
    github: 'https://github.com/ashishkr375/SecureCartel-Extension1', // GitHub repository URL (optional)
    documentation: '', // Documentation URL (optional)
    presentation: '', // Presentation/slides URL (optional)
    
    // Media Section
    images: [
      'https://i.postimg.cc/0jbwTxr0/image.png', // Main video/image for carousel
      // Add more images as needed
    ],
    thumbnail: 'https://i.postimg.cc/0jbwTxr0/image.png', // Card thumbnail image
    logo: '/assets/project-logo2.png', // Project logo
    
    // Styling for logo
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    
    // Technologies used
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/js.jpg',
      },
      {
        id: 2,
        name: 'Python',
        path: '/assets/python.jpg',
      },
      {
        id: 3,
        name: 'Machine Learning',
        path: '/assets/ml.jpg',
      },
      {
        id: 4,
        name: 'AI',
        path: '/assets/ai.jpg',
      },
    ],
    
    // Additional project details (optional)
    category: 'Browser Extension / AI/ML', // Project category
    duration: '', // Project duration
    teamSize: '', // Team size
    role: 'Lead Developer', // Your role in the project
    status: 'Completed', // Project status
    featured: true, // Whether to feature this project
    
    // Achievement/Recognition (optional)
    achievements: [
      'Grand Finalist at DPBH 2023',
      'Presented at IIT BHU',
      '40% improvement in detection accuracy'
    ],
    
    // Key features (optional)
    features: [
      'Real-time dark pattern detection',
      'Machine learning model with 3000+ instances',
      'User feedback integration',
      'Browser extension compatibility'
    ],
  },
  {
    title: 'GovChain - Blockchain Governance Platform',
    desc: 'A blockchain-powered platform enhancing transparency, efficiency, and trust in governance processes. Secured 2nd Runner Up position and 1st place in Offline Team category at ByteVerse 2024.',
    subdesc: 'Implemented full-stack development with secure user interactions and enabled citizen participation in governance activities using blockchain technology.',
    
    // Links Section
    liveDemo: '', // Live demo URL (optional)
    github: 'https://github.com/ashishkr375/', // GitHub repository URL (optional)
    documentation: '', // Documentation URL (optional)
    presentation: '', // Presentation/slides URL (optional)
    
    // Media Section
    images: [
      'https://i.postimg.cc/FRqbpGx9/image.png', // Main video/image for carousel
      // Add more images as needed
    ],
    thumbnail: 'https://i.postimg.cc/FRqbpGx9/image.png', // Card thumbnail image
    logo: '/assets/project-logo3.png', // Project logo
    
    // Styling for logo
    logoStyle: {
      backgroundColor: '#60f5a1',
      background: 'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    
    // Technologies used
    tags: [
      {
        id: 1,
        name: 'Solidity',
        path: '/assets/Solidity.webp',
      },
      {
        id: 2,
        name: 'MERN Stack',
        path: '/assets/mern.jpg',
      },
      {
        id: 3,
        name: 'Web3.js',
        path: '/assets/web3.jpg',
      },
      {
        id: 4,
        name: 'Polygon',
        path: '/assets/polygon.jpg',
      },
    ],
    
    // Additional project details (optional)
    category: 'Blockchain / Full Stack', // Project category
    duration: '24 hours', // Project duration
    teamSize: '3', // Team size
    role: 'Full Stack Developer', // Your role in the project
    status: 'Completed', // Project status
    featured: true, // Whether to feature this project
    
    // Achievement/Recognition (optional)
    achievements: [
      '2nd Runner Up at ByteVerse 2024',
      '1st place in Offline Team category',
    ],
    
    // Key features (optional)
    features: [
      'Blockchain-powered governance',
      'Citizen participation system',
      'Transparent voting mechanism',
      'Secure user interactions'
    ],
  },

  {
    title: 'CodeNotes by Team EtherSquad',
    desc: 'A comprehensive coding note-taking application built using the MERN stack. As a Full Stack Developer, implemented advanced features resulting in a 30% reduction in data retrieval time and 25% increase in user satisfaction.',
    subdesc: 'Features include an efficient tagging system and advanced search functionality, optimized for handling growing databases of coding notes.',
    
    // Links Section
    liveDemo: '', // Live demo URL (optional)
    github: 'https://github.com/ashishkr375/', // GitHub repository URL (optional)
    documentation: '', // Documentation URL (optional)
    presentation: '', // Presentation/slides URL (optional)
    
    // Media Section
    images: [
      'https://i.postimg.cc/0Qp5XyYN/image.png', // Main video/image for carousel
      // Add more images as needed
    ],
    thumbnail: 'https://i.postimg.cc/0Qp5XyYN/image.png', // Card thumbnail image
    logo: 'https://i.postimg.cc/0Qp5XyYN/image.png', // Project logo

    // Styling for logo
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    
    // Technologies used
    tags: [
      {
        id: 1,
        name: 'MongoDB',
        path: '/assets/mongo.jpg',
      },
      {
        id: 2,
        name: 'Express.js',
        path: '/assets/express.jpg',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 4,
        name: 'Node.js',
        path: '/assets/node.jpg',
      },
    ],
    
    // Additional project details (optional)
    category: 'Full Stack Web Application', // Project category
    duration: '', // Project duration
    teamSize: 'Team EtherSquad', // Team size
    role: 'Full Stack Developer', // Your role in the project
    status: 'Completed', // Project status
    featured: true, // Whether to feature this project
    
    // Achievement/Recognition (optional)
    achievements: [
      '30% reduction in data retrieval time',
      '25% increase in user satisfaction'
    ],
    
    // Key features (optional)
    features: [
      'Efficient tagging system',
      'Advanced search functionality',
      'Optimized database handling',
      'Real-time note synchronization'
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'NIT Patna',
    pos: 'Lead Web Developer',
    duration: 'Aug 2023 - Present',
    title: "Leading the NIT Patna web team, managing all institutional websites and expanding a secure admin portal with role-based access for 700+ faculty and staff. Enhanced website performance by 70% and implemented real-time notice/events system with API response times of 1-2ms.",
    icon: '/assets/nitp.jpg',
    animation: 'clapping',
  },
  {   
    id: 2,
    name: 'Ekah Retail',
    pos: 'Software Engineering Intern',
    duration: 'June 2024 - Sept 2024 & June 2026 - Present',
    title: "Contributing to software engineering projects that improved user experience by 25%, collaborating with cross-functional teams to implement solutions and resolve bugs with a 95% on-time completion rate. Improved code maintainability by 40% and scalability by 30%.",
    icon: '/assets/er.png',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'LearnDost',
    pos: 'Lead Web Developer',
    duration: 'Dec 2023 - March 2026 ',
    title: "Leading the development of an innovative ed-tech platform, implementing advanced features for content management, student tracking, and AI-powered learning tools. Focusing on scalable architecture and optimal user experience.",
    icon: '/assets/ld.png',
    animation: 'victory',
  }
  
  
];
