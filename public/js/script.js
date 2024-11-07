document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Set active link based on sessionStorage
  const activePath = sessionStorage.getItem("activePath");
  navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === activePath) {
          link.classList.add("active");
      }
  });

  // Update sessionStorage when a link is clicked
  navLinks.forEach(link => {
      link.addEventListener("click", function () {
          sessionStorage.setItem("activePath", this.getAttribute("href"));
      });
  });
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
      e.preventDefault();
      window.top.location.href = this.href;
  });
});



var swiper = new Swiper(".myBannerSwiper", {
    spaceBetween: 0,
    hashNavigation: {
      watchState: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".experience .exp-img1", {
      x: -500,
    //   y: 200, // Moves the element from left
      duration: 2,
      delay: 0.5,
      opacity: 0,
      rotate: -360,
      scrollTrigger: {
          trigger: ".experience .exp-img1",
          scroller: "body", // This can be customized if you're using a specific scroller
        //   start: "top 80%", // Adjust start to control when animation begins
          toggleActions: "play none none none" // Configures the animation trigger behavior
      }
  });

  
  gsap.from(".experience .exp-img,.exp-img2", {
     y: -200, 
    duration: 1.5,
    delay: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".experience .exp-img,.exp-img2",
        scroller: "body", 
        // start: "top 80%", 
        toggleActions: "play none none none" // Configures the animation trigger behavior
    }
});
// gsap.from(".experience .exp-img2", {
//     y: -200, 
//    duration: 1.5,
// //    delay: 0.5,
//    opacity: 0,
//    scrollTrigger: {
//        trigger: ".experience .exp-img2",
//        scroller: "body", 
//     //    start: "top 80%", 
//        toggleActions: "play none none none" // Configures the animation trigger behavior
//    }
// });

gsap.from(".experience .exp-img3", {
    y: 200, 
   duration: 1.5,
//    delay: 0.5,
   opacity: 0,
   scrollTrigger: {
       trigger: ".experience .exp-img3",
       scroller: "body", 
    //    start: "top 80%", 
       toggleActions: "play none none none" // Configures the animation trigger behavior
   }
});

gsap.from(".ask-que",{
    x: -500,
    duration: 1,
    // delay: 1,
    scrollTrigger: {
        trigger: ".ask-que",
        scroller: "body",
         toggleActions: "play none none none"
    }
})
gsap.from(".contact-link",{
    x: 500,
    duration: 1,
    // delay: 1,
    scrollTrigger: {
        trigger: ".contact-link",
        scroller: "body",
         toggleActions: "play none none none"
    }
})

gsap.from(".about-tiles .tiles-img",{
  x: -200,
  y: 200,
  duration: 1,
  // delay: 1,
  scale: 0.2
})

gsap.from(".product-catalog .catalog",{
   scale: 0.3,
   duration: 1,
})

// const link = document.querySelector(".product-catalog .catalog a");

// link.addEventListener("mouseenter", function() {
//   // Animate on mouse enter
//   gsap.to(this, {
//     scale: 2,
//     duration: 1,
//     yoyo: true,
//     repeat: -1,  // Repeat indefinitely
//     ease: "power1.inOut"  // Optional: for smoother animation
//   });
// });

// link.addEventListener("mouseleave", function() {
//   // Stop the animation on mouse leave and reset the scale
//   gsap.killTweensOf(this);  // Stop any running animations on this element
//   gsap.to(this, {
//     scale: 1,
//     duration: 0.5,
//     ease: "power1.out"
//   });
// });
