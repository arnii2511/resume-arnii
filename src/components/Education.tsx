import React from 'react';
import { motion } from 'framer-motion';
export function Education() {
  return (
    <section
      id="education"
      className="relative w-full py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
        'linear-gradient(180deg, rgba(10,15,28,0.9) 0%, rgba(8,12,20,0.92) 100%)'
      }}>

      <div
        className="nebula-orb"
        style={{
          width: '400px',
          height: '400px',
          top: '10%',
          left: '-5%',
          background:
          'radial-gradient(circle, rgba(240,192,96,0.05) 0%, transparent 70%)',
          animationDelay: '-12s'
        }} />


      <div className="max-w-4xl mx-auto">
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
          className="flex items-center gap-3 mb-4">

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: 'var(--color-teal)',
              textTransform: 'uppercase'
            }}>

            04 / Education
          </span>
          <span
            className="h-px flex-1 max-w-xs"
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
          className="section-title mb-12"
          style={{
            fontFamily: 'var(--font-heading)'
          }}>

          The Learning Orbit
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-4 sm:left-6 top-0 bottom-0 w-px"
            style={{
              background:
              'linear-gradient(180deg, var(--color-teal) 0%, var(--color-aurora) 60%, transparent 100%)',
              opacity: 0.4
            }} />


          {/* Entry 1 - DJSCE */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7
            }}
            className="relative pl-12 sm:pl-16 pb-10 sm:pb-14">

            {/* Star node */}
            <div className="absolute left-0 top-1 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: 'var(--color-teal)',
                  boxShadow:
                  '0 0 12px rgba(77,184,212,0.8), 0 0 24px rgba(77,184,212,0.4)'
                }} />

            </div>

            <div
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(77,184,212,0.04)',
                border: '1px solid rgba(77,184,212,0.15)'
              }}>

              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)'
                    }}>

                    Dwarakadas J. Sanghvi College of Engineering
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontStyle: 'italic',
                      fontSize: '0.95rem',
                      color: 'var(--color-aurora)'
                    }}>

                    Mumbai, India
                  </p>
                </div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-teal)',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap'
                  }}>

                  Aug 2023 – May 2027
                </span>
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--color-text-secondary)',
                  marginBottom: '0.5rem'
                }}>

                B.Tech in Computer Engineering
              </p>
              <div className="flex items-center gap-2">
                <span
                  className="px-3 py-1 rounded-full"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    background: 'rgba(240,192,96,0.12)',
                    border: '1px solid rgba(240,192,96,0.3)',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.05em'
                  }}>

                  CGPA: 9.26 (Upto Sem 5)
                </span>
              </div>
            </div>
          </motion.div>

          {/* Entry 2 - DAV */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.7,
              delay: 0.15
            }}
            className="relative pl-12 sm:pl-16 pb-10 sm:pb-14">

            {/* Star node */}
            <div className="absolute left-0 top-1 w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  background: 'var(--color-aurora)',
                  boxShadow:
                  '0 0 12px rgba(126,203,161,0.8), 0 0 24px rgba(126,203,161,0.4)'
                }} />

            </div>

            <div
              className="p-6 rounded-xl"
              style={{
                background: 'rgba(126,203,161,0.04)',
                border: '1px solid rgba(126,203,161,0.15)'
              }}>

              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '1.3rem',
                      fontWeight: 600,
                      color: 'var(--color-text-primary)'
                    }}>

                    DAV Public School
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontStyle: 'italic',
                      fontSize: '0.95rem',
                      color: 'var(--color-aurora)'
                    }}>

                    Mumbai, India
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)'
                    }}>

                    Senior Secondary School
                  </p>
                  <div className="flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        background: 'rgba(240,192,96,0.12)',
                        border: '1px solid rgba(240,192,96,0.3)',
                        color: 'var(--color-gold)'
                      }}>

                      95.6%
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--color-text-muted)'
                      }}>

                      Apr 2022 – Mar 2023
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)'
                    }}>

                    High School
                  </p>
                  <div className="flex items-center gap-3">
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        background: 'rgba(240,192,96,0.12)',
                        border: '1px solid rgba(240,192,96,0.3)',
                        color: 'var(--color-gold)'
                      }}>

                      94.6%
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: 'var(--color-text-muted)'
                      }}>

                      Apr 2020 – Mar 2021
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
