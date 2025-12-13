import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'tastesSelector',
  title: 'Tastes Selector',
  type: 'document',
  fields: [
    defineField({
      name: 'tastes',
      title: 'Tastes',
      type: 'array',
      of: [{ 
        type: 'reference',
        to: [{ type: 'taste' }]
      }]
    })
  ],
  preview: {
    prepare: () => ({
      title: 'Tastes'
    })
  }
})
