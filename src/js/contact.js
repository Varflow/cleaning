import { Modal } from "./modal";

export const initContact = () => {
  const buttonEls = document.querySelectorAll('[data-el="contact-button"]');

  buttonEls.forEach((buttonEl) => {
    buttonEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      Modal.open("contact-modal");

      // const submitButton = document.querySelector('[data-el="submit-button"]');

      // submitButton.addEventListener("click", () => {
      //   const form = document.querySelector('[data-el="contact-form"]');

      //   gtag_report_conversion();
      //   form.submit();
      // });
    });
  });
};
