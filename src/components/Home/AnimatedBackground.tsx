import { useEffect, useRef } from "react";

class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;

  private static ctx: CanvasRenderingContext2D;
  private static canvas: HTMLCanvasElement;

  static setCanvas(canvas: HTMLCanvasElement) {
    Particle.canvas = canvas;
    Particle.ctx = canvas.getContext("2d")!;
  }

  static getCanvas() {
    return Particle.canvas;
  }

  static getCtx() {
    return Particle.ctx;
  }

  constructor() {
    this.x = Math.random() * Particle.canvas.width;
    this.y = Math.random() * Particle.canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.1;
  }

  draw() {
    Particle.ctx.fillStyle = "rgba(59, 130, 246, 0.8)";
    Particle.ctx.strokeStyle = "rgba(59, 130, 246, 0.8)";
    Particle.ctx.lineWidth = 2;

    Particle.ctx.beginPath();
    Particle.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    Particle.ctx.closePath();
    Particle.ctx.fill();
  }
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    Particle.setCanvas(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Particle[] = [];
    const particleCount = 100;

    function handleParticles() {
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        if (particles[i].size <= 0.2) {
          particles.splice(i, 1);
          i--;
        }
      }
    }

    function animate() {
      const ctx = Particle.getCtx();
      const canvas = Particle.getCanvas();

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (particles.length < particleCount) {
        particles.push(new Particle());
      }
      
      handleParticles();
      return requestAnimationFrame(animate);
    }

    const animationHandler = animate();

    return () => {
      cancelAnimationFrame(animationHandler);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}
