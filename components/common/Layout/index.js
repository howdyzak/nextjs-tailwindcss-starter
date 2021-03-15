import Head from 'next/head'
import { Header, Footer } from 'components/common'
import { Container } from 'components/ui'

export default function Layout({ title, children }) {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Head>
                <title>Next JS Tailwindcss Starter Template - {title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="flex-1">
                <Container>{children}</Container>
            </main>
            <Footer />
        </div>
    )
}
