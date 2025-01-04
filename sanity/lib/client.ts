import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  token: "skr5qJMkAho30sNxzDpiY5Ypn6iC9KaXLIsSzw5kbH80fW7lE49M0oEchZYquzdMOygq35GBExp8YnO9Z9eRUkb6Cziawo225OBKS7kNzK6b70GgMhvFq4KijDBNsSR04FBE7lyBctk1V3H8j2BfVT29msp4pz7LeJdJ8EL3QboJpomjFWFS",
})
