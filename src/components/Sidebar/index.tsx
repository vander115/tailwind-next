import { Logo } from './components/Logo'
import { MainNavigation } from './components/MainNavigation'
import { UsedSpaceWidget } from './components/UsedSpaceWidget'
import { SettingsNavigation } from './components/SettingsNavigation'
import { Profile } from './components/Profile'
import * as Input from '../Input'
import { Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className=" flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control />
      </Input.Root>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <SettingsNavigation />
        <UsedSpaceWidget />

        <hr className="h-px bg-zinc-200" />

        <Profile />
      </div>
    </aside>
  )
}
