import "../styles/_general.scss";

import { render } from "./render";
import { createStickyHeader } from "./components/header";

document.addEventListener("DOMContentLoaded", () => {
  render();
  createStickyHeader();
});
