import React from 'react';
import { StarField } from './components/StarField';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { CoCurriculars } from './components/CoCurriculars';
import { Contact } from './components/Contact';
export function App() {
  return (
    <div
      className="relative w-full min-h-screen"
      style={{
        background: 'var(--color-space)',
        color: 'var(--color-text-primary)'
      }}>

      {/* Global star field canvas - fixed behind everything */}
      <StarField />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main
        className="relative"
        style={{
          zIndex: 1
        }}>

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <CoCurriculars />
        <Contact />
      </main>
    </div>);

}