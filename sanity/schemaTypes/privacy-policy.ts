import { defineField } from "sanity";

export default {
  name: 'privacy',
  title: 'Privacy Policy Page',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'], // Disable 'create'
  fields: [
    // Hero section
    defineField({
      title: "Title",
      name: "hero_title",
      type: "string",
    }),
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
        }
      ],
    },

  ],
};
