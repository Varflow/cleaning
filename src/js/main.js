import "../styles/_general.scss";

import { render } from "./render";
import { createStickyHeader, createMobileHeader } from "./components/header";
import { Modal } from "./modal";
import { initCity } from "./city";
import { initContact } from "./contact";
import { initPhoneInputs } from "./phone";

document.addEventListener("DOMContentLoaded", () => {
  Modal.init();
  initContact();
  initCity();
  initPhoneInputs();
  render();
  createStickyHeader();
  createMobileHeader();
});
