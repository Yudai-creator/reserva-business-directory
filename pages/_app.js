import NavBar from '../components/NavBar'
import AppFooter from '../components/AppFooter'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <NavBar>
      <Component {...pageProps} />
      <AppFooter/>
    </NavBar>
  )
}

export default MyApp
