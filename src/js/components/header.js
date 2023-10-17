export const createStickyHeader = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    return;
  }

  const header = document.querySelector('[data-el="header"]');
  const offsetTop = 200;

  // Set a threshold value based on your design
  window.addEventListener("scroll", () => {
    const x = window.pageYOffset;

    console.log(x);
    if (x >= offsetTop) {
      // Add a CSS class to make the header sticky
      header.style.top = "0";
    } else {
      // Remove the sticky class if the user scrolls back up
      header.style.top = "-100%";
    }
  });
};
