import { ComponentProps } from 'react'
import { Bold, Italic, Link, List, ListOrdered } from 'lucide-react'
import { Button } from '../Button'

type TextButtonsProps = ComponentProps<'div'>

export function TextButtons({ ...props }: TextButtonsProps) {
  return (
    <div className="flex items-center gap-1" {...props}>
      <Button variant="ghost">
        <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
      </Button>

      <Button variant="ghost">
        <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
      </Button>

      <Button variant="ghost">
        <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
      </Button>

      <Button variant="ghost">
        <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
      </Button>

      <Button variant="ghost">
        <ListOrdered className="h-4 w-4 text-zinc-500" strokeWidth={3} />
      </Button>
    </div>
  )
}
