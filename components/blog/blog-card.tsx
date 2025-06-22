import Link from "next/link"
import Image from "next/image"
import type { MoreBlogsQueryResult } from "@/sanity.types"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils" 

interface BlogCardProps {
  post: NonNullable<MoreBlogsQueryResult>[number];
}

export function BlogCard({ post }: BlogCardProps) {
  const displayTag = post.tags && post.tags[0];

  // The query projects mainImage.asset->url as imageUrl, but it can be null.
  // The component needs to handle this gracefully.
  if (!post.slug || !post.imageUrl) {
    return null;
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="block group">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={`Image for ${post.title || 'Blog post'}`}
            fill 
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {displayTag && (
            <Badge 
              variant="secondary" 
              className="absolute bottom-3 right-3 bg-background/70 backdrop-blur-sm text-foreground"
            >
              {displayTag}
            </Badge>
          )}
        </div>
      </Link>

      <div className="flex flex-1 flex-col justify-between bg-background p-4 sm:p-6">
        <div>
          <Link href={`/blog/${post.slug}`} className="block">
            <h3 className="mt-1 text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors">
              {post.title}
            </h3>
          </Link>
          <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
            {post.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>{post.date ? formatDate(post.date) : ''} by {post.author?.name || 'Anonymous'}</span>
          <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
            Read post
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
} 