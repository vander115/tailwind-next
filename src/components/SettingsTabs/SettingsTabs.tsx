'use client'

import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { ITabsItem } from '@/@types/ITabsItem'

const tabData: ITabsItem[] = [
  {
    value: 'details',
    title: 'My Details',
  },
  {
    value: 'profile',
    title: 'Profile',
  },
  {
    value: 'password',
    title: 'Password',
  },
  {
    value: 'team',
    title: 'Team',
  },
  {
    value: 'plan',
    title: 'Plan',
  },
  {
    value: 'billing',
    title: 'Billing',
  },
  {
    value: 'email',
    title: 'Email',
  },
  {
    value: 'notifications',
    title: 'Notifications',
  },
  {
    value: 'integrations',
    title: 'Integrations',
  },
  {
    value: 'api',
    title: 'API',
  },
]

export function SettingsTabs() {
  const [selectedTab, setSelectedTab] = useState('details')

  return (
    <Tabs.Root
      value={selectedTab}
      onValueChange={(value: string) => setSelectedTab(value)}
    >
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        {tabData.map(({ value, title }) => (
          <TabItem
            value={value}
            title={title}
            key={value}
            isSelected={value === selectedTab}
          />
        ))}
      </Tabs.List>
    </Tabs.Root>
  )
}
