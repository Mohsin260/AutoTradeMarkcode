import Script from 'next/script'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './styles/atma_v5_v=4.css'
import './styles/address_v=1.css'
import './styles/inventory-cardview-atm_v=5.css'
import './styles/mobile.min.css'
import './styles/font-awesome.min.css'
import './styles/font-awesome-animation.min.css'
import { HydrationOverlay } from '@builder.io/react-hydration-overlay'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Used Cars Dealership For Sale In Manassas VA',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="mx-auto bg-[#d8efff]  md:max-w-[96%]">
      <HydrationOverlay>{children}</HydrationOverlay>
      </body>
    </html>
  )
}



