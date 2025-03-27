$(document).ready(function () {
    // GNB 임시 스크립트
    $("#nav").on("mouseenter focus", function () {
        $("#nav, .mask, .gnb_bg").addClass("active");
    });

    $("#nav").on("mouseleave", function () {
        $("#nav, .mask, .gnb_bg").removeClass("active");
    });

    // 상단 검색 토글 버튼
    $("#topSearchBtn").click(function () {
        $(this).toggleClass("active");
        $("#searchArea, .mask").toggleClass("active");
    });

    // 모바일 메뉴 토글 버튼
    $("#mobileMenuBtn").click(function () {
        $(this).toggleClass("active");
        $("body").toggleClass("fixed");
        $("#mobileNav").toggleClass("active");
    });

    // 메인 슬라이드
    var $status = $('.custom_paging');
    var $slickElement = $('.main_slide');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' / ' + slick.slideCount);
    });

    $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
    });

    // 메인 슬라이드 일시정지/재생 버튼
    $(document).on("click", ".btn_pause", function () {
        $(".main_slide").slick("slickPause");
        $(this).removeClass("btn_pause").addClass("btn_play").parent().attr("title", "재생");
    });

    $(document).on("click", ".btn_play", function () {
        $(".main_slide").slick("slickPlay");
        $(this).removeClass("btn_play").addClass("btn_pause").parent().attr("title", "일시정지");
    });

    // 팝업 슬라이드
    var $popStatus = $('.pop_custom_paging');
    var $popSlickElement = $('.popSlider');

    $popSlickElement.on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $popStatus.text(i + ' / ' + slick.slideCount);
    });

    $popSlickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: false,
    });

    // 탭 기능
    var tabItem = document.querySelectorAll(".tab_item");
    var tabContent = document.querySelectorAll(".tab_con");

    tabItem.forEach((item, index) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            tabItem.forEach(el => el.classList.remove("active"));
            tabContent.forEach(el => el.classList.remove("active"));
            item.classList.add("active");
            tabContent[index].classList.add("active");
        });
    });
});
