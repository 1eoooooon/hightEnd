const swiper1 = new Swiper('.swiper-container1', {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 22,

  pagination: {
    renderBullet: function (index, className) {
      const paddedIndex = String(index + 1).padStart(2, '0');
      return '<span class="' + className + ' pagination-number">' + paddedIndex + "</span>";
    },
    el: '.swiper-pagination1',
    clickable: true
  },

  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },
});

const swiper2 = new Swiper('.swiper-container2', {
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 22,

  pagination: {
    el: '.swiper-pagination2',
    clickable: false
  },

  navigation: {
    nextEl: '.custom-next',
    prevEl: '.custom-prev',
  },

  breakpoints: {
    360: {
      spaceBetween: 16
    },
    361: {
      spaceBetween: 22
    },
    }
});

const slides1 = document.querySelectorAll('.swiper-container1 .swiper-slide');
const slides2 = document.querySelectorAll('.swiper-container2 .swiper-slide');

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

