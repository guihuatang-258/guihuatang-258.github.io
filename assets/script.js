(() => {
  'use strict';
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-button');
  const menuButton = document.querySelector('.menu-button');
  const mobileNav = document.querySelector('#mobile-nav');
  const year = document.querySelector('#year');
  const storageKey = 'portfolio-theme';

  if (year) year.textContent = new Date().getFullYear();

  let savedTheme = null;
  try { savedTheme = localStorage.getItem(storageKey); } catch (_) { /* storage disabled */ }
  const systemPrefersDark = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ?? false;
  if (savedTheme === 'dark' || (savedTheme !== 'light' && systemPrefersDark)) {
    root.setAttribute('data-theme', 'dark');
  }

  themeButton?.addEventListener('click', () => {
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem(storageKey, next); } catch (_) { /* storage disabled */ }
  });

  function closeMenu() {
    if (!mobileNav || !menuButton) return;
    mobileNav.hidden = true;
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', '打开菜单');
  }

  menuButton?.addEventListener('click', () => {
    if (!mobileNav) return;
    const shouldOpen = mobileNav.hidden;
    mobileNav.hidden = !shouldOpen;
    menuButton.setAttribute('aria-expanded', String(shouldOpen));
    menuButton.setAttribute('aria-label', shouldOpen ? '关闭菜单' : '打开菜单');
  });

  mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 860) closeMenu(); });

  // 高亮当前所在的章节；不依赖第三方库。
  if ('IntersectionObserver' in window) {
    const links = [...document.querySelectorAll('.desktop-nav a')];
    const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (!visible.length) return;
      for (const link of links) {
        if (link.getAttribute('href') === '#' + visible[0].target.id) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      }
    }, { rootMargin: '-15% 0px -55% 0px', threshold: [0, .2, .6] });
    sections.forEach(section => observer.observe(section));
  }
})();
