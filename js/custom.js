var swiper = new Swiper(".product-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    autoplay: {
        delay:4000,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5,
          },
    },
});
var swiper = new Swiper(".clients-slider", {
    loop:true, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    grabCursor:true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
            slidesPerView: 5,
          },
          1792: {
            slidesPerView: 6,
          },
    },
});
var swiper = new Swiper(".review-slider", {
    loop:true, 
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
window.onscroll = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .nav_bar').classList.add('active');
    }
    else{
        document.querySelector('.header .nav_bar').classList.remove('active');

    }
}
var swiper = new Swiper(".blogs-slider", {
  loop:true, 
  grabCursor:true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
  },
});