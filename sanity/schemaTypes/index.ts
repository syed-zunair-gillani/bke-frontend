import { type SchemaTypeDefinition } from 'sanity'
import { blogs } from './blogs'
import home from './home-page'
import { services } from './services'
import footer from './footer'
import about from './about'
import termsServices from './terms-services'
import privacyPolicy from './privacy-policy'
import { logo } from './logo'
import contact from './contact'
import comment from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [home, services, blogs, termsServices, privacyPolicy, about, footer, logo, contact, comment],
}
