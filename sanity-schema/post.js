// sanity-schema/post.js
// Drop this into your Sanity Studio project's schema folder
// (schemaTypes/post.js) and register it in schemaTypes/index.js.
//
// This defines exactly what Taylor sees as fields when she writes a
// News/Updates post — title, a URL-safe slug, publish date, a cover
// image, and the body content.

export default {
  name: 'post',
  title: 'News / Update',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'excerpt',
      title: 'Short summary',
      type: 'text',
      rows: 3,
      description: 'Shown in the post list on the News/Updates page.',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
  orderings: [
    {
      title: 'Publish date, new to old',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
};
