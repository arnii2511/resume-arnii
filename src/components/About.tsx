import React, { useState } from 'react';
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  LinkedinIcon,
  SparklesIcon } from
'lucide-react';
import { motion } from 'framer-motion';
function ImagePlaceholder() {
  const [imageError, setImageError] = useState(false);
  const hasImage = !imageError;

  return (
    <div
      className="relative flex items-center justify-center"
      style={{
        width: 'clamp(220px, 70vw, 280px)',
        height: 'clamp(220px, 70vw, 280px)'
      }}>

      {/* Outer orbit ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: '1px solid rgba(77, 184, 212, 0.3)',
          animation: 'orbit-ring 20s linear infinite'
        }}>

        <div
          className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full"
          style={{
            background: 'var(--color-teal)'
          }} />

      </div>
      {/* Middle ring */}
      <div
        className="absolute rounded-full"
        style={{
          inset: '20px',
          border: '1px solid rgba(126, 203, 161, 0.2)',
          animation: 'orbit-ring 14s linear infinite reverse'
        }}>

        <div
          className="absolute top-0 right-4 w-1.5 h-1.5 rounded-full"
          style={{
            background: 'var(--color-aurora)'
          }} />

      </div>
      {/* Photo container */}
      <div
        className="relative rounded-full overflow-hidden flex items-center justify-center"
        style={{
          width: 'clamp(160px, 52vw, 200px)',
          height: 'clamp(160px, 52vw, 200px)',
          background:
          'linear-gradient(135deg, #0d1520 0%, #162032 50%, #0a1a28 100%)',
          border: '2px solid rgba(77, 184, 212, 0.4)',
          boxShadow:
          '0 0 40px rgba(77, 184, 212, 0.2), inset 0 0 40px rgba(77, 184, 212, 0.05)'
        }}>
        {hasImage ?
        <img
          src="/photo.png"
          alt="Arnii Srivastava"
          className="w-full h-full object-cover"
          onError={() => setImageError(true)} /> :
        <>
            {/* Constellation pattern inside */}
            <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full opacity-20"
            aria-hidden="true">

              <circle cx="60" cy="50" r="1.5" fill="#4db8d4" />
              <circle cx="100" cy="40" r="2" fill="#7ecba1" />
              <circle cx="140" cy="60" r="1.5" fill="#4db8d4" />
              <circle cx="80" cy="80" r="1" fill="#f0c060" />
              <circle cx="120" cy="75" r="1.5" fill="#4db8d4" />
              <circle cx="50" cy="110" r="1" fill="#7ecba1" />
              <circle cx="150" cy="100" r="1.5" fill="#4db8d4" />
              <circle cx="100" cy="130" r="2" fill="#7ecba1" />
              <circle cx="70" cy="150" r="1" fill="#4db8d4" />
              <circle cx="130" cy="145" r="1.5" fill="#f0c060" />
              <line
              x1="60"
              y1="50"
              x2="100"
              y2="40"
              stroke="#4db8d4"
              strokeWidth="0.5"
              opacity="0.5" />

              <line
              x1="100"
              y1="40"
              x2="140"
              y2="60"
              stroke="#4db8d4"
              strokeWidth="0.5"
              opacity="0.5" />

              <line
              x1="80"
              y1="80"
              x2="120"
              y2="75"
              stroke="#7ecba1"
              strokeWidth="0.5"
              opacity="0.5" />

              <line
              x1="100"
              y1="130"
              x2="70"
              y2="150"
              stroke="#4db8d4"
              strokeWidth="0.5"
              opacity="0.5" />

              <line
              x1="100"
              y1="130"
              x2="130"
              y2="145"
              stroke="#4db8d4"
              strokeWidth="0.5"
              opacity="0.5" />

            </svg>
            <div className="text-center z-10">
              <SparklesIcon
              size={28}
              style={{
                color: 'var(--color-teal)',
                margin: '0 auto 8px'
              }} />

              <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--color-text-secondary)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>

                Your Photo
                <br />
                Here
              </p>
            </div>
          </>
        }
      </div>
    </div>);

}
export function About() {
  return (
    <section
      id="about"
      className="relative w-full py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
        'linear-gradient(180deg, rgba(8,12,20,0.92) 0%, rgba(10,15,28,0.9) 100%)'
      }}>

      {/* Nebula accent */}
      <div
        className="nebula-orb"
        style={{
          width: '500px',
          height: '500px',
          top: '0%',
          right: '-10%',
          background:
          'radial-gradient(circle, rgba(77,184,212,0.06) 0%, transparent 70%)'
        }} />


      <div className="max-w-6xl mx-auto">
        {/* Section label */}
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
          className="flex items-center gap-3 mb-12">

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: 'var(--color-teal)',
              textTransform: 'uppercase'
            }}>

            01 / About
          </span>
          <span
            className="h-px flex-1 max-w-xs"
            style={{
              background: 'var(--color-border)'
            }} />

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              x: -40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="flex justify-center lg:justify-start">

            <ImagePlaceholder />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{
              opacity: 0,
              x: 40
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}>

            <h2
              className="section-title mb-2"
              style={{
                fontFamily: 'var(--font-heading)'
              }}>

              Arnii Srivastava
            </h2>
            <p
              className="mb-6"
              style={{
                fontFamily: 'var(--font-heading)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--color-aurora)',
                fontWeight: 300
              }}>

              B.Tech Computer Engineering · DJSCE Mumbai · CGPA 9.26
            </p>
            <p
              className="mb-8 leading-relaxed"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8
              }}>

              A fast learner eager to gain hands-on experience in a Machine
              Learning role by supporting day-to-day operational activities,
              coordination, tracking, and follow-ups across teams, contributing
              to timely execution and problem-solving in a dynamic work
              environment. Just as stars navigate by their own light, I navigate
              complex data to find meaningful patterns.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-8">
              <a
                href="mailto:arnii.srivastava05@gmail.com"
                className="flex items-center gap-3 group transition-colors duration-200"
                style={{
                  color: 'var(--color-text-secondary)'
                }}>

                <MailIcon
                  size={15}
                  style={{
                    color: 'var(--color-teal)',
                    flexShrink: 0
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem'
                  }}
                  className="group-hover:text-white transition-colors break-all">

                  arnii.srivastava05@gmail.com
                </span>
              </a>
              <div
                className="flex items-center gap-3"
                style={{
                  color: 'var(--color-text-secondary)'
                }}>

                <PhoneIcon
                  size={15}
                  style={{
                    color: 'var(--color-teal)',
                    flexShrink: 0
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem'
                  }}>

                  +91 93216 17214
                </span>
              </div>
              <div
                className="flex items-center gap-3"
                style={{
                  color: 'var(--color-text-secondary)'
                }}>

                <MapPinIcon
                  size={15}
                  style={{
                    color: 'var(--color-aurora)',
                    flexShrink: 0
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem'
                  }}>

                  Mumbai, India
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://linkedin.com/in/arnii-srivastava"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded transition-all duration-300"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-teal)';
                  e.currentTarget.style.color = 'var(--color-teal)';
                  e.currentTarget.style.boxShadow =
                  '0 0 15px rgba(77,184,212,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>

                <LinkedinIcon size={14} />
                LinkedIn
              </a>
              <a
                href="https://github.com/arnii2511"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded transition-all duration-300"
                style={{
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-aurora)';
                  e.currentTarget.style.color = 'var(--color-aurora)';
                  e.currentTarget.style.boxShadow =
                  '0 0 15px rgba(126,203,161,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                  e.currentTarget.style.color = 'var(--color-text-secondary)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>

                <GithubIcon size={14} />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
