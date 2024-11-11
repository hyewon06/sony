$(function () {
    const tl = gsap.timeline();

    tl.from("pick-title h2", { x: -100, autoAlpha: 0, stagger: 0.25 });
    tl.from("product-con ", { y: -100, autoAlpha: 0, stagger: 0.25 });
});
