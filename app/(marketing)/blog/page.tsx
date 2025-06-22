import BlogPageClient from "@/components/blog/blog-page-client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { postsQuery } from "@/sanity/lib/queries";

// Revalidate all posts every hour
export const revalidate = 3600

export default async function BlogPage() {
  const posts = await sanityFetch({
    query: postsQuery,
    stega: false,
  });

  return <BlogPageClient posts={posts} />;
}
