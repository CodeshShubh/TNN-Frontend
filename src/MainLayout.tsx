import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


const MainLayout = () => {
  return (
    <>
      <Navbar />
          <Outlet /> {/* renders child routes */}
      <Footer />
    </>
  )
}

export default MainLayout