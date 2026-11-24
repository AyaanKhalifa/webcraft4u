import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Zap, Smartphone } from 'lucide-react';
import ParticleHeroBackground from './ParticleHeroBackground.jsx';
import { downloadWebCraftApk } from '../utils/downloadApk.js';

export default function Hero({ onStartProject, onExploreWork, onOpenInstall }) {
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Fast, Modern Websites for Real Businesses ⚡',
    'Medical & Dental Clinic Booking Systems 🩺',
    'Online Stores with Fast Checkout 🛒',
    'Barbershop & Salon Appointments ✂️',
    'Lead-Generating Contractor Websites 🛠️',
    'Clean React Code & Built-In SEO 🚀'
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

  return (
    <section className="hero-wrapper" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Interactive Particle Network Canvas */}
      <ParticleHeroBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-editorial-grid">
          
          {/* Left Column: Text & Editorial Hierarchy */}
          <div>
            <div className="editorial-tag gold">
              <span>Digital Studio</span>
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
              Custom Web Design. <br />
              <em>Modern Engineering.</em> <br />
              Websites That Grow Your Business.
            </h1>

            {/* Interactive Dynamic Typing Line (Inspired by reference) */}
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 'clamp(0.85rem, 1.4vw, 1.05rem)',
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

              <button
                type="button"
                className="btn btn-outline"
                onClick={onExploreWork}
              >
                <span>Explore Our Work</span>
                <Compass size={18} />
              </button>
            </div>

            {/* Trust Metrics Strip */}
            <div className="hero-trust-strip">
              <div className="trust-item">
                <strong>100%</strong>
                <span>Custom Built</span>
              </div>
              <div className="trust-item">
                <strong>&lt; 1s</strong>
                <span>Fast Loading</span>
              </div>
              <div className="trust-item">
                <strong>Mobile-First</strong>
                <span>All Screens</span>
              </div>
              <div className="trust-item">
                <strong>24h</strong>
                <span>Quick Response</span>
              </div>
            </div>
          </div>

          {/* Right Column: Distinctive Heritage Editorial Frame featuring logo.png */}
          <div>
            <div className="hero-visual-frame tilt-card">
              <div className="hero-frame-header">
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#B95E3C' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#B99A5B' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#345145' }}></span>
                </div>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    color: '#F0E6D2',
                    letterSpacing: '0.06em'
                  }}
                >
                  WEBCRAFT // VOL. 01
                </span>
                <div style={{ width: '32px' }}></div>
              </div>

              <div className="hero-frame-body">
                {/* Official Logo (logo.png) */}
                <img
                  src="/logo.png"
                  alt="WebCraft Official Logo"
                  style={{
                    width: '100%',
                    maxWidth: '440px',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />

                <div
                  style={{
                    borderTop: '1px solid rgba(41, 40, 33, 0.15)',
                    paddingTop: '1.25rem',
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.8rem',
                    color: '#59574D'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#253B32', fontWeight: 700 }}>
                    <ShieldCheck size={16} color="#B99A5B" />
                    The Wolf Standard
                  </span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                    Heritage × Modern
                  </span>
                </div>
              </div>
            </div>

            {/* Editorial Caption */}
            <p
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: '#59574D',
                marginTop: '1rem',
                textAlign: 'center'
              }}
            >
              "The wolf represents trust, loyalty, intelligence, reliability, and confidence."
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
