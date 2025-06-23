import BlogPageClient from "@/components/blog/blog-page-client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";

// Revalidate all posts every 10 minutes
export const revalidate = 600

export default async function BlogPage() {
  const posts = await sanityFetch({
    query: postsQuery,
    stega: false,
  });

  return <BlogPageClient posts={posts} />;
}
