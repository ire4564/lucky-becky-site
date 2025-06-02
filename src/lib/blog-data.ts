import { BlogPost, BlogCategory } from "@/types/blog";

export const blogCategories: BlogCategory[] = [
  {
    id: "1",
    name: "Frontend",
    slug: "frontend",
    icon: "💻",
    postCount: 24,
    description: "Modern frontend development with React, Vue, and more",
  },
  {
    id: "2",
    name: "Backend",
    slug: "backend",
    icon: "⚙️",
    postCount: 18,
    description: "Server-side development, APIs, and databases",
  },
  {
    id: "3",
    name: "DevOps",
    slug: "devops",
    icon: "🚀",
    postCount: 12,
    description: "Deployment, CI/CD, and infrastructure",
  },
  {
    id: "4",
    name: "AI/ML",
    slug: "ai-ml",
    icon: "🤖",
    postCount: 15,
    description: "Artificial Intelligence and Machine Learning",
  },
  {
    id: "5",
    name: "Mobile",
    slug: "mobile",
    icon: "📱",
    postCount: 9,
    description: "iOS, Android, and cross-platform development",
  },
  {
    id: "6",
    name: "Web3",
    slug: "web3",
    icon: "🌐",
    postCount: 7,
    description: "Blockchain, DeFi, and decentralized applications",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern React Applications with TypeScript",
    excerpt:
      "Learn how to leverage TypeScript's powerful type system to build more maintainable and scalable React applications with best practices and real-world examples.",
    content:
      "# Building Modern React Applications with TypeScript\n\nTypeScript has become an essential tool for modern React development...",
    author: {
      name: "Sarah Chen",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=40&h=40&fit=crop&crop=face",
      role: "Senior Frontend Engineer",
    },
    category: "Frontend",
    tags: ["React", "TypeScript", "JavaScript", "Frontend"],
    publishedAt: "2024-01-15",
    readTime: 8,
    featured: true,
    thumbnail:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=300&fit=crop",
    views: 12500,
    likes: 234,
  },
  {
    id: "2",
    title: "Mastering Node.js Performance Optimization",
    excerpt:
      "Discover advanced techniques for optimizing Node.js applications, from memory management to clustering and caching strategies.",
    content:
      "# Mastering Node.js Performance Optimization\n\nPerformance is crucial for any backend application...",
    author: {
      name: "Alex Kumar",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face",
      role: "Backend Architect",
    },
    category: "Backend",
    tags: ["Node.js", "Performance", "Backend", "JavaScript"],
    publishedAt: "2024-01-12",
    readTime: 12,
    featured: true,
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=300&fit=crop",
    views: 8900,
    likes: 156,
  },
  {
    id: "3",
    title: "Docker Containerization Best Practices",
    excerpt:
      "A comprehensive guide to containerizing applications with Docker, including multi-stage builds, security considerations, and optimization techniques.",
    content:
      "# Docker Containerization Best Practices\n\nContainerization has revolutionized how we deploy applications...",
    author: {
      name: "Maria Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&crop=face",
      role: "DevOps Engineer",
    },
    category: "DevOps",
    tags: ["Docker", "DevOps", "Containers", "Deployment"],
    publishedAt: "2024-01-10",
    readTime: 10,
    featured: false,
    thumbnail:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=300&fit=crop",
    views: 6700,
    likes: 89,
  },
  {
    id: "4",
    title: "Getting Started with Machine Learning in Python",
    excerpt:
      "An introduction to machine learning concepts and practical implementation using Python, scikit-learn, and popular ML libraries.",
    content:
      "# Getting Started with Machine Learning in Python\n\nMachine learning is transforming industries...",
    author: {
      name: "Dr. James Wilson",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      role: "ML Research Scientist",
    },
    category: "AI/ML",
    tags: ["Python", "Machine Learning", "AI", "Data Science"],
    publishedAt: "2024-01-08",
    readTime: 15,
    featured: true,
    thumbnail:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=300&fit=crop",
    views: 15600,
    likes: 298,
  },
  {
    id: "5",
    title: "React Native vs Flutter: A Comprehensive Comparison",
    excerpt:
      "Compare the two leading cross-platform mobile development frameworks and learn which one is right for your next project.",
    content:
      "# React Native vs Flutter: A Comprehensive Comparison\n\nChoosing the right mobile development framework...",
    author: {
      name: "Emma Thompson",
      avatar:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=40&h=40&fit=crop&crop=face",
      role: "Mobile Developer",
    },
    category: "Mobile",
    tags: ["React Native", "Flutter", "Mobile", "Cross-platform"],
    publishedAt: "2024-01-05",
    readTime: 11,
    featured: false,
    thumbnail:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop",
    views: 9200,
    likes: 178,
  },
  {
    id: "6",
    title: "Building DeFi Applications with Solidity",
    excerpt:
      "Learn how to create decentralized finance applications using Solidity smart contracts on the Ethereum blockchain.",
    content:
      "# Building DeFi Applications with Solidity\n\nDecentralized Finance (DeFi) has opened new possibilities...",
    author: {
      name: "David Park",
      avatar:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=40&h=40&fit=crop&crop=face",
      role: "Blockchain Developer",
    },
    category: "Web3",
    tags: ["Solidity", "DeFi", "Blockchain", "Ethereum"],
    publishedAt: "2024-01-03",
    readTime: 13,
    featured: false,
    thumbnail:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop",
    views: 5400,
    likes: 92,
  },
  {
    id: "7",
    title: "Advanced CSS Grid and Flexbox Techniques",
    excerpt:
      "Master modern CSS layout systems with advanced techniques for creating responsive and complex web layouts.",
    content:
      "# Advanced CSS Grid and Flexbox Techniques\n\nCSS has evolved significantly in recent years...",
    author: {
      name: "Lisa Anderson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face",
      role: "UI/UX Developer",
    },
    category: "Frontend",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
    publishedAt: "2024-01-01",
    readTime: 9,
    featured: false,
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
    views: 7800,
    likes: 145,
  },
  {
    id: "8",
    title: "Microservices Architecture with Kubernetes",
    excerpt:
      "Design and deploy scalable microservices using Kubernetes orchestration, including service mesh and monitoring strategies.",
    content:
      "# Microservices Architecture with Kubernetes\n\nMicroservices have become the standard for building scalable applications...",
    author: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=40&h=40&fit=crop&crop=face",
      role: "Cloud Architect",
    },
    category: "DevOps",
    tags: ["Kubernetes", "Microservices", "Cloud", "Architecture"],
    publishedAt: "2023-12-28",
    readTime: 14,
    featured: true,
    thumbnail:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=300&fit=crop",
    views: 11300,
    likes: 201,
  },
];

export const getFeaturedPosts = () => blogPosts.filter((post) => post.featured);
export const getPostsByCategory = (category: string) =>
  blogPosts.filter((post) => post.category === category);
export const getPostById = (id: string) =>
  blogPosts.find((post) => post.id === id);
export const searchPosts = (query: string) =>
  blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(query.toLowerCase())),
  );
