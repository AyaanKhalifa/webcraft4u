import React from 'react';
import { Code2, Zap, ShieldCheck, Search, Layout, Smartphone, Database, CheckCircle2, Sparkles, Cpu } from 'lucide-react';

export default function MarqueeTicker() {
  const marqueeItems = [
    { label: 'React.js & Pure Frontend', icon: Code2 },
    { label: 'Sub-Second Speed (< 800ms)', icon: Zap },
    { label: 'Google Local & Schema.org SEO', icon: Search },
    { label: 'Mobile-First Responsive Architecture', icon: Smartphone },
    { label: '95+ Core Web Vitals Guaranteed', icon: CheckCircle2 },
    { label: 'Clinic Patient Intake & Booking Hubs', icon: Layout },
    { label: 'Stripe & Apple Pay Checkout', icon: ShieldCheck },
    { label: 'Bespoke Code • Zero Bloatware', icon: Cpu },
    { label: 'Heritage Craft × Modern Engineering', icon: Sparkles }
  ];

  return (
    <div className="webcraft-marquee-wrapper" aria-hidden="true">
      <div className="webcraft-marquee-track">
        {/* Double array for seamless loop */}
        {[...marqueeItems, ...marqueeItems].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="webcraft-marquee-item">
              <Icon size={15} color="#B95E3C" className="marquee-item-icon" />
              <span>{item.label}</span>
              <span className="marquee-divider">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

