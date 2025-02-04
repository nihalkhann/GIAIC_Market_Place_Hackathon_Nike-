import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'
import order from './order'
import video from './video'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema , order,video],
}
