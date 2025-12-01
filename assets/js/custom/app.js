// Carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 25,
  nav: false,
  autoplay: true,
  animateOut: "slideOutDown",
  animateOut: "fadeOut",
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: { 
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
  },
});
// Mobile Menu
$(document).ready(function () {
  $("#menuBtn").click(() => {
    $("#mobileMenu").slideToggle(300).toggleClass("show");
    $("#menuBtn i").toggleClass("fa-bars fa-xmark");
  });
  $("#mobileMenu a").click(() => {
    $("#mobileMenu").slideUp(300).removeClass("show");
    $("#menuBtn i").removeClass("fa-xmark").addClass("fa-bars");
  });
});
// Preloader
function preLoad() {
  var loader = document.getElementById("pre-loader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });
}
preLoad();
// setTimeout(function () {
//   $("#pre-loader").fadeOut();
//   $("#pre-loader").delay(150).fadeOut("slow");
// }, 3000);
// AOS
AOS.init({
  duration: 1000,
  easing: "linear",
  once: false,
  anchorPlacement: "top-bottom", 
  mirror: true,
  disable: "mobile",
});
// Scroll To Top Button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#675ffa ${scrollValue}%, #D7D7D7A8 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// Typed Js
  var typed = new Typed('#element', {
    strings: ['Shetty'],
    typeSpeed: 150,
    backSpeed: 130,
    loop: true,
  });

      // Counter
$(window).on("scroll counter", function () {
  const box = $(".counter--box");
  if (!box.length) return;

  if ($(window).scrollTop() > box.offset().top - innerHeight) {
    $(this).off("scroll counter");

    $(".counter .heading span").each(function () {
      const $el = $(this);
      $({ n: 0 }).animate({ n: $el.data("count") }, {
        duration: 3000,
        step: n => $el.text(Math.floor(n)),
        complete() { $el.text(this.n); }
      });
    });
  }
});
// Form Validation
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})()
// Nav Links
document.querySelectorAll('[data-target]').forEach(a =>
  a.onclick = () => {
    document.querySelector('.active')?.classList.remove('active'); 
    a.classList.add('active');                                     
    document.getElementById(a.dataset.target).scrollIntoView();    
  }
);
// Custom Cursor
const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
const speed = 0.15; // lower = smoother (0.1 → super smooth)
document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
function animate() {
  cursorX += (mouseX - cursorX) * speed;
  cursorY += (mouseY - cursorY) * speed;
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  requestAnimationFrame(animate);
}
animate();
// Dark Mode
$(function () {
  const $btn = $("#darkMode");
  const $icon = $(".yafela-icon"); 
  let theme = localStorage.getItem("theme") || "dark";
  function applyTheme(t) {
    $("html").attr("data-theme", t);
    // Button color and icon
    if (t === "dark") {
      $btn.removeClass("text-dark").addClass("text-white");
      $btn.find("i").removeClass("bi-moon-fill").addClass("bi-sun-fill");
    } else {
      $btn.removeClass("text-white").addClass("text-dark");
      $btn.find("i").removeClass("bi-sun-fill").addClass("bi-moon-fill");
    }
    // Update Yafela icon
    $icon.attr("src", t === "dark" ? $icon.data("dark") : $icon.data("light"));
  }
  applyTheme(theme);
  $btn.click(() => {
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", theme);
    applyTheme(theme);
  });
});