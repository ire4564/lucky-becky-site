"use client";

import { SidebarProvider, SidebarInset } from "@/src/components/ui/sidebar";
import { BlogSidebar } from "@/src/components/BlogSidebar";
import { Header } from "@/src/components/Header";
import { BlogListing } from "@/src/components/BlogListing";
import { blogPosts } from "@/src/lib/blog-data";

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
              <BlogListing
                posts={trendingPosts}
                title="Trending Articles"
                showFilters={true}
              />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
