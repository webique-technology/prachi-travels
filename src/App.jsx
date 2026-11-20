import { useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import EnquiryModal from './components/EnquiryModal/EnquiryModal';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MobileBottomNav from './components/MobileBottomNav/MobileBottomNav';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import { EnquiryModalProvider } from './context/EnquiryModalContext';
import { LanguageProvider } from './context/LanguageContext';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import CustomizeTrip from './pages/CustomizeTrip/CustomizeTrip';
import Destinations from './pages/Destinations/Destinations';
import Home from './pages/Home/Home';
import Packages from './pages/Packages/Packages';
import Services from './pages/Services/Services';
import Vehicles from './pages/Vehicles/Vehicles';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <EnquiryModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-grow-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/destinations" element={<Destinations />} />
                <Route path="/customize-trip" element={<CustomizeTrip />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
            <WhatsAppButton />
            <MobileBottomNav />
            <EnquiryModal />
          </div>
        </BrowserRouter>
      </EnquiryModalProvider>
    </LanguageProvider>
  );
}
