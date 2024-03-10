import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AuthProvider from '@/components/AuthProvider'
import { ToastContainer } from 'react-toastify'
import { GlobalProvider } from '@/context/GlobalContext'
import 'react-toastify/dist/ReactToastify.css'
import '@/assets/styles/globals.css'
import 'photoswipe/dist/photoswipe.css'

export const metadata = {
  title: 'Property Pulse | FInd The Perfect Rental',
  description: 'Discover your ideal rental accommodation.',
  keywords:
    'rental properties, apartments, houses for rent, rental listings, residential rentals, property rentals, rental search, lease options, tenant resources, landlord services, rental marketplace, rental management, property management, housing options, rental agents.',
}

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <AuthProvider>
        <html lang='en'>
          <body>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <ToastContainer />
          </body>
        </html>
      </AuthProvider>
    </GlobalProvider>
  )
}
export default MainLayout
