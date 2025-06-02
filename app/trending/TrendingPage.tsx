"use client";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Header } from "@/components/Header";
import { blogPosts } from "@/lib/blog-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function TrendingPage() {
  // Sort posts by views (most viewed first)
  const trendingPosts = [...blogPosts].sort((a, b) => b.views - a.views);

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <BlogSidebar />
        <SidebarInset>
          <Header />

          <main className="flex-1 overflow-auto">
            <div className="container max-w-7xl mx-auto p-6">
              <div className="mb-8">
                <h1 className="text-3xl font-bold">Trending Articles</h1>
                <p className="text-muted-foreground">
                  Most popular articles in our tech community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trendingPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <div className="relative">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3">
                        <Badge>{post.category}</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg leading-tight line-clamp-2">
                        <Link
                          href={`/post/${post.id}`}
                          className="hover:text-primary transition-colors"
                        >
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
