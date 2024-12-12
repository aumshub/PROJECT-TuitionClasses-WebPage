console.log("js running...");

let menu = document.querySelector(".hamburger-menu");
let fullScr = document.querySelector("#full-scr");
let navImg = document.querySelector("nav img");
let fullDivLinks = document.querySelectorAll("#full-div1 a");
let flag = true;

gsap.registerPlugin(ScrollTrigger);

function swiperJS() {
    document.addEventListener('DOMContentLoaded', function() {
        const swiperEl = document.querySelector('swiper-container');
        
        const swiperParams = {
            slidesPerView: 1,
            spaceBetween: 30,
            centeredSlides: true,
            autoplay: {
                delay: 4000,  // 5 seconds
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            pagination: {
                clickable: true
            }
        };
    
        // Initialize with the parameters
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
    
        // Start autoplay
        swiperEl.swiper.autoplay.start();
    });
}

swiperJS()

function closeMenu() {
    console.log("Closing menu");
    fullScr.style.top = "-150%";
    navImg.style.opacity = "1";
    menu.classList.remove('active');
    console.log("Active class removed:", !menu.classList.contains('active'));
    flag = true;
}
function openMenu() {
    console.log("Opening menu");
    fullScr.style.top = "0";
    navImg.style.opacity = "0";
    menu.classList.add('active');
    console.log("Active class added:", menu.classList.contains('active'));
    flag = false;
}

menu.addEventListener("click",()=>{
    if(flag == true){
        openMenu()
    }else{
        closeMenu()
        
    }
});

fullDivLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    });
});

fullScr.addEventListener("click", (e) => {
    // e.target is what was actually clicked
    // If the click was directly on fullScr (overlay) and not its children
    if (e.target === fullScr) {
        closeMenu();
    }
});





// -----------------------------------------------------GSAP

// document.addEventListener('DOMContentLoaded', () => {
//     var tl = gsap.timeline();

//     // Animate the nav bar and hamburger menu after the page loads
//     tl.from("nav", {
//         opacity: 0,
//         duration: 2,
//         y: -100,
//         onComplete: () => {
//             // Allow interaction after the animation is complete
//             menu.style.pointerEvents = 'auto'; // Enable pointer events
//         }
//     });

//     tl.from("#nav-bar .hamburger-menu, span", {
//         opacity: 0,
//         duration: 2,
//         y: -100
//     });

//     // Other animations...
// });


let mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {

    // var tl = gsap.timeline();
tl.from("#nav-bar",{
    y:-30,
    opacity:0,
    duration: 0.2,
    delay:1
});
tl.from("#nav-bar img",{
    y:-30,
    opacity:0,
    duration: 0.3,
    delay:1
});
tl.from("#nav-bar a",{
    y:-30,
    opacity:0,
    duration: 0.6,
    stagger: 0.1
});
tl.from(".content-pg1 .left h1",{
    x: -300,
    opacity: 0,
    duration:0.6,
    scale: 0.8
});
tl.from(".content-pg1 .left p",{
    x: -300,
    opacity: 0,
    duration:0.6,
    scale: 0.2
});
tl.from(".content-pg1 .right .box1",{
    x: 300,
    opacity: 0,
    duration:0.6,
    scale: 0.2
});
tl.from(".content-pg1 .right .box2,.box3",{
    x: 300,
    opacity: 0,
    duration:0.6,
    scale: 0.2
});


gsap.from("#page2 .about-container",{
    opacity: 0,
    x: 500,
    duration: 2,
    scrollTrigger:{
        trigger: "#page2 .about-container",
        scroller: "body",
        markers: false,
        start: "top 50%"
        // end: "bottom 30%"
    }
});
gsap.from("#page2 .whyus-container",{
    opacity: 0,
    x: -500,
    duration: 2,
    scrollTrigger:{
        trigger: "#page2 .whyus-container",
        scroller: "body",
        markers: false,
        start: "top 50%"
        // end: "bottom 30%"
    }
});
gsap.from("#page3 .whats-trending",{
    opacity: 0,
    x: 500,
    duration: 2,
    scrollTrigger:{
        trigger: "#page3 .whats-trending",
        scroller: "body",
        markers: false,
        start: "top 50%"
        // end: "bottom 30%"
    }
});
gsap.from("#page3 .our-champions",{
    opacity: 0,
    x: -500,
    duration: 2,
    scrollTrigger:{
        trigger: "#page3 .our-champions",
        scroller: "body",
        markers: false,
        start: "top 50%"
        // end: "bottom 30%"
    }
});

gsap.from("#page4 h3,li,span",{
    opacity: 0,
    duration: 1.2,
    yPercent: 100,
    ease: "power4",
    stagger: 0.1,
    scrollTrigger:{
        trigger: "#page4 h3,li",
        scroller: "body",
        markers: false,
        start: "top 60%"
    }
  });

});





mm.add("(max-width: 768px)", () => {
// var tl = gsap.timeline()

// tl.from("nav",{
//     opacity: 0,
//     duration: 2,
//     y: -100
// })

tl.from(".content-pg1 .left h1",{
    x: -300,
    opacity: 0,
    duration:0.9,
    scale: 0.8
});
tl.from(".content-pg1 .left p",{
    x: -300,
    opacity: 0,
    duration:0.9,
    scale: 0.2
});
tl.from(".content-pg1 .right .box1",{
    x: 300,
    opacity: 0,
    duration:0.9,
    scale: 0.2
});
tl.from(".content-pg1 .right .box2,.box3",{
    x: 300,
    opacity: 0,
    duration:0.9,
    scale: 0.2
});



gsap.from("#page2 .about-container",{
    opacity: 0,
    x: 500,
    duration: 2,
    scrollTrigger:{
        trigger: "#page2 .about-container",
        scroller: "body",
        markers: true,
        start: "top -70%"
        // end: "bottom 30%"
    }
});
gsap.from("#page2 .whyus-container",{
    opacity: 0,
    x: -500,
    duration: 2,
    scrollTrigger:{
        trigger: "#page2 .whyus-container",
        scroller: "body",
        markers: false,
        start: "top 100%"
        // end: "bottom 30%"
    }
});
gsap.from("#page3 .whats-trending",{
    opacity: 0,
    x: 500,
    duration: 2,
    scrollTrigger:{
        trigger: "#page3 .whats-trending",
        scroller: "body",
        markers: false,
        start: "top 50%"
        // end: "bottom 30%"
    }
});
gsap.from("#page3 .our-champions",{
    opacity: 0,
    x: -500,
    duration: 2,
    scrollTrigger:{
        trigger: "#page3 .our-champions",
        scroller: "body",
        markers: false,
        start: "top 50%"
        // end: "bottom 30%"
    }
});
});

