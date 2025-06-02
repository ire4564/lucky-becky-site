"use client";

import { SidebarProvider, SidebarInset } from "@/src/components/ui/sidebar";
import { BlogSidebar } from "@/src/components/BlogSidebar";
import { Header } from "@/src/components/Header";
import { BlogListing } from "@/src/components/BlogListing";
import { BlogCategory, BlogPost } from "@/src/types/blog";

interface CategoryPageProps {
  category: BlogCategory;
  posts: BlogPost[];
}

export function CategoryPage({ category, posts }: CategoryPageProps) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <BlogSidebar />
        <SidebarInset>
          <Header />

          <main className="flex-1 overflow-auto">
            <div className="container max-w-7xl mx-auto p-6">
              {/* Category Header */}
              <div className="mb-8 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{category.icon}</span>
                  <div>
                    <h1 className="text-3xl font-bold">{category.name}</h1>
                    <p className="text-lg text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Blog Listing */}
              <BlogListing
                posts={posts}
                title={`${category.name} Articles`}
                showFilters={true}
              />
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
