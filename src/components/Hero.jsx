import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Compass, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  CheckCircle2, 
  Star, 
  Calendar, 
  Clock, 
  Sparkles, 
  RefreshCw 
} from 'lucide-react';
import ParticleHeroBackground from './ParticleHeroBackground.jsx';
import { downloadWebCraftApk } from '../utils/downloadApk.js';

export default function Hero({ onStartProject, onExploreWork, onOpenInstall }) {
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Right Column Display Mode: 'brand' (Wolf Standard Cream Card) | 'booking' (Live Business Booking Demo)
  const [displayMode, setDisplayMode] = useState('brand');
  const [activeIndustry, setActiveIndustry] = useState('clinic'); // 'clinic' | 'salon' | 'contractor'
  const [selectedServiceIdx, setSelectedServiceIdx] = useState(1);
  const [bookingSlot, setBookingSlot] = useState('Today 2:30 PM');
  const [bookingDone, setBookingDone] = useState(false);

  const demoIndustries = {
    clinic: {
      name: 'Aura Dental & Aesthetic Clinic',
      category: 'Medical & Dental Clinic',
      rating: '4.9',
      reviews: '340+ Reviews',
      doctor: 'Dr. Sarah Mehta, BDS',
      services: [
        { name: 'Consultation', price: '$50', time: '30m' },
        { name: 'Laser Whitening', price: '$120', time: '45m' },
        { name: 'Dental Implants', price: '$250', time: '60m' }
      ]
    },
    salon: {
      name: 'The Crown Studio & Barber Lounge',
      category: 'Luxury Salon & Barbershop',
      rating: '5.0',
      reviews: '280+ Reviews',
      doctor: 'Marcus Vance, Master Stylist',
      services: [
        { name: 'Haircut & Beard', price: '$45', time: '35m' },
        { name: 'Skin Facial Care', price: '$75', time: '50m' },
        { name: 'Full VIP Package', price: '$110', time: '75m' }
      ]
    },
    contractor: {
      name: 'Apex Electrical & Solar Pro',
      category: 'Licensed Trade Contractor',
      rating: '4.8',
      reviews: '190+ Reviews',
      doctor: 'David Miller, Master Tech',
      services: [
        { name: 'Diagnostic Visit', price: '$65', time: '40m' },
        { name: 'EV Charger Setup', price: '$180', time: '90m' },
        { name: 'Solar Panel Quote', price: '$90', time: '60m' }
      ]
    }
  };

  const currentIndustry = demoIndustries[activeIndustry];
  const selectedService = currentIndustry.services[selectedServiceIdx] || currentIndustry.services[0];

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
            <div className="editorial-tag gold" style={{ marginBottom: '1.15rem' }}>
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
              
              {/* Frame Header Bar */}
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

              {/* Display 2: Attractive, Multi-Industry Live Booking Sample for Business Owners */}
              {displayMode === 'booking' && (
                <div style={{ padding: '1.15rem 1.25rem', background: '#FBF8F2', textAlign: 'left' }}>
                  
                  {/* Industry Presets Tabs */}
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '0.75rem', borderBottom: '1px solid rgba(41,40,33,0.1)', paddingBottom: '0.5rem' }}>
                    {[
                      { id: 'clinic', label: '🩺 Clinic' },
                      { id: 'salon', label: '✂️ Salon & Spa' },
                      { id: 'contractor', label: '🛠️ Trade Pro' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => { setActiveIndustry(tab.id); setSelectedServiceIdx(0); setBookingDone(false); }}
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.68rem',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          border: activeIndustry === tab.id ? '1px solid #253B32' : '1px solid transparent',
                          backgroundColor: activeIndustry === tab.id ? '#253B32' : 'rgba(41,40,33,0.05)',
                          color: activeIndustry === tab.id ? '#FBF8F2' : '#59574D',
                          cursor: 'pointer',
                          fontWeight: activeIndustry === tab.id ? 700 : 500
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {!bookingDone ? (
                    <div>
                      {/* Business Client Profile Header */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.65rem' }}>
                        <div>
                          <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#B95E3C', fontWeight: 700, letterSpacing: '0.06em' }}>
                            {currentIndustry.category}
                          </div>
                          <h4 style={{ fontSize: '1rem', color: '#253B32', margin: '2px 0', lineHeight: 1.25 }}>
                            {currentIndustry.name}
                          </h4>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.72rem', color: '#59574D' }}>
                            <Star size={11} fill="#B99A5B" color="#B99A5B" />
                            <strong>{currentIndustry.rating}</strong>
                            <span>({currentIndustry.reviews}) • {currentIndustry.doctor}</span>
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
                          ⚡ 0.4s Fast
                        </span>
                      </div>

                      {/* 1. Service Selection */}
                      <div style={{ marginBottom: '0.65rem' }}>
                        <div style={{ fontSize: '0.72rem', color: '#59574D', marginBottom: '4px', fontWeight: 600 }}>
                          1. Select Service / Treatment:
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px' }}>
                          {currentIndustry.services.map((item, idx) => (
                            <button
                              key={item.name}
                              type="button"
                              onClick={() => setSelectedServiceIdx(idx)}
                              style={{
                                padding: '6px 4px',
                                fontSize: '0.68rem',
                                borderRadius: '4px',
                                border: selectedServiceIdx === idx ? '2px solid #253B32' : '1px solid rgba(41,40,33,0.15)',
                                backgroundColor: selectedServiceIdx === idx ? '#253B32' : '#FFFFFF',
                                color: selectedServiceIdx === idx ? '#FBF8F2' : '#292821',
                                cursor: 'pointer',
                                textAlign: 'center',
                                fontWeight: selectedServiceIdx === idx ? 700 : 500,
                                transition: 'all 0.15s ease'
                              }}
                            >
                              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.name}</div>
                              <div style={{ fontSize: '0.62rem', opacity: 0.9, marginTop: '1px', fontWeight: 700 }}>
                                {item.price} • {item.time}
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* 2. Choose Time Slot */}
                      <div style={{ marginBottom: '0.75rem' }}>
                        <div style={{ fontSize: '0.72rem', color: '#59574D', marginBottom: '4px', fontWeight: 600 }}>
                          2. Available Time Slot:
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px' }}>
                          {['Today 2:30 PM', 'Today 5:00 PM', 'Tomorrow 11 AM'].map((slot) => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => setBookingSlot(slot)}
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

                      {/* 3. Instant Booking Button */}
                      <button
                        type="button"
                        onClick={() => setBookingDone(true)}
                        style={{
                          width: '100%',
                          padding: '0.7rem 0.85rem',
                          backgroundColor: '#B95E3C',
                          color: '#FBF8F2',
                          border: 'none',
                          borderRadius: '4px',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          boxShadow: '0 2px 8px rgba(185,94,60,0.25)',
                          transition: 'all 0.2s'
                        }}
                      >
                        <span>Confirm Instant Booking for {bookingSlot}</span>
                        <ArrowUpRight size={14} />
                      </button>

                      {/* Value Strip */}
                      <div
                        style={{
                          borderTop: '1px solid rgba(41, 40, 33, 0.12)',
                          paddingTop: '0.55rem',
                          marginTop: '0.65rem',
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '0.66rem',
                          color: '#59574D'
                        }}
                      >
                        <span>✓ 0% Commissions</span>
                        <span>✓ Google Calendar Sync</span>
                        <span>✓ Automated SMS Confirmation</span>
                      </div>
                    </div>
                  ) : (
                    /* The Complete Process & Outcome Screen: What happens after customer books */
                    <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '38px',
                          height: '38px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(39, 201, 63, 0.15)',
                          color: '#27C93F',
                          marginBottom: '0.5rem'
                        }}
                      >
                        <CheckCircle2 size={24} color="#27C93F" />
                      </div>

                      <div style={{ fontSize: '0.68rem', fontFamily: "'JetBrains Mono', monospace", color: '#B95E3C', fontWeight: 700 }}>
                        BOOKING ID: #WC-9842 • COMPLETED IN 0.3s
                      </div>

                      <h4 style={{ fontSize: '1.05rem', color: '#253B32', margin: '4px 0 6px' }}>
                        Appointment Confirmed & Synchronized!
                      </h4>

                      <div
                        style={{
                          background: '#FFFFFF',
                          border: '1px solid rgba(41, 40, 33, 0.12)',
                          borderRadius: '6px',
                          padding: '0.65rem 0.85rem',
                          fontSize: '0.74rem',
                          textAlign: 'left',
                          marginBottom: '0.75rem',
                          lineHeight: 1.55
                        }}
                      >
                        <div>• <strong>Business:</strong> {currentIndustry.name}</div>
                        <div>• <strong>Service:</strong> {selectedService.name} ({selectedService.price})</div>
                        <div>• <strong>Slot:</strong> {bookingSlot} with {currentIndustry.doctor}</div>
                        <div style={{ color: '#27C93F', fontWeight: 600 }}>• <strong>Automations:</strong> SMS Sent • Calendar Synced • WhatsApp Reminder Ready</div>
                      </div>

                      {/* Direct CTA to Business Owner */}
                      <button
                        type="button"
                        onClick={onStartProject}
                        style={{
                          width: '100%',
                          padding: '0.65rem 0.85rem',
                          backgroundColor: '#253B32',
                          color: '#FBF8F2',
                          border: '1px solid #B99A5B',
                          borderRadius: '4px',
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          marginBottom: '0.45rem'
                        }}
                      >
                        <span>Build This Booking Engine For Your Website</span>
                        <ArrowUpRight size={13} />
                      </button>

                      <button
                        type="button"
                        onClick={() => setBookingDone(false)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#7A786E',
                          cursor: 'pointer',
                          fontSize: '0.7rem',
                          textDecoration: 'underline',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                      >
                        <RefreshCw size={11} />
                        <span>Test Another Booking</span>
                      </button>
                    </div>
                  )}

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
