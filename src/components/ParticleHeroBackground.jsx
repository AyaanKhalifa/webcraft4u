import React, { useEffect, useRef } from 'react';

export default function ParticleHeroBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = canvas.getContext('2d');
    let W, H;
    let animationFrameId;

    const COLORS = ['#253B32', '#B99A5B', '#B95E3C', '#087D45', '#59574D'];

    const resize = () => {
      W = canvas.width = canvas.parentElement.offsetWidth;
      H = canvas.height = canvas.parentElement.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize, { passive: true });

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.r = Math.random() * 2 + 0.8;
        this.c = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.a = Math.random() * 0.45 + 0.15;
      }

      update(mx, my) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;

        // Subtle mouse repulsion
        if (mx !== undefined && my !== undefined) {
          const dx = this.x - mx;
          const dy = this.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 85) {
            const force = ((85 - dist) / 85) * 0.5;
            this.vx += (dx / dist) * force;
            this.vy += (dy / dist) * force;
          }
        }

        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.c;
        ctx.globalAlpha = this.a;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const count = Math.min(55, Math.floor((window.innerWidth * 55) / 1400));
    const particles = Array.from({ length: count }, () => new Particle());

    let mouseX, mouseY;
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = undefined;
      mouseY = undefined;
    };

    const parent = canvas.parentElement;
    parent.addEventListener('mousemove', handleMouseMove, { passive: true });
    parent.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    const maxDistance = 110;

    const render = () => {
      ctx.clearRect(0, 0, W, H);

      // Draw connecting constellation lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(185, 154, 91, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update(mouseX, mouseY);
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      parent.removeEventListener('mousemove', handleMouseMove);
      parent.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75
      }}
      aria-hidden="true"
    />
  );
}

