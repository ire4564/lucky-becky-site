import { Metadata } from "next";
import { RecentPage } from "./RecentPage";

export const metadata: Metadata = {
  title: "Recent Articles | TechBlog",
  description: "Latest articles from our developer community",
};

export default function Page() {
  return <RecentPage />;
}
