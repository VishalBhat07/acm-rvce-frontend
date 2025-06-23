'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {
  presentationTool,
  defineDocuments,
  defineLocations,
  type DocumentLocation,
} from "sanity/presentation";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import {Logo} from './components/studio/logo'
import { resolveHref } from "./sanity/lib/utils";


const homeLocation = {
  title: "Blogs",
  href: "/blog",
} satisfies DocumentLocation;

export default defineConfig({
  basePath: '/studio',
  title: 'ACM RVCE Studio',
  icon: Logo,
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    // visionTool({defaultApiVersion: apiVersion}),
    presentationTool({
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: "/blog/:slug",
            filter: `_type == "post" && slug.current == $slug`,
          },
          {
            route: "/projects/:slug",
            filter: `_type == "project" && slug.current == $slug`,
          },
          {
            route: "/events/:slug",
            filter: `_type == "event" && slug.current == $slug`,
          },
        ]),
        locations: {
          settings: defineLocations({
            locations: [homeLocation],
            message: "This document is used on all pages",
            tone: "caution",
          }),
          post: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: resolveHref("post", doc?.slug)!,
                },
                homeLocation,
              ],
            }),
          }),
          project: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: resolveHref("project", doc?.slug)!,
                },
                homeLocation,
              ],
            }),
          }),
          event: defineLocations({
            select: {
              title: "title",
              slug: "slug.current",
            },
            resolve: (doc) => ({
              locations: [
                {
                  title: doc?.title || "Untitled",
                  href: resolveHref("event", doc?.slug)!,
                },
                homeLocation,
              ],
            }),
          }),
        },
      },
      previewUrl: { previewMode: { enable: "/api/draft-mode/enable" } },
    }),
    structureTool({structure}),

  ],
})
