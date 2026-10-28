/*
  ============================================================
  YOUR CONTENT — edit this file to update the website.
  You don't need to touch index.html, style.css or app.js.
  Anything marked  TODO  is a placeholder waiting for your info.
  ============================================================
*/
window.SITE = {
  name: "Rubayed Ahmed",
  firstName: "Rubayed",

  // Your photo: put a portrait (4:5) image in the "assets" folder
  // (e.g. assets/profile.jpg) and change the path below.
  photo: "assets/profile.jpg",

  // Rotating words shown in the hero ("I'm a ...")
  roles: [
    "Business Management student",
    "future leader",
    "team player",
    "problem solver",
  ],

  intro:
    "I'm studying Business Management and Leadership at Coventry University, " +
    "learning how great organisations are built, and how to lead the people inside them.",

  location: "Coventry, United Kingdom",
  status: "Open to internships & placements",

  // Leave cv as "" to hide the "Download CV" button.
  // To add one: put your CV in assets (e.g. assets/cv.pdf) and write "assets/cv.pdf".
  cv: "",

  about: [
    "I'm a Business Management and Leadership student at Coventry University with a strong interest in how businesses grow, how teams work well together, and how good decisions are made.",
    "I enjoy taking initiative, working with people from different backgrounds, and turning ideas into plans that actually get done. I'm looking for opportunities to put what I'm learning into practice.",
  ],

  // Short facts shown next to the About text
  facts: [
    { label: "University", value: "Coventry University" },
    { label: "Degree", value: "BA (Hons) Business Management & Leadership" },
    { label: "Based in", value: "Coventry, UK" },
    { label: "Interests", value: "Leadership, strategy, entrepreneurship" }, // TODO: edit
  ],

  // ---------- Experience (newest first) ----------
  // TODO: replace these with your real jobs, volunteering or roles.
  experience: [
    {
      role: "Your Job Title",
      org: "Company Name",
      type: "Part-time",
      start: "2025",
      end: "Present",
      location: "Coventry, UK",
      points: [
        "What you were responsible for, in one line.",
        "A result you achieved — numbers help (e.g. served 100+ customers a day).",
      ],
    },
    {
      role: "Your Job Title",
      org: "Company Name",
      type: "Volunteer",
      start: "2024",
      end: "2025",
      location: "City, Country",
      points: [
        "What you did and who you worked with.",
        "A skill you built or a problem you solved.",
      ],
    },
  ],

  // ---------- Education (newest first) ----------
  education: [
    {
      degree: "BA (Hons) Business Management and Leadership",
      school: "Coventry University",
      start: "20XX", // TODO
      end: "20XX",   // TODO
      details:
        "Modules include leadership, strategy, marketing, finance, and organisational behaviour.",
    },
    {
      degree: "Previous qualification (e.g. A-Levels / HSC)", // TODO
      school: "School or College Name",                        // TODO
      start: "20XX",
      end: "20XX",
      details: "Subjects or grades you're proud of.",
    },
  ],

  // ---------- Skills ----------
  skills: {
    "Leadership & people": ["Team leadership", "Communication", "Teamwork", "Conflict resolution", "Presenting"],
    "Business": ["Strategic planning", "Marketing", "Project management", "Market research", "Business analysis"],
    "Tools": ["Microsoft Excel", "PowerPoint", "Word", "Canva", "Google Workspace"],
  },

  // ---------- Highlights: uni projects, societies, achievements ----------
  // TODO: replace with your real ones (or delete this list to hide the section).
  highlights: [
    {
      title: "University group project",
      tag: "Coursework",
      text: "A business plan or case study you worked on, your role in the team, and the outcome.",
    },
    {
      title: "Society or club role",
      tag: "Leadership",
      text: "A position you held or an event you organised.",
    },
    {
      title: "Certificate or award",
      tag: "Achievement",
      text: "An online course, certificate or award you've earned.",
    },
  ],

  // ---------- Contact ----------
  email: "rubayed.ahmed02@gmail.com",
  socials: [
    { label: "LinkedIn", url: "https://www.linkedin.com/" }, // TODO: your LinkedIn URL
    { label: "GitHub", url: "https://github.com/rubayedahm" },
  ],
};
