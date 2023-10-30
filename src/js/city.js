import { getCity, setCity } from "./db";
import { Modal } from "./modal";

export const initCity = () => {
  const city = getCity();

  if (!city && !city?.length) {
    Modal.open("city-modal");
    listenCityClick();
  }

  renderCurrenctCity();
};

const listenCityClick = () => {
  const citiesEls = document.querySelectorAll('[data-el="city-button"]');

  if (!citiesEls) {
    return;
  }

  citiesEls.forEach((cityEl) => {
    const city = cityEl.dataset.city;
    cityEl.addEventListener("click", () => {
      setCity(city);
      window.location.reload();
    });
  });
};

const renderCurrenctCity = () => {
  const cityAddressEl = document.querySelector('[data-el="city-address"]');
  const city = getCity();

  if (!cityAddressEl) {
    return;
  }

  cityAddressEl.textContent = city === "Kiev" ? "м. Київ" : "м. Вінниця";
};
