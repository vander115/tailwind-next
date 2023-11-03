'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type RootProps = ComponentProps<'div'>

interface IFileInputContext {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext<IFileInputContext>(
  {} as IFileInputContext,
)

export function Root({ ...props }: RootProps) {
  const [files, setFiles] = useState<File[]>([])
  const id = useId()

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((currentFiles) => [...currentFiles, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div className="flex  gap-5" {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
