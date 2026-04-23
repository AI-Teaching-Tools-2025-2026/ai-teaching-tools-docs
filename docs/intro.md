---
sidebar_position: 1
---

# Project Overview

## Empowering Instructors with AI-Enhanced Teaching Tools

Modern textbook publishers like Pearson and McGraw Hill provide integrated learning tools, but these systems come with significant limitations. Access is often locked behind expensive paywalls, forcing both students and instructors to purchase bundled materials. Additionally, these platforms offer little flexibility, limiting an instructor’s ability to customize content or tailor resources to their course.

Our project addresses these challenges by providing an **open, customizable, and instructor-focused learning platform**.

---

## Why We Built This

We wanted to support instructors who use **open-source textbooks** by giving them the same — or better — tools than proprietary platforms, without the restrictions.

### Problems with Existing Solutions
- **Paywalls**: Learning tools are bundled with paid textbooks  
- **Limited customization**: Instructors cannot easily modify or adapt content  
- **Restricted access**: Students must purchase materials to participate fully  

---

## Our Solution

We built an **Instructor-Facing Learning Management Web App** designed to:

- **Support open education**
- **Automate content generation**
- **Give instructors full control over their teaching materials**

### Key Benefits

- **Efficient**  
  Upload open-source textbooks and automatically generate structured question banks.

- **Customizable**  
  Edit questions, quizzes, and AI tutor behavior to match your course exactly.

- **Scalable**  
  Reuse content across courses and semesters with minimal effort.

---

## Core Features

### 📚 Question Bank

The system automatically builds a structured question bank organized by chapters and sections.

- Upload a textbook → system generates a deterministic identifier using hashing  
- Metadata and content are stored in MongoDB  
- Question banks are auto-generated at the chapter level  
- Questions can be reused across quizzes and AI interactions  

---

### 📝 Quiz Builder

Instructors can create and manage quizzes with full flexibility:

- Generate quizzes using AI  
- Manually create and edit questions  
- Preview and refine assessments  
- Align quizzes with course learning objectives  

---

### 🤖 AI Tutor

The AI Tutor acts as a **course-aware teaching assistant**.

#### Instructor Controls
- Choose from preset personas:
  - Socratic Tutor  
  - Study Buddy  
  - Quiz Master  
- Or fully customize teaching style and behavior  

#### How It Works
- Student asks a question  
- Relevant textbook sections are retrieved from MongoDB  
- Content is injected into the AI context  
- Response is generated based on:
  - Course material  
  - Instructor-defined teaching style  

This ensures responses are **accurate, contextual, and aligned with the course**.

---

## Summary

This project bridges the gap between **open educational resources** and **modern AI-powered learning tools** by giving instructors:

- Full ownership of their content  
- Powerful automation tools  
- A customizable AI teaching assistant  

All without the constraints of traditional publishing platforms.