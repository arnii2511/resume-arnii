import React, { useEffect, useState } from 'react';
import { DownloadIcon, StarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navLinks = [
{
  label: 'About',
  href: '#about'
},
{
  label: 'Skills',
  href: '#skills'
},
{
  label: 'Projects',
  href: '#projects'
},
{
  label: 'Education',
  href: '#education'
},
{
  label: 'Achievements',
  href: '#achievements'
},
{
  label: 'Contact',
  href: '#contact'
}];

const RESUME_URL = '/resume.pdf';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el)
    el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return (
    <motion.nav
      initial={{
        y: -80,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        duration: 0.8,
        ease: 'easeOut'
      }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? 'rgba(8, 12, 20, 0.85)' : 'rgba(8, 12, 20, 0.4)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ?
        '1px solid rgba(77, 184, 212, 0.15)' :
        '1px solid transparent',
        transition: 'all 0.4s ease'
      }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
          }
          className="flex items-center gap-2 group"
          aria-label="Back to top">

          <div className="relative">
            <StarIcon
              size={14}
              className="text-teal absolute -top-1 -right-1 opacity-70"
              style={{
                color: 'var(--color-teal)'
              }} />

          </div>
          <span
            className="text-2xl font-heading font-semibold tracking-widest"
            style={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-text-primary)',
              letterSpacing: '0.15em'
            }}>

            AS
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative group flex items-center gap-1.5 text-sm transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.08em',
                  color: isActive ?
                  'var(--color-teal)' :
                  'var(--color-text-secondary)'
                }}>

                {isActive &&
                <motion.span
                  layoutId="nav-dot"
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background: 'var(--color-teal)'
                  }} />

                }
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{
                    background: 'var(--color-teal)'
                  }} />

              </button>);

          })}
          <a
            href={RESUME_URL}
            download="Arnii_Srivastava_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded transition-all duration-300"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-teal)';
              e.currentTarget.style.color = 'var(--color-teal)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
            }}>

            <DownloadIcon size={13} />
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu">

          <span
            className="w-5 h-px transition-all duration-300"
            style={{
              background: 'var(--color-text-secondary)',
              transform: menuOpen ? 'rotate(45deg) translateY(4px)' : 'none'
            }} />

          <span
            className="w-5 h-px transition-all duration-300"
            style={{
              background: 'var(--color-text-secondary)',
              opacity: menuOpen ? 0 : 1
            }} />

          <span
            className="w-5 h-px transition-all duration-300"
            style={{
              background: 'var(--color-text-secondary)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-4px)' : 'none'
            }} />

        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen &&
        <motion.div
          initial={{
            opacity: 0,
            height: 0
          }}
          animate={{
            opacity: 1,
            height: 'auto'
          }}
          exit={{
            opacity: 0,
            height: 0
          }}
          className="md:hidden overflow-hidden"
          style={{
            background: 'rgba(8, 12, 20, 0.95)',
            borderTop: '1px solid rgba(77, 184, 212, 0.1)'
          }}>

            <div className="px-4 sm:px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) =>
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-2 transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                color:
                activeSection === link.href.slice(1) ?
                'var(--color-teal)' :
                'var(--color-text-secondary)'
              }}>

                  {link.label}
                </button>
            )}
              <a
                href={RESUME_URL}
                download="Arnii_Srivastava_Resume.pdf"
                className="inline-flex items-center gap-2 py-2 transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  color: 'var(--color-text-secondary)'
                }}
                onClick={() => setMenuOpen(false)}
                onMouseEnter={(e) =>
                e.currentTarget.style.color = 'var(--color-teal)'
                }
                onMouseLeave={(e) =>
                e.currentTarget.style.color = 'var(--color-text-secondary)'
                }>

                <DownloadIcon size={14} />
                Resume
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}
