import { FileData } from '@/lib/getFiles'

export type File = {
  children: File[]
} & FileData

// using mutable approach for performance concern, as there could be over thousands of files
export function buildFilesTree(files: FileData[]): File[] {
  return reduce(files as File[], [], null)
}

export function reduce(files: File[], tree: File[], parent: string | null) {
  // reverse to prevent out of bound array access when using splice
  for (let i = files.length - 1; i >= 0; i--) {
    if (files[i].parent === parent) {
      const child = files.splice(i, 1)[0]
      child.children = []
      tree.push(child)
    }
  }
  for (const child of tree) {
    reduce(files, child.children, child.id)
  }
  return tree
}
