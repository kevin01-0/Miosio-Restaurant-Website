(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  document.querySelectorAll('.flash').forEach((flash) => {
    window.setTimeout(() => {
      flash.classList.add('flash-fade');
      window.setTimeout(() => flash.remove(), 350);
    }, 6000);
  });
})();

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const message = document.getElementById('booking-demo-message');
      if (message) {
        message.hidden = false;
        message.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }
