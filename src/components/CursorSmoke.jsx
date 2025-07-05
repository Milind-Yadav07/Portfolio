import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CursorSmoke = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const maxParticles = 100;

    // Particle class
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 10 + 10;
        this.alpha = 1;
        this.velocityX = (Math.random() - 0.5) * 1.5;
        this.velocityY = -Math.random() * 1.5 - 0.5;
        this.life = 0;
        this.maxLife = 60 + Math.random() * 30;
      }

      update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.alpha -= 0.015;
        this.size += 0.2;
        this.life++;
      }

      draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha > 0 ? this.alpha : 0;
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
        gradient.addColorStop(0, 'rgba(96, 56, 255, 0.99)'); // purple center
        gradient.addColorStop(1, 'rgba(61, 19, 229, 0)');   // transparent edge
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Animation loop
    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      particles.current.forEach((p, index) => {
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0 || p.life > p.maxLife) {
          particles.current.splice(index, 1);
        }
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse move handler
    const handleMouseMove = (e) => {
      if (particles.current.length < maxParticles) {
        particles.current.push(new Particle(e.clientX, e.clientY));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default CursorSmoke;
