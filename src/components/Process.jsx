import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Unearthing Commercial DNA',
      desc: 'We dissect your competitive landscape, ideal customer personas, conversion bottlenecks, and primary business goals to establish a clear strategy.'
    },
    {
      num: '02',
      title: 'Plan',
      tagline: 'Architectural Blueprint',
      desc: 'We map site topology, technical SEO schema hierarchy, conversion paths, and user flow wireframes before drawing a single visual asset.'
    },
    {
      num: '03',
      title: 'Design',
      tagline: 'Bespoke Visual Expression',
      desc: 'We craft high-fidelity art direction, distinctive editorial typography, custom vector graphics, and responsive layouts tailored exclusively to your brand.'
    },
    {
      num: '04',
      title: 'Develop',
      tagline: 'Rigorous Engineering',
      desc: 'Our engineers write clean, semantic HTML5, modern React, and performant CSS. We integrate your CMS, payment rails, and speed optimizations.'
    },
    {
      num: '05',
      title: 'Launch',
      tagline: 'Flawless Deployment',
      desc: 'We execute 50-point QA audits across all device widths from 160px smartwatches to 8K monitors, deploy zero-downtime hosting, and safeguard rankings.'
    }
  ];

  return (
    <section className="process-section" id="process">
      <div className="container">
        
        <div className="editorial-header">
          <div className="editorial-tag terracotta">
            <span>Workflow & Cadence</span>
          </div>
          <h2>Our 5-Stage Creative Process</h2>
          <p style={{ color: '#59574D', fontSize: '1.05rem', lineHeight: 1.6 }}>
            A disciplined, transparent journey designed to eliminate guesswork and guarantee punctual, world-class delivery.
          </p>
        </div>

        <div className="process-steps-list">
          {steps.map((st) => (
            <div key={st.num} className="process-col">
              <span className="process-step-num">{st.num} —</span>
              <h3>{st.title}</h3>
              <span style={{ fontSize: '0.75rem', fontFamily: "'JetBrains Mono', monospace", color: '#B95E3C', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                {st.tagline}
              </span>
              <p>{st.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

