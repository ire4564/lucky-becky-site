import { Metadata } from "next";
import { FeaturedPage } from "./FeaturedPage";

export const metadata: Metadata = {
  title: "Featured Articles | TechBlog",
  description: "Handpicked articles from our top contributors",
};

export default function Page() {
  return <FeaturedPage />;
}
