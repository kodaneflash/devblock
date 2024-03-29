import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'nextjs-14-blog',

  projectId: 'eicpgrzh',
  dataset: 'production',

  basePath: '/studio', // Add this line


  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
