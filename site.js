(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.primary-navigation');

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navigation.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuToggle.querySelector('.menu-toggle__label').textContent = isOpen ? 'Cerrar' : 'Menú';
    });
  }

  const headlines = [
    {
      text: 'Propone líder parlamentario del PRI, partida presupuestal especial para la Región Sierra',
      href: '#principal'
    },
    {
      text: 'Encabezan Evelyn Salgado y Liz Salgado entrega mensual de aparatos funcionales del DIF Guerrero',
      href: '#'
    },
    {
      text: 'Presenta Patricia Doroteo sistema que mitigaría la carencia de agua en comunidades',
      href: '#guerrero'
    },
    {
      text: 'Avanzan trabajos para mejorar la movilidad en zonas prioritarias del puerto',
      href: '#acapulco'
    }
  ];

  const tickerLink = document.querySelector('[data-ticker-link]');
  const previous = document.querySelector('[data-ticker-previous]');
  const next = document.querySelector('[data-ticker-next]');
  const toggle = document.querySelector('[data-ticker-toggle]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let index = 0;
  let isPaused = reducedMotion.matches;
  let timer;

  const renderHeadline = () => {
    if (!tickerLink) return;
    tickerLink.textContent = headlines[index].text;
    tickerLink.href = headlines[index].href;
  };

  const stop = () => {
    window.clearInterval(timer);
    timer = undefined;
  };

  const start = () => {
    stop();
    if (isPaused || reducedMotion.matches) return;
    timer = window.setInterval(() => {
      index = (index + 1) % headlines.length;
      renderHeadline();
    }, 6500);
  };

  const change = (direction) => {
    index = (index + direction + headlines.length) % headlines.length;
    renderHeadline();
    start();
  };

  previous?.addEventListener('click', () => change(-1));
  next?.addEventListener('click', () => change(1));
  toggle?.addEventListener('click', () => {
    isPaused = !isPaused;
    toggle.setAttribute('aria-pressed', String(isPaused));
    toggle.setAttribute('aria-label', isPaused ? 'Reanudar titulares' : 'Pausar titulares');
    toggle.textContent = isPaused ? '▶' : 'Ⅱ';
    start();
  });

  reducedMotion.addEventListener?.('change', () => start());
  document.querySelector('[data-current-year]')?.replaceChildren(String(new Date().getFullYear()));
  renderHeadline();
  start();
})();
