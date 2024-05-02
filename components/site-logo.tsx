import Link from 'next/link'

export default function SiteLogo() {
  return (
    <Link href="/" className="fixed left-0 flex h-[var(--nav-height)] items-center pl-6">
      <SiteLogo />
      <span>Logo</span>
    </Link>
  )
}
