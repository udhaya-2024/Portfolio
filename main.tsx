import React from 'react';
import { createRoot } from 'react-dom/client';
import { HeroActivity, LeadMotion, ProfileAtmosphere } from './LiveVisuals';

const mounts: [string, React.ReactNode][] = [
  ['hero-live-root', <HeroActivity />],
  ['lead-live-root', <LeadMotion />],
  ['profile-live-root', <ProfileAtmosphere />],
];

mounts.forEach(([id, view]) => {
  const node = document.getElementById(id);
  if (node) createRoot(node).render(view);
});
