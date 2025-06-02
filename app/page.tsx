import { Metadata } from "next";
import { HomePage } from "./HomePage";

export const metadata: Metadata = {
  title: "TechBlog - Developer Hub",
  description:
    "Discover the latest insights, tutorials, and best practices in software development.",
};

export default function Page() {
  return <HomePage />;
}
