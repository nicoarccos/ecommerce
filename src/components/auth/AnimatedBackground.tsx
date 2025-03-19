import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  variant?: 'login' | 'register' | 'forgot-password';
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ variant = 'login' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Colores que transmiten seguridad y confianza según la variante
  const colors = 
    variant === 'login' 
    ? {
        primary: '#0070f3',      // Azul confiable
        secondary: '#4dabf7',    // Azul claro
        accent: '#e6f7ff',       // Azul muy claro
        background: '#f8fafc'    // Gris muy claro
      }
    : variant === 'register'
    ? {
        primary: '#0ca678',      // Verde esmeralda (confianza)
        secondary: '#63e6be',    // Verde menta
        accent: '#e6fcf5',       // Verde muy claro
        background: '#f8fafc'    // Gris muy claro
      }
    : {
        // Colores para forgot-password - tonos ámbar/dorado
        primary: '#d97706',      // Ámbar oscuro
        secondary: '#fbbf24',    // Ámbar medio
        accent: '#fef3c7',       // Ámbar muy claro
        background: '#f8fafc'    // Gris muy claro
      };
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Establecer tamaño del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Crear partículas flotantes (burbujas)
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = [colors.primary, colors.secondary, colors.accent][Math.floor(Math.random() * 3)];
        this.alpha = Math.random() * 0.5 + 0.1;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Rebote en los bordes
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.floor(this.alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();
      }
    }
    
    // Crear gradiente de fondo
    const createGradient = () => {
      if (!ctx) return;
      
      const gradientX = Math.random() * canvas.width;
      const gradientY = Math.random() * canvas.height;
      
      const gradient = ctx.createRadialGradient(
        gradientX, gradientY, 0,
        gradientX, gradientY, canvas.width * 0.8
      );
      
      gradient.addColorStop(0, colors.accent + '20');  // Muy transparente
      gradient.addColorStop(0.5, colors.background + '10');
      gradient.addColorStop(1, colors.background + '00');  // Totalmente transparente
      
      return gradient;
    };
    
    // Crear partículas
    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 40); // Limitar el número de partículas
    
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
    
    // Geometría minimalista (líneas conectoras)
    const drawLines = () => {
      if (!ctx) return;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = colors.primary + Math.floor((1 - distance / 100) * 20).toString(16).padStart(2, '0');
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Variables para el efecto ondulado
    let angle = 0;
    let gradient = createGradient();
    let lastGradientUpdate = 0;
    
    // Animación
    const animate = (timestamp: number) => {
      if (!ctx) return;
      
      // Limpiar el canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Actualizar el gradiente cada 5 segundos
      if (timestamp - lastGradientUpdate > 5000) {
        gradient = createGradient();
        lastGradientUpdate = timestamp;
      }
      
      // Dibujar el fondo con gradiente
      ctx.fillStyle = colors.background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Dibujar el gradiente ondulado
      ctx.fillStyle = gradient || colors.accent + '10';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Dibujar patrones geométricos (ondas suaves)
      angle += 0.002;
      ctx.beginPath();
      for (let i = 0; i < canvas.width; i += 20) {
        const y = Math.sin(i * 0.01 + angle) * 20 + canvas.height / 2;
        ctx.lineTo(i, y);
      }
      ctx.strokeStyle = colors.secondary + '20';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      // Actualizar y dibujar partículas
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Dibujar líneas conectoras
      drawLines();
      
      // Continuar animación
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    // Limpieza
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [variant, colors]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      aria-hidden="true"
    />
  );
};

export default AnimatedBackground; 