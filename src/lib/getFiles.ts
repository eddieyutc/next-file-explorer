import { Env } from '@/env'

export interface FileData {
  id: string
  type: 'file' | 'folder'
  parent: string | null
  name: string
  ext?: string
}

export async function getFiles(): Promise<FileData[]> {
  const response = await fetch(Env.API_URL, {
    headers: {
      'x-secret-api-key': Env.API_KEY,
    },
  })
  const files = (await response.json()) as FileData[]
  return files
}
