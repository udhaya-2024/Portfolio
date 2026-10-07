const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open menu');
  nav.classList.remove('open');
}));

const campaignWork = [
  { type: 'poster', category: 'real-estate', title: 'Golden Avenue', subtitle: 'LPS Real Estate · Project campaign', file: 'golden-avenue.png', alt: 'Golden Avenue residential plots campaign poster' },
  { type: 'poster', category: 'jobs', title: 'Career opportunities', subtitle: 'LPS Free Jobs · Recruitment campaign', file: 'lps-free-jobs.png', alt: 'LPS Free Jobs recruitment campaign poster' },
  { type: 'poster', category: 'real-estate', title: 'Thirumurugan Garden', subtitle: 'LPS Real Estate · Property creative', file: 'thirumurugan-garden.png', alt: 'Thirumurugan Garden residential plots campaign poster' },
  { type: 'poster', category: 'jobs', title: 'Tex-Tech vacancies', subtitle: 'LPS Free Jobs · Employer campaign', file: 'tex-tech-vacancies.png', alt: 'Tex-Tech Industries recruitment poster from LPS Free Jobs' },
  { type: 'poster', category: 'jobs', title: 'Tecno Matries vacancies', subtitle: 'LPS Free Jobs · Employer campaign', file: 'tecno-matrices-jobs.png', alt: 'Tecno Matries job vacancy poster from LPS Free Jobs' },
  { type: 'poster', category: 'jobs', title: 'CNC operator campaign', subtitle: 'LPS Free Jobs · Recruitment creative', file: 'tecno-matrices-cnc.png', alt: 'CNC machine operator job poster from LPS Free Jobs' },
  { type: 'poster', category: 'jobs', title: 'Find your next job', subtitle: 'LPS Free Jobs · Brand campaign', file: 'lps-free-jobs-overview.png', alt: 'LPS Free Jobs overview and recruitment campaign poster' },
  { type: 'poster', category: 'real-estate', title: 'Karthipuram', subtitle: 'LPS Real Estate · Township campaign', file: 'karthipuram-overview.png', alt: 'Karthipuram integrated township campaign poster' },
  { type: 'poster', category: 'real-estate', title: 'Karthipuram · Tamil campaign', subtitle: 'LPS Real Estate · Project promotion', file: 'karthipuram-promo.png', alt: 'Karthipuram Tamil language real estate campaign poster' },
  { type: 'poster', category: 'jobs', title: 'Jobs for every career stage', subtitle: 'LPS Free Jobs · Social campaign', file: 'lps-career-poster.png', alt: 'LPS Free Jobs career opportunities poster' },
  { type: 'poster', category: 'jobs', title: 'A brighter career starts here', subtitle: 'LPS Free Jobs · Social campaign', file: 'lps-career-story.png', alt: 'LPS Free Jobs career story campaign poster' },
  { type: 'poster', category: 'real-estate', title: 'Sri Lakshmi Garden', subtitle: 'LPS Real Estate · Project campaign', file: 'sri-lakshmi-garden.png', alt: 'Sri Lakshmi Garden approved residential plots poster' },
  { type: 'poster', category: 'real-estate', title: 'Sri Velan Garden', subtitle: 'LPS Real Estate · Project campaign', file: 'sri-velan-garden.png', alt: 'Sri Velan Garden approved residential plots poster' },
  { type: 'video', category: 'local', title: 'CSC Sathyamangalam', subtitle: 'Local campaign · Promotional film', file: 'csc-sathyamangalam.mp4' },
  { type: 'video', category: 'local', title: 'LME campaign', subtitle: 'Local business · Promotional film', file: 'lme-promo.mp4' },
  { type: 'video', category: 'real-estate', title: 'Golden Avenue', subtitle: 'LPS Real Estate · Project film', file: 'golden-avenue.mp4' },
  { type: 'video', category: 'local', title: 'HDFC campaign', subtitle: 'Brand promotion · Short-form video', file: 'hdfc-promo.mp4' },
  { type: 'video', category: 'jobs', title: 'Jobs campaign', subtitle: 'LPS Free Jobs · Promotional film', file: 'jobs-ad.mp4' },
  { type: 'video', category: 'local', title: 'L campaign', subtitle: 'Promotional video', file: 'l-final-cut.mp4' },
  { type: 'video', category: 'real-estate', title: 'Property sale', subtitle: 'LPS Real Estate · Property film', file: 'property-sale.mp4' },
  { type: 'video', category: 'local', title: 'Salzer Group', subtitle: 'Local business · Promotional film', file: 'salzer-group.mp4' },
  { type: 'video', category: 'real-estate', title: 'SV Garden · Feature edit', subtitle: 'LPS Real Estate · Project film', file: 'sv-garden-feature.mp4' },
  { type: 'video', category: 'real-estate', title: 'SV Garden', subtitle: 'LPS Real Estate · Project film', file: 'sv-garden.mp4' },
  { type: 'video', category: 'local', title: 'Top Light', subtitle: 'Local business · Promotional film', file: 'top-light.mp4' }
];

