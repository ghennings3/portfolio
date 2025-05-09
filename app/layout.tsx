import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from '@/components/header/Header'
import { ContactForm } from '@/components/contact-form/ContactForm'
import { Footer } from '@/components/footer/Footer'
import { BackToTop } from '@/components/BackToTop'
import { icons } from 'react-icons'

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | G.H Dev'
  },
  icons: [
    {
      url: '/favicon-16x16.png'
    }
  ]
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Header></Header>
        {children}
        <ContactForm></ContactForm>
        <Footer></Footer>
        <BackToTop></BackToTop>
      </body>
    </html>
  )
}
