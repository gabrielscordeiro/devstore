import './globals.css'

import { GoogleAnalytics } from '@next/third-parties/google'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export const metadata: Metadata = {
    description: 'Development of an e-commerce project where content was covered about Next.js, App Router fundamentals, Next.js architecture, React Server Components, Streaming SSR, Client Components, Routing, Suspense API, Data fetching, Cache & Memoization, between others',
    keywords: ['Frontend Developer', 'Web Developer', 'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'App Router fundamentals', 'Next.js architecture', 'React Server Components', 'Streaming SSR', 'Client Components', 'Routing', 'Suspense API', 'Data fetching', 'Cache & Memoization'],
    title: {
        template: '%s | devstore',
        default: 'devstore'
    },
    creator: 'Gabriel Schmidt Cordeiro',
}
 
export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
            <GoogleAnalytics gaId="G-SKV4BSGH8H" />
        </html>
    )
}
