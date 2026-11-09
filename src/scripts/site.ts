const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Progressive enhancement: content stays visible without scripts or observers.
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
    if (element.getBoundingClientRect().top > window.innerHeight) {
      element.classList.add('reveal-ready');
      observer.observe(element);
    }
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      observer.disconnect();
      document
        .querySelectorAll('.reveal-ready')
        .forEach((element) => element.classList.add('is-visible'));
    }
  });
}

const menu = document.querySelector<HTMLDetailsElement>('.mobile-menu');
menu?.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    menu.open = false;
  }),
);
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu?.open) {
    menu.open = false;
    menu.querySelector('summary')?.focus();
  }
});

document
  .querySelectorAll<HTMLAnchorElement>('[data-project]')
  .forEach((link) => {
    const dialog = document.querySelector<HTMLDialogElement>(
      `#dialog-${link.dataset.project}`,
    );
    if (!dialog || typeof dialog.showModal !== 'function') return;
    link.addEventListener('click', (event) => {
      event.preventDefault();
      dialog.showModal();
      document.body.classList.add('dialog-open');
    });
    dialog.addEventListener('close', () =>
      document.body.classList.remove('dialog-open'),
    );
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog) {
        const bounds = dialog.getBoundingClientRect();
        if (
          event.clientX < bounds.left ||
          event.clientX > bounds.right ||
          event.clientY < bounds.top ||
          event.clientY > bounds.bottom
        )
          dialog.close();
      }
    });
    dialog
      .querySelector('[data-dialog-contact]')
      ?.addEventListener('click', () => dialog.close());
  });

// Local enquiry builder: no endpoint, storage, or fabricated delivery state.
const form = document.querySelector<HTMLFormElement>('#enquiry-form');
let enquiryUrl: string | undefined;
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const result = document.querySelector<HTMLElement>('#enquiry-result');
  const download =
    document.querySelector<HTMLAnchorElement>('#enquiry-download');
  if (!result || !download) return;
  const brief = `WORD — PROJECT ENQUIRY\n\nName: ${String(data.get('name')).trim()}\nEmail: ${String(data.get('email')).trim()}\n\nAbout the project\n${String(data.get('project')).trim()}\n\nPrepared locally at Word, a fictional architecture studio. This enquiry has not been sent.\n`;
  if (enquiryUrl) URL.revokeObjectURL(enquiryUrl);
  enquiryUrl = URL.createObjectURL(
    new Blob([brief], { type: 'text/plain;charset=utf-8' }),
  );
  download.href = enquiryUrl;
  result.hidden = false;
  result.focus({ preventScroll: true });
  result.scrollIntoView({
    behavior: reducedMotion.matches ? 'instant' : 'smooth',
    block: 'nearest',
  });
});
form?.addEventListener('input', () => {
  const result = document.querySelector<HTMLElement>('#enquiry-result');
  if (result) result.hidden = true;
  if (enquiryUrl) {
    URL.revokeObjectURL(enquiryUrl);
    enquiryUrl = undefined;
  }
});

// Keep submission disabled until the local-only handler has been registered.
const submitButton = form?.querySelector<HTMLButtonElement>(
  'button[type="submit"]',
);
if (submitButton) submitButton.disabled = false;
