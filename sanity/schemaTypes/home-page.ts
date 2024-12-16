import { defineField } from "sanity";

export default {
  name: 'home',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'], // Disable 'create'
  groups: [
    {
      name: 'data-fields',
      title: 'Data Fields',
    },
    {
      name: 'hero',
      title: 'HERO',
    },
    {
      name: 'fcard',
      title: 'FEATURE CRADS',
    },
    {
      name: 'services',
      title: 'SERVICES',
    },
    {
      name: 'cta',
      title: 'CTA',
    },
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    // Hero section
    defineField({
      title: "Title",
      name: "hero_title",
      type: "string",
      group: "hero"
    }),
    defineField({
      title: "Short Info",
      name: "h_short_info",
      type: "string",
      group: "hero"
    }),
    {
      title: "Buttons",
      type: "array",
      name: "h_buttons",
      group: "hero",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "label" },
            { type: "string", name: "link" }
          ]
        }
      ],
    }, 
    
    {
      title: "Feature Card",
      type: "array",
      name: "h_feature_card",
      group: "fcard",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "image", name: "Icon" },
            { type: "string", name: "title" },
            { type: "string", name: "info" }
          ]
        }
      ],
    },

    defineField({
      title: 'Services',
      name: 'services',
      type: 'array',
      group: "services",
      of: [
        {
          type: 'reference',
          to: [
            {type: 'services'},
          ]
        }
      ]
    }),

    defineField({
      title: 'Title',
      name: 'q_title',
      type: 'string',
      group: "cta",
    }),
    defineField({
      title: 'Info',
      name: 'q_info',
      type: 'text',
      group: "cta",
    }),
    {
      title: "Buttons",
      type: "array",
      name: "q_buttons",
      group: "cta",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "string", name: "label" },
            { type: "string", name: "link" }
          ]
        }
      ],
    }, 



    // SEO Section 
    defineField({
      title: "Meta Title",
      name: "meta_title",
      type: "string",
      group: 'seo'
    }),
    defineField({
      title: "Meta Description",
      name: "meta_description",
      type: "text",
      group: 'seo'
    }),
   
  ],
};
