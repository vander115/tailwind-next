import { INavItem } from '@/@types/INavItem'
import { Cog, LifeBuoy } from 'lucide-react'
import { NavItem } from './NavItem'

export function SettingsNavigation() {
  const itemsData: INavItem[] = [
    {
      title: 'Suport',
      icon: LifeBuoy,
    },
    {
      title: 'Settings',
      icon: Cog,
    },
  ]

  return (
    <nav className="space-y-0.5">
      {itemsData.map(({ title, icon }) => (
        <NavItem
          title={title}
          icon={icon}
          key={`${title} ${new Date().toISOString()}`}
        />
      ))}
    </nav>
  )
}
