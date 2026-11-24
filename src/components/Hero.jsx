import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Compass, ShieldCheck, Zap, Smartphone, CheckCircle2, Star, Calendar, Clock } from 'lucide-react';
import ParticleHeroBackground from './ParticleHeroBackground.jsx';
import { downloadWebCraftApk } from '../utils/downloadApk.js';

export default function Hero({ onStartProject, onExploreWork, onOpenInstall }) {
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayMode, setDisplayMode] = useState('brand'); // 'brand' | 'booking'
  const [selectedService, setSelectedService] = useState('Consultation');
  const [bookingSlot, setBookingSlot] = useState('Today 2:30 PM');
  const [bookingDone, setBookingDone] = useState(false);

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
            <div className="editorial-tag gold" style={{ marginBottom: '1.25rem' }}>
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
              <em>Modern</em> Engineering.<br />
              Websites That Grow Your Business.
            </h1>

            {/* Interactive Dynamic Typing Line */}
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

          {/* Right Column: Distinctive Heritage Editorial Frame featuring logo.png + Live Booking Sample */}
          <div>
            <div className="hero-visual-frame tilt-card">
              <div className="hero-frame-header" style={{ padding: '0.65rem 1rem' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#B95E3C', display: 'inline-block' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#B99A5B', display: 'inline-block' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#345145', display: 'inline-block' }}></span>
                </div>

                {/* Two Displays Switcher: Wolf Standard Studio & Live Business Booking Sample */}
                <div style={{ display: 'flex', gap: '4px', backgroundColor: 'rgba(0,0,0,0.3)', padding: '2px', borderRadius: '6px' }}>
                  <button
                    type="button"
                    onClick={() => setDisplayMode('brand')}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: displayMode === 'brand' ? '#253B32' : '#F0E6D2',
                      backgroundColor: displayMode === 'brand' ? '#F0E6D2' : 'transparent',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '3px 8px',
                      cursor: 'pointer',
                      fontWeight: displayMode === 'brand' ? 700 : 500,
                      transition: 'all 0.2s'
                    }}
                  >
                    VOL. 01 STUDIO
                  </button>

                  <button
                    type="button"
                    onClick={() => { setDisplayMode('booking'); setBookingDone(false); }}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '0.7rem',
                      color: displayMode === 'booking' ? '#253B32' : '#F0E6D2',
                      backgroundColor: displayMode === 'booking' ? '#F0E6D2' : 'transparent',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '3px 8px',
                      cursor: 'pointer',
                      fontWeight: displayMode === 'booking' ? 700 : 500,
                      transition: 'all 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>⚡ LIVE BOOKING DEMO</span>
                  </button>
                </div>

                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.65rem',
                    color: displayMode === 'booking' ? '#27C93F' : '#B99A5B',
                    fontWeight: 700
                  }}
                >
                  {displayMode === 'booking' ? '● SAMPLE' : 'EST. 2024'}
                </span>
              </div>

              {/* Display 1: Exact Beloved Wolf Standard Crest */}
              {displayMode === 'brand' && (
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
              )}

              {/* Display 2: Live Sample Website For Business Owners (Booking & Intake) */}
              {displayMode === 'booking' && (
                <div style={{ padding: '1.25rem 1.35rem', background: '#FBF8F2', textAlign: 'left' }}>
                  
                  {/* Business Client Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#B95E3C', fontWeight: 700, letterSpacing: '0.06em' }}>
                        Sample Client Website
                      </div>
                      <h4 style={{ fontSize: '1.05rem', color: '#253B32', margin: '2px 0', lineHeight: 1.2 }}>
                        Aura Dental & Aesthetic Clinic
                      </h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: '#59574D' }}>
                        <Star size={11} fill="#B99A5B" color="#B99A5B" />
                        <strong>4.9</strong>
                        <span>(320+ Google Reviews) • London</span>
                      </div>
                    </div>
                    <span
                      style={{
                        backgroundColor: 'rgba(37, 59, 50, 0.08)',
                        color: '#253B32',
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.65rem',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        fontWeight: 700
                      }}
                    >
                      ⚡ 0.4s Fast Load
                    </span>
                  </div>

                  {/* Service Selector */}
                  <div style={{ marginBottom: '0.65rem' }}>
                    <div style={{ fontSize: '0.72rem', color: '#59574D', marginBottom: '4px', fontWeight: 600 }}>
                      1. Select Treatment / Service:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
                      {[
                        { name: 'Consultation', price: '$50' },
                        { name: 'Laser Care', price: '$120' },
                        { name: 'Implants', price: '$250' }
                      ].map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => { setSelectedService(item.name); setBookingDone(false); }}
                          style={{
                            padding: '5px 4px',
                            fontSize: '0.68rem',
                            borderRadius: '4px',
                            border: selectedService === item.name ? '2px solid #253B32' : '1px solid rgba(41,40,33,0.15)',
                            backgroundColor: selectedService === item.name ? '#253B32' : '#FFFFFF',
                            color: selectedService === item.name ? '#FBF8F2' : '#292821',
                            cursor: 'pointer',
                            textAlign: 'center',
                            fontWeight: selectedService === item.name ? 700 : 500
                          }}
                        >
                          <div>{item.name}</div>
                          <div style={{ fontSize: '0.62rem', opacity: 0.85 }}>{item.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Available Time Slots */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <div style={{ fontSize: '0.72rem', color: '#59574D', marginBottom: '4px', fontWeight: 600 }}>
                      2. Choose Appointment Slot:
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
                      {['Today 2:30 PM', 'Today 5:00 PM', 'Tomorrow 11 AM'].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => { setBookingSlot(slot); setBookingDone(false); }}
                          style={{
                            padding: '6px 4px',
                            fontSize: '0.68rem',
                            borderRadius: '4px',
                            border: bookingSlot === slot ? '2px solid #B95E3C' : '1px solid rgba(41,40,33,0.15)',
                            backgroundColor: bookingSlot === slot ? 'rgba(185, 94, 60, 0.12)' : '#FFFFFF',
                            color: bookingSlot === slot ? '#B95E3C' : '#292821',
                            cursor: 'pointer',
                            textAlign: 'center',
                            fontWeight: bookingSlot === slot ? 700 : 500
                          }}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Book Now Button */}
                  <button
                    type="button"
                    onClick={() => setBookingDone(true)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.75rem',
                      backgroundColor: bookingDone ? '#253B32' : '#B95E3C',
                      color: '#FBF8F2',
                      border: 'none',
                      borderRadius: '4px',
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      transition: 'all 0.2s'
                    }}
                  >
                    {bookingDone ? (
                      <>
                        <CheckCircle2 size={13} color="#27C93F" />
                        <span>✓ Reserved {selectedService} for {bookingSlot}! SMS Sent</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm Instant Booking for {bookingSlot}</span>
                        <ArrowUpRight size={13} />
                      </>
                    )}
                  </button>

                  {/* Business Value strip */}
                  <div
                    style={{
                      borderTop: '1px solid rgba(41, 40, 33, 0.12)',
                      paddingTop: '0.6rem',
                      marginTop: '0.65rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.66rem',
                      color: '#59574D'
                    }}
                  >
                    <span>✓ 0% Commissions</span>
                    <span>✓ Google Calendar Sync</span>
                    <span>✓ 100% Mobile Ready</span>
                  </div>

                </div>
              )}
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
              {displayMode === 'brand' 
                ? '"The wolf represents trust, loyalty, intelligence, reliability, and confidence."'
                : 'Sample live customer booking system engineered for business owners — 100% custom code.'
              }
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
