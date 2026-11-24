import React from 'react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      tagline: 'Understanding Your Goals',
      desc: 'We learn about your business, target customers, and primary goals to outline a clear and effective website strategy.'
    },
    {
      num: '02',
      title: 'Plan',
      tagline: 'Structure & Wireframes',
      desc: 'We map out site navigation, key call-to-actions, and technical SEO foundations before designing visual assets.'
    },
    {
      num: '03',
      title: 'Design',
      tagline: 'UI & Visual Design',
      desc: 'We design custom layouts with clean typography, tailored color palettes, and full mobile-first responsiveness.'
    },
    {
      num: '04',
      title: 'Develop',
      tagline: 'Clean Code & Features',
      desc: 'We write modern React code and performant CSS, connect your forms and booking tools, and optimize loading speeds.'
    },
    {
      num: '05',
      title: 'Launch',
      tagline: 'Testing & Go-Live',
      desc: 'We test across phones, tablets, and desktop screens, configure SSL and search tools, and launch smoothly.'
    }
  ];

  return (
    <section className="process-section" id="process">
      <div className="container">

        <div className="editorial-header">
          <div className="editorial-tag terracotta">
            <span>Our Workflow</span>
          </div>
          <h2>Simple 5-Step Process</h2>
          <p style={{ color: '#59574D', fontSize: '1.05rem', lineHeight: 1.6 }}>
            From initial idea to live launch, we keep the process clear, fast, and transparent.
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

