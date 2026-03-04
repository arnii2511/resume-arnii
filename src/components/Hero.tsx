import React, { useEffect, useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { motion } from 'framer-motion';
const typewriterPhrases = [
'Machine Learning Enthusiast',
'Stargazer & Explorer',
'Full Stack Developer',
'Data Analyst',
'Space & Nature Dreamer'];

function TreelineSVG() {
  return (
    <svg
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      className="absolute bottom-0 left-0 w-full"
      style={{
        height: 'clamp(120px, 18vh, 200px)',
        zIndex: 2
      }}
      aria-hidden="true">

      {/* Back layer - lighter silhouette */}
      <path
        d="M0,180 L20,140 L40,160 L60,120 L80,145 L100,110 L120,135 L140,100 L160,125 L180,95 L200,115 L220,85 L240,110 L260,90 L280,115 L300,80 L320,105 L340,75 L360,100 L380,70 L400,95 L420,75 L440,100 L460,80 L480,105 L500,75 L520,100 L540,70 L560,95 L580,75 L600,100 L620,80 L640,105 L660,75 L680,100 L700,70 L720,95 L740,75 L760,100 L780,80 L800,105 L820,75 L840,100 L860,70 L880,95 L900,75 L920,100 L940,80 L960,105 L980,75 L1000,100 L1020,70 L1040,95 L1060,75 L1080,100 L1100,80 L1120,105 L1140,75 L1160,100 L1180,70 L1200,95 L1220,75 L1240,100 L1260,80 L1280,105 L1300,75 L1320,100 L1340,70 L1360,95 L1380,75 L1400,100 L1420,80 L1440,105 L1440,200 L0,200 Z"
        fill="rgba(10, 25, 18, 0.6)" />

      {/* Mid layer */}
      <path
        d="M0,200 L0,165 L30,130 L50,155 L70,115 L90,140 L110,105 L130,130 L150,95 L170,120 L190,90 L210,118 L230,88 L250,115 L270,85 L290,112 L310,82 L330,110 L350,80 L370,108 L390,78 L410,106 L430,76 L450,104 L470,74 L490,102 L510,72 L530,100 L550,70 L570,98 L590,68 L610,96 L630,66 L650,94 L670,64 L690,92 L710,62 L730,90 L750,60 L770,88 L790,58 L810,86 L830,56 L850,84 L870,54 L890,82 L910,52 L930,80 L950,50 L970,78 L990,48 L1010,76 L1030,46 L1050,74 L1070,44 L1090,72 L1110,42 L1130,70 L1150,40 L1170,68 L1190,38 L1210,66 L1230,36 L1250,64 L1270,34 L1290,62 L1310,32 L1330,60 L1350,30 L1370,58 L1390,28 L1410,56 L1430,26 L1440,55 L1440,200 Z"
        fill="rgba(8, 18, 14, 0.8)" />

      {/* Front layer - darkest */}
      <path
        d="M0,200 L0,175 L40,145 L60,170 L80,135 L100,160 L120,130 L140,155 L160,125 L180,150 L200,170 L220,145 L240,165 L260,140 L280,160 L300,135 L320,155 L340,130 L360,150 L380,125 L400,148 L420,170 L440,145 L460,168 L480,143 L500,165 L520,140 L540,162 L560,138 L580,160 L600,135 L620,158 L640,133 L660,155 L680,130 L700,152 L720,128 L740,150 L760,125 L780,148 L800,170 L820,145 L840,168 L860,143 L880,165 L900,140 L920,162 L940,138 L960,160 L980,135 L1000,158 L1020,133 L1040,155 L1060,130 L1080,152 L1100,128 L1120,150 L1140,125 L1160,148 L1180,170 L1200,145 L1220,168 L1240,143 L1260,165 L1280,140 L1300,162 L1320,138 L1340,160 L1360,135 L1380,158 L1400,133 L1420,155 L1440,130 L1440,200 Z"
        fill="#080c14" />

    </svg>);

}
export function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  useEffect(() => {
    const current = typewriterPhrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex((c) => c + 1), 80);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex((c) => c - 1), 45);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % typewriterPhrases.length);
    }
    setDisplayText(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-24"
      style={{
        background: 'transparent'
      }}>

      {/* Nebula orbs */}
      <div
        className="nebula-orb"
        style={{
          width: '600px',
          height: '600px',
          top: '10%',
          left: '15%',
          background:
          'radial-gradient(circle, rgba(77,184,212,0.12) 0%, transparent 70%)',
          animationDelay: '0s'
        }} />

      <div
        className="nebula-orb"
        style={{
          width: '500px',
          height: '500px',
          top: '30%',
          right: '10%',
          background:
          'radial-gradient(circle, rgba(126,203,161,0.08) 0%, transparent 70%)',
          animationDelay: '-5s',
          animationDuration: '18s'
        }} />

      <div
        className="nebula-orb"
        style={{
          width: '400px',
          height: '400px',
          bottom: '20%',
          left: '40%',
          background:
          'radial-gradient(circle, rgba(240,192,96,0.06) 0%, transparent 70%)',
          animationDelay: '-10s',
          animationDuration: '20s'
        }} />


      {/* Hero Content */}
      <div
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
        style={{
          paddingTop: 'clamp(0.5rem, 2.5vh, 2rem)',
          paddingBottom: 'clamp(8rem, 18vh, 11rem)'
        }}>

        {/* Name */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 0.4
          }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.6rem, 14vw, 8rem)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            lineHeight: 1,
            color: 'var(--color-text-primary)',
            marginBottom: '1.25rem'
          }}>

          ARNII
          <br />
          <span
            style={{
              color: 'var(--color-teal)',
              fontStyle: 'italic'
            }}>

            SRIVASTAVA
          </span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 0.8,
            delay: 0.8
          }}
          className="mb-6 h-8 flex items-center justify-center">

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(0.85rem, 2vw, 1.1rem)',
              color: 'var(--color-aurora)',
              letterSpacing: '0.05em'
            }}>

            {displayText}
            <span
              className="cursor-blink"
              style={{
                color: 'var(--color-teal)'
              }}>

              |
            </span>
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 1.0
          }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
            letterSpacing: '0.03em'
          }}>

          Exploring the universe of data, one constellation at a time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 1.2
          }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">

          <button
            className="btn-primary w-full sm:w-auto"
            onClick={() =>
            document.getElementById('projects')?.scrollIntoView({
              behavior: 'smooth'
            })
            }>

            View My Work
          </button>
          <a
            href="#contact"
            className="btn-ghost w-full sm:w-auto"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              });
            }}>

            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.8,
          duration: 0.8
        }}
        onClick={scrollToAbout}
        className="absolute left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group"
        aria-label="Scroll down"
        style={{
          zIndex: 3,
          bottom: 'clamp(2rem, 6vh, 4rem)'
        }}>

        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            color: 'var(--color-text-muted)',
            textTransform: 'uppercase'
          }}>

          Scroll
        </span>
        <ChevronDownIcon
          size={18}
          className="scroll-indicator"
          style={{
            color: 'var(--color-text-muted)'
          }} />

      </motion.button>

      {/* Treeline */}
      <TreelineSVG />
    </section>);

}
