import '../styles/globals.css'
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
// pages/_app.js
import { Quicksand } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const font = Quicksand({ subsets: ['latin'] })

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PS3N9CS' });
}, []);

  return (
    <UserProvider>
    <main className={font.className}>
  <Component {...pageProps} />
  </main>
  </UserProvider>
  )
}

export default MyApp