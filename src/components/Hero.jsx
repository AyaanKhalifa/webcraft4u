import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Compass, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Play, 
  Sparkles,
  TrendingUp,
  Layout
} from 'lucide-react';
import ParticleHeroBackground from './ParticleHeroBackground.jsx';

export default function Hero({ onStartProject, onExploreWork, onOpenInstall }) {
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Fast, Modern Websites for Real Businesses ⚡',
    'Medical & Dental Clinic Booking Systems 🩺',
    'Online Stores with Frictionless Checkout 🛒',
    'High-Converting Contractor & Trade Hubs 🛠️',
    'Salon & Barbershop Appointment Engines ✂️',
    'Clean React Code & Built-In Google SEO 🚀'
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    let timer;

    if (!isDeleting && charIdx <= currentPhrase.length) {
      setTypedText(currentPhrase.slice(0, charIdx));
      timer = setTimeout(() => {
        setCharIdx((prev) => prev + 1);
      }, charIdx === currentPhrase.length ? 1900 : 55);
    } else if (!isDeleting && charIdx > currentPhrase.length) {
      setIsDeleting(true);
      timer = setTimeout(() => {}, 600);
    } else if (isDeleting && charIdx > 0) {
      setTypedText(currentPhrase.slice(0, charIdx));
      timer = setTimeout(() => {
        setCharIdx((prev) => prev - 1);
      }, 25);
    } else {
      setIsDeleting(false);
      setPhraseIdx((prev) => (prev + 1) % phrases.length);
      timer = setTimeout(() => {}, 300);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx]);

  const handleVideoTourClick = (e) => {
    e.preventDefault();
    const videoSection = document.getElementById('video-tour');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCustomQuoteClick = (e) => {
    e.preventDefault();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-wrapper" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Interactive Particle Network Canvas */}
      <ParticleHeroBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-editorial-grid">
          
          {/* Left Column: Narrative & Clear Business Value */}
          <div>
            <div className="editorial-tag gold" style={{ marginBottom: '1.25rem' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }}></span>
                <span>Accepting Q4 Projects</span>
              </span>
              <span>•</span>
              <button
                type="button"
                onClick={onOpenInstall}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'inherit',
                  font: 'inherit',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
                title="Install WebCraft (.apk) to Home Screen"
              >
                <Smartphone size={12} color="#B95E3C" />
                <span>Install .APK</span>
              </button>
            </div>

            <h1 className="hero-headline">
              <em>Modern</em> Engineering.<br />
              Websites That Grow Your Business.
            </h1>

            {/* Interactive Dynamic Typing Line */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(0.85rem, 1.35vw, 1.05rem)',
                color: '#B95E3C',
                minHeight: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginBottom: '1rem',
                fontWeight: 600
              }}
            >
              <span>{typedText}</span>
              <span className="typing-cursor" style={{ color: '#253B32', animation: 'cursorBlink 0.9s infinite' }}>|</span>
            </div>

            <p className="hero-description">
              We design and build fast, custom websites tailored for modern businesses. No slow templates or unnecessary plugins — just clean code, strong Google SEO, and responsive design that turns visitors into paying customers.
            </p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="btn btn-terracotta"
                onClick={onStartProject}
              >
                <span>Submit Project Brief</span>
                <ArrowUpRight size={18} />
              </button>

              <a
                href="#video-tour"
                className="btn btn-outline"
                onClick={handleVideoTourClick}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <Play size={16} fill="currentColor" />
                <span>Watch Video Tour (3 Lang)</span>
              </a>
            </div>

            {/* Trust Metrics Strip */}
            <div className="hero-trust-strip">
              <div className="trust-item">
                <strong>100%</strong>
                <span>Custom Built</span>
              </div>
              <div className="trust-item">
                <strong>&lt; 0.8s</strong>
                <span>Fast Loading</span>
              </div>
              <div className="trust-item">
                <strong>Mobile-First</strong>
                <span>All Screens</span>
              </div>
              <div className="trust-item">
                <strong>24h</strong>
                <span>Direct Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Craftsmanship Showcase Crest */}
          <div>
            <div className="hero-executive-card">
              
              {/* Window Header */}
              <div className="hero-exec-header">
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#B95E3C', display: 'inline-block' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#B99A5B', display: 'inline-block' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#345145', display: 'inline-block' }}></span>
                </div>

                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem',
                    color: '#B99A5B',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                    textTransform: 'uppercase'
                  }}
                >
                  WEBCRAFT // BESPOKE STUDIO
                </span>

                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.68rem',
                    color: 'rgba(240, 230, 210, 0.6)',
                    letterSpacing: '0.04em'
                  }}
                >
                  VOL. 01
                </span>
              </div>

              {/* Showcase Body */}
              <div className="hero-exec-body">
                
                {/* Official Logo Display Stage */}
                <div className="hero-exec-logo-stage">
                  <img
                    src="/logo.png"
                    alt="WebCraft Official Logo"
                  />
                  <span
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.65rem',
                      color: '#253B32',
                      background: 'rgba(185, 154, 91, 0.25)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <ShieldCheck size={11} color="#253B32" />
                    VERIFIED
                  </span>
                </div>

                {/* 2x2 Craftsmanship Pillars Grid */}
                <div className="hero-exec-pillars">
                  <div className="hero-pillar-item">
                    <strong>⚡ Sub-Second Speed</strong>
                    <span>&lt; 0.8s Core Web Vitals</span>
                  </div>

                  <div className="hero-pillar-item">
                    <strong>🛡️ 100% Custom Code</strong>
                    <span>Zero Bloated Plugins</span>
                  </div>

                  <div className="hero-pillar-item">
                    <strong>📈 Google Local SEO</strong>
                    <span>Schema & Rank Ready</span>
                  </div>

                  <div className="hero-pillar-item">
                    <strong>📱 Mobile-First UX</strong>
                    <span>Flawless On Every Screen</span>
                  </div>
                </div>

                {/* Wolf Standard Credo Quote */}
                <div
                  style={{
                    borderTop: '1px solid rgba(185, 154, 91, 0.25)',
                    paddingTop: '0.85rem',
                    marginBottom: '1rem',
                    textAlign: 'center'
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Serif Display', Georgia, serif",
                      fontStyle: 'italic',
                      fontSize: '0.88rem',
                      color: '#F0E6D2',
                      lineHeight: 1.5,
                      margin: 0,
                      opacity: 0.95
                    }}
                  >
                    "The wolf represents trust, loyalty, intelligence, reliability, and confidence."
                  </p>
                </div>

                {/* Direct Action: Jump to Custom Quote Builder */}
                <a
                  href="#services"
                  onClick={handleCustomQuoteClick}
                  className="btn btn-terracotta"
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem'
                  }}
                >
                  <span>Build Your Custom Website Quote</span>
                  <ArrowUpRight size={15} />
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
