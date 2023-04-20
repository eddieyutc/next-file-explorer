import FileListItem from '@/components/File'
import { File } from '@/lib/buildFilesTree'

interface FilesSectionProps {
  filesTree: File[]
}

export default function FilesSection({ filesTree }: FilesSectionProps) {
  return (
    <section style={styles}>
      <ul>
        {filesTree.map((file) => (
          <FileListItem file={file} folderLevel={0} key={file.id} />
        ))}
      </ul>
    </section>
  )
}

const styles = {
  margin: '2rem',
}
