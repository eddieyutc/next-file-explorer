import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { getFiles } from '@/lib/getFiles'
import { File, buildFilesTree } from '@/lib/buildFilesTree'
import Header from '@/components/Header'
import FilesSection from '@/components/FilesSection'

const inter = Inter({ subsets: ['latin'] })

export async function getServerSideProps() {
  const files = await getFiles()
  const filesTree = buildFilesTree(files)
  return {
    props: { filesTree },
  }
}

interface HomeProps {
  filesTree: File[]
}

export default function Home({ filesTree }: HomeProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <FilesSection filesTree={filesTree} />
      </main>
    </>
  )
}
