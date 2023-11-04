import * as Input from '@/components/Input'
import { SettingsTabs } from '@/components/SettingsTabs/SettingsTabs'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'
import { Button } from '@/components/Button'
import { Mail } from 'lucide-react'
import { TextButtons } from '@/components/Editor/TextButtons'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-5">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-start gap-2 ">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>
        <form
          action=""
          id="settings"
          className="flex w-full flex-col gap-5 divide-y divide-zinc-200"
        >
          <div className="grid-cols-form grid gap-3 pt-5 ">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Vanderlei" />
              </Input.Root>
              <Input.Root>
                <Input.Control id="lastName" defaultValue="Furtuna" />
              </Input.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email
            </label>

            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                defaultValue="furtunavanderlei@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="photoFile"
              className="text-sm font-medium text-zinc-700"
            >
              Your Photo
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This is be displayed on your profile
              </span>
            </label>
            <div className="flex items-start gap-5">
              <FileInput.Root>
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>

            <Input.Root>
              <Input.Control id="role" defaultValue="Developer" />
            </Input.Root>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Country
            </label>
            <Select placeholder="Select a country">
              <SelectItem text="Brazil" value="br" />
              <SelectItem text="United State" value="us" />
            </Select>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Timezone
            </label>
            <Select placeholder="Select a timezone">
              <SelectItem
                text="Pacific Standard Time (PST) UTC−08:00"
                value="utc8"
              />
              <SelectItem text="America São Paulo UTC-03:00" value="utc3" />
            </Select>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="profilePhoto"
              className="text-sm font-medium text-zinc-700"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction
              </span>
            </label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="Select a text type" defaultValue="normal">
                  <SelectItem text="Normal Text" value="normal" />
                  <SelectItem text="Markdown" value="md" />
                </Select>

                <TextButtons />
              </div>

              <TextArea
                id="bio"
                defaultValue="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi repellendus vel porro commodi magnam autem nostrum voluptas hic est officiis nisi odio ducimus impedit sapiente laboriosam iure, dolor ipsum aperiam?"
              />
            </div>
          </div>

          <div className="grid-cols-form grid gap-3 pt-5">
            <label
              htmlFor="profilePhoto"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio Projects
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work
              </span>
            </label>
            <div>
              <FileInput.Root className="flex-col">
                <FileInput.Trigger />
                <FileInput.List />
                <FileInput.Control multiple />
              </FileInput.Root>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
