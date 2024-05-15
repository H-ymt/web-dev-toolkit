import {
  MicrocmsIcon,
  NextjsIcon,
  ShadcnUIIcon,
  TailwindCSSIcon,
} from '@/components/ui/icons'

export default function ShowcasePage() {
  return (
    <div>
      <div className="pb-8">
        <h1 className="pb-2 text-3xl">Showcase</h1>
        <p>This website is developed using the following technologies:</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="inline-flex items-center justify-center rounded-lg border py-8">
          <NextjsIcon />
        </div>
        <div className="inline-flex items-center justify-center rounded-lg border py-8">
          <TailwindCSSIcon />
        </div>
        <div className="inline-flex items-center justify-center rounded-lg border py-8">
          <ShadcnUIIcon />
        </div>
        <div className="inline-flex items-center justify-center rounded-lg border py-8">
          <MicrocmsIcon />
        </div>
      </div>
    </div>
  )
}
