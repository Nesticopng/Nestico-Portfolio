import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Nestico.png Portfolio',
  description: 'Hello! I&#39;m Nestico, a dedicated programmer in constant evolution. Welcome to my digital corner, where technology comes to life. Explore my portfolio and discover my journey through the world of development.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
