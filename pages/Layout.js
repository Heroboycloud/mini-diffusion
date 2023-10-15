'use client';
import { AuthContextProvider } from './context/AuthContext'
import Head from "next/head";
import Menu from "./menu";
import Logo from "./logo";
import Footer from "./footer";
export default function RootLayout({ children }) {
  return (
    <>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
<Head>
<meta
    property="og:image"
    content="https://mini-diffusion.vercel.app/api/og"
  />
<meta name="description" content="Developed by Akindel, Mini diffusion app" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="manifest" href="/site.webmanifest" />
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
<meta name="msapplication-TileColor" content="#da532c" />
<meta name="theme-color" content="#ffffff" />
<title>
Awesome AI || Mini-diffusion by Akindel the dev
</title>
      </Head>

        <AuthContextProvider>
<Logo />
   <Menu />
{children}
        </AuthContextProvider>
<Footer />
</>
  )
}
