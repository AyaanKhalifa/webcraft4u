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
              <span>Brand Manifesto</span>
            </div>

            <h2
              style={{
                fontSize: 'var(--text-3xl)',
                color: '#253B32',
                marginBottom: '1.25rem',
                lineHeight: 1.15
              }}
            >
              We Reject Assembly-Line Web Design. We Practice Digital Craft.
            </h2>

            <p
              style={{
                fontSize: 'var(--text-base)',
                color: '#292821',
                lineHeight: 1.7,
                marginBottom: '1.25rem'
              }}
            >
              In a market dominated by fragile templates loaded with 40 third-party plugins that break on the next update, WebCraft represents a return to fundamental excellence.
            </p>

            <p
              style={{
                fontSize: 'var(--text-base)',
                color: '#59574D',
                lineHeight: 1.7,
                marginBottom: '1.5rem'
              }}
            >
              We approach every website like bespoke architecture: establishing rock-solid foundations, drafting intentional typography, engineering custom code line by line, and optimizing every millisecond for Google search authority.
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
                “When you partner with WebCraft, we treat your business as our own territory to protect and grow.”
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
                <h3 style={{ fontSize: '1.35rem', color: '#253B32', margin: 0 }}>Heritage Standards</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#59574D', margin: 0, lineHeight: 1.6 }}>
                Every element has intentional hierarchy. We employ editorial typography, controlled whitespace, and custom vectors so your business commands unshakeable respect.
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
                <h3 style={{ fontSize: '1.35rem', color: '#253B32', margin: 0 }}>Clean Modern Engineering</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#59574D', margin: 0, lineHeight: 1.6 }}>
                Pure React and semantic markup with zero bloat. Websites that load in under 800 milliseconds and achieve 95+ Core Web Vitals on real mobile devices.
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
                <h3 style={{ fontSize: '1.35rem', color: '#253B32', margin: 0 }}>Commercial Alignment</h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#59574D', margin: 0, lineHeight: 1.6 }}>
                We don't build digital art for vanity; we build commercial assets designed to convert casual visitors into high-paying inquiries and repeat customers.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

