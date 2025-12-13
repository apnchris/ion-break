import blockContent from './objects/blockContent'
import taste from './documents/taste'
import video from './documents/video'
import tasteSelector from './documents/tastesSelector'

// Export an array of all the schema types.  This is used in the Sanity Studio configuration. https://www.sanity.io/docs/schema-types

export const schemaTypes = [taste, video, tasteSelector, blockContent]
