import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import { Upload, Cpu, GraduationCap, ArrowRight } from 'lucide-react';

import styles from './index.module.css';

/* ─── Feature data ───────────────────────────────────────────── */
const features = [
  {
    tag: 'Automated',
    title: 'Question Bank Generator',
    desc: 'Builds structured question banks from open-source textbooks, organized by chapter and section. One upload, hundreds of questions.',
    illustration: (
      <img
        src="/ai-teaching-tools-docs/img/quiz-builder.png"
        alt="Quiz Builder screenshot"
        className={styles.featureScreenshot}
      />
    ),
  },
  {
    tag: 'Interactive',
    title: 'Quiz Builder',
    desc: 'Create, edit, and manage quizzes with AI-generated or instructor-written questions — multiple choice, short answer, and more.',
    illustration: (
      <img
        src="/ai-teaching-tools-docs/img/quiz-builder.png"
        alt="Quiz Builder screenshot"
        className={styles.featureScreenshot}
      />
    ),
  },
  {
    tag: 'Course-Aware',
    title: 'AI Tutor',
    desc: 'A configurable tutor grounded in your syllabus and teaching style. Students get help that actually matches the course.',
    illustration: (
      <img
        src="/ai-teaching-tools-docs/img/ai-chatbot.png"
        alt="AI Chatbot screenshot"
        className={styles.featureScreenshot}
      />
    ),
  },
];

/* ─── Steps ──────────────────────────────────────────────────── */
const steps = [
  {
    number: '01',
    title: 'Upload Textbook',
    desc: 'Drop in any open-access PDF. The system parses chapters, sections, and key concepts automatically.',
    icon: <Upload size={20} />,
  },
  {
    number: '02',
    title: 'Generate Content',
    desc: 'AI produces structured question banks and quiz sets tuned to your course objectives.',
    icon: <Cpu size={20} />,
  },
  {
    number: '03',
    title: 'Teach with AI',
    desc: 'Students interact with a tutor that knows your syllabus, your tone, and your material.',
    icon: <GraduationCap size={20} />,
  },
];

/* ─── Team ───────────────────────────────────────────────────── */
const team = [
  { name: 'Brendon Tran', role: 'Computer Science', img: '/ai-teaching-tools-docs/img/brendon_headshot.png' },
  { name: 'Dylan Liu', role: 'Computer Science', img: '/ai-teaching-tools-docs/img/dylan_headshot_real.jpg' },
  { name: 'Annabel Wang', role: 'Computer Science', img: '/ai-teaching-tools-docs/img/annabel_headshot.jpg' },
  { name: 'Katie Kimura', role: 'Computer Science', img: '/ai-teaching-tools-docs/img/katie_headshot.jpg' },
  { name: 'Alina Hyk', role: 'Computer Science', img: '/ai-teaching-tools-docs/img/alina_headshot.jpeg' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

/* ─── Page sections ──────────────────────────────────────────── */
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroNoise} />
      <div className={styles.heroGrid} />
      <div className="container">
        <div className={styles.heroPill}>
          <span className={styles.heroPillDot} />
          Open Education · AI-Powered
        </div>
        <motion.h1 className={styles.heroTitle} variants={fadeUp} initial="hidden" animate="visible" custom={0}>
          Teaching tools that{' '}
          <span className={styles.heroAccent}>actually teach.</span>
        </motion.h1>
        <motion.p className={styles.heroSub} variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          Upload open textbooks. Generate question banks. Build quizzes. Deploy a course-aware AI tutor — all from one platform built for instructors.
        </motion.p>
        <motion.div className={styles.heroActions} variants={fadeUp} initial="hidden" animate="visible" custom={2}>
          <Link className={styles.ctaPrimary} to="https://ai-teaching-tools-hosting.vercel.app" target="_blank" rel="noopener noreferrer">
            Try the Live Site <ArrowRight size={16} />
          </Link>
          <Link className={styles.ctaSecondary} to="/docs/intro">Read the Docs</Link>
        </motion.div>
        <motion.div className={styles.heroStats} variants={fadeUp} initial="hidden" animate="visible" custom={3}>
          {[
            { num: '3', label: 'Core Tools' },
            { num: 'OER', label: 'Open Textbook Ready' },
            { num: 'AI', label: 'Claude-Powered Tutor' },
          ].map((s) => (
            <div key={s.label} className={styles.heroStat}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>What's included</p>
          <Heading as="h2" className={styles.sectionTitle}>Everything an instructor needs</Heading>
          <p className={styles.sectionSub}>Three integrated tools designed to reduce prep time and maximize learning outcomes.</p>
        </div>
        <div className={styles.featureGrid}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={styles.featureCard}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              whileHover={{ y: -6 }}
            >
              <div className={styles.featureIllustration}>
                {f.illustration}
              </div>
              <div className={styles.featureBody}>
                <span className={styles.featureBadge}>{f.tag}</span>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>Simple process</p>
          <Heading as="h2" className={styles.sectionTitle}>Up and running in minutes</Heading>
        </div>
        <div className={styles.stepsGrid}>
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              className={styles.stepCard}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
            >
              <div className={styles.stepNumber}>{step.number}</div>
              <div className={styles.stepIconWrap}>{step.icon}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <p className={styles.sectionEyebrow}>The builders</p>
          <Heading as="h2" className={styles.sectionTitle}>Meet the team</Heading>
        </div>
        <div className={styles.teamGrid}>
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              className={styles.teamCard}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.15}
              whileHover={{ y: -4 }}
            >
              <img src={m.img} alt={m.name} className={styles.teamPhoto} />
              <p className={styles.teamName}>{m.name}</p>
              <p className={styles.teamRole}>{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <motion.div className={styles.ctaInner} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className={styles.ctaTitle}>Ready to transform your course?</h2>
          <p className={styles.ctaSub}>Start generating questions and quizzes from your textbook today — no setup required.</p>
          <div className={styles.heroActions}>
            <Link className={styles.ctaPrimary} to="https://ai-teaching-tools-hosting.vercel.app" target="_blank" rel="noopener noreferrer">
              Launch the Site <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="AI Teaching Platform — Open Education Tools">
      <Hero />
      <main>
        <Features />
        <Workflow />
        <Team />
        <CTA />
      </main>
    </Layout>
  );
}