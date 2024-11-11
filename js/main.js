$(function () {
    const tl = gsap.timeline();

    //header
    tl.from(".logo", { y: -100, autoAlpha: 0 });
    tl.from(".gnb li > a", { y: -50, autoAlpha: 0, stagger: 0.1 }, ">");
    tl.from(".util-menu a", { y: -100, autoAlpha: 0, stagger: 0.2 }, ">");

    //pick
    const pickTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".pick",
            // markers: true,
            start: "top 10%",
            end: "bottom 0%",
            pin: true,
            scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
        },
    });

    pickTL.from(".pick-slider-wrap", {
        autoAlpha: 0,
        x: 50,
        stagger: 0.2,
    });

    //news
    const newsTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".news",
            // markers: true,
            start: "top 10%",
            end: "bottom 0%",
            pin: true,
            scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
        },
    });

    newsTL.from(".swiper-wrapper a", {
        autoAlpha: 0,
        y: 50,

        stagger: 0.25,
    });

    //service
    const serviceTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".service",
            // markers: true,
            start: "top 10%",
            end: "bottom 0%",
            pin: true,
            scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
        },
    });

    serviceTL.from(".ri-arrow-right-line", {
        autoAlpha: 0,
        x: -50,
    });
});