const gallery = document.querySelector('#campaign-gallery');
const lightbox = document.querySelector('#poster-lightbox');
const lightboxImage = lightbox.querySelector('img');
const lightboxCaption = lightbox.querySelector('p');
const galleryCount = document.querySelector('.gallery-count');

function buildCard(item) {
  const card = document.createElement('article');
  card.className = `gallery-card ${item.type}-card reveal`;
  card.dataset.category = item.category;
  card.dataset.type = item.type;

  if (item.type === 'poster') {
    card.innerHTML = `<button class="poster-open" type="button" aria-label="Open poster: ${item.title}"><img src="assets/posters/${item.file}" alt="${item.alt}" loading="lazy" decoding="async"><span class="poster-zoom">VIEW POSTER ↗</span></button><div class="media-caption"><span class="media-type">POSTER / ${item.category.replace('-', ' ').toUpperCase()}</span><strong>${item.title}</strong><small>${item.subtitle}</small></div>`;
    card.querySelector('.poster-open').addEventListener('click', () => {
      lightboxImage.src = `assets/posters/${item.file}`;
      lightboxImage.alt = item.alt;
      lightboxCaption.textContent = `${item.title} · ${item.subtitle}`;
      lightbox.showModal();
    });
  } else {
    card.innerHTML = `<div class="video-frame"><video controls playsinline preload="none" aria-label="${item.title} campaign film"></video><button type="button" class="video-cover"><span class="cover-play">▶</span><span class="cover-overline">CAMPAIGN FILM · PLAY</span><strong>${item.title}</strong><small>${item.subtitle}</small></button></div><div class="media-caption"><span class="media-type">VIDEO / ${item.category.replace('-', ' ').toUpperCase()}</span><strong>${item.title}</strong><small>${item.subtitle}</small></div>`;
    const video = card.querySelector('video');
    const cover = card.querySelector('.video-cover');
    cover.addEventListener('click', async () => {
      if (!video.src) video.src = `assets/videos/${item.file}`;
      card.classList.add('is-playing');
      try { await video.play(); } catch { card.classList.remove('is-playing'); }
    });
    video.addEventListener('playing', () => card.classList.add('is-playing'));
  }
  return card;
}

campaignWork.forEach(item => gallery.append(buildCard(item)));
document.querySelectorAll('.filter-chip').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visible = 0;
    document.querySelectorAll('.filter-chip').forEach(chip => {
      const active = chip === button;
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    gallery.querySelectorAll('.gallery-card').forEach(card => {
      const show = filter === 'all' || card.dataset.category === filter;
      card.hidden = !show;
      if (show) {
        card.classList.remove('is-visible');
        card.style.setProperty('--card-delay', `${Math.min(visible, 10) * 45}ms`);
        visible++;
      }
    });
    galleryCount.textContent = `${visible} ${visible === 1 ? 'piece' : 'pieces'}`;
    requestAnimationFrame(() => gallery.querySelectorAll('.gallery-card:not([hidden])').forEach(card => card.classList.add('is-visible')));
  });
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));

