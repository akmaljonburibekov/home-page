// components
import Header from '@/components/Header'
// stile
import './globals.css'

// fonts
import { Roboto } from 'next/font/google'
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['cyrillic', 'latin']
})

// meta settings
export const metadata = {
  title: 'Home Page',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
