import SingleBlog from "@/components/Blog/SingleBlog";
import PageTitle from "@/components/Common/PageTitle";
import { getPosts } from "@/sanity/sanity-utils";
import { Metadata } from "next";
import { integrations } from "../../../../integrations.config";
import { notFound } from "next/navigation";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Blog Page | ${siteName}`,
  description: "This is Blog page description",
  // other metadata
};

export default async function BlogPage() {
  if (!integrations.isSanityEnabled) notFound();

  const posts = await getPosts();

  return (
    <>
      <PageTitle
        pageTitle="Blog Grids"
        pageDescription="Autem, molestias eum voluptatibus quaerat praesentium laboriosam, eaque accusantium quam ratione veritatis magni ab."
      />
      <section className="container grid gap-8 bg-white pb-20 min-[400px]:grid-cols-[repeat(auto-fill,minmax(23rem,1fr))] sm:pt-[90px]">
        {posts.map((blog) => (
          <SingleBlog key={blog?.slug.current} blog={blog} />
        ))}
      </section>
    </>
  );
}
