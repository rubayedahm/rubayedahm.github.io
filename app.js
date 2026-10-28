(() => {
  const S = window.SITE;
  const $ = (sel, el = document) => el.querySelector(sel);
  const $$ = (sel, el = document) => [...el.querySelectorAll(sel)];
  const root = document.documentElement;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const esc = (s = '') => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ---------- Render content ---------- */
  $$('[data-name]').forEach(el => (el.textContent = S.name));
  $('[data-first]').textContent = S.firstName;
  $('[data-status]').textContent = S.status;
  $('[data-intro]').textContent = S.intro;
  $('[data-location]').textContent = S.location;
  $('[data-email]').textContent = S.email;
  const img = $('[data-photo]');
  img.src = S.photo;
  img.alt = `Portrait of ${S.name}`;
  $('#year').textContent = new Date().getFullYear();

  if (S.cv) {
    const cv = $('#cv-btn');
    cv.href = S.cv;
    cv.hidden = false;
  }

  $('[data-about]').innerHTML = S.about.map(p => `<p>${esc(p)}</p>`).join('');
  $('[data-facts]').innerHTML = S.facts
    .map(f => `<div><dt class="mono">${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`)
    .join('');

  $('[data-experience]').innerHTML = S.experience
    .map(
      (x, i) => `
      <li class="tl-item reveal" style="--i:${i}">
        <div class="tl-when mono muted">${esc(x.start)} — ${esc(x.end)}</div>
        <div class="tl-body">
          <h3>${esc(x.role)} <span class="muted">· ${esc(x.org)}</span></h3>
          <p class="tl-meta mono muted">${[x.type, x.location].filter(Boolean).map(esc).join(' · ')}</p>
          <ul>${x.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
        </div>
      </li>`
    )
    .join('');

  $('[data-education]').innerHTML = S.education
    .map(
      e => `
      <article class="edu-card tilt reveal">
        <p class="mono muted">${esc(e.start)} — ${esc(e.end)}</p>
        <h3>${esc(e.degree)}</h3>
        <p class="edu-school">${esc(e.school)}</p>
        <p class="muted">${esc(e.details)}</p>
      </article>`
    )
    .join('');

  // Skills with tabs
  const groups = Object.keys(S.skills);
  const tabs = $('[data-skill-tabs]');
  const skillList = $('[data-skills]');
  const showSkills = name => {
    const list = name === 'All' ? groups.flatMap(g => S.skills[g]) : S.skills[name];
    skillList.innerHTML = list.map((s, i) => `<li style="--i:${i}">${esc(s)}</li>`).join('');
    $$('button', tabs).forEach(b => b.setAttribute('aria-selected', b.dataset.tab === name));
  };
  tabs.innerHTML = ['All', ...groups]
    .map(g => `<button role="tab" class="mono" data-tab="${esc(g)}">${esc(g)}</button>`)
    .join('');
  tabs.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (b) showSkills(b.dataset.tab);
  });
  showSkills('All');

  if (S.highlights && S.highlights.length) {
    $('[data-highlights]').innerHTML = S.highlights
      .map(
        h => `
        <article class="card tilt reveal">
          <span class="tag mono">${esc(h.tag)}</span>
          <h3>${esc(h.title)}</h3>
          <p class="muted">${esc(h.text)}</p>
        </article>`
      )
      .join('');
  } else {
    $('#highlights').remove();
  }

  $('[data-socials]').innerHTML = S.socials
    .map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)} ↗</a></li>`)
    .join('');

  // Marquee of skills
  const words = groups.flatMap(g => S.skills[g]).slice(0, 10);
  const strip = words.map(w => `<span>${esc(w)}</span><span class="star">✦</span>`).join('');
  $('.marquee-track').innerHTML = strip + strip;

  // Structured data for search engines
  const ld = document.createElement('script');
  ld.type = 'application/ld+json';
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: S.name,
    email: `mailto:${S.email}`,
    alumniOf: S.education.map(e => ({ '@type': 'CollegeOrUniversity', name: e.school })),
    sameAs: S.socials.map(s => s.url),
  });
  document.head.appendChild(ld);

  /* ---------- Typewriter ---------- */
  const typed = $('.typed');
  if (reduceMotion) {
    typed.textContent = S.roles[0];
  } else {
    let r = 0, c = 0, deleting = false;
    const tick = () => {
      const word = S.roles[r];
      c += deleting ? -1 : 1;
      typed.textContent = word.slice(0, c);
      let delay = deleting ? 35 : 70;
      if (!deleting && c === word.length) { deleting = true; delay = 1800; }
      else if (deleting && c === 0) { deleting = false; r = (r + 1) % S.roles.length; delay = 300; }
      setTimeout(tick, delay);
    };
    tick();
  }

  /* ---------- Scroll reveal ---------- */
  const io = new IntersectionObserver(
    entries => entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  $$('.reveal').forEach(el => io.observe(el));

  /* ---------- Scroll progress + active nav + header shadow ---------- */
  const progress = $('.progress');
  const header = $('.nav');
  const onScroll = () => {
    const max = root.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    header.classList.toggle('scrolled', scrollY > 8);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const navLinks = $$('.links a');
  const spy = new IntersectionObserver(
    entries => entries.forEach(en => {
      if (!en.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id));
    }),
    { rootMargin: '-45% 0px -50% 0px' }
  );
  $$('main section[id]').forEach(s => spy.observe(s));

  /* ---------- Theme toggle (View Transitions API) ---------- */
  const isDark = () =>
    root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches;
  const setTheme = (x, y) => {
    const apply = () => {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    };
    if (!document.startViewTransition || reduceMotion) return apply();
    root.style.setProperty('--vt-x', `${x ?? innerWidth / 2}px`);
    root.style.setProperty('--vt-y', `${y ?? 0}px`);
    document.startViewTransition(apply);
  };
  $('#theme').addEventListener('click', e => setTheme(e.clientX, e.clientY));

  /* ---------- Mobile menu ---------- */
  const drawer = $('#drawer');
  const menuBtn = $('#menu');
  const toggleMenu = open => {
    drawer.hidden = !open;
    menuBtn.setAttribute('aria-expanded', open);
    document.body.classList.toggle('menu-open', open);
  };
  menuBtn.addEventListener('click', () => toggleMenu(drawer.hidden));
  drawer.addEventListener('click', e => e.target.closest('a') && toggleMenu(false));

  /* ---------- Toast + copy email ---------- */
  const toast = $('#toast');
  let toastTimer;
  const showToast = msg => {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  };
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(S.email);
      showToast('Email copied to clipboard ✓');
    } catch (e) {
      location.href = `mailto:${S.email}`;
    }
  };
  $('#copy-email').addEventListener('click', copyEmail);

  /* ---------- Contact form → email app ---------- */
  $('#contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target;
    if (!f.checkValidity()) {
      f.classList.add('tried');
      showToast('Please fill in every field');
      return;
    }
    const d = Object.fromEntries(new FormData(f));
    const subject = encodeURIComponent(`Hello from ${d.name}`);
    const body = encodeURIComponent(`${d.message}\n\n— ${d.name} (${d.email})`);
    location.href = `mailto:${S.email}?subject=${subject}&body=${body}`;
    showToast('Opening your email app…');
  });

  /* ---------- Card tilt + spotlight (pointer devices only) ---------- */
  if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduceMotion) {
    $$('.tilt').forEach(el => {
      el.addEventListener('pointermove', e => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(800px) rotateX(${-py * 6}deg) rotateY(${px * 6}deg)`;
        el.style.setProperty('--mx', `${(px + 0.5) * 100}%`);
        el.style.setProperty('--my', `${(py + 0.5) * 100}%`);
      });
      el.addEventListener('pointerleave', () => (el.style.transform = ''));
    });
    const spot = $('.spotlight');
    addEventListener('pointermove', e => {
      spot.style.setProperty('--x', `${e.clientX}px`);
      spot.style.setProperty('--y', `${e.clientY}px`);
    }, { passive: true });
  }

  /* ---------- Command palette (⌘K / Ctrl K) ---------- */
  const palette = $('#palette');
  const input = $('#palette-input');
  const list = $('#palette-list');
  const go = id => () => $(id)?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  const commands = [
    { label: 'Go to About', hint: 'Section', run: go('#about') },
    { label: 'Go to Experience', hint: 'Section', run: go('#experience') },
    { label: 'Go to Education', hint: 'Section', run: go('#education') },
    { label: 'Go to Skills', hint: 'Section', run: go('#skills') },
    { label: 'Go to Highlights', hint: 'Section', run: go('#highlights') },
    { label: 'Go to Contact', hint: 'Section', run: go('#contact') },
    { label: 'Copy email address', hint: 'Action', run: copyEmail },
    { label: 'Send an email', hint: 'Action', run: () => (location.href = `mailto:${S.email}`) },
    { label: 'Toggle dark / light mode', hint: 'Action', run: () => setTheme() },
    ...(S.cv ? [{ label: 'Download CV', hint: 'Action', run: () => $('#cv-btn').click() }] : []),
    ...S.socials.map(s => ({ label: `Open ${s.label}`, hint: 'Link', run: () => open(s.url, '_blank', 'noopener') })),
  ];
  let filtered = commands, sel = 0;
  const renderPalette = () => {
    const q = input.value.trim().toLowerCase();
    filtered = commands.filter(c => c.label.toLowerCase().includes(q));
    sel = Math.min(sel, Math.max(filtered.length - 1, 0));
    list.innerHTML = filtered.length
      ? filtered
          .map((c, i) => `<li role="option" data-i="${i}" aria-selected="${i === sel}"><span>${esc(c.label)}</span><span class="mono muted">${c.hint}</span></li>`)
          .join('')
      : '<li class="empty muted">No results</li>';
  };
  const openPalette = () => {
    if (palette.open) return;
    input.value = '';
    sel = 0;
    renderPalette();
    palette.showModal();
    input.focus();
  };
  const runSelected = i => {
    const c = filtered[i];
    if (!c) return;
    palette.close();
    c.run();
  };
  $('#open-palette').addEventListener('click', openPalette);
  input.addEventListener('input', () => { sel = 0; renderPalette(); });
  input.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { sel = (sel + 1) % filtered.length; renderPalette(); e.preventDefault(); }
    if (e.key === 'ArrowUp') { sel = (sel - 1 + filtered.length) % filtered.length; renderPalette(); e.preventDefault(); }
    if (e.key === 'Enter') runSelected(sel);
  });
  list.addEventListener('click', e => {
    const li = e.target.closest('li[data-i]');
    if (li) runSelected(+li.dataset.i);
  });
  palette.addEventListener('click', e => e.target === palette && palette.close());
  addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette.open ? palette.close() : openPalette(); }
    if (e.key === 'Escape' && !drawer.hidden) toggleMenu(false);
  });
  // Show "Ctrl K" instead of "⌘K" on non-Apple devices
  if (!/Mac|iPhone|iPad/.test(navigator.platform)) $('#open-palette span').textContent = 'Ctrl K';
})();
