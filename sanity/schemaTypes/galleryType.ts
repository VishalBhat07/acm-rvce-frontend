import { defineField, defineType, StringRule, DatetimeRule } from 'sanity'
import { ImageIcon } from '@sanity/icons'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  icon: ImageIcon,
  fields: [
    defineField({ 
      name: 'title', 
      type: 'string', 
      validation: (rule: StringRule) => rule.required() 
    }),
    defineField({ 
      name: 'description', 
      type: 'text' 
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: { hotspot: true },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: [
          { title: 'Hackathons', value: 'Hackathons' },
          { title: 'Workshops', value: 'Workshops' },
          { title: 'Activities', value: 'Activities' },
          { title: 'Competitions', value: 'Competitions' },
          { title: 'Seminars', value: 'Seminars' },
        ],
      },
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({ 
      name: 'date', 
      type: 'datetime',
      validation: (rule: DatetimeRule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
