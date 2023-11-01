import { getCity, getServiceValue } from "./db";

const CHANGEABLE_ELEMENT_SELECTOR = '[data-changeable="true"]';

const getChangeableElements = () => {
  const elements = document.querySelectorAll(CHANGEABLE_ELEMENT_SELECTOR);

  return Array.from(elements);
};

const validateElements = (elements) => {
  elements.forEach((element) => {
    const category = element.dataset.category;
    const service = element.dataset.service;

    if (!category) {
      throw new Error(
        `Element with class .${element.classList.toString()} has no category`
      );
    }

    if (!service) {
      throw new Error(
        `Element with class .${element.classList.toString()} has no service`
      );
    }
  });
};

const renderValue = (elements) => {
  const city = getCity();
  elements.forEach((element) => {
    const category = element.dataset.category;
    const service = element.dataset.service;
    const attr = element.dataset.attr;
    const attrType = element.dataset.attrType;
    const changeChild = JSON.parse(element.dataset.changeChild || "true");

    const value = getServiceValue(city, category, service);

    if (attr) {
      element.setAttribute(attr, attrType ? `${attrType}${value}` : value);
    }

    if (changeChild) {
      element.innerText = value;
    }
  });
};

export const render = () => {
  const changeableElements = getChangeableElements();

  validateElements(changeableElements);
  renderValue(changeableElements);
};
