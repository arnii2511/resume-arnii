import React, { useEffect, useRef } from 'react';
interface Star {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}
interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;
  angle: number;
}
interface FallingStar {
  x: number;
  y: number;
  length: number;
  vx: number;
  vy: number;
  opacity: number;
  width: number;
}

const STAR_COLORS = [
  '#ffffff',
  '#e8f4f8',
  '#c8dde8',
  '#4db8d4',
  '#7ecba1',
  '#f0c060'
];

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const fallingStarsRef = useRef<FallingStar[]>([]);
  const shootingStarRef = useRef<ShootingStar>({
    x: 0,
    y: 0,
    length: 0,
    speed: 0,
    opacity: 0,
    active: false,
    angle: 45
  });
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef<number>(0);
  const mouseRef = useRef<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
      initFallingStars();
    };
    const initStars = () => {
      const count = Math.floor(canvas.width * canvas.height / 3500);
      starsRef.current = Array.from(
        {
          length: Math.min(count, 280)
        },
        () => ({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.008 + 0.002,
          twinkleOffset: Math.random() * Math.PI * 2,
          color: STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
        })
      );
    };
    const triggerShootingStar = () => {
      const s = shootingStarRef.current;
      s.x = Math.random() * canvas.width * 0.6;
      s.y = Math.random() * canvas.height * 0.4;
      s.length = Math.random() * 100 + 80;
      s.speed = Math.random() * 3 + 2;
      s.opacity = 1;
      s.active = true;
      s.angle = Math.random() * 20 + 35;
    };
    const makeFallingStar = (resetAboveView = false): FallingStar => ({
      x: resetAboveView ? -60 - Math.random() * (canvas.width * 0.25) : Math.random() * canvas.width,
      y: resetAboveView ? -(Math.random() * canvas.height) : Math.random() * canvas.height,
      length: Math.random() * 45 + 24,
      // Fixed diagonal fall (down-right), with slight variation.
      vx: Math.random() * 0.7 + 0.9,
      vy: Math.random() * 1.2 + 1.8,
      opacity: Math.random() * 0.35 + 0.3,
      width: Math.random() * 1.1 + 0.9
    });
    const initFallingStars = () => {
      const count = Math.min(26, Math.max(12, Math.floor(canvas.width / 150)));
      fallingStarsRef.current = Array.from(
        { length: count },
        () => makeFallingStar(false)
      );
    };
    const scheduleShootingStar = () => {
      const delay = Math.random() * 12000 + 10000;
      setTimeout(() => {
        triggerShootingStar();
        scheduleShootingStar();
      }, delay);
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    const drawMilkyWay = () => {
      const cx = canvas.width * 0.5;
      const cy = canvas.height * 0.45;
      const gradient = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        canvas.width * 0.45
      );
      gradient.addColorStop(0, 'rgba(77, 184, 212, 0.04)');
      gradient.addColorStop(0.4, 'rgba(126, 203, 161, 0.02)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Milky way band
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-0.3);
      const bandGrad = ctx.createLinearGradient(
        -canvas.width * 0.5,
        0,
        canvas.width * 0.5,
        0
      );
      bandGrad.addColorStop(0, 'transparent');
      bandGrad.addColorStop(0.3, 'rgba(77, 184, 212, 0.03)');
      bandGrad.addColorStop(0.5, 'rgba(200, 220, 255, 0.05)');
      bandGrad.addColorStop(0.7, 'rgba(77, 184, 212, 0.03)');
      bandGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = bandGrad;
      ctx.fillRect(-canvas.width * 0.5, -80, canvas.width, 160);
      ctx.restore();
    };
    const animate = (timestamp: number) => {
      timeRef.current = timestamp;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawMilkyWay();
      // Parallax offset based on mouse
      const px = (mouseRef.current.x / canvas.width - 0.5) * 4;
      const py = (mouseRef.current.y / canvas.height - 0.5) * 4;
      // Draw stars
      starsRef.current.forEach((star) => {
        const twinkle = Math.sin(
          timestamp * star.twinkleSpeed + star.twinkleOffset
        );
        const opacity = star.opacity * (0.5 + 0.5 * twinkle);
        const sx = star.x + px * (star.radius / 1.5);
        const sy = star.y + py * (star.radius / 1.5);
        ctx.beginPath();
        ctx.arc(sx, sy, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = Math.max(0.05, opacity);
        ctx.fill();
        // Glow for brighter stars
        if (star.radius > 1.2) {
          ctx.beginPath();
          ctx.arc(sx, sy, star.radius * 2.5, 0, Math.PI * 2);
          const glowGrad = ctx.createRadialGradient(
            sx,
            sy,
            0,
            sx,
            sy,
            star.radius * 2.5
          );
          glowGrad.addColorStop(
            0,
            star.color.replace(')', ', 0.3)').replace('rgb', 'rgba')
          );
          glowGrad.addColorStop(1, 'transparent');
          ctx.fillStyle = glowGrad;
          ctx.globalAlpha = opacity * 0.4;
          ctx.fill();
        }
      });
      // Subtle falling stars
      fallingStarsRef.current.forEach((falling) => {
        falling.x += falling.vx;
        falling.y += falling.vy;
        if (
          falling.y - falling.length > canvas.height + 20 ||
          falling.x < -50 ||
          falling.x > canvas.width + 50
        ) {
          Object.assign(falling, makeFallingStar(true));
        }
        const headX = falling.x;
        const headY = falling.y;
        const velocityMag = Math.hypot(falling.vx, falling.vy) || 1;
        const nx = falling.vx / velocityMag;
        const ny = falling.vy / velocityMag;
        const tailX = headX - nx * falling.length;
        const tailY = headY - ny * falling.length;
        const shimmer = 0.75 + 0.25 * Math.sin(timestamp * 0.002 + falling.x * 0.01);
        const grad = ctx.createLinearGradient(tailX, tailY, headX, headY);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.5, `rgba(140, 210, 255, ${falling.opacity * 0.55 * shimmer})`);
        grad.addColorStop(1, `rgba(235, 245, 255, ${falling.opacity * shimmer})`);
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(headX, headY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = falling.width;
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(headX, headY, Math.max(0.9, falling.width * 0.85), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240, 250, 255, ${falling.opacity * 0.8 * shimmer})`;
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      // Draw shooting star
      const ss = shootingStarRef.current;
      if (ss.active) {
        const rad = ss.angle * Math.PI / 180;
        const dx = Math.cos(rad);
        const dy = Math.sin(rad);
        ss.x += dx * ss.speed;
        ss.y += dy * ss.speed;
        ss.opacity -= 0.01;
        if (ss.opacity <= 0) {
          ss.active = false;
        } else {
          const tailX = ss.x - dx * ss.length;
          const tailY = ss.y - dy * ss.length;
          const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
          grad.addColorStop(0, 'transparent');
          grad.addColorStop(0.7, `rgba(77, 184, 212, ${ss.opacity * 0.5})`);
          grad.addColorStop(1, `rgba(255, 255, 255, ${ss.opacity})`);
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(ss.x, ss.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.globalAlpha = ss.opacity;
          ctx.stroke();
          ctx.globalAlpha = 1;
          // Head glow
          ctx.beginPath();
          ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${ss.opacity})`;
          ctx.fill();
        }
      }
      animFrameRef.current = requestAnimationFrame(animate);
    };
    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    scheduleShootingStar();
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0
      }}
      aria-hidden="true" />);


}
