var tl= gsap.timeline()
tl.from(".brand-and-toggler", {
    y:-20,
    opacity:0,
    duration:1,
    delay:1
})

var tl= gsap.timeline()
tl.from("li", {
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.6
})

// gsap.from(".row-right p",{
//     scale:0,
//     delay:1,
//     duration:2,
//     ScrollTrigger:{
//         trigger:".row-right  p",
//         scroller:"body",
//         markers:true,
//         start:"top 50%",
//         scrub:true
//     }
// })