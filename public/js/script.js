
function validateForm() {
    
  // Get form elements
  var first_name = document.getElementById('firstname').value.trim();
  var last_name = document.getElementById('lastname').value.trim();
  var email = document.getElementById('email').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var message = document.getElementById('msg').value.trim();
  

  // Basic validation for empty fields
  if (first_name === "" || last_name === "" || email === "" || phone === "" || message=== "") {
      alert("Please fill in all fields.");
      return false;
  }

  // Email validation
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return false;
  }

 
  // return false; 

  // Everything is valid, allow form submission
  return true;

}

var swiper = new Swiper(".myBannerSwiper", {
    spaceBetween: 0,
    hashNavigation: {
      watchState: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
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


