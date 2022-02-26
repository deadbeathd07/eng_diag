const text = document.querySelector(".top-lending__popup-text p");
text.innerHTML = text.innerText
  .split("")
  .map((letter, i) => {
    if (i == 0 || i == 26) {
      return `<span style="transform:rotate(${
        i * 6.9
      }deg") ><img src="../img/popup-text-img.svg"></span>
              <span style="transform:rotate(${i * 6.9}deg")>${letter}</span>`;
    } else {
      return `<span style="transform:rotate(${i * 6.9}deg")>${letter}</span>`;
    }
  })
  .join("");

const slider = new Swiper(".service__swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    640: {
      spaceBetween: 40,
      slidesPerView: 2,
    },
    1200: {
      spaceBetween: 80,
      slidesPerView: 4,
    },
  },
});

const slider_steps = new Swiper(".steps__slider", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});