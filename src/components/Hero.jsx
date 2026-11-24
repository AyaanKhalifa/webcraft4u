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

          {/* Right Column: Distinctive Heritage Editorial Frame matching "Your Custom Quote" dark luxury aesthetic */}
          <div>
            <div className="hero-visual-frame tilt-card">
              <div className="hero-frame-header">
                <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
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
                    textTransform: 'uppercase',
                    fontWeight: 600
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

              <div className="hero-frame-body">
                {/* Official Logo Display on Luxury Ivory Plaque for Maximum Contrast */}
                <div
                  style={{
                    background: '#FBF8F2',
                    borderRadius: '6px',
                    padding: '1.25rem 1.5rem',
                    border: '1px solid #B99A5B',
                    boxShadow: '0 4px 18px rgba(0, 0, 0, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.15rem'
                  }}
                >
                  <img
                    src="/logo.png"
                    alt="WebCraft Official Logo"
                    style={{
                      width: '100%',
                      maxWidth: '340px',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                {/* Badge Row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.82rem',
                    color: '#F0E6D2',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', color: '#B99A5B', fontWeight: 700 }}>
                    <ShieldCheck size={16} color="#B99A5B" />
                    The Wolf Standard
                  </span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.72rem',
                      color: '#F0E6D2',
                      background: 'rgba(185, 154, 91, 0.16)',
                      border: '1px solid rgba(185, 154, 91, 0.35)',
                      padding: '2px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    Heritage × Modern
                  </span>
                </div>

                {/* Value Metrics — matching "Your Custom Quote" card styling */}
                <div
                  style={{
                    textAlign: 'left',
                    borderTop: '1px solid rgba(185, 154, 91, 0.25)',
                    borderBottom: '1px solid rgba(185, 154, 91, 0.25)',
                    paddingBlock: '0.85rem',
                    marginBottom: '1rem',
                    fontSize: '0.82rem',
                    color: 'rgba(240, 230, 210, 0.85)',
                    lineHeight: 1.65
                  }}
                >
                  <p style={{ margin: '0 0 0.35rem 0' }}>
                    • <strong style={{ color: '#FBF8F2' }}>Foundation:</strong> 100% Custom Code (Zero Slow Templates)
                  </p>
                  <p style={{ margin: '0 0 0.35rem 0' }}>
                    • <strong style={{ color: '#FBF8F2' }}>Performance:</strong> Sub-Second Speed & 95+ Core Web Vitals
                  </p>
                  <p style={{ margin: '0 0 0.35rem 0' }}>
                    • <strong style={{ color: '#FBF8F2' }}>Architecture:</strong> Google SEO & High-Converting UX
                  </p>
                  <p style={{ margin: '0', color: '#B99A5B' }}>
                    • <strong style={{ color: '#B99A5B' }}>Standard:</strong> The Wolf Guarantee — Trust & Reliability
                  </p>
                </div>

                {/* Wolf Quote */}
                <p
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: '#F0E6D2',
                    margin: '0 0 1.15rem 0',
                    lineHeight: 1.5,
                    opacity: 0.95
                  }}
                >
                  "The wolf represents trust, loyalty, intelligence, reliability, and confidence."
                </p>

                {/* Direct Action Button matching Custom Quote Terracotta Button */}
                <button
                  type="button"
                  className="btn btn-terracotta"
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    fontSize: '0.88rem'
                  }}
                  onClick={onStartProject}
                >
                  <span>Build With WebCraft</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
