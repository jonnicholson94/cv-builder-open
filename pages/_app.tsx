import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const MyApp = ({ Component, pageProps }) => {

    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp