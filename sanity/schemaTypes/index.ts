import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {projectType} from './projectType'
import {eventType} from './eventType'
import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, authorType, projectType, eventType, categoryType],
}
