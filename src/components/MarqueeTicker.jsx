import React from 'react';
import { Code2, Zap, ShieldCheck, Search, Layout, Smartphone, Database, CheckCircle2, Sparkles, Cpu } from 'lucide-react';

export default function MarqueeTicker() {
  const marqueeItems = [
    { label: 'React.js & Clean Code', icon: Code2 },
    { label: 'Fast Load Speed (< 1s)', icon: Zap },
    { label: 'Google Local & Schema SEO', icon: Search },
    { label: 'Mobile-First Responsive Design', icon: Smartphone },
    { label: '95+ Google Speed Score', icon: CheckCircle2 },
    { label: 'Online Booking & Forms', icon: Layout },
    { label: 'Stripe & Apple Pay Integration', icon: ShieldCheck },
    { label: 'Zero Template Bloat', icon: Cpu },
    { label: 'Custom Modern Web Design', icon: Sparkles }
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

