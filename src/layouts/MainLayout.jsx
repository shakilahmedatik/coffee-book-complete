import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Toaster } from 'react-hot-toast'
const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* Navbar */}
      <div className='h-16'>
        <Navbar />
      </div>
      <div className='min-h-[calc(100vh-232px)] py-12 container mx-auto px-12'>
        {/* Dynamic Section */}
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default MainLayout
