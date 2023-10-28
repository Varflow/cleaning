import { Modal } from "./modal";

export const initContact = () => {
  const buttonEls = document.querySelectorAll('[data-el="contact-button"]');

  buttonEls.forEach((buttonEl) => {
    buttonEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      Modal.open("contact-modal");
    });
  });

  initContactFormInModal();
  initContactInSection();
};

const initContactFormInModal = () => {
  const contactFormEl = document.querySelector('[data-el="contact-form"]');

  if (!contactFormEl) {
    return;
  }

  contactFormEl.addEventListener("submit", (event) => {
    event.stopPropagation();
    event.preventDefault();
  });
};

const initContactInSection = () => {
  const contactFormEl = document.querySelector(
    '[data-el="contact-form-section"]'
  );

  if (!contactFormEl) {
    return;
  }

  contactFormEl.addEventListener("submit", (event) => {
    event.stopPropagation();
    event.preventDefault();
  });
};
