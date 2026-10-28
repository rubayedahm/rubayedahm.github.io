/*
  ============================================================
  YOUR CONTENT — edit this file to update the website.
  You don't need to touch anything else.
  Anything marked  TODO  is a placeholder waiting for your info.
  ============================================================
*/
import profilePhoto from '../assets/profile.jpg';
import type { ImageMetadata } from 'astro';

export interface Experience {
  role: string;
  org: string;
  type?: string;
  start: string;
  end: string;
  location?: string;
  points?: string[];
}

export interface Education {
  degree: string;
  school: string;
  start: string;
  end: string;
  details: string;
}

export interface Highlight {
  title: string;
  tag: string;
  text: string;
}

export interface Social {
  label: string;
  url: string;
}

export interface Site {
  name: string;
  firstName: string;
  title: string;
  description: string;
  photo: ImageMetadata;
  roles: string[];
  intro: string;
  location: string;
  status: string;
  cv?: string;
  about: string[];
  facts: { label: string; value: string }[];
  experience: Experience[];
  education: Education[];
  skills: Record<string, string[]>;
  highlights: Highlight[];
  email: string;
  socials: Social[];
  contactFormKey: string;
}

export const site: Site = {
  name: 'Rubayed Ahmed',
  firstName: 'Rubayed',
  title: 'Rubayed Ahmed — Business Management & Leadership',
  description:
    'Rubayed Ahmed — Business Management and Leadership student at Coventry University. Experience, education, skills and contact.',

  // To change your photo, replace src/assets/profile.jpg (portrait, 4:5 works best).
  photo: profilePhoto,

  // Rotating words shown in the hero ("I'm a ...")
  roles: ['Business Management student', 'future leader', 'team player', 'problem solver'],

  intro:
    "I'm studying Business Management and Leadership at Coventry University, " +
    'learning how great organisations are built, and how to lead the people inside them.',

  location: 'London, United Kingdom',
  status: 'Open to internships & placements',

  // To show a "Download CV" button: put your CV in the public folder (public/cv.pdf) and write '/cv.pdf'.
  cv: '',

  about: [
    "I'm a Business Management and Leadership student at Coventry University with a strong interest in how businesses grow, how teams work well together, and how good decisions are made.",
    "I enjoy taking initiative, working with people from different backgrounds, and turning ideas into plans that actually get done. I'm looking for opportunities to put what I'm learning into practice.",
  ],

  facts: [
    { label: 'University', value: 'Coventry University' },
    { label: 'Degree', value: 'BA (Hons) Business Management & Leadership' },
    { label: 'Based in', value: 'London, UK' },
    { label: 'Interests', value: 'Leadership, strategy, entrepreneurship' }, // TODO: edit
  ],

  // ---------- Experience ----------
  // Optional for each role: type ('Part-time', 'Volunteer'...), location, and points
  // (1–3 short lines about what you do or achieved). Leave them out to hide them.
  experience: [
    {
      role: 'Head of IT',
      org: 'IHRS — International Human Rights and Organisation',
      start: 'Jan 2026',
      end: 'Present',
    },
    {
      role: 'Administrative Assistant',
      org: 'IHRS Fetch Commerce',
      start: 'Aug 2026',
      end: 'Present',
    },
    {
      role: 'Course Representative',
      org: 'CU London',
      start: 'Dec 2025',
      end: 'Present',
      location: 'London, UK',
    },
  ],

  // ---------- Education (newest first) ----------
  education: [
    {
      degree: 'BA (Hons) Business Management and Leadership',
      school: 'Coventry University',
      start: '20XX', // TODO
      end: '20XX', // TODO
      details: 'Modules include leadership, strategy, marketing, finance, and organisational behaviour.',
    },
    {
      degree: 'Previous qualification (e.g. A-Levels / HSC)', // TODO
      school: 'School or College Name', // TODO
      start: '20XX',
      end: '20XX',
      details: "Subjects or grades you're proud of.",
    },
  ],

  // ---------- Skills ----------
  skills: {
    'Leadership & people': ['Team leadership', 'Communication', 'Teamwork', 'Conflict resolution', 'Presenting'],
    Business: ['Strategic planning', 'Marketing', 'Project management', 'Market research', 'Business analysis'],
    Tools: ['Microsoft Excel', 'PowerPoint', 'Word', 'Canva', 'Google Workspace'],
  },

  // ---------- Highlights: uni projects, societies, achievements ----------
  // TODO: replace with your real ones (or use [] to hide the section).
  highlights: [
    {
      title: 'University group project',
      tag: 'Coursework',
      text: 'A business plan or case study you worked on, your role in the team, and the outcome.',
    },
    { title: 'Society or club role', tag: 'Leadership', text: 'A position you held or an event you organised.' },
    { title: 'Certificate or award', tag: 'Achievement', text: "An online course, certificate or award you've earned." },
  ],

  // ---------- Contact ----------
  email: 'rubayed.ahmed02@gmail.com',
  socials: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/' }, // TODO: your LinkedIn URL
    { label: 'GitHub', url: 'https://github.com/rubayedahm' },
  ],

  // Contact form: get a free access key at https://web3forms.com (enter your email, the key is emailed to you)
  // and paste it here. Messages will then arrive in your inbox. This key is safe to be public.
  // While it's empty, the form opens the visitor's email app instead.
  contactFormKey: 'acdae097-ddf4-45c4-8887-2efb68a78bce',
};
