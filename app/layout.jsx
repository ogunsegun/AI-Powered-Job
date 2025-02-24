import '@styles/globals.css';
// import { Children } from 'react';

import Nav from '@components/Nav'
import Provider from '@components/Provider';

export const metadata = {
    title: "AI-Powered Job Match Dashboard",
    description: "Mini job match dashboard that displays job recommendation.",
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
          <Provider>
           <div className='main'>
            <div className='gradient' />
           </div>

           <main className='app'>
            <Nav />
            {children}
           </main>

           </Provider>
        </body>
    </html>
  )
}

export default RootLayout
