import "@/styles/globals.css";
import Navbar from '@/components/layout/navbar/Navbar'
import React from 'react'



const RootLayout = ({children}) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
          <Navbar/>
          <main className="flex-1 flex flex-col items-center w-full">
            {children}
          </main>
      </body>
    </html>
  )
}

export default RootLayout