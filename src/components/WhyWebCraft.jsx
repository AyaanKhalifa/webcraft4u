import React from 'react';
import { Palette, Smartphone, Zap, Search, MessageSquare, Clock } from 'lucide-react';

export default function WhyWebCraft() {
  const values = [
    {
      icon: Palette,
      title: 'Custom Design',
      desc: 'No generic templates. Every website is custom-crafted to fit your brand identity, services, and target customers.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      desc: 'Over 70% of web traffic is on mobile. We ensure your website looks sharp and works smoothly on every screen size.'
    },
    {
      icon: Zap,
      title: 'Fast Speed',
      desc: 'Under 1-second load times. Faster websites keep visitors engaged, reduce bounce rates, and rank higher on Google.'
    },
    {
      icon: Search,
      title: 'SEO Ready',
      desc: 'Built-in technical SEO with semantic HTML5, Schema.org tags, clean metadata, and Google search readiness from day one.'
    },
    {
      icon: MessageSquare,
      title: 'Direct Contact',
      desc: 'Direct communication with your developer. Transparent updates, quick replies within 24 hours, and clear milestones.'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      desc: 'We stick to agreed deadlines and project scopes, with post-launch support and guidance included.'
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
            <span>Why Choose Us</span>
          </div>
          <h2>Why Businesses Choose WebCraft</h2>
          <p style={{ color: '#59574D', fontSize: '1.05rem', lineHeight: 1.6 }}>
            No shortcuts, no slow templates. We build custom websites that help your business stand out and succeed online.
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

