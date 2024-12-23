import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
// export const structure: StructureResolver = (S) =>
//   S.list()
//     .title('Content')
//     .items(S.documentTypeListItems())

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .schemaType('home')
        .child(
          S.document()
            .schemaType('home')
            .documentId('home') // Ensure a single 'home' document
      ),
      S.listItem()
      .title('About Page')
      .schemaType('about')
      .child(
        S.document()
          .schemaType('about')
          .documentId('about') // Ensure a single 'contact' document
      ),
      S.listItem()
        .title('Footer Section')
        .schemaType('footer')
        .child(
          S.document()
            .schemaType('footer')
            .documentId('footer') // Ensure a single 'contact' document
      ),
      S.listItem()
        .title('Terms page')
        .schemaType('terms')
        .child(
          S.document()
            .schemaType('terms')
            .documentId('terms') // Ensure a single 'contact' document
      ),
      S.listItem()
        .title('Privacy Policy Page')
        .schemaType('privacy')
        .child(
          S.document()
            .schemaType('privacy')
            .documentId('privacy') // Ensure a single 'contact' document
      ),
      S.listItem()
        .title('Logo')
        .schemaType('logo')
        .child(
          S.document()
            .schemaType('logo')
            .documentId('logo') // Ensure a single 'contact' document
      ),
      S.listItem()
      .title('Contact')
      .schemaType('contact')
      .child(
        S.document()
          .schemaType('contact')
          .documentId('contact') // Ensure a single 'contact' document
    ),
      // Include other documents (exclude these to prevent listing them twice)
      ...S.documentTypeListItems().filter((item:any) =>
        !["home", "about", "terms", "privacy","footer", "logo", "contact"].includes(item.getId())
      ),
    ]);