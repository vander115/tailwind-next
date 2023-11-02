import { SearchIcon } from 'lucide-react'
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
      className="flex-1 border-0 p-0 text-zinc-600 placeholder-zinc-400 outline-0"
      placeholder="Search"
      {...props}
    />
  )
}

function Input({ ...rest }: IInputProps) {
  return (
    <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
      <SearchIcon className="h-5 w-5 text-zinc-500 " />
    </div>
  )
}

export { Input, Prefix, Control }
