import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { motion } from 'framer-motion';
function ConstellationDecor({ color }: {color: string;}) {
  return (
    <svg
      viewBox="0 0 80 80"
      className="absolute top-4 right-4 opacity-20"
      style={{
        width: '60px',
        height: '60px'
      }}
      aria-hidden="true">

      <circle cx="20" cy="15" r="1.5" fill={color} />
      <circle cx="50" cy="10" r="1" fill={color} />
      <circle cx="65" cy="30" r="1.5" fill={color} />
      <circle cx="40" cy="40" r="2" fill={color} />
      <circle cx="15" cy="50" r="1" fill={color} />
      <circle cx="60" cy="55" r="1.5" fill={color} />
      <circle cx="35" cy="65" r="1" fill={color} />
      <line x1="20" y1="15" x2="50" y2="10" stroke={color} strokeWidth="0.5" />
      <line x1="50" y1="10" x2="65" y2="30" stroke={color} strokeWidth="0.5" />
      <line x1="65" y1="30" x2="40" y2="40" stroke={color} strokeWidth="0.5" />
      <line x1="40" y1="40" x2="15" y2="50" stroke={color} strokeWidth="0.5" />
      <line x1="40" y1="40" x2="60" y2="55" stroke={color} strokeWidth="0.5" />
      <line x1="60" y1="55" x2="35" y2="65" stroke={color} strokeWidth="0.5" />
    </svg>);

}
export function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
        'linear-gradient(180deg, rgba(8,12,20,0.92) 0%, rgba(10,15,28,0.9) 100%)'
      }}>

      <div
        className="nebula-orb"
        style={{
          width: '500px',
          height: '500px',
          top: '30%',
          right: '-5%',
          background:
          'radial-gradient(circle, rgba(77,184,212,0.07) 0%, transparent 70%)',
          animationDelay: '-3s'
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

            03 / Projects
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

          Missions & Explorations
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project 1 - WordCraft */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40
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
            className="card-cosmic relative overflow-hidden p-6">

            <ConstellationDecor color="#4db8d4" />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                'linear-gradient(90deg, transparent, #4db8d4, transparent)'
              }} />

            <div className="flex items-start justify-between mb-4">
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--color-teal)',
                    letterSpacing: '0.1em'
                  }}>

                  Feb 2026
                </span>
                <h3
                  className="mt-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.2
                  }}>

                  WordCraft
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)'
                  }}>

                  NLP-based WebApp for Writers
                </p>
              </div>
              <a
                href="https://github.com/arnii2511/WordCraft_Project"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded transition-all duration-200"
                style={{
                  color: 'var(--color-text-muted)'
                }}
                onMouseEnter={(e) =>
                e.currentTarget.style.color = 'var(--color-teal)'
                }
                onMouseLeave={(e) =>
                e.currentTarget.style.color = 'var(--color-text-muted)'
                }
                aria-label="View on GitHub">

                <GithubIcon size={18} />
              </a>
            </div>
            <ul className="mb-5 space-y-1.5">
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-teal)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  Built NLP writing assistant delivering context-aware
                  suggestions with ~300ms inference latency
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-teal)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  POS-aware ranking using spaCy and transformer embeddings
                  across 3+ lexical sources
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-teal)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  Full-stack with JWT authentication and MongoDB-based document
                  persistence
                </span>
              </li>
            </ul>
            <a
              href="https://github.com/arnii2511/WordCraft_Project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded transition-all duration-200"
              style={{
                border: '1px solid rgba(77,184,212,0.25)',
                color: 'var(--color-teal)',
                background: 'rgba(77,184,212,0.08)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.06em'
              }}
              aria-label="Open WordCraft repository">

              <GithubIcon size={14} />
              View Repo
            </a>
            <div className="flex flex-wrap gap-2">
              {['Python', 'NLTK', 'React', 'MongoDB'].map((tech) =>
              <span
                key={tech}
                className="skill-tag"
                style={{
                  fontSize: '0.65rem'
                }}>

                  {tech}
                </span>
              )}
            </div>
          </motion.div>

          {/* Project 2 - Spotify Dashboard */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40
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
            className="card-cosmic relative overflow-hidden p-6">

            <ConstellationDecor color="#7ecba1" />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                'linear-gradient(90deg, transparent, #7ecba1, transparent)'
              }} />

            <div className="flex items-start justify-between mb-4">
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--color-aurora)',
                    letterSpacing: '0.1em'
                  }}>

                  Oct 2025
                </span>
                <h3
                  className="mt-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.2
                  }}>

                  Spotify Analytics
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)'
                  }}>

                  Premium Conversion Dashboard
                </p>
              </div>
              <a
                href="https://github.com/arnii2511/Spotify_User_Analysis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded transition-all duration-200"
                style={{
                  color: 'var(--color-text-muted)'
                }}
                onMouseEnter={(e) =>
                e.currentTarget.style.color = 'var(--color-aurora)'
                }
                onMouseLeave={(e) =>
                e.currentTarget.style.color = 'var(--color-text-muted)'
                }
                aria-label="View on GitHub">

                <GithubIcon size={18} />
              </a>
            </div>
            <ul className="mb-5 space-y-1.5">
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-aurora)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  Processed and analyzed a 28K+ Spotify user dataset to identify
                  listening behavior patterns
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-aurora)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  Identified 7 key predictors of premium conversion for
                  user-retention strategies
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-aurora)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  Created Tableau dashboards highlighting anomalies and top
                  conversion drivers
                </span>
              </li>
            </ul>
            <a
              href="https://github.com/arnii2511/Spotify_User_Analysis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded transition-all duration-200"
              style={{
                border: '1px solid rgba(126,203,161,0.25)',
                color: 'var(--color-aurora)',
                background: 'rgba(126,203,161,0.08)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.06em'
              }}
              aria-label="Open Spotify Analytics repository">

              <GithubIcon size={14} />
              View Repo
            </a>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Tableau', 'SQL'].map((tech) =>
              <span
                key={tech}
                className="skill-tag"
                style={{
                  fontSize: '0.65rem',
                  borderColor: 'rgba(126,203,161,0.3)',
                  color: 'var(--color-aurora)',
                  background: 'rgba(126,203,161,0.08)'
                }}>

                  {tech}
                </span>
              )}
            </div>
          </motion.div>

          {/* Project 3 - Object Detection */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40
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
            className="card-cosmic relative overflow-hidden p-6">

            <ConstellationDecor color="#f0c060" />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                'linear-gradient(90deg, transparent, #f0c060, transparent)'
              }} />

            <div className="flex items-start justify-between mb-4">
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--color-gold)',
                    letterSpacing: '0.1em'
                  }}>

                  Oct 2024
                </span>
                <h3
                  className="mt-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.2
                  }}>

                  Object Detection
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)'
                  }}>

                  &amp; Image Segmentation
                </p>
              </div>
              <a
                href="https://kaggle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded transition-all duration-200 flex items-center gap-1"
                style={{
                  color: 'var(--color-text-muted)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem'
                }}
                onMouseEnter={(e) =>
                e.currentTarget.style.color = 'var(--color-gold)'
                }
                onMouseLeave={(e) =>
                e.currentTarget.style.color = 'var(--color-text-muted)'
                }
                aria-label="View on Kaggle">

                <ExternalLinkIcon size={16} />
              </a>
            </div>
            <ul className="mb-5 space-y-1.5">
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-gold)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  Preprocessing pipeline for 22K+ labelled images; evaluated
                  accuracy using precision/recall
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-gold)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  Improved object detection accuracy by{' '}
                  <strong
                    style={{
                      color: 'var(--color-gold)'
                    }}>

                    98.5%
                  </strong>{' '}
                  through anomaly checks and metric validation
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-gold)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  U-Net architecture achieving{' '}
                  <strong
                    style={{
                      color: 'var(--color-gold)'
                    }}>

                    90.12%
                  </strong>{' '}
                  accuracy on Oxford-IIIT Pet Dataset
                </span>
              </li>
            </ul>
            <a
              href="https://kaggle.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded transition-all duration-200"
              style={{
                border: '1px solid rgba(240,192,96,0.25)',
                color: 'var(--color-gold)',
                background: 'rgba(240,192,96,0.08)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.06em'
              }}
              aria-label="Open Object Detection project link">

              <ExternalLinkIcon size={14} />
              View Project
            </a>
            <div className="flex flex-wrap gap-2">
              {['Python', 'OpenCV', 'TensorFlow', 'Keras'].map((tech) =>
              <span
                key={tech}
                className="skill-tag"
                style={{
                  fontSize: '0.65rem',
                  borderColor: 'rgba(240,192,96,0.3)',
                  color: 'var(--color-gold)',
                  background: 'rgba(240,192,96,0.08)'
                }}>

                  {tech}
                </span>
              )}
            </div>
          </motion.div>

          {/* Project 4 - College Management */}
          <motion.div
            initial={{
              opacity: 0,
              y: 40
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
            className="card-cosmic relative overflow-hidden p-6">

            <ConstellationDecor color="#4db8d4" />
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                'linear-gradient(90deg, transparent, #4db8d4, transparent)'
              }} />

            <div className="flex items-start justify-between mb-4">
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    color: 'var(--color-teal)',
                    letterSpacing: '0.1em'
                  }}>

                  Nov 2025
                </span>
                <h3
                  className="mt-1"
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.4rem',
                    fontWeight: 600,
                    color: 'var(--color-text-primary)',
                    lineHeight: 1.2
                  }}>

                  College Management
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)'
                  }}>

                  Full-Stack System WebApp
                </p>
              </div>
              <a
                href="https://github.com/arnii2511/djseve_wp_project"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded transition-all duration-200"
                style={{
                  color: 'var(--color-text-muted)'
                }}
                onMouseEnter={(e) =>
                e.currentTarget.style.color = 'var(--color-teal)'
                }
                onMouseLeave={(e) =>
                e.currentTarget.style.color = 'var(--color-text-muted)'
                }
                aria-label="View on GitHub">

                <GithubIcon size={18} />
              </a>
            </div>
            <ul className="mb-5 space-y-1.5">
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-teal)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  Full-stack platform with role-based access, registrations, and
                  admin approval workflows
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-teal)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  10+ RESTful APIs with JWT auth handling 500+ concurrent
                  requests
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'var(--color-teal)'
                  }} />

                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.82rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6
                  }}>

                  Real-time dashboards ensuring{' '}
                  <strong
                    style={{
                      color: 'var(--color-teal)'
                    }}>

                    95%+
                  </strong>{' '}
                  load efficiency
                </span>
              </li>
            </ul>
            <a
              href="https://github.com/arnii2511/djseve_wp_project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded transition-all duration-200"
              style={{
                border: '1px solid rgba(77,184,212,0.25)',
                color: 'var(--color-teal)',
                background: 'rgba(77,184,212,0.08)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.06em'
              }}
              aria-label="Open College Management repository">

              <GithubIcon size={14} />
              View Repo
            </a>
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'MySQL', 'MongoDB'].map((tech) =>
              <span
                key={tech}
                className="skill-tag"
                style={{
                  fontSize: '0.65rem'
                }}>

                  {tech}
                </span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}
