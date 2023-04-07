import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

import "../styles/global.css"
import "../styles/spacing.css"
import "../styles/alignment.css"
import "../styles/sizing.css"
import "../styles/text.css"
import "../styles/components.css"
import "../styles/elements.css"
import "../styles/animations.css"

const MyApp = ({ Component, pageProps }) => {

    return (
        <main className={inter.className}>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp