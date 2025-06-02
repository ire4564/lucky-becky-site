import { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogCategories, getPostsByCategory } from "@/lib/blog-data";
import { CategoryPage } from "./CategoryPage";

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const category = blogCategories.find((cat) => cat.slug === params.slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: `${category.name} Articles | TechBlog`,
    description: category.description,
    keywords: [category.name, "tech blog", "programming", "development"],
  };
}

export default function Page({ params }: PageProps) {
  const category = blogCategories.find((cat) => cat.slug === params.slug);

  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(category.name);

  return <CategoryPage category={category} posts={posts} />;
}
