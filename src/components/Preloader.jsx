import React, { useState, useEffect } from 'react';
import SkeletonScreen from './SkeletonScreen.jsx';
import { ShieldCheck, Wrench, Lock } from 'lucide-react';

export default function Preloader({ onComplete }) {
  // Phase states: 'closed' -> 'opening' -> 'revealed' -> complete
  const [shutterState, setShutterState] = useState('closed'); // 'closed' | 'opening' | 'revealed'
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Respect user's motion preference
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      onComplete?.();
      return;
    }

    // Progress counter for workshop calibration
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 10;
      });
    }, 80);

    // Timeline:
    // 0ms - 900ms: Shutter closed, systems check, progress reaches 100%
    // 950ms: Shutter starts rolling up (takes 1.2s to lift)
    // 2150ms: Shutter fully rolled into ceiling, skeleton wireframe is visible and cross-fading
    // 2500ms: Fully complete, trigger onComplete()
    const openTimer = setTimeout(() => {
      setShutterState('opening');
    }, 950);

    const revealTimer = setTimeout(() => {
      setShutterState('revealed');
    }, 2100);

    const finishTimer = setTimeout(() => {
      onComplete?.();
    }, 2550);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(openTimer);
      clearTimeout(revealTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setShutterState('revealed');
    setTimeout(() => {
      onComplete?.();
    }, 150);
  };

  // Generate 18 individual horizontal corrugated steel slats for realistic rolling curtain
  const slats = Array.from({ length: 18 }, (_, i) => i);

  return (
    <div
      className={`preloader-stage ${shutterState === 'revealed' ? 'preloader-fade-out' : ''}`}
      role="status"
      aria-label="WebCraft Garage Shutter Loading Screen"
    >
      {/* 1. Underlying High-Fidelity Skeleton Screen (revealed as shutter rolls up) */}
      <SkeletonScreen />

      {/* 2. Top Shutter Roll Housing Drum (The industrial box at the top where shutter rolls into) */}
      <div className="shutter-housing-drum">
        <div className="housing-drum-rivets">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <div className="housing-drum-plate">
          <span className="housing-drum-dot" />
          <span>WEBCRAFT WORKSHOP ROLL-SYSTEM • BESPOKE CODE & DESIGN</span>
          <span className="housing-drum-dot" />
        </div>
      </div>

      {/* 3. The Garage Shutter Curtain Assembly (Rolls vertically upward) */}
      <div
        className={`garage-shutter-curtain ${shutterState === 'opening' || shutterState === 'revealed' ? 'shutter-lift-up' : ''}`}
      >
        {/* Left Vertical Steel Track */}
        <div className="shutter-guide-track track-left">
          <div className="track-bolts">
            {Array.from({ length: 12 }).map((_, idx) => (
              <span key={idx} className="track-bolt" />
            ))}
          </div>
        </div>

        {/* Right Vertical Steel Track */}
        <div className="shutter-guide-track track-right">
          <div className="track-bolts">
            {Array.from({ length: 12 }).map((_, idx) => (
              <span key={idx} className="track-bolt" />
            ))}
          </div>
        </div>

        {/* The Corrugated Steel Slats */}
        <div className="shutter-slats-wrapper">
          {slats.map((slat) => (
            <div key={slat} className="shutter-slat">
              <span className="slat-groove-highlight" />
              <span className="slat-groove-shadow" />
            </div>
          ))}

          {/* Central Workshop Embossed Badge Plate */}
          <div className="shutter-center-badge">
            <div className="shutter-badge-inner">
              <div className="shutter-logo-container">
                <img
                  src="/logo.png"
                  alt="WebCraft Official Wolf Logo"
                  className="shutter-logo-img"
                />
              </div>

              <div className="shutter-badge-info">
                <span className="shutter-badge-tagline">
                  OLD-SCHOOL CRAFTSMANSHIP • NEW-AGE POSSIBILITIES
                </span>
                
                <div className="shutter-status-pill">
                  <span className="status-blinker" />
                  <span className="status-text">
                    {shutterState === 'closed'
                      ? `DISENGAGING LOCKS... ${progress}%`
                      : 'WORKSHOP OPEN • WELCOME'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heavy Steel Bottom Lift Bar with Dual Industrial Handles */}
        <div className="shutter-bottom-bar">
          <div className="hazard-warning-strip" />
          
          <div className="shutter-handles-container">
            <div className="shutter-handle">
              <div className="handle-bracket-left" />
              <div className="handle-grip-bar" />
              <div className="handle-bracket-right" />
            </div>

            <div className="shutter-lock-plate">
              <Lock size={12} color="#B99A5B" />
              <span>SAFETY INTERLOCK RELEASED</span>
            </div>

            <div className="shutter-handle">
              <div className="handle-bracket-left" />
              <div className="handle-grip-bar" />
              <div className="handle-bracket-right" />
            </div>
          </div>
        </div>
      </div>

      {/* Skip Button for instant bypass */}
      <button
        type="button"
        className="shutter-skip-btn"
        onClick={handleSkip}
        aria-label="Skip shutter animation"
      >
        Skip Intro &times;
      </button>
    </div>
  );
}
