import React from 'react';
import { Award, Code2, Eye, Flame } from 'lucide-react';

export default function BrandIntro() {
  return (
    <section
      style={{
        paddingBlock: 'var(--space-2xl)',
        backgroundColor: '#E9DCBF',
        borderBottom: 'var(--border-editorial)'
      }}
      id="about"
    >
      <div className="container">
        <div className="brand-intro-grid">
          
          {/* Left: Editorial Statement */}
          <div>
            <div className="editorial-tag terracotta">
              <span>About WebCraft</span>
            </div>

            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                color: '#253B32',
                marginBottom: '1.25rem',
                lineHeight: 1.15
              }}
            >
              Custom Websites Built for Real Results.
            </h2>

            <p
              style={{
                fontSize: 'var(--text-base)',
                color: '#292821',
                lineHeight: 1.7,
                marginBottom: '1.25rem'
              }}
            >
              Most websites today are slow, loaded with clunky templates, and hard to update. We take a different approach: building clean, lightweight websites that look great, load in under a second, and represent your business with authority.
            </p>

            <p
              style={{
                fontSize: 'var(--text-base)',
                color: '#59574D',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}
            >
              Whether you run a clinic, an e-commerce shop, a salon, or a local trade company, we combine thoughtful design, responsive React code, and Google SEO foundations to help you turn visitors into clients.
            </p>

            <div
              style={{
                padding: '1.25rem 1.5rem',
                backgroundColor: '#F0E6D2',
                borderLeft: '4px solid #B95E3C',
                borderTop: '1px solid rgba(41,40,33,0.1)',
                borderRight: '1px solid rgba(41,40,33,0.1)',
                borderBottom: '1px solid rgba(41,40,33,0.1)',
                borderRadius: '0 4px 4px 0'
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontStyle: 'italic',
                  fontSize: '1.1rem',
                  color: '#253B32',
                  margin: 0
                }}
              >
                “We focus on what actually moves the needle: clean design, fast performance, and more inquiries for your business.”
              </p>
            </div>
          </div>

          {/* Right: Distinctive Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div
              style={{
                backgroundColor: '#FBF8F2',
                border: '1.5px solid #292821',
                padding: '1.75rem',
                boxShadow: '4px 4px 0px #253B32'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#B95E3C', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.85rem' }}>01 /</span>
                <h3 style={{ fontSize: '1.35rem', color: '#253B32', margin: 0 }}>Thoughtful Design</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#59574D', margin: 0, lineHeight: 1.6 }}>
                Clear visual hierarchy, readable typography, and balanced layout that makes your brand look established, trustworthy, and modern.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FBF8F2',
                border: '1.5px solid #292821',
                padding: '1.75rem',
                boxShadow: '4px 4px 0px #B95E3C'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#B95E3C', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.85rem' }}>02 /</span>
                <h3 style={{ fontSize: '1.35rem', color: '#253B32', margin: 0 }}>Fast Performance</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#59574D', margin: 0, lineHeight: 1.6 }}>
                Built with clean React and modern web standards. Fast load times under 1 second, zero bloat, and smooth performance on every device.
              </p>
            </div>

            <div
              style={{
                backgroundColor: '#FBF8F2',
                border: '1.5px solid #292821',
                padding: '1.75rem',
                boxShadow: '4px 4px 0px #B99A5B'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <span style={{ color: '#B95E3C', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: '0.85rem' }}>03 /</span>
                <h3 style={{ fontSize: '1.35rem', color: '#253B32', margin: 0 }}>Built to Convert</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#59574D', margin: 0, lineHeight: 1.6 }}>
                Designed around your business goals — simple contact forms, 1-tap call buttons, appointment scheduling, and clear calls-to-action.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

