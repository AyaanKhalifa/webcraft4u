import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Layers, ShoppingBag, Briefcase, RefreshCw, Smartphone, Plus, Check } from 'lucide-react';

export default function Services({ onSelectService }) {
  // Custom Service & Price Configurator State
  const [selectedBaseService, setSelectedBaseService] = useState('clinic');
  const [selectedPageCount, setSelectedPageCount] = useState(5);
  const [selectedAddons, setSelectedAddons] = useState(['booking', 'seo']);
  const [deliverySpeed, setDeliverySpeed] = useState('standard');

  const baseServiceOptions = [
    { id: 'clinic', name: 'Clinic & Healthcare Practice', basePrice: 650, baseWeeks: 3 },
    { id: 'shop', name: 'Retail Shop & E-Commerce', basePrice: 850, baseWeeks: 4 },
    { id: 'barbershop', name: 'Barbershop & Salon Booking Hub', basePrice: 550, baseWeeks: 2 },
    { id: 'software', name: 'Software / SaaS Product Landing', basePrice: 750, baseWeeks: 3 },
    { id: 'trades', name: 'Local Trades & Contractor Lead Site', basePrice: 500, baseWeeks: 2 },
    { id: 'restaurant', name: 'Restaurant / Café Digital Menu & Table Booking', basePrice: 600, baseWeeks: 2 }
  ];

  const availableAddons = [
    { id: 'booking', name: 'Live Online Appointment & Calendar Booking', price: 150 },
    { id: 'payment', name: 'Stripe & Apple Pay Checkout Integration', price: 200 },
    { id: 'seo', name: 'Google Local Business & Schema.org SEO Setup', price: 120 },
    { id: 'sms', name: 'Automated SMS & Email Client Reminders', price: 100 },
    { id: 'speed', name: 'Sub-Second Speed & Core Web Vitals Guarantee', price: 90 },
    { id: 'cms', name: 'Easy Content Management Dashboard (CMS)', price: 150 }
  ];

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate live custom price
  const currentBase = baseServiceOptions.find((s) => s.id === selectedBaseService) || baseServiceOptions[0];
  const pagesCost = (selectedPageCount - 1) * 60;
  const addonsCost = selectedAddons.reduce((acc, currId) => {
    const item = availableAddons.find((a) => a.id === currId);
    return acc + (item ? item.price : 0);
  }, 0);

  const speedMultiplier = deliverySpeed === 'rush' ? 1.3 : deliverySpeed === 'relaxed' ? 0.92 : 1.0;
  const calculatedCustomPrice = Math.round((currentBase.basePrice + pagesCost + addonsCost) * speedMultiplier);
  const calculatedWeeks = Math.max(1, Math.round((currentBase.baseWeeks + Math.floor(selectedPageCount / 4)) * (deliverySpeed === 'rush' ? 0.65 : 1)));

  const handleCustomPackageSubmit = () => {
    const addonNames = selectedAddons.map((id) => availableAddons.find((a) => a.id === id)?.name).filter(Boolean).join(', ');
    const packageSummary = `Custom Package: ${currentBase.name} (${selectedPageCount} Pages) with [${addonNames}] — Estimated $${calculatedCustomPrice}`;
    onSelectService?.(packageSummary);
  };

  // Fixed Pricing Packages
  const pricingPackages = [
    {
      name: 'Starter Foundation',
      price: '$499',
      popular: false,
      tagline: 'Ideal for barbershops, solo practices, and single-location local trades.',
      deliverables: [
        'Up to 3 Bespoke Responsive Pages',
        'Direct 1-Tap Call & Email Action Buttons',
        'Google Business Profile Integration',
        'Sub-Second Mobile Load Times',
        'Basic Contact & Lead Capture Form',
        '2-Week Target Delivery'
      ],
      ctaText: 'Select Starter Plan'
    },
    {
      name: 'Business Engine',
      price: '$899',
      popular: true,
      tagline: 'Ideal for medical clinics, retail shops, and high-volume local services.',
      deliverables: [
        'Up to 6 Custom Tailored Pages',
        'Online Booking / Product Catalog Flow',
        'Local SEO & Schema.org Structured Data',
        'Frictionless Mobile Payment or Appointment Intake',
        'Full Analytics & Google Search Console Setup',
        '30-Day Post-Launch Warranty Support'
      ],
      ctaText: 'Select Business Plan'
    },
    {
      name: 'Custom Flagship',
      price: '$1,499',
      popular: false,
      tagline: 'Ideal for software startups, e-commerce brands, and multi-location businesses.',
      deliverables: [
        'Up to 12 Bespoke Pages / Templates',
        'Full E-Commerce Cart or SaaS Onboarding Funnel',
        'Custom Interactive Tools / Calculators',
        'API & CRM / Email Marketing Synchronisation',
        'Guaranteed 95+ Core Web Vitals Performance',
        'Dedicated Senior Engineer Support'
      ],
      ctaText: 'Select Flagship Plan'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        
        {/* Section Header */}
        <div className="editorial-header">
          <div className="editorial-tag gold">
            <span>Tailored Services & Transparent Pricing</span>
          </div>
          <h2>Custom Services & Honest Prices</h2>
          <p style={{ color: '#59574D', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Every business has unique needs. Choose one of our transparent fixed packages or use the live calculator below to configure your custom scope and price.
          </p>
        </div>

        {/* 3 Transparent Pricing Cards */}
        <div className="pricing-packages-grid">
          {pricingPackages.map((pkg) => (
            <div
              key={pkg.name}
              style={{
                backgroundColor: pkg.popular ? '#FBF8F2' : '#F0E6D2',
                border: pkg.popular ? '2px solid #B95E3C' : '1.5px solid #292821',
                borderRadius: 'var(--radius-sm)',
                padding: '2.5rem 2rem',
                boxShadow: pkg.popular ? '6px 6px 0px #B95E3C' : '4px 4px 0px rgba(41,40,33,0.85)',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
              }}
            >
              {pkg.popular && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#B95E3C',
                    color: '#fff',
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '2px',
                    letterSpacing: '0.06em'
                  }}
                >
                  Most Popular for Local Growth
                </span>
              )}

              <h3 style={{ fontSize: '1.5rem', color: '#253B32', marginBottom: '0.35rem' }}>
                {pkg.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#59574D', marginBottom: '1.25rem', minHeight: '40px', lineHeight: 1.5 }}>
                {pkg.tagline}
              </p>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '1.5rem' }}>
                <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '2.75rem', color: '#253B32', lineHeight: 1 }}>
                  {pkg.price}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#7A786E', fontFamily: "'JetBrains Mono', monospace" }}>
                  one-time investment
                </span>
              </div>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem', flexGrow: 1, padding: 0 }}>
                {pkg.deliverables.map((item, idx) => (
                  <li key={idx} style={{ fontSize: '0.85rem', color: '#292821', display: 'flex', alignItems: 'flex-start', gap: '0.5rem', lineHeight: 1.5 }}>
                    <CheckCircle2 size={16} color="#B95E3C" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={pkg.popular ? 'btn btn-terracotta' : 'btn btn-primary'}
                style={{ width: '100%' }}
                onClick={() => onSelectService?.(`${pkg.name} (${pkg.price})`)}
              >
                <span>{pkg.ctaText}</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Custom Service & Price Configurator Tool */}
        <div className="configurator-wrapper-box">
          <div className="configurator-layout-grid">
            
            {/* Left: Custom Options */}
            <div>
              <div className="editorial-tag gold" style={{ backgroundColor: 'rgba(185,154,91,0.2)', color: '#F0E6D2' }}>
                <span>Custom Configurator</span>
              </div>
              <h3 style={{ color: '#FBF8F2', fontSize: 'var(--text-2xl)', marginBottom: '0.5rem' }}>
                Build Your Custom Service & Price
              </h3>
              <p style={{ color: 'rgba(240,230,210,0.8)', fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Pick your industry foundation, choose your required pages, and toggle the exact features you need to calculate an instant, transparent quote.
              </p>

              {/* Step 1: Base Business Type */}
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.45rem', color: '#B99A5B' }}>
                  1. Select Industry Foundation:
                </label>
                <div className="configurator-industry-grid">
                  {baseServiceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedBaseService(opt.id)}
                      style={{
                        padding: '0.65rem 0.75rem',
                        textAlign: 'left',
                        backgroundColor: selectedBaseService === opt.id ? '#B95E3C' : '#192721',
                        color: selectedBaseService === opt.id ? '#fff' : '#F0E6D2',
                        border: '1px solid rgba(240,230,210,0.2)',
                        borderRadius: '3px',
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {opt.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Page Count Slider */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', textTransform: 'uppercase', color: '#B99A5B', marginBottom: '0.45rem' }}>
                  <span>2. Page Volume:</span>
                  <strong style={{ color: '#FBF8F2', fontFamily: "'JetBrains Mono', monospace" }}>{selectedPageCount} Pages</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={selectedPageCount}
                  onChange={(e) => setSelectedPageCount(parseInt(e.target.value, 10))}
                  style={{ width: '100%', accentColor: '#B95E3C' }}
                />
              </div>

              {/* Step 3: Add-on Capabilities */}
              <div>
                <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.45rem', color: '#B99A5B' }}>
                  3. Select Custom Add-on Capabilities:
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {availableAddons.map((addon) => {
                    const active = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '0.6rem 0.85rem',
                          backgroundColor: active ? 'rgba(185,94,60,0.25)' : '#192721',
                          border: active ? '1px solid #B95E3C' : '1px solid rgba(240,230,210,0.15)',
                          borderRadius: '3px',
                          color: '#F0E6D2',
                          fontSize: '0.8rem',
                          cursor: 'pointer',
                          textAlign: 'left'
                        }}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span style={{ width: '16px', height: '16px', borderRadius: '2px', border: '1px solid #B99A5B', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: active ? '#B95E3C' : 'transparent' }}>
                            {active && <Check size={12} color="#fff" />}
                          </span>
                          {addon.name}
                        </span>
                        <strong style={{ color: '#B99A5B', fontFamily: "'JetBrains Mono', monospace", marginLeft: '0.5rem' }}>
                          +${addon.price}
                        </strong>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right: Live Custom Price Summary Card */}
            <div className="configurator-summary-card">
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#B99A5B' }}>
                Your Custom Quote
              </span>

              <div
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '3rem',
                  color: '#FBF8F2',
                  marginBlock: '0.5rem',
                  lineHeight: 1
                }}
              >
                ${calculatedCustomPrice}
              </div>

              <p style={{ fontSize: '0.85rem', color: '#B99A5B', marginBottom: '1.25rem', fontFamily: "'JetBrains Mono', monospace" }}>
                Target Delivery: ~{calculatedWeeks} to {calculatedWeeks + 1} Weeks
              </p>

              <div style={{ textAlign: 'left', borderTop: '1px solid rgba(240,230,210,0.15)', paddingTop: '1rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'rgba(240,230,210,0.8)' }}>
                <p style={{ margin: '0 0 0.35rem 0' }}>• <strong>Foundation:</strong> {currentBase.name}</p>
                <p style={{ margin: '0 0 0.35rem 0' }}>• <strong>Scope:</strong> {selectedPageCount} Custom Pages</p>
                <p style={{ margin: '0 0 0.35rem 0' }}>• <strong>Add-ons:</strong> {selectedAddons.length} Selected</p>
                <p style={{ margin: '0', color: '#B99A5B' }}>• <strong>Includes:</strong> 100% Bespoke Code & Mobile Responsive</p>
              </div>

              <button
                type="button"
                className="btn btn-terracotta"
                style={{ width: '100%', padding: '0.85rem 1rem' }}
                onClick={handleCustomPackageSubmit}
              >
                <span>Lock In This Custom Quote</span>
                <ArrowUpRight size={16} />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
