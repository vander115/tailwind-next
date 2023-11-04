'use client'

import { ComponentProps, ChangeEvent } from 'react'
import { useFileInput } from './Root'

type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  const handleFileSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files?.length
      ? Array.from(event.target.files)
      : []

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only outline-none"
      id={id}
      multiple={multiple}
      onChange={handleFileSelected}
      {...props}
    />
  )
}
