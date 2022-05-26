/* ANIMATION */
/*HOME LEFT*/
TweenMax.to(".home-left", 1.2, {
    width: "50.1vw",
    ease: Expo.easeInOut
})
/*HOME RIGHT*/
TweenMax.to(".home-right", 1.2, {
    width: "50vw",
    left: "50vw",
    ease: Expo.easeInOut
})
gsap.from('.navbar a', {opacity: 0, delay: .3, duration: .5, y: -130})
gsap.from('.card', {opacity: 0, delay: 1.2, duration: .6, y: 130})
gsap.from('.login-img', {opacity: 0, delay: 1.6, duration: .9, y: -100, rotation:0})
gsap.from('.login-link', {opacity: 0, delay: 1.6, duration: .4, x: -100, rotation: 45})
gsap.from('.home-left-title', {opacity: 0, delay: 2.2, duration: .7, y: 700})
gsap.from('.home-right-title', {opacity: 0, delay: 2.4, duration: .7, x: 200})

