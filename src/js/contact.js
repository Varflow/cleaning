import { Modal } from "./modal";

export const initContact = () => {
  const buttonEls = document.querySelectorAll('[data-el="contact-button"]');

  buttonEls.forEach((buttonEl) => {
    buttonEl.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      Modal.open("contact-modal");

      const submitButton = document.querySelector('[data-el="submit-button"]');

      const form = document.querySelector('[data-el="contact-form"]');

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const phone = formData.get("phone");

        console.log("phone", phone);

        const r = dataLayer.push({
          event: "form_send_succes",
          phone,
        });

        console.log("SENDED TO GTM", r);

        form.submit();
      });
    });
  });
};
