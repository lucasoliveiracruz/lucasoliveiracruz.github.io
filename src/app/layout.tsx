import './globals.css'
import type { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const font = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio de desenvolvedor',
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

