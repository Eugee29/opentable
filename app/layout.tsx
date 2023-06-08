import NavBar from '@/app/components/NavBar'
import './globals.css'

export const metadata = {
  title: { default: 'OpenTable', template: '%s | OpenTable' },
  description: 'Book a restaurant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-[#F7F7F7] text-[#2d333f]">
          <main className="m-auto min-h-screen max-w-[100rem] bg-white">
            <NavBar />
            {children}
          </main>
        </main>
      </body>
    </html>
  )
}
