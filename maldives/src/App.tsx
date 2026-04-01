import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactPage from './pages/ContactPage'
import LandingPage from './pages/LandingPage'
import ViduvaruTransportPage from './pages/ViduvaruTransportPage'
import OurWorkPage from './pages/OurWorkPage'
import PropertyManagementSystemPage from './pages/PropertyManagementSystemPage'
import LushHotelCloudPage from './pages/LushHotelCloudPage'
import ServicesPage from './pages/ServicesPage'
import TravelCrmPage from './pages/TravelCrmPage'

function App() {
  return (
    <div className='min-h-screen bg-[#ffffff]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/viduvaru" element={<ViduvaruTransportPage />} />
        <Route path="/hotelcloud" element={<LushHotelCloudPage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/real-estate-control" element={<PropertyManagementSystemPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/travel-crm" element={<TravelCrmPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
