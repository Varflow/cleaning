export const createStickyHeader = () => {
  const canSticky = window.matchMedia("(max-width: 1024px)").matches;

  if (canSticky) {
    return;
  }

  const header = document.querySelector('[data-el="header"]');
  const offsetTop = 200;

  // Set a threshold value based on your design
  window.addEventListener("scroll", () => {
    const x = window.pageYOffset;

    if (x >= offsetTop) {
      // Add a CSS class to make the header sticky
      header.style.top = "0";
    } else {
      // Remove the sticky class if the user scrolls back up
      header.style.top = "-100%";
    }
  });
};
