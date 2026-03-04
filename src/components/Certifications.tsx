import React from 'react';
import { ExternalLinkIcon, TrophyIcon, AwardIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function Certifications() {
  return (
    <section
      id="achievements"
      className="relative w-full py-16 md:py-20 px-4 sm:px-6"
      style={{
        background: 'linear-gradient(180deg, #080c14 0%, #0a0f1c 100%)'
      }}>

      <div
        className="nebula-orb"
        style={{
          width: '500px',
          height: '500px',
          bottom: '10%',
          right: '-5%',
          background:
          'radial-gradient(circle, rgba(240,192,96,0.06) 0%, transparent 70%)',
          animationDelay: '-6s'
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

            05 / Achievements
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

          Certifications &amp; Milestones
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gen AI Academy */}
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
              delay: 0
            }}
            className="card-cosmic p-6 relative overflow-hidden">

            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                'linear-gradient(90deg, transparent, #4db8d4, transparent)'
              }} />

            <div className="flex items-start justify-between mb-3">
              <AwardIcon
                size={20}
                style={{
                  color: 'var(--color-teal)',
                  flexShrink: 0
                }} />

              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.05em'
                  }}>

                  Dec 2025
                </span>
                <a
                  href="#"
                  className="transition-colors duration-200"
                  style={{
                    color: 'var(--color-text-muted)'
                  }}
                  onMouseEnter={(e) =>
                  e.currentTarget.style.color = 'var(--color-teal)'
                  }
                  onMouseLeave={(e) =>
                  e.currentTarget.style.color = 'var(--color-text-muted)'
                  }
                  aria-label="View certificate">

                  <ExternalLinkIcon size={14} />
                </a>
              </div>
            </div>
            <h3
              className="mb-1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)'
              }}>

              Gen AI Academy 2.0
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-teal)',
                letterSpacing: '0.05em'
              }}>

              Data Learning Track · Google Cloud
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6
              }}>

              Hands-on experience with streaming analytics and cloud-based data
              pipelines using Pub/Sub, Dataflow, BigQuery, and Cloud Functions.
            </p>
          </motion.div>

          {/* Neo4j */}
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
              delay: 0.1
            }}
            className="card-cosmic p-6 relative overflow-hidden">

            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                'linear-gradient(90deg, transparent, #7ecba1, transparent)'
              }} />

            <div className="flex items-start justify-between mb-3">
              <AwardIcon
                size={20}
                style={{
                  color: 'var(--color-aurora)',
                  flexShrink: 0
                }} />

              <div className="flex items-center gap-2">
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--color-text-muted)',
                    letterSpacing: '0.05em'
                  }}>

                  Oct 2025
                </span>
                <a
                  href="#"
                  className="transition-colors duration-200"
                  style={{
                    color: 'var(--color-text-muted)'
                  }}
                  onMouseEnter={(e) =>
                  e.currentTarget.style.color = 'var(--color-aurora)'
                  }
                  onMouseLeave={(e) =>
                  e.currentTarget.style.color = 'var(--color-text-muted)'
                  }
                  aria-label="View certificate">

                  <ExternalLinkIcon size={14} />
                </a>
              </div>
            </div>
            <h3
              className="mb-1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)'
              }}>

              Neo4j Fundamentals
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-aurora)',
                letterSpacing: '0.05em'
              }}>

              GraphAcademy Certification
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6
              }}>

              Certified in Cypher and graph data modeling using Neo4j with
              hands-on experience designing and querying relationship-driven
              datasets.
            </p>
          </motion.div>

          {/* Codeshastra */}
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
              delay: 0.2
            }}
            className="card-cosmic p-6 relative overflow-hidden">

            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                'linear-gradient(90deg, transparent, #f0c060, transparent)'
              }} />

            <div className="flex items-start justify-between mb-3">
              <TrophyIcon
                size={20}
                style={{
                  color: 'var(--color-gold)',
                  flexShrink: 0
                }} />

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.05em'
                }}>

                Apr 2025
              </span>
            </div>
            <h3
              className="mb-1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)'
              }}>

              Codeshastra XI Hackathon
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-gold)',
                letterSpacing: '0.05em'
              }}>

              Team Project
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6
              }}>

              Developed an ML-based anomaly detection system for 10K+ sales
              records and integrated a RAG pipeline for contextual audit
              reporting and severity-based risk scoring.
            </p>
          </motion.div>

          {/* Smart India Hackathon */}
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
            className="card-cosmic p-6 relative overflow-hidden">

            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                'linear-gradient(90deg, transparent, #f0c060, transparent)'
              }} />

            <div className="flex items-start justify-between mb-3">
              <TrophyIcon
                size={20}
                style={{
                  color: 'var(--color-gold)',
                  flexShrink: 0
                }} />

              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  color: 'var(--color-text-muted)',
                  letterSpacing: '0.05em'
                }}>

                Nov 2023
              </span>
            </div>
            <h3
              className="mb-1"
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'var(--color-text-primary)'
              }}>

              Smart India Hackathon 2023
            </h3>
            <p
              className="mb-3"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--color-gold)',
                letterSpacing: '0.05em'
              }}>

              Ministry of Defense · Top 6 / 300+ Teams
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6
              }}>

              Secured Top 6 position among 300+ nationwide teams. Contributed to
              solution ideation and prototype development for Robust Human
              Target Detection &amp; Acquisition.
            </p>
            <div className="mt-3">
              <span
                className="px-3 py-1 rounded-full"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  background: 'rgba(240,192,96,0.12)',
                  border: '1px solid rgba(240,192,96,0.3)',
                  color: 'var(--color-gold)'
                }}>

                🏆 Top 6 Nationwide
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
