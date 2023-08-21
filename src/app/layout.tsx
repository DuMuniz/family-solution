'use client';
import { PublicRoutes } from '@/routes/public-routes';
import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
  const isPublicPage = PublicRoutes(pathname)
  
  return (
    <html lang="en">
      <title>Family Solution</title>
      <body className={inter.className}>
        {isPublicPage && children}
        {!isPublicPage && <div>Usuário não autenticado</div>}
      </body>
    </html>
  )
}
