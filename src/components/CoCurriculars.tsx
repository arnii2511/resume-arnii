import React from 'react';
import { motion } from 'framer-motion';
import { UsersIcon, RocketIcon } from 'lucide-react';
export function CoCurriculars() {
  return (
    <section
      id="cocurriculars"
      className="relative w-full py-16 md:py-20 px-4 sm:px-6"
      style={{
        background: 'linear-gradient(180deg, #0a0f1c 0%, #080c14 100%)'
      }}>

      <div
        className="nebula-orb"
        style={{
          width: '450px',
          height: '450px',
          top: '20%',
          right: '5%',
          background:
          'radial-gradient(circle, rgba(77,184,212,0.05) 0%, transparent 70%)',
          animationDelay: '-4s'
        }} />


      <div className="max-w-6xl mx-auto">
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

            06 / Co-Curriculars
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

          Beyond the Horizon
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Synapse */}
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
            className="card-cosmic p-6 sm:p-8 relative overflow-hidden">

            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                'linear-gradient(90deg, transparent, #4db8d4, transparent)'
              }} />

            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(77,184,212,0.1)',
                  border: '1px solid rgba(77,184,212,0.3)'
                }}>

                <UsersIcon
                  size={20}
                  style={{
                    color: 'var(--color-teal)'
                  }} />

              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.2
                  }}>

                  Synapse – AI/ML Committee
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-teal)',
                    letterSpacing: '0.05em',
                    marginTop: '0.25rem'
                  }}>

                  DJSCE · Aug 2024
                </p>
              </div>
            </div>
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full mb-3"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  background: 'rgba(77,184,212,0.1)',
                  border: '1px solid rgba(77,184,212,0.25)',
                  color: 'var(--color-teal)',
                  letterSpacing: '0.05em'
                }}>

                ML Mentee &amp; Co-Committee Member
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7
                }}>

                Built strong foundations in EDA and ML 
                (RNNs, Transformers and much more) while               
                co-managing technical
                content and simplifying concepts for diverse audiences.
              </p>
            </div>
          </motion.div>

          {/* DJS Antariksh */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
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
            className="card-cosmic p-6 sm:p-8 relative overflow-hidden">

            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                'linear-gradient(90deg, transparent, #7ecba1, transparent)'
              }} />

            <div className="flex items-start gap-4 mb-5">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'rgba(126,203,161,0.1)',
                  border: '1px solid rgba(126,203,161,0.3)'
                }}>

                <RocketIcon
                  size={20}
                  style={{
                    color: 'var(--color-aurora)'
                  }} />

              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.2
                  }}>

                  DJS Antariksh
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--color-aurora)',
                    letterSpacing: '0.05em',
                    marginTop: '0.25rem'
                  }}>

                  Martian Rover Challenge Team · DJSCE · Apr 2024
                </p>
              </div>
            </div>
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full mb-3"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  background: 'rgba(126,203,161,0.1)',
                  border: '1px solid rgba(126,203,161,0.25)',
                  color: 'var(--color-aurora)',
                  letterSpacing: '0.05em'
                }}>

                Research Sub-Head, Science Department
              </span>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7
                }}>

                Led martian-research documentation and ensured
                inter-departmental coordination to drive informed
                decision-making across project phases. Contributed to the team's
                mission to explore Mars.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
