$(function () {
    const tl = gsap.timeline();
    //main
    tl.from(".header strong", { x: -100, autoAlpha: 0, duration: 1 });
    tl.from(".link  li", { y: -40, autoAlpha: 0, stagger: 0.25 }, "-=0.2");
    tl.from(".section-title", { x: -100, autoAlpha: 0, duration: 1 }, ">");
});
