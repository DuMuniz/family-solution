'use client';
import { PublicRoutes } from '@/routes/public-routes';
import './globals.css'
import { Inter } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { Menu, TopBar } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname();
  const isPublicPage = PublicRoutes(pathname)

  return (
    <html lang="pt-BR">
      <title>Family App</title>
      <body className={`${inter.className} overflow-hidden`}>
        <TopBar />
        <div className='flex'>
          <Menu />
          {isPublicPage && children}
          {!isPublicPage && <div>Usuário não autenticado</div>}
        </div>
      </body>
    </html>
  )
}
