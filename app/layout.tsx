import MainLayout from '@/components/main-layout'
import { ThemeProvider } from '@/components/theme-provider'
import type { Metadata } from 'next'
import { DM_Sans, Open_Sans } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ subsets: ['latin'] })
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' })

export const metadata: Metadata = {
  title: 'Dev Toolbox',
  description: 'Web制作でよく使用するWebアプリやWebサイトをまとめたサイト',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <body className={`${openSans.className} ${dmSans.variable}`}>
          <MainLayout>{children}</MainLayout>
        </body>
      </ThemeProvider>
    </html>
  )
}
