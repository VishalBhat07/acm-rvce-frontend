import { sanityFetch } from "@/sanity/lib/fetch";
import { moreBlogsQuery } from "@/sanity/lib/queries";
import type { MoreBlogsQueryResult } from '@/sanity.types'
import { BlogCard } from "./blog-card";

export default async function MoreBlogs({ skip, limit }: { skip: string; limit: number }) {
  const posts = await sanityFetch({
    query: moreBlogsQuery, 
    params: { skip, limit },
    stega: false,
  });

  if (!posts || posts.length === 0) {
    return (
      <section>
        <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
          Recent Blogs
        </h2>
        <p>No more blogs to show.</p>
      </section>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-1 gap-y-20 md:grid-cols-3 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {posts.map((post: MoreBlogsQueryResult[number]) => (
          post.slug ? <BlogCard key={post.slug} post={post} /> : null
        ))}
      </div>
    </section>
  );
}
