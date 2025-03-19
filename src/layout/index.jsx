import {Outlet} from 'react-router-dom'
import LayoutHeader from './layoutHeader'
import LayoutFooter from './layoutFooter'
import ButtonCall from './buttons/ButtonCall'
import ButtonMail from './buttons/ButtonMail'
import ScrollToTop from './buttons/ScrollToTop'
import OnTop from 'components/OnTop'

const Layout = () => {
  return (
    <>
      <OnTop />
      <header>
        <LayoutHeader />
      </header>
      <body>
        <Outlet />
        <ButtonCall />
        <ButtonMail />
        <ScrollToTop />
      </body>
      <footer>
        <LayoutFooter />
      </footer>
    </>
  )
}

export default Layout
