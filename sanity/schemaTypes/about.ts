import { defineField } from "sanity";

export default {
  name: 'about',
  title: 'About Page',
  type: 'document',
  groups: [
    {
      name: 'page_data',
      title: 'Page Data',
    },
    {
      name: 'our_story',
      title: 'OUR STORY',
    },
    {
      name: 'our_mission',
      title: 'OUR Mission',
    },
  ],
  __experimental_actions: ['update', 'publish', 'delete'], // Disable 'create'
  fields: [
    {
      title: "Page Title",
      type: "string",
      name: "page_title",
      group: "page_data"
    }, 
    {
      title: "Page Info",
      type: "string",
      name: "page_info",
      group: "page_data"
    }, 
    {
      title: "Title",
      type: "string",
      name: "s_title",
      group: "our_story"
    }, 
    {
      title: "Content",
      type: "text",
      name: "s_content",
      group: "our_story"
    }, 

    {
      title: "Title",
      type: "string",
      name: "m_title",
      group: "our_mission"
    }, 
    {
      title: "Content",
      type: "text",
      name: "m_content",
      group: "our_mission"
    },

  ],
};
