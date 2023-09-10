export const createStickyHeader = () => {
  const header = document.querySelector('[data-el="header"]');
  const offsetTop = 200;

  console.log(offsetTop);
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
