export function smoothScroll(targetId, duration) {
    const target = document.getElementById(targetId);

    if (!target) return;

    const startY = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startY;
    const startTime = performance.now();

    function easeOutQuad(t) {
      return t * (2 - t);
    }

    function scrollStep(timestamp) {
      const currentTime = timestamp - startTime

      if (currentTime < duration) {
        const progress = currentTime / duration;
        window.scrollTo(0, startY + distance * easeOutQuad(progress));
        requestAnimationFrame(scrollStep);
      } else {
        window.scrollTo(0, targetPosition);
      }
    }

    requestAnimationFrame(scrollStep);

  }