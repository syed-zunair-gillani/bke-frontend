import { defineField } from "sanity";

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      title: "Author",
      type: "string",
      name: "author",
    }, 
    {
      title: "Comment",
      type: "text",
      name: "content",
    },
    {
      name: "blog",
      type: "reference",
      to: [{ type: "blogs" }],
    },
    // {
    //   title: "Id",
    //   type: "string",
    //   name: "id",
    //   readonly: true
    // }, 
  ],
};
