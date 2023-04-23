import { File } from '@/lib/buildFilesTree'
import { useState } from 'react'
import { RiFile3Fill, RiFolder3Fill, RiFolderOpenFill } from 'react-icons/ri'
import styles from './File.module.css'

interface FileProps {
  file: File
  folderLevel: number
}

export default function FileListItem({ file, folderLevel }: FileProps) {
  const { name, type, ext, children } = file
  const [expanded, setExpended] = useState(false)

  function onClick() {
    setExpended((prev) => !prev)
  }

  return (
    <li>
      {type === 'folder' ? (
        <>
          <div
            className={styles.listItem}
            style={listItemStyle(folderLevel)}
            onClick={onClick}
          >
            {expanded ? <RiFolderOpenFill /> : <RiFolder3Fill />} {name}
          </div>
          <ul style={{ display: expanded ? 'block' : 'none' }}>
            {children?.map((childFile) => (
              <FileListItem
                file={childFile}
                folderLevel={folderLevel + 1}
                key={childFile.id}
              />
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className={styles.listItem} style={listItemStyle(folderLevel)}>
            <RiFile3Fill />
            {name}
            {ext ? `.${ext}` : ''}
          </div>
        </>
      )}
    </li>
  )
}

const listItemStyle = (folderLevel: number) => ({
  marginLeft: `${folderLevel * 1.5}rem`,
})
