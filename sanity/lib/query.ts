
export const QHomePage = `*[_type == "home"]{
    hero_title,
    h_short_info,
    h_buttons,
    h_feature_card[]{
      title,
      info,
      Icon{
        asset->{
          url
        }
      }
    },
    services[]->{
        title,
        slug,
        excerpt,
    },
    q_title,
    q_info,
    q_buttons,
    metatitle,
    metadescription
}`

export const QAllPostQuery = `*[_type == "blogs"] | order(_createdAt desc){
    title,
    slug,
    excerpt,
    content,
    _createdAt,
    writtenby,
    metatitle,
    metadescription
}`

export const QServices = `*[_type == "services"] | order(_createdAt desc){
    title,
    slug,
    excerpt,
    excerpt_point,
    image{
      asset->{
        url
      }
    },
    content,
    metatitle,
    metadescription
}`


export const Qfooter = `*[_type == "footer"]{
   social_icon,
   right_nav,
    copyright_links,
    copyright_text
}`

export const Qcontact = `*[_type == "contact"]{
  right_nav
}`

export const QAbout = `*[_type == "about"]`
export const QPrivacy = `*[_type == "privacy"]`
export const QTerms = `*[_type == "terms"]`


export const singleBlog = `*[ _type == "blogs" && slug.current == $slug ][0]{
     title,
     _id,
    slug,
    excerpt,
    content,
    _createdAt,
    writtenby,
    metatitle,
    metadescription
}`



export const singleService = `*[ _type == "services" && slug.current == $slug ][0]{
    title,
    slug,
    excerpt,
    excerpt_point,
    image{
      asset->{
        url
      }
    },
    content,
    metatitle,
    metadescription
}`