import IMask from "imask";

export const initPhoneInputs = () => {
  const phoneEls = document.querySelectorAll('[type="tel"]');
  const maskOptions = {
    mask: "+{38}(000)000-00-00",
    // lazy: false,
  };

  phoneEls.forEach((phoneEl) => {
    IMask(phoneEl, maskOptions);
  });
};
