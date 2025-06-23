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

export const projectQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "coverImage": mainImage.asset->url,
    "date": publishedAt,
    author->{name, "picture": image.asset->url},
    "body": body[]{..., _type == "image" => {"url": asset->url}},
    "slug": slug.current,
    "tags": tags,
    githubUrl,
    liveUrl
  }
`

export const moreProjectsQuery = groq`
  *[_type == "project" && _id != $skip && defined(slug.current)] | order(publishedAt desc, _updatedAt desc) [0...$limit] {
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    "date": publishedAt,
    author->{name, "picture": image.asset->url},
    "description": description,
    "tags": tags,
  }
`

export const projectsQuery = groq`
*[_type == "project" && defined(slug.current)] | order(publishedAt desc, _updatedAt desc) {
  _id,
  title,
  description,
  "slug": slug.current,
  "tags": tags,
  "date": publishedAt,
  author->{name},
  "imageUrl": mainImage.asset->url,
}`

export const projectSlugsQuery = groq`*[_type == "project" && defined(slug.current)]{ "slug": slug.current }`
export const eventQuery = groq`
  *[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    description,
    "slug": slug.current,
    author-> {
      name,
      "picture": picture.asset->url
    },
    "imageUrl": mainImage.asset->url,
    category,
    tags,
    date,
    venue,
    registrationLink,
    body,
    publishedAt
  }
`

export const moreEventsQuery = groq`
  *[_type == "event" && _id != $skip && defined(slug.current)] | order(date desc, _updatedAt desc) [0...$limit] {
    _id,
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    description,
    date,
    author-> {
      name,
      "picture": picture.asset->url
    }
  }
`

export const eventsQuery = groq`
  *[_type == "event" && defined(slug.current)] | order(date desc, _updatedAt desc) {
    _id,
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    description,
    tags,
    date,
    author-> {
      name,
      "picture": picture.asset->url
    },
    category,
    venue,
    registrationLink
  }
`

export const eventSlugsQuery = groq`*[_type == "event" && defined(slug.current)]{ "slug": slug.current }`
