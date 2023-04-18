import { Env } from '@/env'

interface File {
  id: string
  type: 'file' | 'folder'
  parent: string
  name: string
  ext?: string
}

export async function getFiles(): Promise<File[]> {
  const response = await fetch(Env.API_URL, {
    headers: {
      'x-secret-api-key': Env.API_KEY,
    },
  })
  const files = (await response.json()) as File[]
  return files
}
