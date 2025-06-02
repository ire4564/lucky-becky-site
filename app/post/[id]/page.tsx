import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostById } from "@/lib/blog-data";
import { BlogPostPage } from "./BlogPostPage";

interface PageProps {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const post = getPostById(params.id);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | TechBlog`,
    description: post.excerpt,
    keywords: [...post.tags, post.category],
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.thumbnail],
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
    },
  };
}

export default function Page({ params }: PageProps) {
  const post = getPostById(params.id);

  if (!post) {
    notFound();
  }

  return <BlogPostPage post={post} />;
}
