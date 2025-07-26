import { readFileSync } from 'fs'
import type { CVResponse, CVData } from '~/types/cv'

export default defineEventHandler((): CVResponse => {
  try {
    const file = readFileSync('server/api/data.json', 'utf-8')
    const cvData: CVData = JSON.parse(file)
    
    return {
      cv: cvData
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to load CV data'
    })
  }
})