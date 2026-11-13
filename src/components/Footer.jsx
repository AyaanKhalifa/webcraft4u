import React from 'react';
import { Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { downloadWebCraftApk } from '../utils/downloadApk.js';

export default function Footer({ onOpenPrivacy, onOpenTerms, onOpenInstall, onReplayShutter }) {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        
        <div className="footer-main-grid">
          
          {/* Brand Info */}
          <div>
            <div className="footer-logo-box">
              {/* Official logo.png */}
              <img src="/logo.png" alt="WebCraft" style={{ height: '44px', width: 'auto' }} />
            </div>
            <p
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: '#F0E6D2',
                marginBottom: '1rem',
                lineHeight: 1.5
              }}
            >
              Old-school craftsmanship. <br />New-age possibilities.
            </p>
            <p style={{ fontSize: '0.85rem', color: 'rgba(240,230,210,0.7)', lineHeight: 1.6, maxWidth: '320px' }}>
              Crafting digital experiences that grow your business through bespoke design, responsive code, and search dominance.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              <a
                href="https://www.instagram.com/webcraft4u/"
                target="_blank"
                rel="noopener"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  backgroundColor: 'rgba(240,230,210,0.1)',
                  borderRadius: '2px',
                  fontSize: '0.75rem',
                  color: '#F0E6D2',
                  border: '1px solid rgba(240,230,210,0.2)'
                }}
              >
                <Instagram size={14} color="#B99A5B" />
                <span>@webcraft4u</span>
              </a>

              <a
                href="mailto:webcraft.4iu@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.4rem 0.85rem',
                  backgroundColor: 'rgba(240,230,210,0.1)',
                  borderRadius: '2px',
                  fontSize: '0.75rem',
                  color: '#F0E6D2',
                  border: '1px solid rgba(240,230,210,0.2)'
                }}
              >
                <Mail size={14} color="#B95E3C" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#B99A5B',
                marginBottom: '1.25rem'
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><a href="#home" onClick={(e) => handleScrollTo(e, '#home')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Home</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Services</a></li>
              <li><a href="#work" onClick={(e) => handleScrollTo(e, '#work')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Selected Work</a></li>
              <li><a href="#process" onClick={(e) => handleScrollTo(e, '#process')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Our Process</a></li>
              <li><a href="#why-us" onClick={(e) => handleScrollTo(e, '#why-us')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Why WebCraft</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Contact</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#B99A5B',
                marginBottom: '1.25rem'
              }}
            >
              Disciplines
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Website Design</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Website Development</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>E-commerce Websites</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Business Websites</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Website Redesign</a></li>
              <li><a href="#services" onClick={(e) => handleScrollTo(e, '#services')} style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.875rem' }}>Responsive Web Experiences</a></li>
            </ul>
          </div>

          {/* Direct Line */}
          <div>
            <h4
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#B99A5B',
                marginBottom: '1.25rem'
              }}
            >
              Agency Connection
            </h4>
            <div
              style={{
                backgroundColor: 'rgba(240,230,210,0.06)',
                border: '1px solid rgba(240,230,210,0.15)',
                padding: '1.25rem',
                borderRadius: '4px'
              }}
            >
              <span style={{ fontSize: '0.75rem', color: 'rgba(240,230,210,0.6)', textTransform: 'uppercase', display: 'block', marginBottom: '0.25rem' }}>
                Primary Inbox
              </span>
              <a href="mailto:webcraft.4iu@gmail.com" style={{ color: '#B99A5B', fontWeight: 700, fontSize: '0.9rem', wordBreak: 'break-all' }}>
                webcraft.4iu@gmail.com
              </a>
              <p style={{ fontSize: '0.75rem', color: 'rgba(240,230,210,0.6)', marginTop: '0.75rem', marginBlockEnd: 0 }}>
                Initial consultations answered within 12–24 hours.
              </p>
            </div>

            {/* Android APK Direct Chrome Download */}
            <div
              style={{
                marginTop: '1rem',
                backgroundColor: 'rgba(185, 94, 60, 0.15)',
                border: '1px solid rgba(185, 94, 60, 0.35)',
                padding: '0.85rem 1rem',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '0.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <img
                  src="/favicon/android-chrome-192x192.png"
                  alt="WebCraft Android Favicon"
                  style={{ width: '28px', height: '28px', borderRadius: '4px', border: '1px solid rgba(240,230,210,0.3)' }}
                />
                <div>
                  <strong style={{ fontSize: '0.8rem', color: '#FBF8F2', display: 'block' }}>WebCraft App Shortcut</strong>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(240,230,210,0.6)' }}>1-Tap Browser Auto-Install</span>
                </div>
              </div>
              <button
                type="button"
                onClick={onOpenInstall}
                className="btn btn-terracotta"
                style={{ fontSize: '0.75rem', padding: '0.4rem 0.75rem', cursor: 'pointer' }}
              >
                Install
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Links */}
        <div className="footer-sub-links">
          <div>
            &copy; {currentYear} WebCraft. All rights reserved. Heritage Retro × Modern Editorial.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
            <button
              type="button"
              onClick={onOpenPrivacy}
              style={{ background: 'none', border: 'none', color: 'rgba(240,230,210,0.6)', cursor: 'pointer', fontSize: '0.75rem', textDecoration: 'underline' }}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={onOpenTerms}
              style={{ background: 'none', border: 'none', color: 'rgba(240,230,210,0.6)', cursor: 'pointer', fontSize: '0.75rem', textDecoration: 'underline' }}
            >
              Terms and Conditions
            </button>
            {onReplayShutter && (
              <button
                type="button"
                onClick={onReplayShutter}
                style={{
                  background: 'rgba(185,154,91,0.15)',
                  border: '1px solid rgba(185,154,91,0.3)',
                  color: '#B99A5B',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '2px',
                  fontFamily: "'JetBrains Mono', monospace"
                }}
              >
                Replay Shutter
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}

