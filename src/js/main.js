import "../styles/_general.scss";

import { render } from "./render";
import { createStickyHeader } from "./components/header";
import { Modal } from "./modal";
import { initCity } from "./city";
import { initContact } from "./contact";

document.addEventListener("DOMContentLoaded", () => {
  Modal.init();
  initContact();
  initCity();
  render();
  createStickyHeader();
});
