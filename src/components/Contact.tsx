import React from 'react';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon } from
'lucide-react';
import { motion } from 'framer-motion';
export function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
        'linear-gradient(180deg, rgba(8,12,20,0.92) 0%, rgba(5,8,16,0.9) 100%)'
      }}>

      {/* Nebula accents */}
      <div
        className="nebula-orb"
        style={{
          width: '600px',
          height: '400px',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          background:
          'radial-gradient(ellipse, rgba(77,184,212,0.06) 0%, transparent 70%)',
          animationDelay: '-8s'
        }} />


      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="flex items-center justify-center gap-3 mb-4">

          <span
            className="h-px w-12"
            style={{
              background: 'var(--color-border)'
            }} />

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: 'var(--color-teal)',
              textTransform: 'uppercase'
            }}>

            07 / Contact
          </span>
          <span
            className="h-px w-12"
            style={{
              background: 'var(--color-border)'
            }} />

        </motion.div>

        <motion.h2
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.1
          }}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: 'var(--color-text-primary)',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>

          Let's Connect Across
          <br />
          <span
            style={{
              color: 'var(--color-teal)',
              fontStyle: 'italic'
            }}>

            the Universe
          </span>
        </motion.h2>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.2
          }}
          className="mb-12"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.8,
            maxWidth: '500px',
            margin: '0 auto 3rem'
          }}>

          Whether you want to discuss ML, explore a collaboration, or just talk
          about the stars, I'm always open to connecting.
        </motion.p>

        {/* Contact cards */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.3
          }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">

          <a
            href="mailto:arnii.srivastava05@gmail.com"
            className="flex flex-col items-center gap-3 p-5 rounded-xl transition-all duration-300 group"
            style={{
              background: 'rgba(77,184,212,0.04)',
              border: '1px solid rgba(77,184,212,0.15)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(77,184,212,0.4)';
              e.currentTarget.style.background = 'rgba(77,184,212,0.08)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(77,184,212,0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(77,184,212,0.15)';
              e.currentTarget.style.background = 'rgba(77,184,212,0.04)';
              e.currentTarget.style.boxShadow = 'none';
            }}>

            <MailIcon
              size={22}
              style={{
                color: 'var(--color-teal)'
              }} />

            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}>

                Email
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-text-secondary)'
                }}>

                arnii.srivastava05
                <br />
                @gmail.com
              </p>
            </div>
          </a>

          <div
            className="flex flex-col items-center gap-3 p-5 rounded-xl"
            style={{
              background: 'rgba(126,203,161,0.04)',
              border: '1px solid rgba(126,203,161,0.15)'
            }}>

            <PhoneIcon
              size={22}
              style={{
                color: 'var(--color-aurora)'
              }} />

            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}>

                Phone
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-text-secondary)'
                }}>

                +91 93216 17214
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center gap-3 p-5 rounded-xl"
            style={{
              background: 'rgba(240,192,96,0.04)',
              border: '1px solid rgba(240,192,96,0.15)'
            }}>

            <MapPinIcon
              size={22}
              style={{
                color: 'var(--color-gold)'
              }} />

            <div>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '0.25rem'
                }}>

                Location
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--color-text-secondary)'
                }}>

                Mumbai, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6,
            delay: 0.4
          }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">

          <a
            href="https://linkedin.com/in/arnii-srivastava"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-6 py-3 rounded transition-all duration-300"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.08em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-teal)';
              e.currentTarget.style.color = 'var(--color-teal)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(77,184,212,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
              e.currentTarget.style.boxShadow = 'none';
            }}>

            <LinkedinIcon size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/arnii2511"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 sm:px-6 py-3 rounded transition-all duration-300"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.08em'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-aurora)';
              e.currentTarget.style.color = 'var(--color-aurora)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(126,203,161,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--color-border)';
              e.currentTarget.style.color = 'var(--color-text-secondary)';
              e.currentTarget.style.boxShadow = 'none';
            }}>

            <GithubIcon size={16} />
            GitHub
          </a>
        </motion.div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{
            background:
            'linear-gradient(90deg, transparent, rgba(77,184,212,0.2), transparent)'
          }} />


        {/* Copyright */}
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.68rem',
            color: 'var(--color-text-muted)',
            letterSpacing: '0.1em'
          }}>

          © 2026 Arnii Srivastava · Made with curiosity and stardust ✦
        </p>
      </div>
    </section>);

}
