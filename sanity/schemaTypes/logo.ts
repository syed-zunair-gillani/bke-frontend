import { defineField, defineType } from "sanity";

export const logo = defineType({
  name: "logo",
  title: "Logo",
  type: "document",
  fields: [
    defineField({
      name: "logo",
      type: "image",
      title: "Logo",
    }),
  ],
});