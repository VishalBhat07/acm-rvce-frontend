import { groq } from 'next-sanity'

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "coverImage": mainImage.asset->url,
    "date": publishedAt,
    author->{name, "picture": image.asset->url},
    "body": body[]{..., _type == "image" => {"url": asset->url}},
    "slug": slug.current,
    "tags": tags,
  }
`

export const moreBlogsQuery = groq`
  *[_type == "post" && _id != $skip && defined(slug.current)] | order(publishedAt desc, _updatedAt desc) [0...$limit] {
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "date": publishedAt,
    author->{name, "picture": image.asset->url},
    "description": description,
    "tags": tags,
  }
`

export const postsQuery = groq`
*[_type == "post" && defined(slug.current)] | order(publishedAt desc, _updatedAt desc) {
  _id,
  title,
  description,
  "slug": slug.current,
  "tags": tags,
  "date": publishedAt,
  author->{name},
  "imageUrl": mainImage.asset->url,
}`

export const postSlugsQuery = groq`*[_type == "post" && defined(slug.current)]{ "slug": slug.current }`
