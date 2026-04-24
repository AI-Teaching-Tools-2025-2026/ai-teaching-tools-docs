import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { motion } from 'framer-motion';
import { BookOpen, Database, PenTool, Bot } from 'lucide-react';

import styles from './index.module.css';

const features = [
  {
    title: 'Question Bank Generator',
    icon: <Database size={28} />,
    desc: 'Automatically builds structured question banks from open-source textbooks, organized by chapter and section.',
  },
  {
    title: 'Quiz Builder',
    icon: <PenTool size={28} />,
    desc: 'Create, edit, and manage quizzes using AI-generated or instructor-written questions.',
  },
  {
    title: 'AI Tutor (Course-Aware)',
    icon: <Bot size={28} />,
    desc: 'A configurable tutor that grounds responses in your course materials and instructor-defined teaching style.',
  },
];

const team = [
  {
    name: 'Brendon Tran',
    major: 'Computer Science',
    img: '/ai-teaching-tools-docs/img/brendon_headshot.png',
  },
  {
    name: 'Dylan Liu',
    major: 'Scum',
    img: '/ai-teaching-tools-docs/img/dylan_headshot.png',
  },
  {
    name: 'Annabel Wang',
    major: 'Computer Science',
    img: '/ai-teaching-tools-docs/img/annabel_headshot.jpg',
  },
  {
    name: 'Katie Kimura',
    major: 'Computer Science',
    img: '/ai-teaching-tools-docs/img/katie_headshot.jpg',
  },
  {
    name: 'Alina Hyk',
    major: 'Computer Science',
    img: '/ai-teaching-tools-docs/img/team/member5.jpg',
  },
];

function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container text--center">
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Instructor Tools for{' '}
          <span className={styles.gradient}>Open Education</span>
        </motion.h1>

        <motion.p
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 30 }}
          transition={{ delay: 0.1 }}
        >
          Upload open textbooks, generate structured question banks, build quizzes, and deploy an AI tutor tailored to your course.
        </motion.p>

        <motion.div
          className={styles.heroButtons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link className="button button--primary button--lg" to="/docs/intro">
            Get Started
          </Link>

          {/* FIXED: replaced broken Link anchor with <a> */}
          <a className="button button--primary button--lg" href="#features">
            Explore Features
          </a>

          <motion.div whileHover={{ y: -2 }}>
            <Link
              className="button button--primary button--lg"
              to="https://ai-teaching-tools-hosting.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Site
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className={styles.glow}></div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <Heading as="h2" className="text--center">
          Core Features
        </Heading>

        <div className="row margin-top--xl">
          {features.map((f, i) => (
            <div key={i} className="col col--4">
              <motion.div className={styles.card} whileHover={{ y: -10 }}>
                <div className={styles.icon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className={styles.team}>
      <div className="container text--center">
        <Heading as="h2">How It Works</Heading>

        <div className="row margin-top--xl">
          {[
            {
              title: 'Upload Textbook',
              desc: 'Instructors upload open-source PDFs which are hashed and indexed.',
              icon: '📘',
            },
            {
              title: 'Generate Content',
              desc: 'AI builds structured question banks and quiz-ready material.',
              icon: '⚙️',
            },
            {
              title: 'Teach with AI',
              desc: 'Students interact with a course-aware AI tutor grounded in your content.',
              icon: '🤖',
            },
          ].map((step, i) => (
            <div key={i} className="col col--4">
              <motion.div className={styles.teamCard} whileHover={{ scale: 1.05 }}>
                <div className={styles.avatar}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Team() {
  const firstRow = team.slice(0, 2);
  const secondRow = team.slice(2);

  return (
    <section className={styles.team}>
      <div className="container text--center">
        <Heading as="h2">Meet the Team</Heading>

        <div className="row margin-top--xl" style={{ justifyContent: 'center' }}>
          {firstRow.map((member, i) => (
            <div key={i} className="col col--3">
              <motion.div className={styles.teamCard} whileHover={{ scale: 1.05 }}>
                <img src={member.img} alt={member.name} className={styles.headshot} />
                <h3>{member.name}</h3>
                <p>{member.major}</p>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="row margin-top--lg" style={{ justifyContent: 'center' }}>
          {secondRow.map((member, i) => (
            <div key={i} className="col col--3">
              <motion.div className={styles.teamCard} whileHover={{ scale: 1.05 }}>
                <img src={member.img} alt={member.name} className={styles.headshot} />
                <h3>{member.name}</h3>
                <p>{member.major}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout title="AI Teaching Platform">
      <Hero />
      <main>
        <Features />
        <Workflow />
        <Team />
      </main>
    </Layout>
  );
}