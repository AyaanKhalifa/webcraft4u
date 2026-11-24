import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Compass, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  CheckCircle2, 
  Lock, 
  ShoppingBag, 
  Stethoscope, 
  Star,
  Activity
} from 'lucide-react';
import ParticleHeroBackground from './ParticleHeroBackground.jsx';
import { downloadWebCraftApk } from '../utils/downloadApk.js';

export default function Hero({ onStartProject, onExploreWork, onOpenInstall }) {
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [screenTab, setScreenTab] = useState('clinic');
  const [selectedSlot, setSelectedSlot] = useState('Today 2:30 PM');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [cartAdded, setCartAdded] = useState(false);

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

  // Auto-switch tabs every 6 seconds
  useEffect(() => {
    const tabs = ['clinic', 'ecommerce', 'speed'];
    const timer = setInterval(() => {
      setScreenTab((prev) => {
        const nextIdx = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIdx];
      });
      setBookingConfirmed(false);
      setCartAdded(false);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-wrapper" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Interactive Particle Network Canvas */}
      <ParticleHeroBackground />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-editorial-grid">
          
          {/* Left Column: Text & Editorial Hierarchy */}
          <div>
            <div className="editorial-tag gold" style={{ marginBottom: '1rem' }}>
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

          {/* Right Column: Interactive Live Website & App Screen Mockup */}
          <div>
            <div className="hero-screen-mockup">
              
              {/* Browser Window Chrome / Header */}
              <div className="screen-mockup-header">
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FF5F56', display: 'inline-block' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FFBD2E', display: 'inline-block' }}></span>
                  <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#27C93F', display: 'inline-block' }}></span>
                </div>

                {/* Simulated URL Bar */}
                <div
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '4px',
                    padding: '3px 10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.7rem',
                    color: '#F0E6D2',
                    fontFamily: "'JetBrains Mono', monospace",
                    border: '1px solid rgba(255, 255, 255, 0.12)'
                  }}
                >
                  <Lock size={10} color="#27C93F" />
                  <span>webcraft.agency/live-preview</span>
                </div>

                {/* Live Pill */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#27C93F', animation: 'pulse 1.8s infinite' }}></span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: '#27C93F', fontWeight: 700 }}>LIVE</span>
                </div>
              </div>

              {/* Interactive Demo Switcher Tabs */}
              <div
                style={{
                  backgroundColor: '#101815',
                  padding: '6px 12px',
                  display: 'flex',
                  gap: '6px',
                  borderBottom: '1px solid rgba(240, 230, 210, 0.1)',
                  overflowX: 'auto'
                }}
              >
                <button
                  type="button"
                  className={`screen-tab-btn ${screenTab === 'clinic' ? 'active' : ''}`}
                  onClick={() => { setScreenTab('clinic'); setBookingConfirmed(false); }}
                >
                  <Stethoscope size={11} />
                  <span>Clinic Booking</span>
                </button>

                <button
                  type="button"
                  className={`screen-tab-btn ${screenTab === 'ecommerce' ? 'active' : ''}`}
                  onClick={() => { setScreenTab('ecommerce'); setCartAdded(false); }}
                >
                  <ShoppingBag size={11} />
                  <span>Store Checkout</span>
                </button>

                <button
                  type="button"
                  className={`screen-tab-btn ${screenTab === 'speed' ? 'active' : ''}`}
                  onClick={() => setScreenTab('speed')}
                >
                  <Zap size={11} />
                  <span>100/100 Speed</span>
                </button>
              </div>

              {/* Screen Body: Interactive Viewports */}
              <div className="screen-mockup-body">
                
                {/* TAB 1: Healthcare / Clinic Booking Screen */}
                {screenTab === 'clinic' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <div>
                        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#B95E3C', fontWeight: 700, letterSpacing: '0.06em' }}>
                          Medical & Dental Hub
                        </div>
                        <h3 style={{ fontSize: '1.15rem', color: '#192721', margin: '2px 0 4px', lineHeight: 1.25 }}>
                          Aura Dental & Facial Aesthetics
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#59574D' }}>
                          <Star size={12} fill="#B99A5B" color="#B99A5B" />
                          <strong style={{ color: '#192721' }}>4.9</strong>
                          <span>(340+ Verified Reviews)</span>
                        </div>
                      </div>
                      <span
                        style={{
                          backgroundColor: 'rgba(37, 59, 50, 0.08)',
                          color: '#253B32',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.65rem',
                          padding: '3px 7px',
                          borderRadius: '4px',
                          fontWeight: 600
                        }}
                      >
                        ⚡ 0.4s Fast Load
                      </span>
                    </div>

                    {/* Interactive Slot Selector */}
                    <div style={{ background: '#FFFFFF', border: '1px solid rgba(41, 40, 33, 0.12)', borderRadius: '6px', padding: '0.85rem', marginBottom: '0.75rem' }}>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#253B32', marginBottom: '0.5rem' }}>
                        Select Patient Appointment Slot:
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                        {['Today 2:30 PM', 'Today 5:00 PM', 'Tomorrow 11 AM'].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => { setSelectedSlot(slot); setBookingConfirmed(false); }}
                            style={{
                              padding: '6px 4px',
                              fontSize: '0.72rem',
                              border: selectedSlot === slot ? '2px solid #253B32' : '1px solid rgba(41, 40, 33, 0.15)',
                              backgroundColor: selectedSlot === slot ? '#253B32' : '#FBF8F2',
                              color: selectedSlot === slot ? '#FBF8F2' : '#292821',
                              borderRadius: '4px',
                              cursor: 'pointer',
                              fontWeight: selectedSlot === slot ? 700 : 500,
                              textAlign: 'center'
                            }}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Booking Action Button */}
                    <button
                      type="button"
                      onClick={() => setBookingConfirmed(true)}
                      style={{
                        width: '100%',
                        padding: '0.65rem',
                        backgroundColor: bookingConfirmed ? '#253B32' : '#B95E3C',
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
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {bookingConfirmed ? (
                        <>
                          <CheckCircle2 size={14} color="#27C93F" />
                          <span>Appointment Confirmed for {selectedSlot}! SMS Sent</span>
                        </>
                      ) : (
                        <>
                          <span>Reserve {selectedSlot} (Instant SMS Alert)</span>
                          <ArrowUpRight size={14} />
                        </>
                      )}
                    </button>

                    <div style={{ marginTop: '0.65rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#7A786E' }}>
                      <span>✓ 24/7 Calendar Sync</span>
                      <span>✓ Zero Waiting Room</span>
                      <span>✓ Encrypted & HIPAA Safe</span>
                    </div>
                  </div>
                )}

                {/* TAB 2: Modern E-Commerce Checkout Screen */}
                {screenTab === 'ecommerce' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <div>
                        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#B99A5B', fontWeight: 700, letterSpacing: '0.06em' }}>
                          Luxury E-Commerce & Retail
                        </div>
                        <h3 style={{ fontSize: '1.15rem', color: '#192721', margin: '2px 0 4px', lineHeight: 1.25 }}>
                          AeroCraft Minimalist Watch Series
                        </h3>
                        <div style={{ fontSize: '0.75rem', color: '#59574D' }}>
                          Swiss Automatic Movement • Sapphire Crystal
                        </div>
                      </div>
                      <span
                        style={{
                          backgroundColor: 'rgba(185, 154, 91, 0.15)',
                          color: '#B99A5B',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.75rem',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontWeight: 700
                        }}
                      >
                        $340 USD
                      </span>
                    </div>

                    <div style={{ background: '#FFFFFF', border: '1px solid rgba(41, 40, 33, 0.12)', borderRadius: '6px', padding: '0.85rem', marginBottom: '0.75rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', marginBottom: '6px' }}>
                        <span style={{ color: '#59574D' }}>Subtotal (1 Item):</span>
                        <strong style={{ color: '#192721' }}>$340.00</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', marginBottom: '6px' }}>
                        <span style={{ color: '#59574D' }}>Express Delivery:</span>
                        <strong style={{ color: '#27C93F' }}>FREE (2 Days)</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '6px' }}>
                        <span style={{ fontWeight: 700, color: '#192721' }}>Total:</span>
                        <strong style={{ color: '#192721', fontSize: '1rem' }}>$340.00</strong>
                      </div>
                    </div>

                    {/* 1-Click Buy Button */}
                    <button
                      type="button"
                      onClick={() => setCartAdded(true)}
                      style={{
                        width: '100%',
                        padding: '0.65rem',
                        backgroundColor: cartAdded ? '#253B32' : '#192721',
                        color: '#FBF8F2',
                        border: '1px solid #B99A5B',
                        borderRadius: '4px',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      {cartAdded ? (
                        <>
                          <CheckCircle2 size={14} color="#27C93F" />
                          <span>Order #WC-8942 Confirmed! Instant Receipt Sent</span>
                        </>
                      ) : (
                        <>
                          <span>⚡ 1-Click Apple Pay / Stripe Checkout</span>
                          <ArrowUpRight size={14} />
                        </>
                      )}
                    </button>

                    <div style={{ marginTop: '0.65rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#7A786E' }}>
                      <span>✓ +42% Higher Mobile Sales</span>
                      <span>✓ 0% Cart Abandonment</span>
                      <span>✓ Sub-Second Response</span>
                    </div>
                  </div>
                )}

                {/* TAB 3: Google Lighthouse 100/100 Speed Score Screen */}
                {screenTab === 'speed' && (
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                      <div>
                        <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: '#27C93F', fontWeight: 700, letterSpacing: '0.06em' }}>
                          Real-Time Speed Audit
                        </div>
                        <h3 style={{ fontSize: '1.15rem', color: '#192721', margin: '2px 0 4px', lineHeight: 1.25 }}>
                          Google Lighthouse 100/100
                        </h3>
                        <div style={{ fontSize: '0.75rem', color: '#59574D' }}>
                          Verified on Google PageSpeed Insights & Vitals
                        </div>
                      </div>
                      <span
                        style={{
                          backgroundColor: 'rgba(39, 201, 63, 0.12)',
                          color: '#27C93F',
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: '0.7rem',
                          padding: '3px 8px',
                          borderRadius: '4px',
                          fontWeight: 700
                        }}
                      >
                        Grade: A+
                      </span>
                    </div>

                    {/* 4 Green Circle Gauges */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px', marginBottom: '0.75rem' }}>
                      {[
                        { label: 'Performance', score: '100' },
                        { label: 'Accessibility', score: '100' },
                        { label: 'Best Practices', score: '100' },
                        { label: 'SEO Rank', score: '100' }
                      ].map((gauge) => (
                        <div
                          key={gauge.label}
                          style={{
                            background: '#FFFFFF',
                            border: '1px solid rgba(39, 201, 63, 0.3)',
                            borderRadius: '6px',
                            padding: '8px 4px',
                            textAlign: 'center'
                          }}
                        >
                          <div
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: '1.15rem',
                              fontWeight: 800,
                              color: '#27C93F',
                              lineHeight: 1
                            }}
                          >
                            {gauge.score}
                          </div>
                          <div style={{ fontSize: '0.62rem', color: '#59574D', marginTop: '4px', textTransform: 'uppercase' }}>
                            {gauge.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Metric Bars */}
                    <div style={{ background: '#FFFFFF', border: '1px solid rgba(41, 40, 33, 0.12)', borderRadius: '6px', padding: '0.75rem', fontSize: '0.75rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#59574D' }}>Largest Contentful Paint (LCP):</span>
                        <strong style={{ color: '#27C93F', fontFamily: "'JetBrains Mono', monospace" }}>0.38s (Fastest 1%)</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ color: '#59574D' }}>First Input Delay (FID):</span>
                        <strong style={{ color: '#27C93F', fontFamily: "'JetBrains Mono', monospace" }}>2ms</strong>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ color: '#59574D' }}>Cumulative Layout Shift:</span>
                        <strong style={{ color: '#27C93F', fontFamily: "'JetBrains Mono', monospace" }}>0.00 (Zero Shift)</strong>
                      </div>
                    </div>

                    <div style={{ marginTop: '0.65rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#7A786E' }}>
                      <span>✓ 100% Hand-Crafted Code</span>
                      <span>✓ Zero WordPress Bloat</span>
                      <span>✓ Built-In Schema.org</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Showcase Footer */}
              <div
                style={{
                  backgroundColor: '#192721',
                  padding: '0.6rem 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderTop: '1px solid rgba(240, 230, 210, 0.15)',
                  fontSize: '0.75rem',
                  color: '#F0E6D2'
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <ShieldCheck size={14} color="#B99A5B" />
                  <strong>The Wolf Standard:</strong> 100% Custom React
                </span>
                <button
                  type="button"
                  onClick={onExploreWork}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#B99A5B',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '3px',
                    padding: 0,
                    fontWeight: 700
                  }}
                >
                  <span>Explore Portfolio</span>
                  <ArrowUpRight size={12} />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
