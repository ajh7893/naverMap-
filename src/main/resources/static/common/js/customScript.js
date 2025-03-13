$(document).ready(function () {

    //메인 슬라이드
    var $status = $('.custom_paging'); //paging 이 들어갈 div 혹은 p 혹은 어떠한 영역
    var $slickElement = $('.main_slide'); //slide가 되어야하는 div

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text(i + ' / ' + slick.slideCount);
    });

    $slickElement.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
    })

   // 일시정지 기능
    $(document).on("click", ".btn_pause", function(){
        $(".main_slide").slick("slickPause");
        $(this).removeClass("btn_pause").addClass("btn_play");
        $(this).parent().attr("title", "재생");
    });


    // 재생 기능
    $(document).on("click", ".btn_play", function(){
        $(".main_slide").slick("slickPlay");
        $(this).removeClass("btn_play").addClass("btn_pause");
        $(this).parent().attr("title", "일시정지");
    });

});