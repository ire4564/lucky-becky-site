import { Metadata } from "next";
import { TrendingPage } from "./TrendingPage";

export const metadata: Metadata = {
  title: "Trending Articles | TechBlog",
  description: "Most popular articles in our tech community",
};

export default function Page() {
  return <TrendingPage />;
}
