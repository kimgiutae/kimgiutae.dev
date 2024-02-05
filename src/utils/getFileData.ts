import { statSync, readFileSync } from 'fs'

const getFileData: GetFileData = (path) => {
  const stats = statSync(path)
  const content = readFileSync(path, 'utf-8')
  if (!stats || !content) {
    return null
  }
  const data: FileData = {
    dateCreated: stats.birthtime,
    dateUpdated: stats.atime,
    content
  }
  return data
}

type GetFileData = (path: string) => FileData
type FileData = {
  dateCreated: Date
  dateUpdated: Date
  content: string
}

export default getFileData
