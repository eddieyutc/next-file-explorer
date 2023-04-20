import { File } from '@/lib/buildFilesTree'
import { useState } from 'react'
import { RiFile3Fill, RiFolder3Fill, RiFolderOpenFill } from 'react-icons/ri'

/**
 * TODO:
 * - [ ] File/Folder icon/identification
 * - [ ] hover/onClick styles
 * - [ ] Proper content flow when expanded/collapsed
 * - [ ] Visual cue for folder hierarchcy
 */

interface FileProps {
  file: File
}

export default function FileListItem({ file }: FileProps) {
  const { name, type, ext, children } = file
  return type === 'folder' ? (
    <FolderItem file={file} />
  ) : (
    <FileItem file={file} />
  )
}

function FolderItem({ file }: FileProps) {
  const { name, children } = file
  const [expanded, setExpended] = useState(false)

  function onClick() {
    setExpended((prev) => !prev)
  }

  return (
    <li>
      {expanded ? <RiFolderOpenFill /> : <RiFolder3Fill />}
      <span onClick={onClick}> {name}</span>
      <ul style={{ display: expanded ? 'block' : 'none' }}>
        {children?.map((childFile) => (
          <FileListItem file={childFile} key={childFile.id} />
        ))}
      </ul>
    </li>
  )
}

function FileItem({ file }: FileProps) {
  const { name } = file

  return (
    <li>
      <RiFile3Fill />
      {name}
    </li>
  )
}

/**
 * <Folder>
 * - onClick: expand/collapse children
 * - {children}: children.map(<Folder>/<File>)
 *
 * <File>
 * - single list item
 *
 */
