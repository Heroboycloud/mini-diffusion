'use client'
import './globals.css'
import { AuthContextProvider } from '../context/AuthContext'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
<meta
    property="og:image"
    content="https://mini-diffusion.vercel.app/api/og"
  />
<meta name="description" content="Developed by Akindel, Mini diffusion app" />
        <link rel="icon" href="/favicon.ico" />
<title>
Awesome AI || Mini-diffusion by Akindel
</title>
      <head />
      <body>
        <AuthContextProvider>
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
