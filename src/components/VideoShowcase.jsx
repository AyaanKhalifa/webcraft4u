import React, { useState, useRef } from 'react';
import { Play, Volume2, Globe, Sparkles, ArrowUpRight, ShieldCheck, Zap, Layout } from 'lucide-react';

export default function VideoShowcase({ onStartProject }) {
  const [activeLang, setActiveLang] = useState('english');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const languages = [
    {
      id: 'english',
      name: 'English',
      nativeLabel: 'English',
      flag: '🇬🇧',
      file: '/videos/webcraft-english.mp4',
      badge: 'Official English Tour',
      desc: 'Complete overview of WebCraft craftsmanship, technical stack, and client delivery process.'
    },
    {
      id: 'hindi',
      name: 'Hindi',
      nativeLabel: 'हिंदी',
      flag: '🇮🇳',
      file: '/videos/webcraft-hindi.mp4',
      badge: 'हिंदी वीडियो टूर',
      desc: 'WebCraft की कस्टम वेब डिज़ाइन, तेज़ स्पीड और बिज़नेस ग्रोथ की पूरी जानकारी हिंदी में।'
    },
    {
      id: 'gujrati',
      name: 'Gujarati',
      nativeLabel: 'ગુજરાતી',
      flag: '🇮🇳',
      file: '/videos/webcraft-gujrati.mp4',
      badge: 'ગુજરાતી વિડિઓ પ્રવાસ',
      desc: 'તમારા બિઝનેસ માટે ઝડપી અને આધુનિક વેબસાઇટ કેવી રીતે કામ કરે છે તેની સંપૂર્ણ સમજૂતી.'
    }
  ];

  const currentLang = languages.find((l) => l.id === activeLang) || languages[0];

  const handleLanguageChange = (langId) => {
    setActiveLang(langId);
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.load();
    }
  };

  const handlePlayToggle = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="video-tour"
      style={{
        paddingBlock: 'var(--space-2xl)',
        backgroundColor: '#192721',
        color: '#F0E6D2',
        borderBottom: 'var(--border-editorial)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div className="editorial-header" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto var(--space-xl)' }}>
          <div
            className="editorial-tag gold"
            style={{
              backgroundColor: 'rgba(185, 154, 91, 0.2)',
              color: '#F0E6D2',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginBottom: '1rem'
            }}
          >
            <Globe size={13} color="#B99A5B" />
            <span>Multi-Language Video Tour</span>
          </div>

          <h2 style={{ color: '#FBF8F2', fontSize: 'clamp(2rem, 4vw, 2.75rem)', marginBottom: '1rem', lineHeight: 1.2 }}>
            See How WebCraft Builds Your Digital Flagship
          </h2>

          <p style={{ color: 'rgba(240, 230, 210, 0.8)', fontSize: '1.05rem', lineHeight: 1.6, margin: 0 }}>
            Watch our agency overview in your preferred language. Learn why bespoke code, sub-second speed, and conversion-first design outperform fragile templates.
          </p>
        </div>

        {/* Language Selection Switcher Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.75rem',
            flexWrap: 'wrap',
            marginBottom: '2rem'
          }}
          role="tablist"
          aria-label="Video language selector"
        >
          {languages.map((lang) => {
            const isSelected = activeLang === lang.id;
            return (
              <button
                key={lang.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => handleLanguageChange(lang.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  padding: '0.65rem 1.25rem',
                  backgroundColor: isSelected ? '#B95E3C' : '#253B32',
                  color: isSelected ? '#ffffff' : '#F0E6D2',
                  border: isSelected ? '1.5px solid #F0E6D2' : '1.5px solid rgba(240, 230, 210, 0.2)',
                  borderRadius: '6px',
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: isSelected ? '3px 3px 0px #B99A5B' : 'none',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <span style={{ fontSize: '1.15rem' }}>{lang.flag}</span>
                <span>{lang.name}</span>
                <span style={{ fontSize: '0.8rem', opacity: isSelected ? 0.9 : 0.65, fontWeight: 500 }}>
                  ({lang.nativeLabel})
                </span>
              </button>
            );
          })}
        </div>

        {/* Video Player Display Container */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div
            style={{
              position: 'relative',
              backgroundColor: '#0F1814',
              borderRadius: '8px',
              border: '2px solid #292821',
              boxShadow: '8px 8px 0px #B99A5B',
              overflow: 'hidden'
            }}
          >
            {/* Top Video Header Bar (Retro Editorial Titlebar) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1.25rem',
                backgroundColor: '#121D18',
                borderBottom: '1.5px solid rgba(240, 230, 210, 0.15)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#B95E3C' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#B99A5B' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#345145' }} />
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.75rem',
                    color: '#B99A5B',
                    marginLeft: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em'
                  }}
                >
                  {currentLang.badge}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', color: 'rgba(240, 230, 210, 0.7)' }}>
                <Volume2 size={14} color="#B99A5B" />
                <span>Audio: {currentLang.name}</span>
              </div>
            </div>

            {/* Actual HTML5 Video Player */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', backgroundColor: '#000' }}>
              <video
                key={currentLang.file}
                ref={videoRef}
                src={currentLang.file}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block'
                }}
              >
                Your browser does not support HTML5 video playback. Please upgrade your browser to view this tour.
              </video>

              {/* Big Initial Play Button Overlay (fades out once clicked) */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlayToggle}
                  aria-label={`Play WebCraft video in ${currentLang.name}`}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '74px',
                    height: '74px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(185, 94, 60, 0.92)',
                    border: '3px solid #FBF8F2',
                    boxShadow: '0 0 30px rgba(0, 0, 0, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                    e.currentTarget.style.backgroundColor = '#B95E3C';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                    e.currentTarget.style.backgroundColor = 'rgba(185, 94, 60, 0.92)';
                  }}
                >
                  <Play size={32} fill="#fff" style={{ marginLeft: '4px' }} />
                </button>
              )}
            </div>

            {/* Video Footer Caption Strip */}
            <div
              style={{
                padding: '1rem 1.25rem',
                backgroundColor: '#121D18',
                borderTop: '1px solid rgba(240, 230, 210, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem'
              }}
            >
              <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(240, 230, 210, 0.85)', lineHeight: 1.5 }}>
                {currentLang.desc}
              </p>

              <button
                type="button"
                onClick={onStartProject}
                className="btn btn-terracotta"
                style={{
                  fontSize: '0.8rem',
                  padding: '0.45rem 0.95rem',
                  gap: '0.35rem',
                  flexShrink: 0
                }}
              >
                <span>Start Project Brief</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Highlights 3-Card Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '1rem',
              marginTop: '1.75rem'
            }}
          >
            <div
              style={{
                backgroundColor: '#203029',
                border: '1px solid rgba(240, 230, 210, 0.15)',
                borderRadius: '6px',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}
            >
              <div style={{ backgroundColor: 'rgba(185, 94, 60, 0.25)', color: '#B95E3C', padding: '0.45rem', borderRadius: '4px', flexShrink: 0 }}>
                <Zap size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.9rem', color: '#FBF8F2', display: 'block', marginBottom: '0.2rem' }}>
                  Sub-Second Speed
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'rgba(240, 230, 210, 0.7)', lineHeight: 1.4, display: 'block' }}>
                  Pure React and clean CSS engineered to load in under 800ms.
                </span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#203029',
                border: '1px solid rgba(240, 230, 210, 0.15)',
                borderRadius: '6px',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}
            >
              <div style={{ backgroundColor: 'rgba(185, 154, 91, 0.25)', color: '#B99A5B', padding: '0.45rem', borderRadius: '4px', flexShrink: 0 }}>
                <ShieldCheck size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.9rem', color: '#FBF8F2', display: 'block', marginBottom: '0.2rem' }}>
                  Built-in Google SEO
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'rgba(240, 230, 210, 0.7)', lineHeight: 1.4, display: 'block' }}>
                  Schema.org structured data, semantic HTML5, and sitemaps.
                </span>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#203029',
                border: '1px solid rgba(240, 230, 210, 0.15)',
                borderRadius: '6px',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem'
              }}
            >
              <div style={{ backgroundColor: 'rgba(56, 189, 248, 0.2)', color: '#38BDF8', padding: '0.45rem', borderRadius: '4px', flexShrink: 0 }}>
                <Layout size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '0.9rem', color: '#FBF8F2', display: 'block', marginBottom: '0.2rem' }}>
                  Conversion Engineered
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'rgba(240, 230, 210, 0.7)', lineHeight: 1.4, display: 'block' }}>
                  Frictionless forms, 1-tap call buttons, and booking flows.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

