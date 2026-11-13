import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function LegalModal({ type, onClose }) {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

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
      aria-labelledby="legalTitle"
    >
      <div
        style={{
          backgroundColor: '#FBF8F2',
          color: '#292821',
          border: '2px solid #292821',
          borderRadius: 'var(--radius-sm)',
          maxWidth: '680px',
          width: '100%',
          maxHeight: '85vh',
          overflowY: 'auto',
          padding: 'clamp(2rem, 4vw, 3rem)',
          position: 'relative',
          boxShadow: '6px 6px 0px #253B32'
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
            color: '#292821',
            cursor: 'pointer',
            padding: '4px'
          }}
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="editorial-tag terracotta" style={{ marginBottom: '0.75rem' }}>
          <span>Legal & Transparency</span>
        </div>

        <h2 id="legalTitle" style={{ fontSize: '2rem', color: '#253B32', marginBottom: '1.25rem' }}>
          {isPrivacy ? 'Privacy Policy' : 'Terms and Conditions'}
        </h2>

        <div style={{ fontSize: '0.9rem', color: '#59574D', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {isPrivacy ? (
            <>
              <p>
                <strong>Effective Date:</strong> January 1, 2026
              </p>
              <p>
                At <strong>WebCraft</strong>, we respect your privacy and are committed to protecting any personal data you share with us. This Privacy Policy details how we handle information submitted through our website and digital channels.
              </p>
              <h4 style={{ color: '#253B32', fontSize: '1.1rem', marginBlockStart: '0.5rem' }}>Information We Collect</h4>
              <p>
                When you submit an enquiry via our website, we collect only the information you voluntarily provide: your name, email address, telephone number (if provided), business name, service requirements, budget selection, and project description.
              </p>
              <h4 style={{ color: '#253B32', fontSize: '1.1rem', marginBlockStart: '0.5rem' }}>How We Use Your Information</h4>
              <p>
                We use this information exclusively to communicate regarding your project brief, prepare custom architectural proposals, and conduct standard client onboarding. We never sell, rent, or trade your contact information to third parties.
              </p>
              <h4 style={{ color: '#253B32', fontSize: '1.1rem', marginBlockStart: '0.5rem' }}>Data Security</h4>
              <p>
                Inquiries are encrypted and transmitted directly to our secure agency mailbox at <code>webcraft.4iu@gmail.com</code>. We enforce strict data hygiene and access limits.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> January 1, 2026
              </p>
              <p>
                Welcome to <strong>WebCraft</strong>. By accessing our website or engaging our services, you agree to comply with and be bound by the following terms and conditions.
              </p>
              <h4 style={{ color: '#253B32', fontSize: '1.1rem', marginBlockStart: '0.5rem' }}>Scope of Services</h4>
              <p>
                WebCraft provides custom website design, web engineering, e-commerce development, and search engine optimization services. Detailed deliverables, milestone schedules, and payment schedules are governed by individual client service agreements.
              </p>
              <h4 style={{ color: '#253B32', fontSize: '1.1rem', marginBlockStart: '0.5rem' }}>Intellectual Property</h4>
              <p>
                Upon final invoice settlement, full intellectual property rights for custom code, assets, and design files produced specifically for the client are assigned to the client, unless otherwise agreed in writing.
              </p>
              <h4 style={{ color: '#253B32', fontSize: '1.1rem', marginBlockStart: '0.5rem' }}>Showcase Representation</h4>
              <p>
                All fictional projects displayed on our website are explicitly marked as "Concept Showcase" and do not represent completed commercial client endorsements.
              </p>
            </>
          )}
        </div>

        <div style={{ marginTop: '2rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(41,40,33,0.15)', textAlign: 'right' }}>
          <button type="button" className="btn btn-outline" onClick={onClose}>
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}

