$(function () {
    const tl = gsap.timeline();

    tl.from(".main-banner", { autoAlpha: 0 });
    //visual
    tl.from(".categorise-list li", { y: 30, autoAlpha: 0, stagger: 0.25 });

    tl.from(".hot-products li", { y: 30, autoAlpha: 0, stagger: 0.1 });
    tl.from(".promotion-info", { y: 30, autoAlpha: 0, stagger: 0.1 });
    tl.from(".service-list li", { y: 30, autoAlpha: 0, stagger: 0.25 });
});