const progress = document.querySelector('.scroll-progress');
const updateProgress = () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = `${scrollable ? (window.scrollY / scrollable) * 100 : 0}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

// Low-amplitude camera drift and card parallax add motion without hiding content.
const cinematicHero = document.querySelector('.hero');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const brandIntro = document.querySelector('.brand-intro');
if (brandIntro) {
  let introSeen = true;
  try { introSeen = sessionStorage.getItem('signal-story-intro-seen') === 'true'; } catch { /* Storage can be unavailable for local previews. */ }
  if (introSeen || reducedMotion.matches) {
    document.body.classList.add('intro-complete');
  } else {
    try { sessionStorage.setItem('signal-story-intro-seen', 'true'); } catch { /* The intro still works without saved state. */ }
    window.setTimeout(() => document.body.classList.add('intro-complete'), 2750);
  }
}

document.querySelectorAll('.project-play').forEach(button => {
  const visual = button.closest('.project-visual');
  const video = visual.querySelector('.project-preview');
  const reset = () => {
    video.pause();
    video.currentTime = 0;
    video.hidden = true;
    visual.classList.remove('is-playing');
    button.setAttribute('aria-pressed', 'false');
  };
  button.addEventListener('click', async () => {
    if (!video.hidden) {
      if (video.paused) await video.play();
      else video.pause();
      return;
    }
    video.hidden = false;
    visual.classList.add('is-playing');
    button.setAttribute('aria-pressed', 'true');
    try { await video.play(); }
    catch {
      video.hidden = true;
      visual.classList.remove('is-playing');
      button.setAttribute('aria-pressed', 'false');
    }
  });
  video.addEventListener('ended', reset);
});

const floatingWhatsApp = document.querySelector('.floating-whatsapp');
if (floatingWhatsApp) {
  const heroSection = document.querySelector('.hero');
  const contactSection = document.querySelector('#contact');
  const visibleSections = new Set();
  const ctaObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) visibleSections.add(entry.target);
      else visibleSections.delete(entry.target);
    });
    const shouldShow = !visibleSections.has(heroSection) && !visibleSections.has(contactSection);
    floatingWhatsApp.hidden = !shouldShow;
    requestAnimationFrame(() => floatingWhatsApp.classList.toggle('is-visible', shouldShow));
  }, { threshold: 0.12 });
  ctaObserver.observe(heroSection);
  ctaObserver.observe(contactSection);
}

let motionFrame = 0;
let pointerX = 0;
let pointerY = 0;

function paintCinematicMotion() {
  motionFrame = 0;
  if (!cinematicHero || reducedMotion.matches) return;
  const bounds = cinematicHero.getBoundingClientRect();
  const inside = bounds.bottom > 0 && bounds.top < window.innerHeight;
  const heroProgress = Math.max(-1, Math.min(1, (window.innerHeight - bounds.top) / (window.innerHeight + bounds.height) - .5));
  cinematicHero.style.setProperty('--hero-drift', `${heroProgress * 28}px`);
  document.querySelectorAll('.project-still').forEach(still => {
    const frame = still.parentElement.getBoundingClientRect();
    if (frame.bottom < 0 || frame.top > window.innerHeight) return;
    const progress = (window.innerHeight - frame.top) / (window.innerHeight + frame.height);
    still.style.setProperty('--still-y', `${(progress - .5) * -38}px`);
  });
  if (inside && window.matchMedia('(pointer: fine)').matches) {
    const x = Math.max(0, Math.min(100, (pointerX - bounds.left) / bounds.width * 100));
    const y = Math.max(0, Math.min(100, (pointerY - bounds.top) / bounds.height * 100));
    cinematicHero.style.setProperty('--pointer-x', `${x}%`);
    cinematicHero.style.setProperty('--pointer-y', `${y}%`);
    cinematicHero.style.setProperty('--glow-x', `${(x - 72) * .34}px`);
    cinematicHero.style.setProperty('--glow-y', `${(y - 45) * .24}px`);
  }
}

function requestCinematicPaint() {
  if (!motionFrame) motionFrame = requestAnimationFrame(paintCinematicMotion);
}

window.addEventListener('scroll', () => {
  requestCinematicPaint();
}, { passive: true });
window.addEventListener('resize', requestCinematicPaint, { passive: true });
window.addEventListener('pointermove', event => {
  if (event.pointerType !== 'mouse') return;
  pointerX = event.clientX;
  pointerY = event.clientY;
  requestCinematicPaint();
}, { passive: true });

document.querySelectorAll('.service-card').forEach(card => {
  card.addEventListener('pointermove', event => {
    if (reducedMotion.matches || event.pointerType !== 'mouse' || !window.matchMedia('(min-width: 901px)').matches) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    card.style.setProperty('--card-tilt-x', `${x * 3.2}deg`);
    card.style.setProperty('--card-tilt-y', `${y * -3.2}deg`);
  });
  card.addEventListener('pointerleave', () => {
    card.style.setProperty('--card-tilt-x', '0deg');
    card.style.setProperty('--card-tilt-y', '0deg');
  });
});
requestCinematicPaint();

const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === `#${entry.target.id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  });
}, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });
document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));

lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) lightbox.close();
});
document.querySelector('#year').textContent = new Date().getFullYear();
