
const navBtn = document.querySelector('#navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

navBtn.addEventListener('click', () => {
    navDiv.classList.toggle('showNav');
});

// stopping animation and transition during window resizing
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});




// ANIMATION 

// var tl= gsap.timeline()
// tl.from(".brand-and-toggler", {
//     y:-20,
//     opacity:0,
//     duration:1,
//     delay:0.5
// })

// var tl= gsap.timeline()
// tl.from("li", {
//     y:-20,
//     opacity:0,
//     duration:1,
//     stagger:0.3
// })