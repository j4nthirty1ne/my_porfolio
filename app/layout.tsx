import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { SmoothCursor } from '@/components/ui/smooth-cursor'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dina Pisethi - Portfolio',
  description: 'Portfolio of Dina Pisethi - Student',
  generator: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
