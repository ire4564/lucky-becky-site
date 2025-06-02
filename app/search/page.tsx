import { Metadata } from "next";
import { SearchPage } from "./SearchPage";

export const metadata: Metadata = {
  title: "Search Articles | TechBlog",
  description: "Find articles, tutorials, and insights",
};

export default function Page() {
  return <SearchPage />;
}
