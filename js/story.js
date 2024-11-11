$(function () {
    const tl = gsap.timeline();

    //main
    tl.from(".header strong", { x: -100, autoAlpha: 0, duration: 1 });
    tl.from(".link  li", { y: -40, autoAlpha: 0, stagger: 0.25 }, "-=0.2");
    tl.from(".section-title", { x: -100, autoAlpha: 0, duration: 1 }, ">");
    tl.from(".list-con li", { y: -50, autoAlpha: 0, stagger: 0.15 }, "-=0.4");

    tl.from(".vision-con h2", { autoAlpha: 0, duration: 1 });
    tl.from(".vision-con figure", { x: -50, autoAlpha: 0, stagger: 0.15 }, "-=0.4");
    tl.from(".message h2", { x: -50, autoAlpha: 0, duration: 1 });
    // tl.from(".messsage-con p", {
    //     y: -50,
    //     autoAlpha: 0,
    //     stagger: 1,
    //     duration: 1,
    // });
    // tl.from(".messsage-con strong", {
    //     y: -50,
    //     autoAlpha: 0,
    //     stagger: 1,
    //     duration: 1,
    // });
});
