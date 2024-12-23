
export default {
  name: 'contact',
  title: 'Contact Page',
  type: 'document',
  __experimental_actions: ['update', 'publish', 'delete'], // Disable 'create'
  fields: [
    {
      title: "Side Nav",
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
  ],
};
