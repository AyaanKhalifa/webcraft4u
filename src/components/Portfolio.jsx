import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Stethoscope, ShoppingCart, Scissors, Terminal, Wrench, UtensilsCrossed, Eye } from 'lucide-react';

export default function Portfolio({ onOpenCaseStudy, onSelectForMyBusiness }) {
  const [filter, setFilter] = useState('all');

  const industrySolutions = [
    {
      id: 'clinic',
      title: 'Medical & Dental Clinics',
      category: 'clinic',
      catLabel: 'Healthcare & Wellness',
      icon: Stethoscope,
      image: '/images/industries/clinic.jpg',
      tagline: 'Eliminate phone tag with seamless patient intake & online booking',
      summary: 'High-trust, calming digital platforms designed for dental practices, medical clinics, and wellness centers.',
      coreFeatures: [
        'Instant online appointment booking & calendar sync',
        'Mobile-friendly patient intake & medical history forms',
        'Doctor / practitioner bios, specialties & credentials',
        'Transparent service menus, accepted insurances & FAQs'
      ],
      idealBusinesses: 'Dental offices, private practices, physiotherapy clinics, wellness centers',
      deliveryTime: '2 to 4 weeks'
    },
    {
      id: 'shop',
      title: 'Retail Shops & Boutiques',
      category: 'shop',
      catLabel: 'E-Commerce & Retail',
      icon: ShoppingCart,
      image: '/images/industries/shop.jpg',
      tagline: 'Sell in-store and online with seamless inventory & checkout',
      summary: 'Conversion-engineered online storefronts for physical boutiques and independent retail brands.',
      coreFeatures: [
        'Frictionless mobile checkout (Apple Pay, Google Pay, Cards)',
        'Inventory sync between in-store POS and online catalog',
        'Local store pickup (Click & Collect) and direct shipping',
        'Customer review integration and automated order notifications'
      ],
      idealBusinesses: 'Clothing boutiques, artisan goods, specialty food stores, jewelry shops',
      deliveryTime: '3 to 5 weeks'
    },
    {
      id: 'barbershop',
      title: 'Barbershops & Beauty Salons',
      category: 'barbershop',
      catLabel: 'Grooming & Personal Care',
      icon: Scissors,
      image: '/images/industries/barbershop.jpg',
      tagline: 'Fill chairs 24/7 without taking calls while cutting hair',
      summary: 'Sleek, modern booking hubs for barbershops, hair salons, nail studios, and grooming lounges.',
      coreFeatures: [
        '24/7 chair & stylist booking with live calendar availability',
        'Photo gallery of signature haircuts, styles, and shop vibe',
        'Clear pricing tiers and add-on service menu',
        'Automated SMS & email appointment confirmations and reminders'
      ],
      idealBusinesses: 'Traditional barbershops, hair styling salons, tattoo parlors, nail studios',
      deliveryTime: '2 to 3 weeks'
    },
    {
      id: 'software',
      title: 'Software & SaaS Startups',
      category: 'software',
      catLabel: 'Tech & Digital Products',
      icon: Terminal,
      image: '/images/industries/software.jpg',
      tagline: 'Turn curious visitors into active product trials and paid users',
      summary: 'High-velocity marketing landing pages and web applications for modern software companies.',
      coreFeatures: [
        'Interactive product UI tours and live feature demos',
        'Transparent monthly/annual pricing tier comparison tables',
        'One-click sign-up, waitlist, and free-trial conversion funnels',
        'Developer-friendly changelog, documentation, and API guides'
      ],
      idealBusinesses: 'SaaS products, mobile app landing sites, developer tools, tech platforms',
      deliveryTime: '3 to 6 weeks'
    },
    {
      id: 'trades',
      title: 'Local Trades & Contractors',
      category: 'trades',
      catLabel: 'Home Services & Trades',
      icon: Wrench,
      image: '/images/industries/trades.jpg',
      tagline: 'Dominate local Google searches and capture high-value jobs',
      summary: 'Rugged, high-converting lead engines built for plumbers, electricians, builders, and roofers.',
      coreFeatures: [
        'Prominent 1-tap emergency call buttons for mobile users',
        'Interactive estimate & quote request calculation forms',
        'Interactive service area radius maps and licensing badges',
        'Before & after project galleries proving real craft'
      ],
      idealBusinesses: 'Electricians, plumbers, HVAC technicians, general contractors, roofers',
      deliveryTime: '2 to 3 weeks'
    },
    {
      id: 'restaurant',
      title: 'Restaurants, Cafés & Bars',
      category: 'restaurant',
      catLabel: 'Hospitality & Dining',
      icon: UtensilsCrossed,
      image: '/images/industries/restaurant.jpg',
      tagline: 'Fill tables and showcase your seasonal menus beautifully',
      summary: 'Atmospheric digital menus and table reservation platforms for culinary establishments.',
      coreFeatures: [
        'Fast-loading digital menu with dietary tags (vegan, GF, allergens)',
        'Direct table reservation system (OpenTable, Resy, or custom)',
        'Click-to-call, Google Maps directions, and live opening hours',
        'Private event, catering, and party enquiry intake forms'
      ],
      idealBusinesses: 'Cafés, artisan bakeries, upscale bistros, cocktail lounges, pizzerias',
      deliveryTime: '2 to 4 weeks'
    }
  ];

  const filtered = filter === 'all'
    ? industrySolutions
    : industrySolutions.filter((item) => item.category === filter);

  return (
    <section className="portfolio-section" id="work">
      <div className="container">
        
        {/* Section Header */}
        <div className="editorial-header">
          <div className="editorial-tag gold" style={{ backgroundColor: 'rgba(185,154,91,0.18)', color: '#F0E6D2' }}>
            <span>Real Industry Solutions</span>
          </div>
          <h2>Businesses We Build For</h2>
          <p style={{ color: 'rgba(240,230,210,0.85)', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Instead of presenting fake client work, explore how WebCraft delivers tailored web architectures for clinics, shops, barbershops, software companies, and local trade services.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="portfolio-filter-bar">
          {[
            { id: 'all', label: 'All Industries (6)' },
            { id: 'clinic', label: 'Clinics & Medical' },
            { id: 'shop', label: 'Shops & Retail' },
            { id: 'barbershop', label: 'Barbershops & Salons' },
            { id: 'software', label: 'Software & SaaS' },
            { id: 'trades', label: 'Trades & Contractors' },
            { id: 'restaurant', label: 'Restaurants & Cafés' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              style={{
                background: filter === tab.id ? '#B99A5B' : '#192721',
                color: filter === tab.id ? '#121D18' : 'rgba(240,230,210,0.7)',
                border: '1px solid rgba(240,230,210,0.2)',
                padding: '0.5rem 1.15rem',
                borderRadius: '4px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Real Solutions with Authentic Photography */}
        <div className="portfolio-grid">
          {filtered.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.id} className="work-card">
                {/* Real High-Res Photography Thumbnail */}
                <div className="work-thumb" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'contrast(1.03) brightness(0.96)',
                      transition: 'transform 0.4s ease'
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(18,29,24,0.7) 100%)',
                      pointerEvents: 'none'
                    }}
                  />
                  <span className="concept-badge">Industry Solution</span>
                  
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '0.75rem',
                      left: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      backgroundColor: 'rgba(25, 39, 33, 0.85)',
                      padding: '0.3rem 0.65rem',
                      borderRadius: '2px',
                      border: '1px solid rgba(185,154,91,0.3)',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <Icon size={14} color="#B99A5B" />
                    <span style={{ fontSize: '0.7rem', color: '#F0E6D2', fontFamily: "'JetBrains Mono', monospace", textTransform: 'uppercase' }}>
                      {item.catLabel}
                    </span>
                  </div>
                </div>

                <div className="work-body">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#B99A5B', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase' }}>
                      Delivery ~{item.deliveryTime}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.45rem', marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p style={{ color: '#B99A5B', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    "{item.tagline}"
                  </p>
                  <p style={{ color: 'rgba(240,230,210,0.75)', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {item.summary}
                  </p>

                  {/* Included Essentials */}
                  <div style={{ borderTop: '1px solid rgba(240,230,210,0.1)', paddingTop: '0.75rem', marginBottom: '1.25rem' }}>
                    <span style={{ fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", color: 'rgba(240,230,210,0.6)', textTransform: 'uppercase', display: 'block', marginBottom: '0.5rem' }}>
                      Key Features Built In:
                    </span>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', margin: 0, padding: 0 }}>
                      {item.coreFeatures.map((feat, idx) => (
                        <li key={idx} style={{ fontSize: '0.8rem', color: 'rgba(240,230,210,0.9)', display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                          <CheckCircle2 size={13} color="#B95E3C" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions */}
                  <div style={{ borderTop: '1px solid rgba(240,230,210,0.12)', paddingTop: '1rem', marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={() => onOpenCaseStudy?.(item)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#B99A5B',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        cursor: 'pointer'
                      }}
                    >
                      <span>Inspect Blueprint</span>
                      <ArrowUpRight size={15} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectForMyBusiness?.(item.title)}
                      className="btn btn-terracotta"
                      style={{ padding: '0.45rem 0.85rem', fontSize: '0.75rem' }}
                    >
                      <span>Build This</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
