import { ComponentProps, InputHTMLAttributes } from 'react'

type IInputProps = InputHTMLAttributes<HTMLInputElement>

type PrefixProps = ComponentProps<'div'>

function Prefix({ ...props }: PrefixProps) {
  return <div {...props} />
}

type ControlProps = ComponentProps<'input'>

function Control({ ...props }: ControlProps) {
  return (
    <input
      type="text"
      className="w-full flex-1 border-0 p-0 text-zinc-600 placeholder-zinc-400 outline-0"
      {...props}
    />
  )
}

type RootProps = ComponentProps<'div'>

function Root({ ...props }: RootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"
      {...props}
    />
  )
}

export { Root, Prefix, Control }
