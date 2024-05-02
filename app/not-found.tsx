export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-var(--nav-height))] w-full flex-col items-center justify-center">
      <h1 className="text-7xl font-extrabold tracking-widest text-foreground sm:text-9xl">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-primary px-2.5 py-1 text-sm">
        Page Not Found
      </div>
      <button className="mt-5">
        <a className="group relative inline-block text-sm font-medium text-primary focus:outline-none focus:ring active:text-primary">
          <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-primary transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
        </a>
      </button>
    </div>
  )
}
