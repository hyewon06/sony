$(function () {
    // GNB
    const $header = $("#header");
    const $menu = $(".gnb > li");
    const $subMenu = $(".sub-menu");
    const duration = 300;

    $menu.on("mouseenter", function () {
        $header.addClass("active");
        $(this).find($subMenu).stop().slideDown(duration);
    });
    $menu.on("mouseleave", function () {
        $header.removeClass("active");
        $(this).find($subMenu).stop().slideUp(duration);
    });

    const newsSlider = new Swiper(".news-slider", {
        loop: true,
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 40,

        navigation: {
            nextEl: ".news-slider-wrap .button-next",
            prevEl: ".news-slider-wrap .button-prev",
        },
    });

    $(".list-title").on("click", function () {
        $(this).next(".list-con").slideToggle();
    });
    $(".sort-list-title").on("click", function () {
        $(this).next(".list-con").slideToggle();
    });

    $(".item-list").on("click", function () {
        $(this).next(".list-con").slideToggle();
    });

    // 탑버튼
    const btnTop = $(".btn-top");
    const $footer = $("#footer");

    $(window).scroll(function () {
        const footerOffset = $footer.offset().top;
        const scrollPos = $(window).scrollTop() + $(window).height();

        if (scrollPos >= footerOffset) {
            btnTop.addClass("white");
        } else {
            btnTop.removeClass("white");
        }
    });

    // 탑버튼 클릭시 부드러운 스크롤
    btnTop.on("click", function (e) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 500);
    });
});
