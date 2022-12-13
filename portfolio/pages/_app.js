import '../styles/globals.css'

// pages/_app.js
import { Quicksand } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const font = Quicksand({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <main className={font.className}>
  <Component {...pageProps} />
  </main>
  )
}

export default MyApp