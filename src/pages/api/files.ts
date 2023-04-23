import { buildFilesTree } from '@/lib/buildFilesTree'
import { FileData, getFiles } from '@/lib/getFiles'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<FileData[]>
) {
  const files = await getFiles()
  const filesTree = buildFilesTree(files)
  res.status(200).json(filesTree)
}
