import '../styles/global.scss'

// export default function App({ Component, pageProps }) {
//     return <Component {...pageProps} />
//   }

import Navbar from '../components/Navbar'
  
  export default function MyApp({ Component, pageProps }) {
    return (
      <>
        <Navbar />
        <main>
          <div className="container">
            <Component {...pageProps} />
          </div>
        </main>
      </>
    )
  }
  