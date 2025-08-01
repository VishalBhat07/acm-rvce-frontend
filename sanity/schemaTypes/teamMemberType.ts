import { defineField, defineType, StringRule, NumberRule } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({ 
      name: 'name', 
      title: 'Name',
      type: 'string', 
      validation: (rule: StringRule) => rule.required() 
    }),
    defineField({ 
      name: 'role', 
      title: 'Role',
      type: 'string',
      validation: (rule: StringRule) => rule.required() 
    }),
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
      validation: (rule: any) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule: StringRule) => rule.email(),
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'github',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      options: {
        list: [
          { title: '2024', value: '2024' },
          { title: '2025', value: '2025' },
          { title: '2026', value: '2026' },
        ],
      },
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Core Team', value: 'core' },
          { title: 'Junior Team', value: 'junior' },
        ],
      },
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Used to control the order of team members in the grid',
      validation: (rule: NumberRule) => rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
      year: 'year',
      category: 'category',
    },
    prepare(selection) {
      const { title, subtitle, media, year, category } = selection
      return { 
        title,
        subtitle: `${subtitle} - ${year} ${category}`,
        media 
      }
    },
  },
  orderings: [
    {
      title: 'Year, Category, Order',
      name: 'yearCategoryOrder',
      by: [
        { field: 'year', direction: 'desc' },
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
        { field: 'name', direction: 'asc' }
      ]
    }
  ]
})
