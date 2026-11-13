import React from 'react';

export default function SkeletonScreen() {
  return (
    <div className="skeleton-overlay" aria-hidden="true">
      {/* Skeleton Navbar */}
      <div className="skeleton-nav">
        <div className="skeleton-pill skeleton-logo-box" />
        <div className="skeleton-nav-links">
          <div className="skeleton-pill" style={{ width: '60px' }} />
          <div className="skeleton-pill" style={{ width: '70px' }} />
          <div className="skeleton-pill" style={{ width: '55px' }} />
          <div className="skeleton-pill" style={{ width: '65px' }} />
          <div className="skeleton-pill" style={{ width: '60px' }} />
        </div>
        <div className="skeleton-pill skeleton-btn-box" />
      </div>

      {/* Skeleton Hero Section */}
      <div className="skeleton-container">
        <div className="skeleton-hero-grid">
          {/* Left Text Column */}
          <div className="skeleton-left">
            <div className="skeleton-pill skeleton-tag" />
            <div className="skeleton-bar skeleton-title-1" />
            <div className="skeleton-bar skeleton-title-2" />
            <div className="skeleton-bar skeleton-title-3" />
            <div className="skeleton-bar skeleton-desc-1" />
            <div className="skeleton-bar skeleton-desc-2" />

            <div className="skeleton-btn-group">
              <div className="skeleton-pill skeleton-btn-primary" />
              <div className="skeleton-pill skeleton-btn-outline" />
            </div>

            <div className="skeleton-trust-grid">
              <div className="skeleton-trust-box" />
              <div className="skeleton-trust-box" />
              <div className="skeleton-trust-box" />
              <div className="skeleton-trust-box" />
            </div>
          </div>

          {/* Right Frame Column */}
          <div className="skeleton-right">
            <div className="skeleton-frame-box">
              <div className="skeleton-frame-top" />
              <div className="skeleton-frame-art">
                <div className="skeleton-wolf-emblem" />
                <div className="skeleton-bar" style={{ width: '60%', margin: '0 auto 0.5rem' }} />
                <div className="skeleton-bar" style={{ width: '40%', margin: '0 auto' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Skeleton Industry Cards */}
        <div className="skeleton-cards-header">
          <div className="skeleton-pill" style={{ width: '120px', margin: '0 auto 0.75rem' }} />
          <div className="skeleton-bar" style={{ width: '280px', height: '28px', margin: '0 auto 1.5rem' }} />
          <div className="skeleton-filter-pills">
            <div className="skeleton-pill" style={{ width: '100px' }} />
            <div className="skeleton-pill" style={{ width: '110px' }} />
            <div className="skeleton-pill" style={{ width: '120px' }} />
            <div className="skeleton-pill" style={{ width: '100px' }} />
          </div>
        </div>

        <div className="skeleton-cards-grid">
          <div className="skeleton-card">
            <div className="skeleton-card-img" />
            <div className="skeleton-bar" style={{ width: '50%', marginBottom: '0.5rem' }} />
            <div className="skeleton-bar" style={{ width: '80%', height: '20px', marginBottom: '0.5rem' }} />
            <div className="skeleton-bar" style={{ width: '90%', height: '14px' }} />
          </div>
          <div className="skeleton-card">
            <div className="skeleton-card-img" />
            <div className="skeleton-bar" style={{ width: '50%', marginBottom: '0.5rem' }} />
            <div className="skeleton-bar" style={{ width: '80%', height: '20px', marginBottom: '0.5rem' }} />
            <div className="skeleton-bar" style={{ width: '90%', height: '14px' }} />
          </div>
          <div className="skeleton-card">
            <div className="skeleton-card-img" />
            <div className="skeleton-bar" style={{ width: '50%', marginBottom: '0.5rem' }} />
            <div className="skeleton-bar" style={{ width: '80%', height: '20px', marginBottom: '0.5rem' }} />
            <div className="skeleton-bar" style={{ width: '90%', height: '14px' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

