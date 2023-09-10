import Swiper from "swiper";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const createReviewsSlider = () => {
  const target = document.querySelector(".slider-reviews");
  const prevEl = target.querySelector(".button-prev");
  const nextEl = target.querySelector(".button-next");

  new Swiper(target, {
    slidesPerView: 3.2,
    modules: [Navigation],
    navigation: {
      prevEl,
      nextEl,
    },
  });
};

const createResultsSlider = () => {
  const target = document.querySelector(".slider-results");
  const prevEl = target.querySelector(".button-prev");
  const nextEl = target.querySelector(".button-next");

  new Swiper(target, {
    slidesPerView: 2,
    modules: [Navigation],
    navigation: {
      prevEl,
      nextEl,
    },
  });
};

const main = () => {
  createReviewsSlider();
  createResultsSlider();
};

main();
