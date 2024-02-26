import '@/assets/styles/globals.css'

export const metadata = {
  title: 'Property Pulse | FInd The Perfect Rental',
  description: 'Discover your ideal rental accommodation.',
  keywords:
    'rental properties, apartments, houses for rent, rental listings, residential rentals, property rentals, rental search, lease options, tenant resources, landlord services, rental marketplace, rental management, property management, housing options, rental agents.',
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <div>{children}</div>
      </body>
    </html>
  )
}
export default MainLayout
