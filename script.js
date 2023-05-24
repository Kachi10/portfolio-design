/*=========menu icon navbar======/
let menuIcon = document.querySelector('#menuIcon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


/*=========scroll section active link======/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');


    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[herf*=' + id +']').classList.add('active');
      });

    };

  });


  /*=========sticky navbar =======*/
window.onscroll = () => {



  let header = document.querySelector('.header');


  header.classList.toggle('sticky', window.scrollY > 100);
};


/*=========remove icon navbar when click navbar links (scroll)======/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');





/*======== swiper =======*/

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 50,
  gracursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


/*============ dark light mode ===========*/
let darkModeIcon = document.querySelector('#darkmode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun');
  document.body.classList.toggle('dark-mode')
};
