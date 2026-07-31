document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
});

/**
 * Attaches smooth window deceleration to matching configuration targets
 */
function initSmoothScroll() {
  const ctaBtn = document.querySelector('.cta-btn');
  
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calculate dynamic window alignment mapping offset variables if needed
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }
}