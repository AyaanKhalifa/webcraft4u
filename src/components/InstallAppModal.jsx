import React from 'react';
import { X, Smartphone, Download, CheckCircle2, MoreVertical, Share2, PlusSquare, ArrowRight } from 'lucide-react';
import { downloadWebCraftApk } from '../utils/downloadApk.js';

export default function InstallAppModal({ isOpen, onClose, onNativeInstall, canPrompt }) {
  if (!isOpen) return null;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(25, 39, 33, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FBF8F2',
          border: '2px solid #292821',
          boxShadow: '8px 8px 0px #253B32',
          borderRadius: '8px',
          maxWidth: '480px',
          width: '100%',
          padding: 'clamp(1.25rem, 3vw, 2rem)',
          position: 'relative',
          animation: 'modalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.25rem',
            color: '#59574D'
          }}
          aria-label="Close dialog"
        >
          <X size={22} />
        </button>

        {/* Header with Wolf Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
          <img
            src="/favicon/android-chrome-192x192.png"
            alt="WebCraft App Icon"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              border: '2px solid #253B32',
              boxShadow: '2px 2px 0px #B95E3C'
            }}
          />
          <div>
            <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#253B32', fontWeight: 800 }}>
              WebCraft Shortcut (.apk)
            </h3>
            <span style={{ fontSize: '0.8rem', color: '#B95E3C', fontWeight: 700 }}>
              Instant Home Screen Shortcut • Zero Download Errors
            </span>
          </div>
        </div>

        <p style={{ fontSize: '0.875rem', color: '#59574D', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          Add the official WebCraft shortcut directly to your device home screen. Opens in fullscreen without browser bars, runs fast, and updates automatically.
        </p>

        {/* 1-Tap Auto Install Button (if browser prompt available) */}
        {canPrompt ? (
          <button
            type="button"
            className="btn btn-terracotta"
            onClick={async () => {
              await onNativeInstall();
              onClose();
            }}
            style={{ width: '100%', padding: '0.9rem', fontSize: '1rem', marginBottom: '1rem', gap: '0.5rem' }}
          >
            <Smartphone size={18} />
            <span>Add Shortcut .APK to Home Screen</span>
          </button>
        ) : null}

        {/* Visual Step-by-Step Instructions */}
        <div
          style={{
            backgroundColor: '#F0E6D2',
            border: '1.5px solid #292821',
            borderRadius: '6px',
            padding: '1rem'
          }}
        >
          <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#253B32', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {isIOS ? 'How to Add on iPhone / Safari:' : 'How to Add on Chrome / Android:'}
          </div>

          {isIOS ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.825rem', color: '#292821' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Share2 size={16} color="#B95E3C" />
                <span>1. Tap the <strong>Share button</strong> in Safari bottom bar</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <PlusSquare size={16} color="#B95E3C" />
                <span>2. Scroll down and tap <strong>"Add to Home Screen"</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#253B32" />
                <span>3. Tap <strong>Add</strong> at top right — Done!</span>
              </div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.825rem', color: '#292821' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <MoreVertical size={16} color="#B95E3C" />
                <span>1. Tap the <strong>Chrome menu (three dots ⋮)</strong> at top right</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Smartphone size={16} color="#B95E3C" />
                <span>2. Tap <strong>"Add to Home screen"</strong> or <strong>"Install app"</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} color="#253B32" />
                <span>3. Tap <strong>Add</strong> — the shortcut appears instantly on your phone!</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

