import { getAllPosts } from "@/app/libs/markdown";
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Docs Page | ${siteName}`,
  description: "This is Docs page",
  // other metadata
};

export default function DocsPage() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <article>
      <h1>Welcome to Startup Documentation</h1>

      <p>
        This document serves as a simple template to showcase a sample layout
        and format. It is solely created for demonstration purposes and is not
        intended for any official use.
      </p>
      <p>
        Please visit:{" "}
        <b>
          <a href="https://nextjstemplates.com/docs">
            nextjstemplates.com/docs
          </a>
        </b>{" "}
        to check out the real docs, setup guide and even video instructions
      </p>
    </article>
  );
}
