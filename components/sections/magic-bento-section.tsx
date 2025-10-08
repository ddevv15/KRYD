'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { gsap } from 'gsap';

export interface BentoCardProps {
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
  category?: 'why-us' | 'service' | 'header';
  span?: string;
}

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = '58, 41, 255'; // Aurora blue/purple #3A29FF
const AURORA_PINK = '255, 148, 180'; // #FF94B4
const AURORA_RED = '255, 50, 50'; // #FF3232
const MOBILE_BREAKPOINT = 768;

// Card data: 1 big Why Us + 4 Why Us cards + 6 Service cards + 1 big Services
const cardData: BentoCardProps[] = [
  // Big Why Us Header (left top, spans 2x2)
  {
    color: '#060010',
    title: 'Why Us',
    description: 'Your business deserves more than surface-level work. We deliver with intention and integrity.',
    label: 'Why Us',
    category: 'header'
  },
  // Why Us Value Cards (right top, 2x2 grid)
  {
    color: '#060010',
    title: 'Authenticity at Core',
    description: 'Bringing honesty, integrity, and real care to every project — because trust matters.',
    label: 'Values',
    category: 'why-us'
  },
  {
    color: '#060010',
    title: 'End-to-End Solutions',
    description: 'Social media, events, ads, promotions — all under one roof, so you save time, energy, and mental load.',
    label: 'Complete',
    category: 'why-us'
  },
  {
    color: '#060010',
    title: 'Growth Mindset',
    description: 'We not only help you stand out — we help you scale smartly.',
    label: 'Scale',
    category: 'why-us'
  },
  {
    color: '#060010',
    title: 'Value Over Vanity',
    description: 'No fluff. No empty metrics. Only meaningful results.',
    label: 'Results',
    category: 'why-us'
  },
  // Service Cards (left bottom, 3x2 or 2x3 grid)
  {
    color: '#060010',
    title: 'Event Management',
    description: 'From intimate gatherings to large-scale experiences, we plan and execute events that leave lasting impressions.',
    label: 'Events',
    category: 'service'
  },
  {
    color: '#060010',
    title: 'Digital Marketing',
    description: 'Data-driven strategies and targeted campaigns to help your brand reach the right audience and achieve measurable results.',
    label: 'Marketing',
    category: 'service'
  },
  {
    color: '#060010',
    title: 'Social Media Management',
    description: 'Consistent, creative, and engaging social presence that builds community and strengthens your brand voice.',
    label: 'Social',
    category: 'service'
  },
  {
    color: '#060010',
    title: 'Reputation Management',
    description: 'We monitor, manage, and enhance your brand image across platforms to ensure you stay trusted and respected.',
    label: 'Reputation',
    category: 'service'
  },
  {
    color: '#060010',
    title: 'Website Development',
    description: 'Clean, modern, and functional websites that represent your brand and help you grow your digital presence.',
    label: 'Web',
    category: 'service'
  },
  {
    color: '#060010',
    title: 'App Development',
    description: 'Custom mobile and web applications built with modern frameworks to drive your digital transformation.',
    label: 'Apps',
    category: 'service'
  },
  // Big Services Header (right bottom, spans 2x2)
  {
    color: '#060010',
    title: 'Our Services',
    description: 'Creativity, strategy, and execution to make a lasting impression.',
    label: 'Our Services',
    category: 'header'
  }
];

const createParticleElement = (x: number, y: number, color: string = DEFAULT_GLOW_COLOR): HTMLDivElement => {
  const el = document.createElement('div');
  el.className = 'particle';
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75
});

