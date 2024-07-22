// function toggleMobileMenu(menu) {
//     menu.classList.toggle('open');
// }

function toggleMobileMenu(icon) {
    icon.classList.toggle("open");
    document.querySelector(".custom-mobile-menu").classList.toggle("open");
  }
  


  gsap.registerPlugin(ScrollTrigger);

const uniquePageContainer = document.querySelector(".unique-container");

/* SMOOTH SCROLL */
const uniqueScroller = new LocomotiveScroll({
  el: uniquePageContainer,
  smooth: true
});

uniqueScroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(uniquePageContainer, {
  scrollTop(value) {
    return arguments.length
      ? uniqueScroller.scrollTo(value, 0, 0)
      : uniqueScroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: uniquePageContainer.style.transform ? "transform" : "fixed"
});

window.addEventListener("load", function () {
  let pinBoxes = document.querySelectorAll(".unique-pin-wrap > *");
  let pinWrap = document.querySelector(".unique-pin-wrap");
  let pinWrapWidth = pinWrap.offsetWidth;
  let horizontalScrollLength = pinWrapWidth - window.innerWidth;

  // Pinning and horizontal scrolling
  gsap.to(".unique-pin-wrap", {
    scrollTrigger: {
      scroller: uniquePageContainer, //locomotive-scroll
      scrub: true,
      trigger: "#unique-sectionPin",
      pin: true,
      start: "top top",
      end: pinWrapWidth
    },
    x: -horizontalScrollLength,
    ease: "none"
  });

  ScrollTrigger.addEventListener("refresh", () => uniqueScroller.update()); //locomotive-scroll
  ScrollTrigger.refresh();
});


  // testimonials



  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {}
    }
  }

