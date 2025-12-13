import { DocumentIcon, HomeIcon, UsersIcon, ComposeSparklesIcon, EarthGlobeIcon, MobileDeviceIcon } from '@sanity/icons'
import { StructureBuilder } from 'sanity/structure'

export default (S: StructureBuilder) => [
  S.documentTypeListItem('post').title('Posts').icon(UsersIcon),
  S.divider(),
  S.listItem()
    .title('Home')
    .icon(HomeIcon)
    .child(S.document().schemaType('home').documentId('home').title('Home')),
  S.listItem()
    .title('About')
    .icon(ComposeSparklesIcon)
    .child(S.document().schemaType('about').documentId('about').title('About')),
  S.listItem()
    .title('Clients Selector')
    .icon(UsersIcon)
    .child(S.document().schemaType('clients').documentId('clients').title('Clients')),
  S.listItem()
    .title('Services Selector')
    .icon(EarthGlobeIcon)
    .child(S.document().schemaType('services').documentId('services').title('Services')),
  S.listItem()
    .title('Contact')
    .icon(MobileDeviceIcon)
    .child(S.document().schemaType('contact').documentId('contact').title('Contact')),
]
