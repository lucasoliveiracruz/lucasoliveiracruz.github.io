import './globals.css'
import type { Metadata } from 'next'
import { Exo_2 } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { me } from '@/data'

const font = Exo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `Meu Portfólio - ${me.name}`,
  description: 'Portfólio de desenvolvedor de software - Lucas Cruz',
  keywords: 'Lucas Cruz, desenvolvedor, software, portfólio, web developer, enginner, mobile, fullstack',
  authors: {
    name: me.name,
    url: me.socials.site,
  },
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: 'Meu Portfólio - Lucas Cruz',
    description: 'Portfólio de desenvolvedor de software - Lucas Cruz',
    url: me.socials.site,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Portfólio de Lucas Cruz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className} dark:bg-gray-900 dark:text-white flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

