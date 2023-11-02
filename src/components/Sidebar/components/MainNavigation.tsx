import { INavItem } from '@/@types/INavItem'
import { NavItem } from './NavItem'
import { BarChart2, CheckSquare, Flag, Home, Layers, Users } from 'lucide-react'

export function MainNavigation() {
  const iconsData: INavItem[] = [
    {
      title: 'Home',
      icon: Home,
    },
    {
      title: 'Dashboard',
      icon: BarChart2,
    },
    {
      title: 'Projects',
      icon: Layers,
    },
    {
      title: 'Tasks',
      icon: CheckSquare,
    },
    {
      title: 'Reporting',
      icon: Flag,
    },
    {
      title: 'Users',
      icon: Users,
    },
  ]

  return (
    <nav className="space-y-0.5">
      {iconsData.map(({ title, icon }) => (
        <NavItem
          title={title}
          icon={icon}
          key={`${title} ${new Date().toISOString}`}
        />
      ))}
    </nav>
  )
}
