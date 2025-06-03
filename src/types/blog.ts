export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  featured: boolean;
  thumbnail: string;
  views: number;
  likes: number;
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  postCount: number;
  description: string;
}

export interface BlogStats {
  totalPosts: number;
  totalCategories: number;
  totalAuthors: number;
  monthlyViews: number;
}
