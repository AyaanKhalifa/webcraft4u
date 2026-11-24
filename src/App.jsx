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
import InstallAppModal from './components/InstallAppModal.jsx';
import { usePwaInstall } from './hooks/usePwaInstall.js';
import { ArrowUp, Smartphone, X } from 'lucide-react';

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [legalModalType, setLegalModalType] = useState(null);
  const [chosenService, setChosenService] = useState('Website Design');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [dismissInstallBanner, setDismissInstallBanner] = useState(false);

  const {
    canPrompt,
    isInstalled,
    showInstallGuide,
    setShowInstallGuide,
    triggerInstall,
    downloadApk
  } = usePwaInstall();

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
        <Navbar
          onOpenContact={() => scrollToContact()}
          onOpenInstall={triggerInstall}
        />

        <main id="main-content" style={{ flexGrow: 1 }}>
          <Hero
            onStartProject={() => scrollToContact()}
            onExploreWork={scrollToWork}
            onOpenInstall={triggerInstall}
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
          <Contact
            preselectedService={chosenService}
            onOpenInstall={triggerInstall}
          />
        </main>

        <Footer
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
          onOpenInstall={triggerInstall}
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

      {/* PWA App Install & Shortcut Modal */}
      <InstallAppModal
        isOpen={showInstallGuide}
        onClose={() => setShowInstallGuide(false)}
        onNativeInstall={triggerInstall}
        canPrompt={canPrompt}
      />

      {/* Floating Mobile Install App Bar (Dismissible, only if not yet installed) */}
      {!isInstalled && !dismissInstallBanner && (
        <aside
          aria-label="Install WebCraft shortcut"
          style={{
            position: 'fixed',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
            zIndex: 900,
            backgroundColor: '#253B32',
            color: '#F0E6D2',
            border: '1.5px solid #B99A5B',
            borderRadius: '8px',
            padding: '0.65rem 0.85rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
            maxWidth: '460px',
            margin: '0 auto'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minWidth: 0 }}>
            <img
              src="/favicon/android-chrome-192x192.png"
              alt="WebCraft"
              style={{ width: '32px', height: '32px', borderRadius: '6px', border: '1px solid #B99A5B', flexShrink: 0 }}
            />
            <div style={{ minWidth: 0, lineHeight: 1.2 }}>
              <strong style={{ fontSize: '0.8rem', color: '#FBF8F2', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                WebCraft Shortcut (.apk)
              </strong>
              <span style={{ fontSize: '0.68rem', color: '#B99A5B' }}>
                Add 1-tap shortcut to home screen
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexShrink: 0 }}>
            <button
              type="button"
              onClick={triggerInstall}
              style={{
                backgroundColor: '#B95E3C',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '0.45rem 0.75rem',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.3rem'
              }}
            >
              <Smartphone size={13} />
              <span>Shortcut</span>
            </button>
            <button
              type="button"
              onClick={() => setDismissInstallBanner(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(240,230,210,0.6)',
                cursor: 'pointer',
                padding: '0.25rem',
                display: 'flex',
                alignItems: 'center'
              }}
              aria-label="Dismiss banner"
            >
              <X size={16} />
            </button>
          </div>
        </aside>
      )}
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
