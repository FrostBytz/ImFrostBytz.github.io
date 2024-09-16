var navbar = document.getElementById("navbar")
var menu_btn = document.getElementById("menu_btn")
var menu_close_btn = document.getElementById("menu_close_btn")

menu_btn.addEventListener('click',()=>{
   
    navbar.style.opacity = 1;
    navbar.style.visibility = "visible";

});
menu_close_btn.addEventListener('click',()=>{
   
    navbar.style.opacity = 0;
    navbar.style.visibility = "hidden";

});

var swiper = new Swiper(".cakesSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    loop:true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });

  var swiper2 = new Swiper(".testimonialsSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      loop:true
  });

  var order_btn = document.getElementById("order_btn");
  var contact_section = document.getElementById("contact_section");
  var cakes_section = document.getElementById("cakes_section");
  var explore_btn = document.getElementById("explore_btn");
  var navlinks = document.querySelectorAll('#navbar ul li a')

  order_btn.addEventListener("click",()=>{
    contact_section.scrollIntoView({behavior:'smooth',block:"start"})
  })
  explore_btn.addEventListener("click",()=>{
    cakes_section.scrollIntoView({behavior:'smooth',block:"start"})
  })

  navlinks.forEach((navLink)=>{
    navLink.addEventListener("click",()=>{
      navbar.style.opacity = 0;
    navbar.style.visibility = "hidden";
    })
  })


  // animation part

