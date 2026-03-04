import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from 'lucide-react';
const skillCategories = [
{
  title: 'Languages & Databases',
  color: 'var(--color-teal)',
  skills: [
  'Python',
  'C',
  'MySQL',
  'PostgreSQL',
  'HTML/CSS',
  'Cypher',
  'MongoDB',
  'Express',
  'JavaScript',
  'TypeScript']

},
{
  title: 'Developer Tools',
  color: 'var(--color-aurora)',
  skills: [
  'Git',
  'Tableau',
  'Power BI',
  'VS Code',
  'Kaggle',
  'Neo4j',
  'Figma',
  'Canva',
  'MS Word',
  'MS PowerPoint',
  'MS Excel']

},
{
  title: 'Libraries & Frameworks',
  color: 'var(--color-gold)',
  skills: [
  'React',
  'Node.js',
  'pandas',
  'NumPy',
  'SciKit Learn',
  'TensorFlow',
  'Keras',
  'OpenCV',
  'spaCy',
  'NLTK',
  'FastAPI',
  'PyJWT',
  'Sentence-Transformers',
  'bcrypt']

}];

const interests = [
{
  label: 'Stargazing',
  icon: '✦',
  color: 'var(--color-gold)'
},
{
  label: 'Space Research',
  icon: '◎',
  color: 'var(--color-teal)'
},
{
  label: 'Travelling',
  icon: '◈',
  color: 'var(--color-aurora)'
},
{
  label: 'Socializing',
  icon: '◇',
  color: 'var(--color-text-secondary)'
}];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04
    }
  }
};
const tagVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 10
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};
export function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
      style={{
        background:
        'linear-gradient(180deg, rgba(10,15,28,0.9) 0%, rgba(8,12,20,0.92) 100%)'
      }}>

      {/* Nebula accent */}
      <div
        className="nebula-orb"
        style={{
          width: '600px',
          height: '400px',
          top: '20%',
          left: '-5%',
          background:
          'radial-gradient(ellipse, rgba(126,203,161,0.06) 0%, transparent 70%)',
          animationDelay: '-7s'
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
          className="flex items-center gap-3 mb-4">

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              color: 'var(--color-teal)',
              textTransform: 'uppercase'
            }}>

            02 / Skills
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

          The Constellation of Skills
        </motion.h2>

        {/* Skill categories */}
        <div className="flex flex-col gap-12">
          {skillCategories.map((category, catIdx) =>
          <motion.div
            key={category.title}
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
              delay: catIdx * 0.1
            }}>

              <div className="flex items-center gap-3 mb-5">
                <StarIcon
                size={12}
                style={{
                  color: category.color,
                  fill: category.color,
                  flexShrink: 0
                }} />

                <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  color: category.color,
                  textTransform: 'uppercase'
                }}>

                  {category.title}
                </h3>
                <span
                className="h-px flex-1"
                style={{
                  background: `${category.color}30`
                }} />

              </div>
              <motion.div
              className="flex flex-wrap gap-2.5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true
              }}>

                {category.skills.map((skill) =>
              <motion.span
                key={skill}
                variants={tagVariants}
                className="skill-tag"
                style={{
                  borderColor: `${category.color}40`,
                  color: category.color,
                  background: `${category.color}0d`
                }}>

                    {skill}
                  </motion.span>
              )}
              </motion.div>
            </motion.div>
          )}

          {/* Interests */}
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
            }}>

            <div className="flex items-center gap-3 mb-5">
              <span
                style={{
                  color: 'var(--color-gold)',
                  fontSize: '0.75rem'
                }}>

                ✦
              </span>
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-gold)',
                  textTransform: 'uppercase'
                }}>

                Interests & Passions
              </h3>
              <span
                className="h-px flex-1"
                style={{
                  background: 'rgba(240,192,96,0.2)'
                }} />

            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) =>
              <motion.div
                key={interest.label}
                initial={{
                  opacity: 0,
                  scale: 0.8
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.4
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  border: `1px solid ${interest.color}40`,
                  background: `${interest.color}0d`
                }}>

                  <span
                  style={{
                    color: interest.color,
                    fontSize: '0.9rem'
                  }}>

                    {interest.icon}
                  </span>
                  <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    color: interest.color,
                    fontStyle: 'italic'
                  }}>

                    {interest.label}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Core competencies */}
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
            delay: 0.4
          }}
          className="mt-12 p-6 sm:p-8 rounded-xl"
          style={{
            background: 'rgba(77,184,212,0.04)',
            border: '1px solid rgba(77,184,212,0.15)'
          }}>

          <h3
            className="mb-6"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '1.4rem',
              color: 'var(--color-text-primary)',
              fontStyle: 'italic'
            }}>

            Core Competencies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
            'Operational Coordination & Execution',
            'Cross-Functional Collaborative Approach',
            'Detail Oriented Leadership',
            'Documentation & Process Support',
            'Trend & Descriptive Analytics',
            'SQL & Database Management'].
            map((comp) =>
            <div key={comp} className="flex items-start gap-2">
                <span
                className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{
                  background: 'var(--color-teal)'
                }} />

                <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.5
                }}>

                  {comp}
                </span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>);

}
