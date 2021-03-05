import Footer from './Footer'
import Navbar from './NavBar'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="md:pt-24">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
