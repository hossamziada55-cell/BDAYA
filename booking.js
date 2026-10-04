document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });

  const revealItems = document.querySelectorAll('.metric-box, .schedule-card, .info-item');

  revealItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(12px)';
    item.style.transition = 'opacity 0.7s ease, transform 0.7s ease';

    setTimeout(() => {
      item.style.opacity = '1';
      item.style.transform = 'translateY(0)';
    }, 120 * (index + 1));
  });
});
