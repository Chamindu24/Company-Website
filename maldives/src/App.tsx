import { Navigate, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ContactPage from './pages/ContactPage'
import MaldivesLandingPage from './pages/MaldivesLandingPage'
import MarineTransportPage from './pages/MarineTransportPage'
import OurWorkPage from './pages/OurWorkPage'
import RealEstateControlPage from './pages/RealEstateControlPage'
import ResortOperationsPage from './pages/ResortOperationsPage'
import ServicesPage from './pages/ServicesPage'
import TravelCrmPage from './pages/TravelCrmPage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MaldivesLandingPage />} />
        <Route path="/marine-transport" element={<MarineTransportPage />} />
        <Route path="/resort-operations" element={<ResortOperationsPage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/real-estate-control" element={<RealEstateControlPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/travel-crm" element={<TravelCrmPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
