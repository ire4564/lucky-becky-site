"use client";

import { SidebarProvider, SidebarInset } from "@/src/components/ui/sidebar";
import { BlogSidebar } from "@/src/components/BlogSidebar";
import { Header } from "@/src/components/Header";
import { BlogListing } from "@/src/components/BlogListing";
import { getFeaturedPosts } from "@/src/lib/blog-data";

export function FeaturedPage() {
  const featuredPosts = getFeaturedPosts();

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <BlogSidebar />
        <SidebarInset>
          <Header />

          <main className="flex-1 overflow-auto">
            <div className="container max-w-7xl mx-auto p-6">
              <BlogListing
                posts={featuredPosts}
                title="Featured Articles"
                showFilters={true}
              />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
