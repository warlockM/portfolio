import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';

// pages/_app.js
import { Quicksand } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const font = Quicksand({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
    <main className={font.className}>
  <Component {...pageProps} />
  </main>
  </UserProvider>
  )
}

export default MyApp