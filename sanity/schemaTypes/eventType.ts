import {
  defineField,
  defineType,
  StringRule,
  SlugRule,
  DatetimeRule,
} from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const eventType = defineType({
  name: "event",
  title: "Event",
  type: "document",
  icon: CalendarIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule: StringRule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule: SlugRule) => rule.required(),
    }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Event Images",
      description:
        "Add multiple images for the event. First image will be used as cover.",
      of: [
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Workshop", value: "Workshop" },
          { title: "Competition", value: "Competition" },
          { title: "Talk", value: "Talk" },
          { title: "Meetup", value: "Meetup" },
        ],
      },
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "date",
      type: "datetime",
      validation: (rule: DatetimeRule) => rule.required(),
    }),
    defineField({ name: "venue", type: "string" }),
    defineField({ name: "registrationLink", type: "url" }),
    defineField({
      name: "body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
});
