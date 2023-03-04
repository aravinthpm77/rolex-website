var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    centerSlides:'true',
    fade:'true',
    grabCursur:'true',
    pagination: {

      
        el: ".swiper-pagination",
        clickable:true,
        dynamicBullets:true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".design-content", {
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 15,
  centerSlides:'true',
  fade:'true',
  grabCursur:'true',
  pagination: {
      el: ".swiper-pagination",
      clickable:true,
      dynamicBullets:true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".slide-content", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true,
    },
});
var swiper = new Swiper(".slide-content", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
});



window.addEventListener("scroll",function(){
  var header=document.querySelector(" .header .nav-bar");
  header.classList.toggle("sticky",window.scrollY > 50);
})

window.addEventListener("scroll",function(){
  var header=this.document.querySelector(" #header .header");
  header.classList.toggle("sticky",window.screenY >50);
})