import { useEffect, useState } from 'react';

const activity = [
  { icon: '↗', kind: 'NEW ENQUIRY', title: 'Someone is exploring a property', detail: 'Campaign preview · illustrative', tone: 'teal' },
  { icon: '♥', kind: 'NEW REACTION', title: 'A story caught someone’s eye', detail: 'Social preview · illustrative', tone: 'gold' },
  { icon: '···', kind: 'NEW COMMENT', title: 'A conversation is taking shape', detail: 'Engagement preview · illustrative', tone: 'blue' },
];

export function HeroActivity() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setActive((value) => (value + 1) % activity.length), 3500);
    return () => window.clearInterval(id);
  }, []);
  return <div className="activity-scene">
    <div className="activity-orbit orbit-a" /><div className="activity-orbit orbit-b" />
    <div className="activity-phone"><div className="phone-camera" /><div className="phone-screen"><span className="screen-kicker">CAMPAIGN SIGNAL</span><div className="screen-chart"><i /><i /><i /><i /><i /><svg viewBox="0 0 240 90" preserveAspectRatio="none"><path d="M0 70 C30 66 34 47 66 55S101 62 124 40 157 48 181 27 215 38 240 8" /></svg></div><span className="screen-tag">CREATIVE → CONNECTION</span></div></div>
    <div className="activity-float activity-float-like"><span>♥</span><small>STORY REACTION</small></div>
    <div className="activity-float activity-float-chat"><span>···</span><small>MESSAGE</small></div>
    <div className="activity-float activity-float-person"><span>↗</span><small>ENQUIRY</small></div>
    <div className="activity-notification" key={active}><span className={`activity-icon ${activity[active].tone}`}>{activity[active].icon}</span><div><small>{activity[active].kind}</small><strong>{activity[active].title}</strong><span>{activity[active].detail}</span></div><i className="activity-live-dot" /></div>
    <div className="activity-disclaimer"><i /> ANIMATED CAMPAIGN PREVIEW · NOT LIVE META DATA</div>
  </div>;
}

export function LeadMotion() {
  return <div className="lead-motion" aria-hidden="true">
    <div className="lead-motion-head"><span><i /> ACTIVITY TRACE</span><span>CAMPAIGN SIGNAL</span></div>
    <div className="lead-wave"><div className="wave-grid" /><svg viewBox="0 0 700 130" preserveAspectRatio="none"><path className="wave-fill" d="M0 110 C45 105 45 68 95 81 S155 100 195 72 245 92 292 55 340 76 380 41 425 68 465 26 525 62 570 25 630 43 700 4 V130 H0Z" /><path className="wave-line" d="M0 110 C45 105 45 68 95 81 S155 100 195 72 245 92 292 55 340 76 380 41 425 68 465 26 525 62 570 25 630 43 700 4" /></svg><div className="wave-scan" /></div>
    <div className="lead-motion-foot"><span><i className="gold-dot" /> EXPORT VISUALISATION</span><span>✳</span></div>
  </div>;
}

export function ProfileAtmosphere() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const target = document.querySelector<HTMLElement>('.about-visual');
    const image = target?.querySelector<HTMLImageElement>('.profile-photo');
    if (!target || !image) return;

    const reset = () => {
      setPointer({ x: 0, y: 0 });
      image.style.setProperty('--portrait-x', '0px');
      image.style.setProperty('--portrait-y', '0px');
    };
    const move = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches || event.pointerType === 'touch') return;
      const bounds = target.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - .5) * 2));
      const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - .5) * 2));
      setPointer({ x, y });
      image.style.setProperty('--portrait-x', `${-x * 9}px`);
      image.style.setProperty('--portrait-y', `${-y * 9}px`);
    };
    const onMotionPreferenceChange = () => reset();

    target.addEventListener('pointermove', move, { passive: true });
    target.addEventListener('pointerleave', reset);
    reducedMotion.addEventListener('change', onMotionPreferenceChange);
    finePointer.addEventListener('change', onMotionPreferenceChange);
    return () => {
      target.removeEventListener('pointermove', move);
      target.removeEventListener('pointerleave', reset);
      reducedMotion.removeEventListener('change', onMotionPreferenceChange);
      finePointer.removeEventListener('change', onMotionPreferenceChange);
    };
  }, []);
  return <div className="profile-atmosphere" style={{ '--px': `${pointer.x * 12}px`, '--py': `${pointer.y * 12}px` } as React.CSSProperties} aria-hidden="true">
    <div className="profile-halo" /><div className="profile-ring ring-one" /><div className="profile-ring ring-two" /><div className="profile-ring ring-three" />
    <span className="profile-orbit-tag tag-meta">META ADS <i>✳</i></span><span className="profile-orbit-tag tag-story">STORY → SIGNAL</span><span className="profile-orbit-tag tag-leads">LEAD GENERATION <i>↗</i></span>
    <div className="profile-crosshair">S&amp;S</div>
  </div>;
}
