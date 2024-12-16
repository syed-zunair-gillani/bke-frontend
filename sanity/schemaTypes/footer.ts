
export default {
  name: 'footer',
  title: 'Footer Section',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'], // Disable 'create'
  fields: [
    {
      title: "Social Icon",
      type: "array",
      name: "social_icon",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "image", name: "icon" },
            { type: "string", name: "link" }
          ]
        }
      ],
    }, 

    {
      title: "Right Nav",
      type: "array",
      name: "right_nav",
      of: [
        {
          type: "object",
          name: "inline",
          fields: [
            { type: "image", name: "icon" },
            { type: "string", name: "label" },
            { type: "string", name: "link" }
          ]
        }
      ],
    }, 

    {
      title: "Copyright Links",
      type: "array",
      name: "copyright_links",
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

    { type: "string", name: "copyright_text", title:"Copyright Text" }

  ],
};
