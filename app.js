
gsap.from('.card-container', {
    duration: 2, 
    x: '-50%', 
    ease: "power4.inOut",
    opacity: 0
})

gsap.from('.inner-content', {
    duration: 1, 
    x: '-10%', 
    ease: "power4.inOut",
    opacity: 0,
    delay: 1.5
})

gsap.from('.image', {
    duration: 1, 
    x: '10%', 
    ease: "power4.inOut",
    opacity: 0,
    delay: 1.5
})

gsap.from('.stats div', {
    duration: 1, 
    y: '-10%', 
    ease: "power4.inOut",
    opacity: 0,
    delay: 2.5,
    stagger: .2
})

