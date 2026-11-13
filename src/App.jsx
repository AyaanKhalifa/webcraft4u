import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import MarqueeTicker from './components/MarqueeTicker.jsx';
import BrandIntro from './components/BrandIntro.jsx';
import Services from './components/Services.jsx';
import Portfolio from './components/Portfolio.jsx';
import Process from './components/Process.jsx';
import WhyWebCraft from './components/WhyWebCraft.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CaseStudyModal from './components/CaseStudyModal.jsx';
import LegalModal from './components/LegalModal.jsx';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);
  const [chosenService, setChosenService] = useState('Website Design');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = (serviceOrIndustry) => {
    if (serviceOrIndustry) {
      setChosenService(serviceOrIndustry);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const el = document.getElementById('work');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Preloader animation featuring transparent logo.png */}
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}

      {/* Smartwatch / Wearable Micro-Card (Active only on <= 260px) */}
      <div className="watch-card-mode" style={{ display: 'none' }}>
        <img src="/logo.png" alt="WebCraft" />
        <h2 style={{ fontSize: '1rem', color: '#F0E6D2', margin: '0.25rem 0' }}>WebCraft</h2>
        <p style={{ margin: '0.25rem 0', fontSize: '0.65rem' }}>Digital Agency</p>
        <a
          href="mailto:webcraft.4iu@gmail.com"
          style={{
            display: 'block',
            backgroundColor: '#B95E3C',
            color: '#fff',
            padding: '0.4rem',
            margin: '0.5rem 0',
            fontWeight: 700,
            borderRadius: '2px'
          }}
        >
          Email Us
        </a>
        <a
          href="https://www.instagram.com/webcraft4u/"
          target="_blank"
          rel="noopener"
          style={{ color: '#B99A5B', fontSize: '0.7rem' }}
        >
          @webcraft4u
        </a>
      </div>

      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar onOpenContact={() => scrollToContact()} />

        <main id="main-content" style={{ flexGrow: 1 }}>
          <Hero
            onStartProject={() => scrollToContact()}
            onExploreWork={scrollToWork}
          />
          <MarqueeTicker />
          <BrandIntro />
          <Services onSelectService={(svc) => scrollToContact(svc)} />
          <Portfolio
            onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
            onSelectForMyBusiness={(industry) => scrollToContact(`Solution for ${industry}`)}
          />
          <Process />
          <WhyWebCraft />
          <Contact preselectedService={chosenService} />
        </main>

        <Footer
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
          onReplayShutter={() => {
            window.scrollTo({ top: 0, behavior: 'instant' });
            setPreloaderDone(false);
          }}
        />
      </div>

      {/* Interactive Blueprint & Case Study Deep Dive Modal */}
      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onStartSimilar={(title) => scrollToContact(`Solution for ${title}`)}
      />

      {/* Legal Dialog (Privacy / Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
      {/* Back to Top Floating Button (Inspired by reference) */}
      <button
        type="button"
        className={`back-to-top-btn ${showBackToTop ? 'visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={18} />
      </button>
    </>
  );
}
