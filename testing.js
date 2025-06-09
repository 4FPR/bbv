window.addEventListener("load", () => {
  setTimeout(() => {
    const collapseTargets = document.querySelectorAll(".scroll-collapse");
    const fontTarget = document.querySelector(".title-container");

    window.addEventListener("scroll", () => {
      const triggerStart = 100;
      const triggerEnd = 400;
      const scrollY = window.scrollY;

      const progress = Math.min(Math.max((scrollY - triggerStart) / (triggerEnd - triggerStart), 0), 1);

      // Collapse effect
      collapseTargets.forEach((el) => {
        el.style.setProperty("--progress", progress);
      });

      // Font size shrink effect
      if (fontTarget) {
        fontTarget.style.setProperty("--scroll-font", progress);
      }
    });
  }, 900); // delay until after load animation
});
