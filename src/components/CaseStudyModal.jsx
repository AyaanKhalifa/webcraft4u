import React from 'react';
import { X, CheckCircle2, ArrowUpRight, ShieldCheck, Clock } from 'lucide-react';

export default function CaseStudyModal({ project, onClose, onStartSimilar }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: 'rgba(25, 39, 33, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="caseStudyTitle"
    >
      <div
        style={{
          backgroundColor: '#192721',
          color: '#F0E6D2',
          border: '2px solid #B99A5B',
          borderRadius: 'var(--radius-sm)',
          maxWidth: '740px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: 'clamp(2rem, 4vw, 3rem)',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            color: 'rgba(240, 230, 210, 0.7)',
            cursor: 'pointer',
            padding: '4px'
          }}
          aria-label="Close Blueprint Details"
        >
          <X size={24} />
        </button>

        <div className="editorial-tag gold" style={{ marginBottom: '0.75rem' }}>
          <span>{project.catLabel || 'Industry Blueprint'}</span>
        </div>

        <h2 id="caseStudyTitle" style={{ color: '#FBF8F2', fontSize: '2.25rem', marginBottom: '0.5rem' }}>
          {project.title}
        </h2>

        <p style={{ color: '#B99A5B', fontSize: '1rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
          "{project.tagline}"
        </p>

        {/* Thumbnail Preview */}
        <div style={{ borderRadius: '4px', overflow: 'hidden', border: '1px solid rgba(240,230,210,0.2)', marginBottom: '1.75rem' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', aspectRatio: '16/9', objectFit: 'cover' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.925rem', lineHeight: 1.7 }}>
          <div>
            <h4 style={{ color: '#B99A5B', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              The Problem We Solve For This Industry
            </h4>
            <p style={{ color: 'rgba(240, 230, 210, 0.85)', margin: 0 }}>
              {project.summary}
            </p>
          </div>

          <div>
            <h4 style={{ color: '#B99A5B', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
              Essential Features Engineered Into This Solution
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: 0, padding: 0 }}>
              {project.coreFeatures?.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#B95E3C" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ color: 'rgba(240, 230, 210, 0.95)' }}>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-meta-grid">
            <div>
              <span style={{ color: '#B99A5B', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase', display: 'block' }}>
                Ideal For
              </span>
              <strong style={{ color: '#FBF8F2', fontSize: '0.85rem' }}>
                {project.idealBusinesses}
              </strong>
            </div>

            <div>
              <span style={{ color: '#B99A5B', fontFamily: "'JetBrains Mono', monospace", fontSize: '0.75rem', textTransform: 'uppercase', display: 'block' }}>
                Estimated Sprint Window
              </span>
              <strong style={{ color: '#FBF8F2', fontSize: '0.85rem' }}>
                {project.deliveryTime}
              </strong>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(240, 230, 210, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(240,230,210,0.6)', margin: 0 }}>
            Ready to deploy this blueprint for your business?
          </p>

          <button
            type="button"
            className="btn btn-terracotta"
            onClick={() => {
              onClose();
              onStartSimilar(project.title);
            }}
          >
            <span>Commission This For My Business</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
