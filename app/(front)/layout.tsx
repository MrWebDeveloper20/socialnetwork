import Navbar from '@/components/navbar'

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className="flex-grow w-full content-center justify-items-center mx-auto text-center">
      <Navbar />
      {children}
      
    </main>
  )
}
