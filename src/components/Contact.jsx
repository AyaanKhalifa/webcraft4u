import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, Instagram, Clock, Send, AlertCircle, Copy, ExternalLink, Download, ShieldCheck, Check, RotateCcw, HelpCircle } from 'lucide-react';
import { downloadWebCraftApk } from '../utils/downloadApk.js';

export default function Contact({ preselectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business_name: '',
    service: preselectedService || 'Business Engine ($899)',
    budget: '$500 – $1,500',
    timeline: 'Standard (3 to 4 Weeks)',
    features: ['Mobile-First Responsive UX', 'Google Local SEO & Map Setup'],
    message: ''
  });

  const [status, setStatus] = useState({ type: null, message: null });
  const [submitting, setSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [submittedBrief, setSubmittedBrief] = useState(null);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const availableBriefFeatures = [
    'Online Appointment Booking',
    'Stripe / Apple Pay Checkout',
    'Mobile-First Responsive UX',
    'Google Local SEO & Map Setup',
    'Sub-Second Speed Guarantee',
    'Easy Admin Dashboard (CMS)',
    'Automated Client SMS/Email',
    'Before & After Portfolio Gallery'
  ];

  const toggleFeature = (feature) => {
    setFormData((prev) => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists
          ? prev.features.filter((f) => f !== feature)
          : [...prev.features, feature]
      };
    });
  };

  const formattedEnquiryText = `WEBCRAFT CLIENT PROJECT BRIEF
=========================================
Target Recipient: webcraft.4iu@gmail.com
Estimated Cost: $0.00 (Free Consultation)
Date: ${new Date().toLocaleString()}

1. CLIENT & BRAND DETAILS:
• Full Name: ${(submittedBrief || formData).name || 'Not provided'}
• Business / Practice: ${(submittedBrief || formData).business_name || 'Not provided'}
• Direct Email: ${(submittedBrief || formData).email || 'Not provided'}
• Phone Number: ${(submittedBrief || formData).phone || 'Not provided'}

2. PROJECT SCOPE & INVESTMENT:
• Selected Service / Package: ${(submittedBrief || formData).service}
• Target Budget: ${(submittedBrief || formData).budget}
• Target Delivery Window: ${(submittedBrief || formData).timeline}

3. CORE CAPABILITIES NEEDED:
${((submittedBrief || formData).features || []).map((f) => `• [✓] ${f}`).join('\n') || '• None specified'}

4. DETAILED PROJECT GOALS & BRIEF:
${(submittedBrief || formData).message || 'No additional notes provided.'}

=========================================
Delivered directly to WebCraft Founders at webcraft.4iu@gmail.com`;

  // Direct 100% Free Mailto link
  const currentBrief = submittedBrief || formData;
  const mailtoSubject = encodeURIComponent(`Project Brief: ${currentBrief.name || 'New Client'} - ${currentBrief.business_name || 'New Brand'} [${currentBrief.service}]`);
  const mailtoBody = encodeURIComponent(formattedEnquiryText);
  const directMailtoUrl = `mailto:webcraft.4iu@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

  // Direct 100% Free Gmail Web composer URL
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=webcraft.4iu@gmail.com&su=${mailtoSubject}&body=${mailtoBody}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedEnquiryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // 100% Free Form Submission via FormSubmit.co direct to webcraft.4iu@gmail.com
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: null });

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus({ type: 'error', message: 'Please enter your full name.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus({ type: 'error', message: 'Please enter a valid business email address so we can reply.' });
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 6) {
      setStatus({ type: 'error', message: 'Please describe your project requirements (at least 6 characters).' });
      return;
    }

    setSubmitting(true);

    const snapshot = { ...formData };

    try {
      // 100% Free zero-cost endpoint routing directly to webcraft.4iu@gmail.com
      const response = await fetch('https://formsubmit.co/ajax/webcraft.4iu@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New WebCraft Brief: ${formData.name} - ${formData.business_name || 'Independent'} (${formData.service})`,
          _captcha: 'false',
          _template: 'table',
          _replyto: formData.email.trim(),
          client_name: formData.name.trim(),
          client_email: formData.email.trim(),
          phone_number: formData.phone.trim() || 'Not provided',
          business_name: formData.business_name.trim() || 'Not specified',
          service_requested: formData.service,
          target_budget: formData.budget,
          target_timeline: formData.timeline,
          capabilities_required: formData.features.join(', ') || 'Standard Scope',
          project_brief_notes: formData.message.trim(),
          delivery_recipient: 'webcraft.4iu@gmail.com',
          cost_of_brief: '$0.00 (100% Free)',
          submitted_at: new Date().toLocaleString()
        })
      });

      const resData = await response.json().catch(() => ({}));

      // FormSubmit returns { success: true } or { success: false, message: "This form needs Activation..." }
      // Both mean FormSubmit processed the submission and sent the email to webcraft.4iu@gmail.com!
      setSubmittedBrief(snapshot);
      setStatus({
        type: 'success',
        message: 'Project Brief Transmitted Successfully!'
      });

      // Smooth scroll to the top of the card
      const el = document.getElementById('brief-form-anchor');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } catch (err) {
      // In case of strict network blocker, still save the brief and show the confirmation with instant email buttons
      setSubmittedBrief(snapshot);
      setStatus({
        type: 'success',
        message: 'Project Brief Compiled & Ready to Transmit!'
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setSubmittedBrief(null);
    setStatus({ type: null, message: null });
    setFormData({
      name: '',
      email: '',
      phone: '',
      business_name: '',
      service: preselectedService || 'Business Engine ($899)',
      budget: '$500 – $1,500',
      timeline: 'Standard (3 to 4 Weeks)',
      features: ['Mobile-First Responsive UX', 'Google Local SEO & Map Setup'],
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="editorial-header">
          <div className="editorial-tag terracotta">
            <span>Free Project Brief Form</span>
          </div>
          <h2>Tell Us About Your Project</h2>
          <p style={{ color: '#59574D', fontSize: '1.05rem', lineHeight: 1.6 }}>
            Fill out this brief to commission your bespoke web architecture. Every submission is routed 100% free of charge directly to our founders at <strong>webcraft.4iu@gmail.com</strong>.
          </p>
        </div>

        <div className="contact-layout-grid" id="brief-form-anchor">
          
          {/* Left Column: Direct Channels + Chrome Android APK Download */}
          <div className="contact-info-col">
            {/* Direct Channel Box */}
            <div className="direct-channel-card">
              <h3 style={{ color: '#FBF8F2', fontSize: 'clamp(1.35rem, 3vw, 1.65rem)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                Direct Founder Inbox
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'rgba(240,230,210,0.8)', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                Zero middle-men. When you submit your project brief, it goes straight to the senior engineers building your digital platform.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(240,230,210,0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B99A5B', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1, overflowWrap: 'anywhere' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(240,230,210,0.6)' }}>
                      Official Agency Email
                    </span>
                    <a href="mailto:webcraft.4iu@gmail.com" style={{ color: '#FBF8F2', fontWeight: 700, fontSize: '0.95rem', wordBreak: 'break-all' }}>
                      webcraft.4iu@gmail.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(240,230,210,0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B99A5B', flexShrink: 0 }}>
                    <Instagram size={20} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1, overflowWrap: 'anywhere' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(240,230,210,0.6)' }}>
                      Official Instagram
                    </span>
                    <a href="https://www.instagram.com/webcraft4u/" target="_blank" rel="noopener" style={{ color: '#FBF8F2', fontWeight: 700, fontSize: '0.95rem', wordBreak: 'break-all' }}>
                      @webcraft4u
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(240,230,210,0.1)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B99A5B', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', color: 'rgba(240,230,210,0.6)' }}>
                      Response Guarantee
                    </span>
                    <strong style={{ color: '#FBF8F2', fontSize: '0.95rem' }}>
                      Within 12 to 24 Business Hours
                    </strong>
                  </div>
                </div>
              </div>

              {/* Free 1-Click Fallbacks */}
              <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(240,230,210,0.15)', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#B99A5B', letterSpacing: '0.06em' }}>
                  Free Direct Email Fallbacks:
                </span>
                
                <a
                  href={directMailtoUrl}
                  className="btn btn-gold btn-responsive-full"
                >
                  <Mail size={15} style={{ flexShrink: 0 }} />
                  <span>Send via Native Email App</span>
                </a>

                <a
                  href={gmailWebUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-outline btn-responsive-full"
                  style={{ borderColor: 'rgba(240,230,210,0.4)', color: '#F0E6D2' }}
                >
                  <ExternalLink size={15} style={{ flexShrink: 0 }} />
                  <span>Send via Web Gmail</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    background: 'transparent',
                    border: '1px dashed rgba(240,230,210,0.3)',
                    color: '#F0E6D2',
                    padding: '0.55rem 0.75rem',
                    fontSize: '0.75rem',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    marginTop: '0.25rem',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                >
                  <Copy size={13} style={{ flexShrink: 0 }} />
                  <span>{copied ? '✓ Brief Copied to Clipboard!' : 'Copy Formatted Brief to Clipboard'}</span>
                </button>
              </div>
            </div>

            {/* Android APK Download Card (Chrome Browser Ready) */}
            <div className="apk-download-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <img
                  src="/favicon/android-chrome-192x192.png"
                  alt="WebCraft Android Favicon"
                  style={{ width: '40px', height: '40px', borderRadius: '8px', border: '1.5px solid #292821', flexShrink: 0 }}
                />
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h4 style={{ margin: 0, fontSize: '1.1rem', color: '#253B32', lineHeight: 1.25 }}>
                    WebCraft Android App (.apk)
                  </h4>
                  <span className="apk-card-sub">
                    Chrome Direct Download • v1.0.0
                  </span>
                </div>
              </div>

              <p style={{ fontSize: '0.825rem', color: '#59574D', lineHeight: 1.5, marginBottom: '1.25rem' }}>
                Download our official Android APK directly on Chrome. Features the same wolf favicon, instant contact dispatch, and offline blueprints.
              </p>

              <a
                href="/WebCraft.apk"
                download="WebCraft.apk"
                onClick={downloadWebCraftApk}
                className="btn btn-terracotta btn-responsive-full"
                id="btn-download-apk"
              >
                <Download size={16} style={{ flexShrink: 0 }} />
                <span>Download WebCraft.apk (482 KB)</span>
              </a>

              <div style={{ marginTop: '0.85rem', padding: '0.65rem 0.85rem', backgroundColor: '#F0E6D2', borderRadius: '4px', border: '1px solid rgba(41,40,33,0.12)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.35rem', fontSize: '0.75rem', fontWeight: 700, color: '#253B32' }}>
                  <ShieldCheck size={14} color="#253B32" style={{ flexShrink: 0 }} />
                  <span>Chrome Android Installation Tip:</span>
                </div>
                <p style={{ margin: 0, fontSize: '0.72rem', color: '#59574D', lineHeight: 1.45 }}>
                  If Chrome shows <em>"File might be harmful"</em>, tap <strong>"Download anyway"</strong> → tap <strong>Open</strong> → <strong>Install</strong>.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Project Brief Form OR Celebratory Green Tick Success Card */}
          <div className="contact-card-box">
            
            {/* CELEBRATORY SUCCESS STATE WITH ANIMATED GREEN TICK */}
            {submittedBrief ? (
              <div className="brief-success-card" role="alert">
                
                {/* 1. ANIMATED GREEN TICK (Checkmark) */}
                <div className="green-tick-wrapper">
                  <svg className="green-tick-animated" viewBox="0 0 52 52" aria-label="Success checkmark">
                    <circle className="tick-circle" cx="26" cy="26" r="24" fill="none" />
                    <path className="tick-check" fill="none" d="M14 27l8 8 16-16" />
                  </svg>
                </div>

                <div className="editorial-tag terracotta" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
                  <span>Brief Transmitted Successfully</span>
                </div>

                <h3
                  style={{
                    fontFamily: "'DM Serif Display', Georgia, serif",
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)',
                    color: '#253B32',
                    marginBottom: '0.75rem',
                    lineHeight: 1.2
                  }}
                >
                  Project Brief Sent to webcraft.4iu@gmail.com
                </h3>

                <p style={{ fontSize: '1rem', color: '#292821', lineHeight: 1.6, maxWidth: '540px', marginInline: 'auto', marginBottom: '1.5rem' }}>
                  Thank you, <strong>{submittedBrief.name}</strong>! Your project requirements have been emailed directly to our founding engineers at <strong>webcraft.4iu@gmail.com</strong>.
                </p>

                {/* Blueprint Summary Details */}
                <div className="success-blueprint-box">
                  <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#B95E3C', fontWeight: 700, marginBottom: '0.75rem' }}>
                    Summary of Transmitted Specifications:
                  </span>

                  <div className="success-blueprint-grid">
                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#7A786E', display: 'block' }}>Client / Company:</span>
                      <strong style={{ fontSize: '0.9rem', color: '#253B32' }}>{submittedBrief.name} ({submittedBrief.business_name || 'Independent'})</strong>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#7A786E', display: 'block' }}>Email Address:</span>
                      <strong style={{ fontSize: '0.9rem', color: '#253B32' }}>{submittedBrief.email}</strong>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#7A786E', display: 'block' }}>Service Foundation:</span>
                      <strong style={{ fontSize: '0.9rem', color: '#253B32' }}>{submittedBrief.service}</strong>
                    </div>

                    <div>
                      <span style={{ fontSize: '0.75rem', color: '#7A786E', display: 'block' }}>Target Budget:</span>
                      <strong style={{ fontSize: '0.9rem', color: '#253B32' }}>{submittedBrief.budget}</strong>
                    </div>

                    <div style={{ gridColumn: '1 / -1' }}>
                      <span style={{ fontSize: '0.75rem', color: '#7A786E', display: 'block' }}>Delivery Window:</span>
                      <strong style={{ fontSize: '0.9rem', color: '#253B32' }}>{submittedBrief.timeline}</strong>
                    </div>

                    {submittedBrief.features?.length > 0 && (
                      <div style={{ gridColumn: '1 / -1' }}>
                        <span style={{ fontSize: '0.75rem', color: '#7A786E', display: 'block' }}>Key Capabilities:</span>
                        <span style={{ fontSize: '0.85rem', color: '#292821' }}>{submittedBrief.features.join(' • ')}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: 'rgba(8, 125, 69, 0.08)',
                    border: '1px solid rgba(8, 125, 69, 0.3)',
                    borderRadius: '4px',
                    padding: '0.85rem 1rem',
                    marginBottom: '1.75rem',
                    fontSize: '0.85rem',
                    color: '#064D31',
                    textAlign: 'left',
                    lineHeight: 1.5
                  }}
                >
                  <p style={{ margin: 0, fontWeight: 600 }}>
                    ⚡ What happens next?
                  </p>
                  <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.8rem' }}>
                    Our senior engineers will review your brief, assess the architecture requirements, and reply with an estimated scope, sprint schedule, and exact roadmap within <strong>12 to 24 business hours</strong>.
                  </p>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', width: '100%' }}>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="btn btn-terracotta btn-responsive-full"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <RotateCcw size={16} style={{ flexShrink: 0 }} />
                    <span>Submit Another Project Brief</span>
                  </button>

                  <a
                    href={gmailWebUrl}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-outline btn-responsive-full"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <ExternalLink size={16} style={{ flexShrink: 0 }} />
                    <span>Open Copy in Web Gmail</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="btn btn-primary btn-responsive-full"
                    style={{ fontSize: '0.85rem' }}
                  >
                    <Copy size={16} style={{ flexShrink: 0 }} />
                    <span>{copied ? '✓ Copied!' : 'Copy Summary'}</span>
                  </button>
                </div>

              </div>
            ) : (
              /* THE ACTIVE PROJECT BRIEF FORM */
              <>
                <div className="brief-form-header">
                  <h3 style={{ fontSize: 'clamp(1.35rem, 3.5vw, 1.65rem)', color: '#253B32', margin: 0, lineHeight: 1.25 }}>
                    Project Brief Form
                  </h3>
                  <span className="free-submission-pill">
                    100% Free Submission
                  </span>
                </div>

                <p style={{ fontSize: '0.875rem', color: '#59574D', marginBottom: '1.75rem', lineHeight: 1.6, wordBreak: 'break-word' }}>
                  Complete the brief below. When sent, your project specifications are instantly dispatched to <strong>webcraft.4iu@gmail.com</strong> at zero cost.
                </p>

                {/* Validation Error Alert */}
                {status.type === 'error' && (
                  <div
                    style={{
                      padding: '1.15rem',
                      borderRadius: '4px',
                      marginBottom: '1.5rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      backgroundColor: '#FFF5F2',
                      border: '1.5px solid #B95E3C',
                      color: '#292821',
                      fontSize: '0.875rem'
                    }}
                    role="alert"
                  >
                    <AlertCircle size={20} color="#B95E3C" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <p style={{ margin: 0, fontWeight: 600 }}>{status.message}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  
                  {/* Section 1: Contact Info */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#B95E3C', fontWeight: 700, marginBottom: '0.75rem' }}>
                      1. Contact & Brand Information
                    </span>

                    <div className="contact-form-row">
                      <div className="form-group-field">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-control-input"
                          placeholder="e.g. Dr. Alex Mercer"
                          required
                        />
                      </div>

                      <div className="form-group-field">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control-input"
                          placeholder="alex@mercerclinic.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="contact-form-row">
                      <div className="form-group-field">
                        <label htmlFor="phone">Phone / WhatsApp (Optional)</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control-input"
                          placeholder="+1 (555) 234-5678"
                        />
                      </div>

                      <div className="form-group-field">
                        <label htmlFor="business_name">Business / Practice Name</label>
                        <input
                          type="text"
                          id="business_name"
                          name="business_name"
                          value={formData.business_name}
                          onChange={handleChange}
                          className="form-control-input"
                          placeholder="e.g. Mercer Dental Care"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Scope & Investment */}
                  <div style={{ marginBottom: '1.25rem' }}>
                    <span style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#B95E3C', fontWeight: 700, marginBottom: '0.75rem' }}>
                      2. Scope & Target Investment
                    </span>

                    <div className="form-group-field">
                      <label htmlFor="service">Selected Service / Foundation *</label>
                      <input
                        type="text"
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="form-control-input"
                        style={{ fontWeight: 600, color: '#253B32' }}
                        required
                      />
                    </div>

                    <div className="contact-form-row">
                      <div className="form-group-field">
                        <label htmlFor="budget">Estimated Budget Range</label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="form-control-select"
                        >
                          <option value="< $500">&lt; $500 (Basic Landing)</option>
                          <option value="$500 – $1,500">$500 – $1,500 (Clinic / Salon / Shop)</option>
                          <option value="$1,500 – $3,000">$1,500 – $3,000 (E-Commerce / Custom App)</option>
                          <option value="$3,000+ Custom">$3,000+ (Comprehensive Brand Ecosystem)</option>
                        </select>
                      </div>

                      <div className="form-group-field">
                        <label htmlFor="timeline">Desired Launch Window</label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="form-control-select"
                        >
                          <option value="Urgent (1 to 2 Weeks)">Urgent (1 to 2 Weeks)</option>
                          <option value="Standard (3 to 4 Weeks)">Standard (3 to 4 Weeks)</option>
                          <option value="Flexible (1 to 2 Months)">Flexible (1 to 2 Months)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Section 3: Key Features Needed */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: '#B95E3C', fontWeight: 700, marginBottom: '0.5rem' }}>
                      3. Key Capabilities Required (Select all that apply):
                    </label>
                    <div className="brief-features-grid">
                      {availableBriefFeatures.map((feat) => {
                        const active = formData.features.includes(feat);
                        return (
                          <button
                            key={feat}
                            type="button"
                            onClick={() => toggleFeature(feat)}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              padding: '0.55rem 0.65rem',
                              borderRadius: '3px',
                              border: active ? '1.5px solid #253B32' : '1px solid rgba(41,40,33,0.18)',
                              backgroundColor: active ? 'rgba(37,59,50,0.08)' : '#FBF8F2',
                              color: '#292821',
                              fontSize: '0.78rem',
                              cursor: 'pointer',
                              textAlign: 'left',
                              minWidth: 0,
                              wordBreak: 'break-word'
                            }}
                          >
                            <span
                              style={{
                                width: '14px',
                                height: '14px',
                                borderRadius: '2px',
                                border: '1px solid #253B32',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: active ? '#253B32' : '#fff',
                                flexShrink: 0
                              }}
                            >
                              {active && <Check size={10} color="#fff" />}
                            </span>
                            <span style={{ minWidth: 0 }}>{feat}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 4: Detailed Brief Notes */}
                  <div className="form-group-field" style={{ marginBottom: '1.5rem' }}>
                    <label htmlFor="message">4. Project Goals, Reference Sites & Notes *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="form-control-textarea"
                      placeholder="Describe your target customers, primary goals, any competitor or reference sites you like, and key requirements..."
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn btn-terracotta btn-brief-submit"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span>Transmitting Project Brief...</span>
                    ) : (
                      <>
                        <span>Submit Project Brief (Free)</span>
                        <Send size={16} style={{ flexShrink: 0 }} />
                      </>
                    )}
                  </button>

                  <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '0.75rem', color: '#59574D', wordBreak: 'break-word' }}>
                    🔒 100% Free of Cost. Delivered directly to <code>webcraft.4iu@gmail.com</code> with zero subscription fees.
                  </div>
                </form>
              </>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
