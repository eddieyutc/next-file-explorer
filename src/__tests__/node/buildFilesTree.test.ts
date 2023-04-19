import { buildFilesTree } from '@/lib/buildFilesTree'
import { FileData } from '@/lib/getFiles'

const inputFiles: FileData[] = [
  {
    id: 'a',
    type: 'folder',
    parent: null,
    name: 'a',
  },
  {
    id: 'b',
    type: 'folder',
    parent: 'd',
    name: 'b',
  },
  {
    id: 'c',
    type: 'file',
    parent: 'a',
    name: 'c',
  },
  {
    id: 'd',
    type: 'folder',
    parent: null,
    name: 'd',
  },
  {
    id: 'e',
    type: 'file',
    parent: 'd',
    name: 'e',
  },
  {
    id: 'f',
    type: 'file',
    parent: 'b',
    name: 'f',
  },
]

const expectedTrees = [
  {
    id: 'd',
    type: 'folder',
    parent: null,
    name: 'd',
    children: [
      {
        id: 'e',
        type: 'file',
        parent: 'd',
        name: 'e',
      },
      {
        id: 'b',
        type: 'folder',
        parent: 'd',
        name: 'b',
        children: [
          {
            id: 'f',
            type: 'file',
            parent: 'b',
            name: 'f',
          },
        ],
      },
    ],
  },
  {
    id: 'a',
    type: 'folder',
    parent: null,
    name: 'a',
    children: [
      {
        id: 'c',
        type: 'file',
        parent: 'a',
        name: 'c',
      },
    ],
  },
]

describe('buildFilesTree', () => {
  it('build a file tree', () => {
    const tree = buildFilesTree(inputFiles)
    expect(tree).toEqual(expectedTrees)
  })
})
