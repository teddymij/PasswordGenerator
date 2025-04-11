// Lock animation
document.addEventListener('DOMContentLoaded', function () {
  // Elements
  const createButton = document.querySelector('.home__button--strongbox');
  const lockImage = document.querySelector('.home__img--lock');
  const lockStars = document.querySelectorAll('.lock-stars');

  // Prepare the lock image (ensure it's the open version initially)
  // If you don't have an open lock image, switch it programmatically
  if (!lockImage.src.includes('lock-open.png')) {
    lockImage.src = 'assets/img/lock-open.png';
  }

  // Click event for the create strongbox button
  createButton.addEventListener('click', function () {
    // Add closed class to activate closing animation
    lockImage.classList.remove('lock-open');
    lockImage.classList.add('lock-closed');

    // Switch to closed lock image after a slight delay
    setTimeout(() => {
      lockImage.src = 'assets/img/lock.png';

      // Show stars animation
      lockStars.forEach(star => {
        star.style.opacity = '0'; // Reset
        setTimeout(() => {
          // Trigger animation by setting a fresh animation
          star.style.animation = 'none';
          void star.offsetWidth; // Trigger reflow
          star.style.animation = star
            .getAttribute('style')
            .includes('nth-child(1)')
            ? 'starFade 0.5s 0.1s forwards'
            : star.getAttribute('style').includes('nth-child(2)')
            ? 'starFade 0.5s 0.2s forwards'
            : 'starFade 0.5s 0.3s forwards';
        }, 10);
      });

      // Transition to generator section after animation completes
      setTimeout(() => {
        // Code to navigate to generator section
        // This can be adjusted based on your navigation setup
        document
          .querySelector('.pwd__generator')
          .scrollIntoView({ behavior: 'smooth' });
      }, 800);
    }, 300);
  });
});
