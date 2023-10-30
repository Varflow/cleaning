export const createStickyHeader = () => {
  const canSticky = window.matchMedia("(max-width: 1024px)").matches;

  if (canSticky) {
    return;
  }

  const header = document.querySelector('[data-el="header"]');
  const offsetTop = 200;

  window.addEventListener("scroll", () => {
    const x = window.pageYOffset;

    if (x >= offsetTop) {
      header.style.top = "0";
    } else {
      header.style.top = "-100%";
    }
  });
};

export const createMobileHeader = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (!isMobile) {
    return;
  }

  const headerMenuEl = document.querySelector('[data-el="header-mobile-menu"]');
  const closeHeaderMenuEl = document.querySelector(
    '[data-el="header-menu-close"]'
  );
  const openHeaderMenuEl = document.querySelector(
    '[data-el="header-menu-burger"]'
  );

  const headerMenuDropdownButtonEl = document.querySelector(
    '[data-el="header-menu-dropdown-button"]'
  );
  const headerMenuDropdownEl = document.querySelector(
    '[data-el="header-menu-dropdown"]'
  );

  headerMenuDropdownButtonEl.addEventListener("click", (event) => {
    headerMenuDropdownButtonEl.classList.toggle("opened");
  });

  openHeaderMenuEl.addEventListener("click", (event) => {
    headerMenuEl.classList.add("opened");
  });

  closeHeaderMenuEl.addEventListener("click", () => {
    headerMenuEl.classList.remove("opened");
  });
};
