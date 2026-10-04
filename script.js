document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  const revealEls = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    revealEls.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }
    });
  };

  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);
});
