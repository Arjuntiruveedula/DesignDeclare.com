// App.tsx or App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import BreakdownSection from './components/BreakdownSection';
import EightActsSection from './components/EightActsSection';
import DonationSection from './components/DonationSection';
import DeclareEmergencySection from './components/DeclareEmergencySection';
import Footer from './components/Footer';
import DesignDeclaresIntro from './components/designdeclareintro';
import ScrollProgress from './components/ScrollProgress';
import LatestSection from './components/Latest';
import NewsletterSection from './components/NewsLetterSection';
import SignatoriesSection from './components/sinaturies';
import FloatingMenu from './components/FloatingMenu';
import AboutSection from './pages/About';
import LatestSectionPage from './pages/LatestPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <FloatingMenu />
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DesignDeclaresIntro />
              <BreakdownSection />
              <DonationSection />
              <EightActsSection />
              {/* <AboutSection /> */}
              <DeclareEmergencySection />
              <LatestSection />
              <NewsletterSection />
              <SignatoriesSection />
            </>
          }
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/latest" element={<LatestSectionPage />} />
        <Route path="/about" element={<AboutSection />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
