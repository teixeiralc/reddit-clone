// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
'use client'
import { User } from 'next-auth'
import { FC } from 'react'
import UserAvatar from './UserAvatar'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from '@/components/ui/DropdownMenu'
import Link from 'next/link'
import Separator from './Separator'
import { signOut } from 'next-auth/react'

interface UserAccountNavProps {
  user: Pick<User, 'name' | 'image' | 'email'>
}

const UserAccountNav: FC<UserAccountNavProps> = ({ user }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar
          className="h-8 w-8"
          user={{
            name: user.name || null,
            image: user.image || null,
          }}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {user.name && <p className="font-medium">{user.name}</p>}
            {user.email && (
              <p className="w-[200px] truncate text-sm text-zinc-700">
                {user.email}
              </p>
            )}
          </div>
        </div>

        <Separator />

        <DropdownMenuItem asChild className="text-base">
          <Link href="/">Feed</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="text-base">
          <Link href="/r/create">Create Community</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="text-base">
          <Link href="/settings">Settings</Link>
        </DropdownMenuItem>

        <Separator />

        <DropdownMenuItem
          className="cursor-pointer text-base"
          onSelect={(e) => {
            e.preventDefault()
            signOut({ callbackUrl: `${window.location.origin}/sign-in}` })
          }}
        >
          Sign out
        </DropdownMenuItem>

        <Separator />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav
