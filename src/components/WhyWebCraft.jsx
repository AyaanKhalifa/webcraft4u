import React from 'react';
import { Palette, Smartphone, Zap, Search, MessageSquare, Clock } from 'lucide-react';

export default function WhyWebCraft() {
  const values = [
    {
      icon: Palette,
      title: 'Custom Design',
      desc: 'No stock templates or borrowed layouts. Every interface is designed from a blank canvas to mirror your brand positioning and commercial objectives.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Development',
      desc: 'Tested fluid layouts from 160px smartwatches up to 8K presentation monitors. Fluid clamp() scales, container queries, and zero clipped elements.'
    },
    {
      icon: Zap,
      title: 'Performance-Focused',
      desc: 'Engineered for sub-second page loads. We compress assets, eliminate bloat, minimize third-party scripts, and target pristine Core Web Vitals.'
    },
    {
      icon: Search,
      title: 'SEO Foundations',
      desc: 'Technical search hygiene from day one: Schema.org structured data, semantic HTML5, canonical URLs, XML sitemaps, and robots.txt configuration.'
    },
    {
      icon: MessageSquare,
      title: 'Clear Communication',
      desc: 'Direct collaboration with senior engineers and designers. Regular video milestone check-ins, transparent timelines, and prompt replies within 24 hours.'
    },
    {
      icon: Clock,
      title: 'Reliable Delivery',
      desc: 'Realistic, disciplined project scopes. We commit to agreed launch dates and provide continuous post-launch warranty support.'
    }
  ];

  return (
    <section
      style={{
        paddingBlock: 'var(--space-2xl)',
        backgroundColor: '#FBF8F2',
        borderBottom: 'var(--border-editorial)'
      }}
      id="why-us"
    >
      <div className="container">
        
        <div className="editorial-header">
          <div className="editorial-tag gold">
            <span>Genuine Principles</span>
          </div>
          <h2>Why Ambitious Businesses Partner With WebCraft</h2>
          <p style={{ color: '#59574D', fontSize: '1.05rem', lineHeight: 1.6 }}>
            We don't offer unrealistic vanity promises. We offer disciplined digital craftsmanship and measurable engineering rigor.
          </p>
        </div>

        <div className="why-values-grid">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={v.title}
                style={{
                  backgroundColor: '#F0E6D2',
                  border: '1.5px solid #292821',
                  borderRadius: 'var(--radius-sm)',
                  padding: '2rem',
                  boxShadow: '4px 4px 0px rgba(41,40,33,0.85)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    backgroundColor: '#253B32',
                    color: '#F0E6D2',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem'
                  }}
                >
                  <Icon size={22} />
                </div>

                <h3 style={{ fontSize: '1.35rem', color: '#253B32', marginBottom: '0.75rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#59574D', lineHeight: 1.6, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

