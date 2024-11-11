$(function () {
    const tl = gsap.timeline();

    //header
    tl.from(".logo", { y: -100, autoAlpha: 0 });
    tl.from(".gnb li > a", { y: -50, autoAlpha: 0, stagger: 0.1 }, ">");
    tl.from(".util-menu a", { y: -100, autoAlpha: 0, stagger: 0.35 }, "-=0.4");

    tl.from(".pick-slider-wrap", { x: 50, autoAlpha: 0 }, ">");
    tl.from(".product-con", { y: 50, autoAlpha: 0 }, ">");
});
