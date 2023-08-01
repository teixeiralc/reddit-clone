import { cn } from '@/lib/utils'
import { FC } from 'react'

interface SeparatorProps {
  className?: string
}

const Separator: FC<SeparatorProps> = ({ className }) => {
  return (
    <div
      className={cn('-mx-1 my-1 h-px bg-zinc-100 dark:bg-zinc-800', className)}
    />
  )
}

export default Separator
