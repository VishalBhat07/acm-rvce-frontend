'use client'

import { PortableText, PortableTextComponents } from '@portabletext/react'
import type { SanityDocument } from 'next-sanity'

const components: PortableTextComponents = {
  /* your custom components here */
}

export default function PortableTextComponent({ post }: { post: SanityDocument }) {
  return <PortableText value={post.body} components={components} />
}
