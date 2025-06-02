import { useParams, Navigate } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { BlogSidebar } from "@/components/BlogSidebar";
import { Header } from "@/components/Header";
import { BlogListing } from "@/components/BlogListing";
import { blogCategories, getPostsByCategory } from "@/lib/blog-data";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = blogCategories.find((cat) => cat.slug === slug);

  if (!category) {
    return <Navigate to="/404" replace />;
  }

  const posts = getPostsByCategory(category.name);

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
};

export default Category;
