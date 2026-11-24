import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Smartphone } from 'lucide-react';
import { downloadWebCraftApk } from '../utils/downloadApk.js';

export default function Navbar({ onOpenContact, onOpenInstall }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalDocHeight > 0) {
        setScrollProgress((scrollY / totalDocHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services & Pricing', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Project Brief', href: '#contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`site-nav-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Transparent Logo */}
          <a href="#home" className="nav-brand-logo" onClick={(e) => handleLinkClick(e, '#home')}>
            <img
              src="/logo.png"
              alt="WebCraft — Grow Together"
              style={{ height: '46px', width: 'auto', display: 'block' }}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="nav-desktop-links" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button on Desktop & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            {/* Direct App & Shortcut Install */}
            <button
              type="button"
              onClick={onOpenInstall}
              className="btn btn-outline nav-desktop-cta"
              style={{ fontSize: '0.75rem', padding: '0.45rem 0.75rem', gap: '0.35rem', cursor: 'pointer' }}
              title="Install WebCraft (.apk) directly to Home Screen"
            >
              <Smartphone size={14} color="#B95E3C" />
              <span>Install .APK</span>
            </button>

            <button
              type="button"
              className="btn btn-terracotta nav-desktop-cta"
              onClick={onOpenContact}
            >
              <span>Project Brief</span>
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile Hamburger Button (Only on screen <= 1024px) */}
            <button
              type="button"
              className="mobile-nav-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div
          className="nav-scroll-progress"
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        />
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-drawer-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="mobile-nav-drawer-panel"
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
              <img src="/logo.png" alt="WebCraft" style={{ height: '36px' }} />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#292821' }}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.5rem' }}>
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: '1.5rem',
                    color: '#292821',
                    textDecoration: 'none'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile App & Shortcut Install button */}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenInstall) onOpenInstall();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                padding: '0.75rem 1rem',
                backgroundColor: '#E9DCBF',
                border: '1.5px solid #292821',
                borderRadius: '4px',
                color: '#253B32',
                fontWeight: 700,
                fontSize: '0.85rem',
                marginBottom: '1rem',
                cursor: 'pointer',
                width: '100%',
                textAlign: 'left'
              }}
            >
              <Smartphone size={18} color="#B95E3C" />
              <span>Install .APK (Instant)</span>
            </button>

            <button
              type="button"
              className="btn btn-terracotta"
              style={{ width: '100%', marginTop: 'auto', marginBottom: '1.5rem' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
            >
              <span>Submit Project Brief</span>
              <ArrowUpRight size={16} />
            </button>

            <div style={{ borderTop: '1px solid rgba(41,40,33,0.15)', paddingTop: '1rem', fontSize: '0.85rem' }}>
              <p style={{ color: '#59574D', marginBottom: '0.25rem' }}>Direct Agency Line:</p>
              <a href="mailto:webcraft.4iu@gmail.com" style={{ color: '#253B32', fontWeight: 700 }}>
                webcraft.4iu@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
