'use client';

import { useAppContext } from '@/contexts/AppContext';
import { useEffect, useRef } from 'react';

export const CanvasParticles = () => {
  const { sidebarExpanded } = useAppContext();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    canvas.width = window.innerWidth * window.devicePixelRatio;
    canvas.height = window.innerHeight * window.devicePixelRatio;

    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    class Particle {
      originX: number;
      originY: number;
      x: number;
      y: number;
      ctx: CanvasRenderingContext2D;
      vx: number;
      vy: number;
      ease: number;
      friction: number;
      dx: number;
      dy: number;
      distance: number;
      force: number;
      angle: number;
      size: number;

      constructor(x: number, y: number, effect: Effect) {
        this.originX = x;
        this.originY = y;
        this.ctx = effect.ctx;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.ease = 0.2;
        this.friction = 0.95;
        this.dx = 0;
        this.dy = 0;
        this.distance = 0;
        this.force = 0;
        this.angle = 0;
        this.size = Math.random() * 8;
        this.draw();
      }

      draw() {
        this.ctx.beginPath();
        this.ctx.fillRect(this.x, this.y, this.size, this.size);
      }

      update(effect: Effect) {
        this.dx = effect.mouse.x - this.x;
        this.dy = effect.mouse.y - this.y;
        this.distance = this.dx * this.dx + this.dy * this.dy;
        this.force = (-effect.mouse.radius / this.distance) * 18;

        if (this.distance < effect.mouse.radius) {
          this.angle = Math.atan2(this.dy, this.dx);
          this.vx += this.force * Math.cos(this.angle);
          this.vy += this.force * Math.sin(this.angle);
        }

        this.x +=
          (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
        this.y +=
          (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
        this.draw();
      }
    }

    class Effect {
      width: number;
      height: number;
      ctx: CanvasRenderingContext2D;
      particlesArray: Particle[] = [];
      gap: number = 40;
      mouse: { radius: number; x: number; y: number } = {
        radius: 3000,
        x: 0,
        y: 0,
      };

      constructor(
        width: number,
        height: number,
        ctx: CanvasRenderingContext2D
      ) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.ctx.fillStyle = '#C12954';
        this.ctx.shadowBlur = 4;
        this.ctx.shadowColor = '#C12954';

        window.addEventListener('mousemove', (e) => {
          this.mouse.x =
            (e.clientX - (!sidebarExpanded ? 78 : 246)) *
            window.devicePixelRatio;
          this.mouse.y = (e.clientY - 68) * window.devicePixelRatio;
        });

        window.addEventListener('resize', () => {
          canvas.width = window.innerWidth * window.devicePixelRatio;
          canvas.height = window.innerHeight * window.devicePixelRatio;
          this.width = canvas.width;
          this.height = canvas.height;
          canvas.style.width = `${window.innerWidth}px`;
          canvas.style.height = `${window.innerHeight}px`;
          this.ctx.fillStyle = '#C12954';

          this.particlesArray = [];
          this.init();
        });

        this.init();
      }

      init() {
        for (let x = 0; x < this.width; x += this.gap) {
          for (let y = 0; y < this.height; y += this.gap) {
            this.particlesArray.push(new Particle(x, y, this));
          }
        }
      }

      update() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.particlesArray.forEach((particle) => particle.update(this));
      }
    }

    const effect = new Effect(canvas.width, canvas.height, ctx);

    function animate() {
      effect.update();
      requestAnimationFrame(animate);
    }
    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('mousemove', () => {});
      window.removeEventListener('resize', () => {});
    };
  }, [sidebarExpanded]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute left-0 top-0 -z-10 h-full w-full opacity-35"
    />
  );
};
