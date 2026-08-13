(() => {
  const root = document.documentElement;
  const btn = document.querySelector('[data-theme-toggle]');
  const saved = localStorage.getItem('greco-theme');
  if (saved) root.dataset.theme = saved;
  if (btn) btn.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('greco-theme', next);
    btn.setAttribute('aria-label', next === 'light' ? 'Activer le thème sombre' : 'Activer le thème clair');
  });
  document.querySelectorAll('[data-days]').forEach(el => {
    const target = new Date(el.dataset.days + 'T23:59:59+01:00');
    const diff = Math.ceil((target - new Date()) / 86400000);
    el.textContent = diff >= 0 ? `${diff} jours` : `échéance passée`;
  });
  document.querySelectorAll('[data-updated]').forEach(el => el.textContent = new Intl.DateTimeFormat('fr-BE',{dateStyle:'long'}).format(new Date('2026-08-13')));
})();
