import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const createReviewsSlider = () => {
  const target = document.querySelector(".slider-reviews");
  const prevEl = target.querySelector(".button-prev");
  const nextEl = target.querySelector(".button-next");

  new Swiper(target, {
    slidesPerView: 1,
    spaceBetween: 14,
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 10000,
    },
    speed: 1000,
    navigation: {
      prevEl,
      nextEl,
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
    },
  });
};

const createResultsSlider = () => {
  const target = document.querySelector(".slider-results");
  const prevEl = target.querySelector(".button-prev");
  const nextEl = target.querySelector(".button-next");

  new Swiper(target, {
    slidesPerView: 1,
    modules: [Navigation, Autoplay],
    autoplay: {
      delay: 10000,
    },

    speed: 1500,
    centeredSlides: true,
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

import "../../styles/pages/home.scss";
