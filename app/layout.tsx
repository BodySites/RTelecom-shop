import type { Metadata } from 'next'

import './globalStyles/globals.css'
import Layout from '@/components/layouts/Layout'

export const metadata: Metadata = {
  title: 'РТелеком',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
