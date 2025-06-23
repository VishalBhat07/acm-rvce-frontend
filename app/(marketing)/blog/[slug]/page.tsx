import { client } from "@/sanity/lib/client";
import { defineQuery, type PortableTextBlock } from 'next-sanity'
import type { Metadata, ResolvingMetadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

import Avatar from '@/components/blog/avatar-comp'
import CoverImage from '@/components/blog/cover-image'
import DateComponent from '@/components/blog/date'
import MoreBlogs from '@/components/blog/more-blogs'
import PortableText from '@/components/blog/portable-text'

import { sanityFetch } from '@/sanity/lib/fetch'
import { postQuery, postSlugsQuery } from '@/sanity/lib/queries'
import { resolveOpenGraphImage } from '@/sanity/lib/utils'
import type { Author, Post as SanityPost } from '@/sanity.types'

// Re-define the Post type to correctly type the author field
type Post = Omit<SanityPost, 'author' | 'mainImage' | 'body'> & {
  author?: { name?: string; picture?: string }
  body: PortableTextBlock[]
  coverImage?: string
  date?: string
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = (await sanityFetch({ query: postQuery, params: await params, stega: false })) as Post
  const previousImages = (await parent).openGraph?.images || []

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: post?.title,
    description: post?.description,
  } satisfies Metadata
}

export async function generateStaticParams() {
  return (await sanityFetch({ query: postSlugsQuery, perspective: 'published', stega: false })) as SanityPost[]
}

export default async function PostPage({ params }: Props) {
  const post = (await sanityFetch({ query: postQuery, params: await params })) as Post

  if (!post?._id) {
    return notFound()
  }

  return (
    <div className="container max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
      <article>
        <h1 className="text-balance mb-12 text-6xl font-bold leading-tight tracking-tighter md:text-5xl md:leading-none lg:text-5xl">
          {post.title}
        </h1>
        <div className="hidden md:mb-12 md:block">
          {post.author?.picture && (
            <Avatar name={post.author.name} src={post.author.picture} />
          )}
        </div>
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 block md:hidden">
            {post.author?.picture && (
              <Avatar name={post.author.name} src={post.author.picture} />
            )}
          </div>
          <div className="mb-6 text-lg">
            <div className="mb-4 text-lg">
              <DateComponent dateString={post.date} />
            </div>
          </div>
        </div>
        <div className="mb-8 sm:mx-0 md:mb-16">
          {post.coverImage && <CoverImage src={post.coverImage} priority />}
        </div>
        {post.body?.length && (
          <PortableText
            className="mx-auto max-w-7xl"
            value={post.body as PortableTextBlock[]}
          />
        )}
      </article>
      <aside>
        <hr className="border-accent-2 mb-24 mt-28" />
        <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-5xl">
          Recent Blogs
        </h2>
        <Suspense>
          <MoreBlogs skip={post._id} limit={2} />
        </Suspense>
      </aside>
    </div>
  )
}