
import { useState } from 'react'

import { Provider } from 'react-redux'
import { store } from '../features/store'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Database } from '../types/supabase'

import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'

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
import "../styles/homepage.css"

const MyApp = ({ Component, pageProps }) => {

    const [supabase] = useState(() => createBrowserSupabaseClient<Database>())
    const queryClient = new QueryClient()

    return (
        <Provider store={store}>
            <SessionContextProvider supabaseClient={supabase} initialSession={pageProps.initialSession}>
                <QueryClientProvider client={queryClient}>
                    <main className={inter.className}>
                        <Component {...pageProps} />
                    </main>
                </QueryClientProvider>
            </SessionContextProvider>
        </Provider>
    )
}

export default MyApp