const updateCardGlowProperties = (card: HTMLElement, mouseX: number, mouseY: number, glow: number, radius: number) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty('--glow-x', `${relativeX}%`);
  card.style.setProperty('--glow-y', `${relativeY}%`);
  card.style.setProperty('--glow-intensity', glow.toString());
  card.style.setProperty('--glow-radius', `${radius}px`);
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = '',
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(Math.random() * width, Math.random() * height, glowColor)
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach(particle => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'back.in(1.7)',
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        }
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(clone, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.2, ease: 'power2.out' });

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 3 + Math.random() * 2, // Slower, smoother animation
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 2,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove()
        }
      );
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('click', handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('click', handleClick);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles, disableAnimations, enableTilt, enableMagnetism, clickEffect, glowColor]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: 'relative', overflow: 'hidden' }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isInsideSection = useRef(false);
  const rafId = useRef<number | null>(null);
  const lastMousePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(58, 41, 255, 0.15) 0%,
        rgba(255, 148, 180, 0.10) 25%,
        rgba(255, 50, 50, 0.06) 45%,
        rgba(58, 41, 255, 0.03) 60%,
        transparent 75%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const updateSpotlight = () => {
      if (!spotlightRef.current || !gridRef.current) {
        rafId.current = null;
        return;
      }

      const { x: mouseX, y: mouseY } = lastMousePosition.current;
      const section = gridRef.current.closest('.bento-section');
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect && mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll('.card');

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        cards.forEach(card => {
          (card as HTMLElement).style.setProperty('--glow-intensity', '0');
        });
        rafId.current = null;
        return;
      }

      const { proximity, fadeDistance } = calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(mouseX - centerX, mouseY - centerY) - Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity = (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(cardElement, mouseX, mouseY, glowIntensity, spotlightRadius);
      });

      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${mouseX}px`;
        spotlightRef.current.style.top = `${mouseY}px`;
      }

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
            ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
            : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: 'power2.out'
      });

      rafId.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      lastMousePosition.current = { x: e.clientX, y: e.clientY };
      
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updateSpotlight);
      }
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll('.card').forEach(card => {
        (card as HTMLElement).style.setProperty('--glow-intensity', '0');
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid: React.FC<{
  children: React.ReactNode;
  gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
  <div
    className="bento-section mx-auto max-w-6xl w-full select-none relative px-4 sm:px-6 md:px-8"
    style={{ fontSize: 'clamp(1rem, 0.9rem + 0.5vw, 1.5rem)' }}
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    
    let timeoutId: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150); // Debounce resize by 150ms
    };

    window.addEventListener('resize', debouncedResize, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return isMobile;
};

export function MagicBentoSection({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = 350,
  particleCount = 4, // Reduced from 8 to 4 for better performance
  enableTilt = false, // Disabled by default for performance
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = false // Disabled by default for performance
}: BentoProps = {}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <section id="overview" aria-labelledby="magic-bento-section" className="bg-black py-14 sm:py-16 md:py-20 w-full">
      <style>
        {`
          .bento-section {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 200px;
            --glow-color: ${glowColor};
            --border-color: #392e4e;
            --background-dark: #060010;
            --white: hsl(0, 0%, 100%);
            --aurora-blue: rgba(58, 41, 255, 1);
            --aurora-pink: rgba(255, 148, 180, 1);
            --aurora-red: rgba(255, 50, 50, 1);
            --aurora-glow: rgba(58, 41, 255, 0.2);
            --aurora-border: rgba(58, 41, 255, 0.8);
          }
          
          .card-responsive {
            display: grid;
            width: 100%;
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          
          @media (min-width: 600px) {
            .card-responsive {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (min-width: 1024px) {
            .card-responsive {
              grid-template-columns: repeat(4, 1fr);
              grid-template-rows: repeat(5, minmax(200px, 1fr));
              gap: 0.5rem;
            }
            
            /* Big Why Us - left top, span 2x2 */
            .card-responsive .card:nth-child(1) {
              grid-column: 1 / span 2;
              grid-row: 1 / span 2;
            }
            
            /* 4 Why Us value cards - right top, 2x2 grid */
            .card-responsive .card:nth-child(2) {
              grid-column: 3;
              grid-row: 1;
            }
            
            .card-responsive .card:nth-child(3) {
              grid-column: 4;
              grid-row: 1;
            }
            
            .card-responsive .card:nth-child(4) {
              grid-column: 3;
              grid-row: 2;
            }
            
            .card-responsive .card:nth-child(5) {
              grid-column: 4;
              grid-row: 2;
            }
            
            /* 6 Service cards - left bottom, 3x2 grid */
            .card-responsive .card:nth-child(6) {
              grid-column: 1;
              grid-row: 3;
            }
            
            .card-responsive .card:nth-child(7) {
              grid-column: 2;
              grid-row: 3;
            }
            
            .card-responsive .card:nth-child(8) {
              grid-column: 1;
              grid-row: 4;
            }
            
            .card-responsive .card:nth-child(9) {
              grid-column: 2;
              grid-row: 4;
            }
            
            .card-responsive .card:nth-child(10) {
              grid-column: 1;
              grid-row: 5;
            }
            
            .card-responsive .card:nth-child(11) {
              grid-column: 2;
              grid-row: 5;
            }
            
            /* Big Services - right bottom, aligned with 3 rows of service cards */
            .card-responsive .card:nth-child(12) {
              grid-column: 3 / span 2;
              grid-row: 3 / 6;
            }
          }
          
          .card--border-glow::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 6px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(58, 41, 255, calc(var(--glow-intensity) * 0.8)) 0%,
                rgba(255, 148, 180, calc(var(--glow-intensity) * 0.6)) 40%,
                rgba(255, 50, 50, calc(var(--glow-intensity) * 0.4)) 60%,
                transparent 80%);
            border-radius: inherit;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: subtract;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            pointer-events: none;
            transition: opacity 0.3s ease;
            z-index: 1;
          }
          
          .card--border-glow:hover::after {
            opacity: 1;
          }
          
          .card--border-glow:hover {
            box-shadow: 0 4px 20px rgba(58, 41, 255, 0.3), 0 0 30px rgba(255, 148, 180, 0.2), 0 0 40px rgba(255, 50, 50, 0.1);
          }
          
          .particle::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            background: radial-gradient(circle, rgba(58, 41, 255, 0.3), rgba(255, 148, 180, 0.2));
            border-radius: 50%;
            z-index: -1;
          }
          
          .particle-container:hover {
            box-shadow: 0 4px 20px rgba(58, 41, 255, 0.2), 0 0 30px rgba(255, 148, 180, 0.2);
          }
          
          .text-clamp-1 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
            line-clamp: 1;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          .text-clamp-2 {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          
          @media (max-width: 599px) {
            .card-responsive {
              grid-template-columns: 1fr;
              width: 100%;
              gap: 0.5rem;
              display: flex;
              flex-direction: column;
            }
            
            .card-responsive .card {
              width: 100%;
              min-height: 180px;
            }
            
            /* Mobile card order: Big Why Us → Why Us cards → Big Services → Service cards */
            .card-responsive .card:nth-child(1) { order: 0; } /* Big Why Us */
            .card-responsive .card:nth-child(2) { order: 1; } /* Why Us value 1 */
            .card-responsive .card:nth-child(3) { order: 2; } /* Why Us value 2 */
            .card-responsive .card:nth-child(4) { order: 3; } /* Why Us value 3 */
            .card-responsive .card:nth-child(5) { order: 4; } /* Why Us value 4 */
            .card-responsive .card:nth-child(12) { order: 5; } /* Big Services - moved up */
            .card-responsive .card:nth-child(6) { order: 6; } /* Service 1 */
            .card-responsive .card:nth-child(7) { order: 7; } /* Service 2 */
            .card-responsive .card:nth-child(8) { order: 8; } /* Service 3 */
            .card-responsive .card:nth-child(9) { order: 9; } /* Service 4 */
            .card-responsive .card:nth-child(10) { order: 10; } /* Service 5 */
            .card-responsive .card:nth-child(11) { order: 11; } /* Service 6 */
          }
          
          /* Performance: GPU acceleration hints */
          .card {
            will-change: transform, box-shadow;
            transform: translateZ(0);
            backface-visibility: hidden;
          }
          
          .card--border-glow::after {
            will-change: opacity;
          }
          
          .global-spotlight {
            will-change: transform, opacity;
          }
          
          .particle {
            will-change: transform, opacity;
          }
        `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        <div className="card-responsive grid gap-2">
          {cardData.map((card, index) => {
            const baseClassName = `card flex flex-col justify-between relative h-full w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
              enableBorderGlow ? 'card--border-glow' : ''
            }`;

            const cardStyle = {
              backgroundColor: card.color || 'var(--background-dark)',
              borderColor: 'var(--border-color)',
              color: 'var(--white)',
              '--glow-x': '50%',
              '--glow-y': '50%',
              '--glow-intensity': '0',
              '--glow-radius': '200px'
            } as React.CSSProperties;

            const isHeaderCard = card.category === 'header';

            if (enableStars) {
              return (
                <ParticleCard
                  key={index}
                  className={baseClassName}
                  style={cardStyle}
                  disableAnimations={shouldDisableAnimations}
                  particleCount={particleCount}
                  glowColor={glowColor}
                  enableTilt={enableTilt}
                  clickEffect={clickEffect}
                  enableMagnetism={enableMagnetism}
                >
                  {isHeaderCard ? (
                    <div className="card__content flex flex-col items-center justify-center text-center h-full gap-4 relative text-white">
                      <h3 className="card__title font-bold text-4xl sm:text-5xl md:text-6xl m-0">
                        {card.title}
                      </h3>
                      <p className="card__description text-lg sm:text-xl md:text-2xl leading-relaxed opacity-90 max-w-2xl">
                        {card.description}
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="card__header flex justify-between gap-3 relative text-white">
                        <span className="card__label text-base">{card.label}</span>
                      </div>
                      <div className="card__content flex flex-col relative text-white">
                        <h3 className={`card__title font-normal text-base m-0 mb-1 ${textAutoHide ? 'text-clamp-1' : ''}`}>
                          {card.title}
                        </h3>
                        <p
                          className={`card__description text-xs leading-5 opacity-90 ${textAutoHide ? 'text-clamp-2' : ''}`}
                        >
                          {card.description}
                        </p>
                      </div>
                    </>
                  )}
                </ParticleCard>
              );
            }

            return (
              <div
                key={index}
                className={baseClassName}
                style={cardStyle}
              >
                {isHeaderCard ? (
                  <div className="card__content flex flex-col items-center justify-center text-center h-full gap-4 relative text-white">
                    <h3 className="card__title font-bold text-4xl sm:text-5xl md:text-6xl m-0">
                      {card.title}
                    </h3>
                    <p className="card__description text-lg sm:text-xl md:text-2xl leading-relaxed opacity-90 max-w-2xl">
                      {card.description}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="card__header flex justify-between gap-3 relative text-white">
                      <span className="card__label text-base">{card.label}</span>
                    </div>
                    <div className="card__content flex flex-col relative text-white">
                      <h3 className={`card__title font-normal text-base m-0 mb-1 ${textAutoHide ? 'text-clamp-1' : ''}`}>
                        {card.title}
                      </h3>
                      <p className={`card__description text-xs leading-5 opacity-90 ${textAutoHide ? 'text-clamp-2' : ''}`}>
                        {card.description}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </BentoCardGrid>
    </section>
  );
}

