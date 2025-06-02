"use client";

import { Badge } from "@/src/components/Badge";
import { BlogSidebar } from "@/src/components/BlogSidebar";
import { Button } from "@/src/components/Button";
import { Card, CardHeader, CardTitle } from "@/src/components/Card";
import { Header } from "@/src/components/Header";
import { Separator } from "@/src/components/Separator";
import { SidebarInset, SidebarProvider } from "@/src/components/Sidebar";
import { blogPosts } from "@/src/lib/blog-data";
import { BlogPost } from "@/types/blog";
import {
  ArrowLeft,
  Bookmark,
  Calendar,
  Clock,
  Eye,
  Heart,
  Share2,
} from "lucide-react";
import Link from "next/link";

interface BlogPostPageProps {
  post: BlogPost;
}

export function BlogPostPage({ post }: BlogPostPageProps) {
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <BlogSidebar />
        <SidebarInset>
          <Header />

          <main className="flex-1 overflow-auto">
            <div className="container max-w-4xl mx-auto p-6">
              {/* Back Button */}
              <div className="mb-6">
                <Button variant="ghost" asChild className="mb-4">
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Articles
                  </Link>
                </Button>
              </div>

              {/* Article Header */}
              <article className="space-y-8">
                <header className="space-y-6">
                  {/* Category and Tags */}
                  <div className="flex flex-wrap gap-2">
                    <Badge className="text-sm px-3 py-1">{post.category}</Badge>
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Title */}
                  <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
                    {post.title}
                  </h1>

                  {/* Excerpt */}
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-4 border-y">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-semibold text-primary">
                          {post.author.name.slice(0, 2)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold">{post.author.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {post.author.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} min read
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {formatViews(post.views)} views
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="gap-2">
                        <Heart className="h-4 w-4" />
                        {post.likes}
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Bookmark className="h-4 w-4" />
                        Save
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        Share
                      </Button>
                    </div>
                  </div>
                </header>

                {/* Featured Image */}
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                </div>

                {/* Article Content */}
                <div className="prose prose-lg max-w-none">
                  <div className="whitespace-pre-wrap leading-relaxed">
                    {post.content}
                  </div>

                  {/* Mock article content */}
                  <div className="space-y-6 mt-8">
                    <h2>Introduction</h2>
                    <p>
                      This article explores the fundamental concepts and
                      practical applications discussed in the title. We'll dive
                      deep into the technical aspects while providing practical
                      examples that you can implement in your own projects.
                    </p>

                    <h2>Key Concepts</h2>
                    <p>
                      Understanding the core principles is essential for
                      mastering this topic. Let's break down the most important
                      concepts you need to know.
                    </p>

                    <h3>Best Practices</h3>
                    <ul>
                      <li>Always follow industry standards and conventions</li>
                      <li>
                        Write clean, maintainable, and well-documented code
                      </li>
                      <li>Test your implementations thoroughly</li>
                      <li>Consider performance implications in your designs</li>
                    </ul>

                    <h2>Implementation Examples</h2>
                    <p>
                      Here are some practical examples that demonstrate how to
                      apply these concepts in real-world scenarios. Each example
                      includes detailed explanations and code snippets.
                    </p>

                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{`// Example code snippet
function exampleFunction() {
  console.log("This is a sample implementation");
  return "Hello, World!";
}`}</code>
                    </pre>

                    <h2>Conclusion</h2>
                    <p>
                      By following the guidelines and examples presented in this
                      article, you should now have a solid understanding of the
                      topic. Remember to practice regularly and stay updated
                      with the latest developments in the field.
                    </p>
                  </div>
                </div>
              </article>

              {/* Related Articles */}
              {relatedPosts.length > 0 && (
                <section className="mt-12 space-y-6">
                  <Separator />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      Related Articles
                    </h2>
                    <p className="text-muted-foreground">
                      More articles in the {post.category} category
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <Card
                        key={relatedPost.id}
                        className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                      >
                        <div className="relative">
                          <img
                            src={relatedPost.thumbnail}
                            alt={relatedPost.title}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <CardHeader className="pb-3">
                          <CardTitle className="text-sm leading-tight line-clamp-2">
                            <Link
                              href={`/post/${relatedPost.id}`}
                              className="hover:text-primary transition-colors"
                            >
                              {relatedPost.title}
                            </Link>
                          </CardTitle>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
