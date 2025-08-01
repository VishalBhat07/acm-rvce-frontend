import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {projectType} from './projectType'
import {eventType} from './eventType'
import {galleryType} from './galleryType'
import {authorType} from './authorType'
import {teamMemberType} from './teamMemberType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, authorType, projectType, eventType, galleryType, categoryType, teamMemberType],
}
