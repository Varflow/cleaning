import { sendMail } from "./email";
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

    const name = document.querySelector('[data-el="name"]');
    const phone = document.querySelector('[data-el="phone"]');
    const comment = document.querySelector('[data-el="comment"]');

    sendMail({ name, phone, comment });
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
